ULTIMATE WEB DESIGN AGENT — COMPLETE BUILD SPECIFICATION
Version: 1.0 | Date: February 2, 2026 | Prepared for: Marty (Implementation Lead)

EXECUTIVE SUMMARY
We are building a multi-agent, multi-server web design system capable of producing Goldman Sachs / Lazard / BlackRock tier websites autonomously. This is not a single AI — it's an orchestrated Design Council of specialized agents working across two servers (Oscar in Singapore, Maati in Finland) connected via Tailscale VPN.
Target Quality Bar:
Lighthouse 95+ (Performance, Accessibility, SEO, Best Practices)
Mobile-perfect responsive design
3 competing designs evaluated before build
Side-by-side benchmark comparison before human approval
Full deployment pipeline to Vercel production

PART 1: INFRASTRUCTURE REQUIREMENTS
Server Allocation
Server
Location
Role
Resources
Oscar
Singapore
Commander, Coordination, Real-time Chat, Codex Coding
Codex CLI, Playwright, Puppeteer, Chromium, Ollama (7 models)
Maati
Finland
Heavy Research, Parallel Builds, Training, Creative Content
62GB RAM, 809GB disk, Claude Code, Playwright
Network Configuration
Connection: Tailscale VPN (encrypted mesh)
Shared Storage: Taildrive WebDAV mount at /mnt/taildrive
SSH: Tailscale SSH for remote command execution
Handoff Protocol: JSON task files in /shared/web_projects/
Software Stack to Install
On BOTH Servers:
bash
#!/bin/bash
# Ultimate Web Design Agent - Infrastructure Setup
set -e

echo "🚀 Installing Ultimate Web Design Agent Stack..."

# 1. System Dependencies
sudo apt-get update && sudo apt-get upgrade -y
sudo apt-get install -y build-essential curl git libvips-tools \
    python3-pip pkg-config libnss3-dev libatk-bridge2.0-0 \
    libxkbcommon-x11-0 libgbm-dev libpango1.0-0 libcairo2-dev \
    imagemagick ghostscript bc

# 2. Node.js 20 LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g npm@latest pnpm

# 3. Global CLI Tools
sudo npm install -g vercel@latest
sudo npm install -g @lhci/cli@latest lighthouse
sudo npm install -g playwright sharp

# 4. Playwright Browsers
sudo npx playwright install --with-deps chromium firefox webkit

# 5. Project Framework
mkdir -p ~/institutional-agent/workspace
cd ~/institutional-agent/workspace

npx create-next-app@14.2.0 . --ts --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
npm install framer-motion@11.0.0 sharp@0.33.0 lucide-react clsx tailwind-merge

# 6. Verification
echo "✅ Stack Verification:"
node -v && npm -v && vercel --version && lhci --version
convert -version | head -n 1

echo "✅ Installation Complete"
Additional for Maati (Codex CLI):
bash
# Install Codex CLI on Maati to match Oscar
npm install -g @openai/codex-cli
# Configure with API key
export OPENAI_API_KEY="your-key-here"
API Keys Required
Service
Purpose
Needed On
OpenAI API
Codex/GPT-5.2 code generation
Both servers
Anthropic API
Claude reasoning/design
Both servers
Google AI API
Gemini Pro + Vision (judging)
Both servers
Vercel Token
Deployment
Oscar
Cloudflare API
DNS management
Oscar

PART 2: BENCHMARK INTELLIGENCE
Target Institutions (20 Sites)
Bulge Bracket Banks:
Goldman Sachs PWM (pwm.gs.com)
J.P. Morgan Private Bank
Morgan Stanley Wealth
BlackRock
Elite Boutique Investment Banks: 5. Lazard 6. Evercore 7. Moelis & Company 8. Centerview Partners 9. PJT Partners 10. Perella Weinberg
Specialized Boutiques: 11. Qatalyst Partners 12. Greenhill & Co 13. LionTree 14. Houlihan Lokey 15. Guggenheim Securities 16. Jefferies
Consulting & PE: 17. McKinsey & Company 18. Bain & Company 19. KKR 20. Rockefeller Capital / Iconiq
Playwright Benchmark Capture Script
typescript
// scripts/benchmark-capture.ts
import { chromium, devices } from 'playwright';
import * as fs from 'fs';
import path from 'path';

interface BenchmarkTarget {
  name: string;
  url: string;
  category: string;
}

const TARGETS: BenchmarkTarget[] = [
  { name: 'goldman-sachs-pwm', url: 'https://pwm.gs.com', category: 'bulge-bracket' },
  { name: 'lazard', url: 'https://www.lazard.com', category: 'elite-boutique' },
  { name: 'evercore', url: 'https://www.evercore.com', category: 'elite-boutique' },
  { name: 'moelis', url: 'https://www.moelis.com', category: 'elite-boutique' },
  { name: 'blackrock', url: 'https://www.blackrock.com', category: 'asset-manager' },
  { name: 'kkr', url: 'https://www.kkr.com', category: 'pe' },
  { name: 'mckinsey', url: 'https://www.mckinsey.com', category: 'consulting' },
  { name: 'bain', url: 'https://www.bain.com', category: 'consulting' },
  // Add remaining 12 targets...
];

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', ...devices['iPhone 13'].viewport }
];

const PAGES = ['', '/about', '/services', '/team', '/contact'];

async function extractStyleDNA(page: any) {
  return await page.evaluate(() => {
    const getStyles = (selector: string) => {
      const el = document.querySelector(selector);
      if (!el) return null;
      const style = window.getComputedStyle(el);
      return {
        fontFamily: style.fontFamily,
        fontSize: style.fontSize,
        fontWeight: style.fontWeight,
        color: style.color,
        backgroundColor: style.backgroundColor,
        padding: style.padding,
        margin: style.margin,
        lineHeight: style.lineHeight,
        letterSpacing: style.letterSpacing
      };
    };
    
    // Extract color palette from page
    const colors = new Set<string>();
    document.querySelectorAll('*').forEach(el => {
      const style = window.getComputedStyle(el);
      colors.add(style.color);
      colors.add(style.backgroundColor);
    });
    
    return {
      h1: getStyles('h1'),
      h2: getStyles('h2'),
      body: getStyles('p'),
      nav: getStyles('nav'),
      cta: getStyles('button, .cta, [class*="button"]'),
      colorPalette: Array.from(colors).filter(c => c !== 'rgba(0, 0, 0, 0)').slice(0, 10)
    };
  });
}

async function captureBenchmark(target: BenchmarkTarget) {
  const browser = await chromium.launch({ headless: true });
  const baseDir = path.join(__dirname, `../benchmarks/${target.category}/${target.name}`);
  
  if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir, { recursive: true });
  }

  for (const viewport of VIEWPORTS) {
    const context = await browser.newContext({ viewport });
    const page = await context.newPage();
    
    for (const pagePath of PAGES) {
      try {
        const fullUrl = `${target.url}${pagePath}`;
        console.log(`📸 Capturing ${target.name}${pagePath || '/home'} @ ${viewport.name}`);
        
        await page.goto(fullUrl, { waitUntil: 'networkidle', timeout: 60000 });
        await page.waitForTimeout(2000); // Allow animations to settle
        
        const safePath = pagePath === '' ? 'home' : pagePath.replace('/', '');
        const screenshotPath = `${baseDir}/${viewport.name}_${safePath}.png`;
        
        await page.screenshot({ path: screenshotPath, fullPage: true });
        
        // Extract style DNA on desktop home page only
        if (viewport.name === 'desktop' && pagePath === '') {
          const styleDNA = await extractStyleDNA(page);
          fs.writeFileSync(
            `${baseDir}/style-dna.json`,
            JSON.stringify(styleDNA, null, 2)
          );
        }
        
      } catch (e: any) {
        console.error(`❌ Failed: ${target.name}${pagePath} - ${e.message}`);
      }
    }
    await context.close();
  }
  
  await browser.close();
  console.log(`✅ Completed: ${target.name}`);
}

async function runAllBenchmarks() {
  console.log('🎯 Starting Benchmark Capture for 20 Institutions...\n');
  
  for (const target of TARGETS) {
    await captureBenchmark(target);
  }
  
  console.log('\n✅ All benchmarks captured!');
}

runAllBenchmarks();
```

### Institutional Design DNA Reference

| Institution | Primary Color | Secondary | Accent | Typography | Aesthetic |
|-------------|---------------|-----------|--------|------------|-----------|
| Goldman Sachs | #22263F (Ebony Clay) | #FFFFFF | #2178C4 (Mariner) | Custom serif + sans | Sophisticated, Stable |
| Lazard | #23283C (Ebony Clay) | #FFFFFF | #0080FF (Tech Blue) | Larsseit | Custom-Tailored |
| BlackRock | #000000 | #F4F1EB | #FF4713 (Vermilion) | Clean sans | Modern, Data-Focused |
| Bain | #000000 | #FFFFFF | #FF7300 (Dark Orange) | Bold sans | Strategic, Impactful |
| McKinsey | Deep Navy | #FFFFFF | Bright Blue | Editorial serif | Intellectual |
| KKR | #1A1A2E | #FFFFFF | Gold | Modern serif | Private Equity Heritage |

### Typography Standards

| Element | Specification | Rationale |
|---------|---------------|-----------|
| Body Copy | 16-18px (1rem+) | Readability for older demographics |
| Line Height | 1.5-1.8x | Prevents cramped feeling |
| Line Length | 45-75 characters | Optimal cognitive load |
| Contrast Ratio | 4.5:1 minimum | WCAG accessibility |
| Heading Scale | Major Third (1.25) | Harmonious hierarchy |
| Spacing Grid | 8px base / 4px sub-grid | Structured layout |

---

## PART 3: COMPONENT LIBRARY

### Directory Structure
```
/agents/web_designer_ultimate/
├── SYSTEM_PROMPT.md
├── CONFIG.yaml
├── workflows/
│   ├── 01_strategy.md
│   ├── 02_design_competition.md
│   ├── 03_judging.md
│   ├── 04_code_generation.md
│   ├── 05_visual_qa.md
│   ├── 06_performance_audit.md
│   ├── 07_human_review.md
│   └── 08_deployment.md
├── templates/
│   ├── prd_template.md
│   ├── design_brief.md
│   └── audit_checklist.md
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Team.tsx
│   ├── Insights.tsx
│   ├── Footer.tsx
│   └── ui/
│       ├── Button.tsx
│       └── Card.tsx
├── benchmarks/
│   ├── bulge-bracket/
│   ├── elite-boutique/
│   ├── asset-manager/
│   ├── consulting/
│   └── pe/
└── projects/
    ├── 9d-capital/
    └── 5d-partners/
Core Components
1. Institutional Header
typescript
// src/components/Header.tsx
'use client';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

interface HeaderProps {
  logo: string;
  navItems: NavItem[];
  ctaText?: string;
  ctaHref?: string;
  variant?: 'light' | 'dark' | 'transparent';
}

export const InstitutionalHeader = ({
  logo,
  navItems,
  ctaText = 'Contact Us',
  ctaHref = '/contact',
  variant = 'light'
}: HeaderProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const bgClass = {
    light: 'bg-white/95 backdrop-blur-md border-b border-gray-100',
    dark: 'bg-[#22263F]/95 backdrop-blur-md border-b border-white/10',
    transparent: 'bg-transparent'
  }[variant];

  const textClass = variant === 'dark' ? 'text-white' : 'text-[#22263F]';
  const accentClass = 'text-[#0080FF] hover:text-[#0066CC]';

  return (
    <header className={`sticky top-0 z-50 w-full ${bgClass}`}>
      <div className="container mx-auto h-20 flex items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <Link href="/" className={`text-2xl font-bold tracking-tighter ${textClass}`}>
          {logo}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-xs font-semibold uppercase tracking-[0.15em] ${textClass} opacity-70 hover:opacity-100 transition-opacity`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center space-x-6">
          <Link
            href={ctaHref}
            className={`hidden md:block px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] border ${
              variant === 'dark'
                ? 'border-white/30 text-white hover:bg-white hover:text-[#22263F]'
                : 'border-[#22263F]/30 text-[#22263F] hover:bg-[#22263F] hover:text-white'
            } transition-all duration-300`}
          >
            {ctaText}
          </Link>

          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className={textClass} /> : <Menu className={textClass} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <nav className="container mx-auto py-6 px-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm font-medium text-[#22263F]"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
2. Hero Section
typescript
// src/components/Hero.tsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  overlay?: 'dark' | 'light' | 'gradient';
  alignment?: 'left' | 'center' | 'right';
}

export const Hero = ({
  title,
  subtitle,
  ctaText,
  ctaHref = '/contact',
  backgroundImage,
  backgroundVideo,
  overlay = 'dark',
  alignment = 'center'
}: HeroProps) => {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  }[alignment];

  const overlayClass = {
    dark: 'bg-[#22263F]/70',
    light: 'bg-white/60',
    gradient: 'bg-gradient-to-b from-[#22263F]/80 via-[#22263F]/50 to-transparent'
  }[overlay];

  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      {backgroundVideo ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      ) : backgroundImage ? (
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover"
          priority
        />
      ) : (
        <div className="absolute inset-0 bg-[#22263F]" />
      )}

      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayClass}`} />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`relative z-10 container mx-auto px-6 lg:px-12 flex flex-col ${alignClass}`}
      >
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight max-w-4xl">
          {title}
        </h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 text-white/80 text-lg md:text-xl font-light max-w-2xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}

        {ctaText && (
          <motion.a
            href={ctaHref}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
            className="mt-12 inline-block px-12 py-4 border border-white/30 text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#22263F] transition-all duration-300"
          >
            {ctaText}
          </motion.a>
        )}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
3. Services Grid
typescript
// src/components/Services.tsx
'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  href?: string;
  icon?: React.ReactNode;
}

interface ServicesProps {
  sectionTitle?: string;
  sectionSubtitle?: string;
  services: Service[];
  columns?: 2 | 3 | 4;
}

export const Services = ({
  sectionTitle = 'Our Services',
  sectionSubtitle,
  services,
  columns = 3
}: ServicesProps) => {
  const gridClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  }[columns];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-[#22263F] tracking-tight">
            {sectionTitle}
          </h2>
          {sectionSubtitle && (
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              {sectionSubtitle}
            </p>
          )}
        </motion.div>

        {/* Services Grid */}
        <div className={`grid gap-8 ${gridClass}`}>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 border border-gray-100 hover:border-[#0080FF]/30 transition-colors duration-300"
            >
              {service.icon && (
                <div className="mb-6 text-[#0080FF]">{service.icon}</div>
              )}
              
              <h3 className="text-xl font-medium text-[#22263F] mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              {service.href && (
                
                  href={service.href}
                  className="inline-flex items-center text-sm font-medium text-[#0080FF] group-hover:text-[#0066CC] transition-colors"
                >
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
4. Team Section
typescript
// src/components/Team.tsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface TeamMember {
  name: string;
  title: string;
  image: string;
  bio?: string;
  linkedin?: string;
}

interface TeamProps {
  sectionTitle?: string;
  sectionSubtitle?: string;
  members: TeamMember[];
}

export const Team = ({
  sectionTitle = 'Leadership',
  sectionSubtitle,
  members
}: TeamProps) => {
  return (
    <section className="py-24 lg:py-32 bg-[#FAFAFA]">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-[#22263F] tracking-tight">
            {sectionTitle}
          </h2>
          {sectionSubtitle && (
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              {sectionSubtitle}
            </p>
          )}
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-200 mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              <h3 className="text-lg font-medium text-[#22263F]">
                {member.name}
              </h3>
              
              <p className="text-sm text-gray-500 mt-1">
                {member.title}
              </p>

              {member.bio && (
                <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                  {member.bio}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
5. Institutional Footer
typescript
// src/components/Footer.tsx
import Link from 'next/link';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo: string;
  tagline?: string;
  columns: FooterColumn[];
  address?: string[];
  phone?: string;
  email?: string;
  disclaimer?: string;
  socialLinks?: { platform: string; href: string }[];
}

export const Footer = ({
  logo,
  tagline,
  columns,
  address,
  phone,
  email,
  disclaimer,
  socialLinks
}: FooterProps) => {
  return (
    <footer className="bg-[#22263F] text-white">
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tighter">
              {logo}
            </Link>
            {tagline && (
              <p className="mt-4 text-white/60 text-sm leading-relaxed max-w-sm">
                {tagline}
              </p>
            )}
            
            {address && (
              <address className="mt-8 not-italic text-sm text-white/60 leading-relaxed">
                {address.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < address.length - 1 && <br />}
                  </span>
                ))}
              </address>
            )}

            {(phone || email) && (
              <div className="mt-4 text-sm text-white/60">
                {phone && <div>{phone}</div>}
                {email && <div>{email}</div>}
              </div>
            )}
          </div>

          {/* Link Columns */}
          {columns.map((column) => (
            <div key={column.title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-6">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} {logo}. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="text-xs text-white/40 hover:text-white/70">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-white/40 hover:text-white/70">
                Terms of Service
              </Link>
              <Link href="/disclosures" className="text-xs text-white/40 hover:text-white/70">
                Disclosures
              </Link>
            </div>
          </div>

          {disclaimer && (
            <p className="mt-6 text-[10px] text-white/30 leading-relaxed max-w-4xl">
              {disclaimer}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
};
```

---

## PART 4: SEVEN-PHASE ORCHESTRATION WORKFLOW

### Phase Flow Diagram
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        ULTIMATE WEB DESIGN AGENT                            │
│                         7-Phase Orchestration                               │
└─────────────────────────────────────────────────────────────────────────────┘

PHASE 1: STRATEGY (Claude/Oscar)
    │
    ├── Write comprehensive PRD
    ├── Identify 10 benchmark sites
    ├── Capture screenshots (Playwright)
    └── Extract style DNA (colors, typography, spacing)
    │
    ▼
PHASE 2: DESIGN COMPETITION (Parallel)
    │
    ├── Design A: Claude (Oscar) ──────┐
    ├── Design B: Codex (Oscar) ───────┼── 3 Competing Proposals
    └── Design C: Claude Code (Maati) ─┘
    │
    ▼
PHASE 3: JUDGING (Gemini Pro)
    │
    ├── Evaluate all 3 designs against PRD
    ├── Score: Visual Appeal, UX, Brand Fit, Technical Feasibility
    ├── Select best elements from each
    └── Produce: Final Design Specification
    │
    ▼
PHASE 4: PARALLEL BUILD (Oscar + Maati)
    │
    ├── Oscar (Codex): Header, Hero, Footer, Contact
    ├── Maati (Claude Code): Services, Team, Insights, About
    ├── Screenshot after each component (Playwright)
    └── AI Vision compares to benchmark references
    │
    ▼
PHASE 5: QUALITY AUDIT (Automated)
    │
    ├── Lighthouse CLI (Performance ≥95, A11y ≥95, SEO ≥95)
    ├── Cross-browser testing (Chrome, Firefox, Safari, Edge)
    ├── Mobile responsive check (375px, 768px, 1024px, 1440px)
    ├── Accessibility audit (WCAG 2.1 AA)
    └── 3 AI Reviewers: Content, Design, UX
    │
    ▼
PHASE 6: HUMAN REVIEW (Sam)
    │
    ├── Deploy to Vercel Preview URL
    ├── Side-by-side comparison with benchmarks
    ├── Feedback → Iterate if needed
    └── Approval gate
    │
    ▼
PHASE 7: DEPLOYMENT (Automated)
    │
    ├── Vercel production deploy
    ├── DNS configuration
    ├── SSL certificate
    ├── Monitoring setup
    └── Weekly audit schedule
Phase 1: Strategy Workflow
yaml
# workflows/01_strategy.md
phase: 1
name: Strategy & Research
executor: Claude (Oscar)
duration: 2-3 hours

inputs:
  - client_brief: "High-level description of the website needed"
  - target_firms: "List of 5-10 competitor/benchmark sites"
  - brand_assets: "Logo, brand guidelines if available"

steps:
  1. prd_creation:
     prompt: |
       Create a comprehensive Product Requirements Document for a tier-1 financial website.
       Include: Target audience, key pages, content requirements, technical requirements,
       success metrics, competitive positioning.
     output: /projects/{project}/prd.md

  2. benchmark_identification:
     action: Select top 10 benchmark sites from target_firms
     criteria: Visual quality, similar business model, innovation
     output: /projects/{project}/benchmarks.json

  3. screenshot_capture:
     script: benchmark-capture.ts
     targets: benchmarks.json
     viewports: [desktop, tablet, mobile]
     pages: [home, about, services, team]
     output: /benchmarks/{category}/{site}/

  4. style_extraction:
     action: Run style DNA extraction on all benchmark screenshots
     extract: [colors, typography, spacing, layout patterns]
     output: /projects/{project}/style-guide.md

  5. design_brief:
     prompt: |
       Based on the PRD and benchmark analysis, create a detailed Design Brief
       specifying: Color palette, typography scale, component requirements,
       animation guidelines, photography style.
     output: /projects/{project}/design-brief.md

outputs:
  - prd.md
  - benchmarks.json
  - style-guide.md
  - design-brief.md
  - /benchmarks/ (screenshots)

quality_gate:
  - PRD covers all required sections
  - At least 10 benchmark screenshots captured
  - Style guide includes specific hex codes and font names
Phase 2: Design Competition Workflow
yaml
# workflows/02_design_competition.md
phase: 2
name: Design Competition
executors:
  - Claude (Oscar) → Design A
  - Codex (Oscar) → Design B
  - Claude Code (Maati) → Design C
duration: 4-6 hours (parallel)

inputs:
  - prd.md
  - design-brief.md
  - style-guide.md

parallel_tasks:
  design_a:
    executor: Claude (Oscar)
    approach: "Conservative institutional - closest to Goldman/Lazard benchmark"
    deliverables:
      - Homepage wireframe (text description)
      - Component specifications
      - Color/typography choices
      - Animation recommendations
    output: /projects/{project}/designs/design_a/

  design_b:
    executor: Codex (Oscar)
    approach: "Modern institutional - pushing boundaries while maintaining trust"
    deliverables:
      - Homepage wireframe
      - Component specifications
      - Color/typography choices
      - Animation recommendations
    output: /projects/{project}/designs/design_b/

  design_c:
    executor: Claude Code (Maati)
    approach: "Innovative institutional - differentiated from competitors"
    deliverables:
      - Homepage wireframe
      - Component specifications
      - Color/typography choices
      - Animation recommendations
    output: /projects/{project}/designs/design_c/

outputs:
  - /designs/design_a/proposal.md
  - /designs/design_b/proposal.md
  - /designs/design_c/proposal.md

quality_gate:
  - Each design includes all required deliverables
  - Designs are meaningfully different
  - All designs meet PRD requirements
Phase 3: Judging Workflow
yaml
# workflows/03_judging.md
phase: 3
name: Design Judging
executor: Gemini Pro (Oscar)
secondary: Claude (second opinion)
duration: 1-2 hours

inputs:
  - prd.md
  - design-brief.md
  - /designs/design_a/proposal.md
  - /designs/design_b/proposal.md
  - /designs/design_c/proposal.md
  - /benchmarks/ (for comparison)

evaluation_criteria:
  - visual_appeal: 25%
    description: "Does it match the sophistication of benchmark sites?"
  - brand_fit: 25%
    description: "Does it align with the client's positioning?"
  - ux_quality: 20%
    description: "Is navigation intuitive? Is content hierarchy clear?"
  - technical_feasibility: 15%
    description: "Can this be built performantly?"
  - innovation: 15%
    description: "Does it stand out while maintaining trust?"

process:
  1. score_designs:
     action: Score each design on all criteria (1-10)
     output: /projects/{project}/judging/scores.json

  2. identify_best_elements:
     action: Select the best elements from each design
     examples:
       - "Header from Design A (cleaner navigation)"
       - "Hero treatment from Design C (more impactful)"
       - "Services grid from Design B (better scannability)"
     output: /projects/{project}/judging/best_elements.md

  3. synthesize_final:
     action: Create final design specification combining best elements
     output: /projects/{project}/judging/final_spec.md

  4. second_opinion:
     executor: Claude (Oscar)
     action: Review Gemini's choices, flag any concerns
     output: /projects/{project}/judging/review.md

outputs:
  - scores.json
  - best_elements.md
  - final_spec.md
  - review.md

quality_gate:
  - All designs scored
  - Final spec is internally consistent
  - Second opinion reviewed and addressed
Phase 4: Parallel Build Workflow
yaml
# workflows/04_code_generation.md
phase: 4
name: Parallel Build
executors:
  - Codex (Oscar): Components 1-4
  - Claude Code (Maati): Components 5-8
duration: 6-10 hours

inputs:
  - final_spec.md
  - /components/ (template library)
  - style-guide.md

server_assignment:
  oscar_codex:
    - Header.tsx
    - Hero.tsx
    - Footer.tsx
    - ContactForm.tsx
    
  maati_claude:
    - Services.tsx
    - Team.tsx
    - Insights.tsx
    - AboutSection.tsx

build_process:
  1. setup_project:
     action: Initialize Next.js project with Tailwind
     location: /projects/{project}/build/
     
  2. configure_tailwind:
     action: Set up tailwind.config.js with design tokens from style-guide.md
     
  3. build_components:
     parallel: true
     for_each_component:
       - Generate TypeScript code
       - Add to project
       - Build project (catch errors)
       - Screenshot component in isolation
       - Compare screenshot to benchmark reference
       - If deviation > 10%: revise and rebuild
       
  4. assemble_pages:
     action: Combine components into full pages
     pages: [index, about, services, team, contact, insights, privacy, terms, disclosures]
     
  5. screenshot_full_pages:
     action: Capture all pages at all viewports
     compare_to: benchmark screenshots

communication_protocol:
  method: Tailscale SSH + shared volume
  handoff_format: JSON task file
  sync_folder: /mnt/taildrive/projects/{project}/

outputs:
  - /build/src/components/
  - /build/src/app/
  - /audits/screenshots/

quality_gate:
  - All components compile without errors
  - Visual similarity to benchmarks > 85%
  - No TypeScript errors
  - All pages render correctly
Phase 5: Quality Audit Workflow
yaml
# workflows/05_quality_audit.md
phase: 5
name: Quality Audit
executors: Automated + AI Reviewers
duration: 2-3 hours

inputs:
  - /build/ (complete project)
  - /benchmarks/ (for comparison)

automated_tests:
  lighthouse:
    command: "lhci autorun"
    thresholds:
      performance: 95
      accessibility: 95
      best-practices: 95
      seo: 95
    on_fail: Return to Phase 4 with specific issues

  cross_browser:
    browsers: [chromium, firefox, webkit]
    viewports: [1440x900, 768x1024, 375x667]
    action: Screenshot all pages in all browsers
    compare: Flag any rendering differences > 5%

  responsive:
    breakpoints: [375, 768, 1024, 1440, 1920]
    check:
      - No horizontal scroll
      - Text readable at all sizes
      - Touch targets ≥ 44px on mobile
      - Images scale appropriately

  accessibility:
    tool: axe-core
    standard: WCAG 2.1 AA
    check:
      - Color contrast ≥ 4.5:1
      - All images have alt text
      - Keyboard navigation works
      - Focus indicators visible

ai_reviewers:
  content_reviewer:
    executor: Claude
    check:
      - Grammar and spelling
      - Tone consistency
      - Brand voice alignment
      - Compliance language present
    output: /audits/content_review.md

  design_reviewer:
    executor: Gemini Vision
    check:
      - Visual consistency across pages
      - Spacing and alignment
      - Typography hierarchy
      - Color usage
    output: /audits/design_review.md

  ux_reviewer:
    executor: Claude
    check:
      - Navigation clarity
      - Call-to-action visibility
      - Information architecture
      - User flow logic
    output: /audits/ux_review.md

outputs:
  - /audits/lighthouse/
  - /audits/cross_browser/
  - /audits/accessibility/
  - /audits/content_review.md
  - /audits/design_review.md
  - /audits/ux_review.md
  - /audits/summary.md

quality_gate:
  - Lighthouse all categories ≥ 95
  - Zero accessibility errors
  - All 3 AI reviewers approve
  - Cross-browser rendering consistent
Phase 6: Human Review Workflow
yaml
# workflows/06_human_review.md
phase: 6
name: Human Review
executor: Sam (Human)
duration: Variable

inputs:
  - /build/ (complete project)
  - /audits/summary.md
  - /benchmarks/ (for comparison)

process:
  1. deploy_preview:
     command: "vercel --prebuilt"
     output: Preview URL (e.g., https://9d-capital-xyz.vercel.app)

  2. prepare_comparison:
     action: Generate side-by-side comparison document
     include:
       - Our site screenshots vs. Goldman/Lazard screenshots
       - Lighthouse scores comparison
       - Feature checklist vs. PRD
     output: /review/comparison.pdf

  3. notification:
     send_to: Sam (Telegram)
     message: |
       🎨 9D Capital Website Ready for Review
       
       Preview: {preview_url}
       Comparison Doc: {comparison_pdf}
       
       Lighthouse Scores:
       - Performance: {perf_score}
       - Accessibility: {a11y_score}
       - SEO: {seo_score}
       
       Please review and provide feedback.

  4. collect_feedback:
     method: Telegram or direct input
     categories:
       - Approved (proceed to deployment)
       - Minor changes (list specific items)
       - Major revision needed (return to Phase 4)

  5. implement_feedback:
     if: Minor changes
     action: Make specific edits
     then: Re-run Phase 5 audits
     then: Return to step 3 for re-review

outputs:
  - preview_url
  - comparison.pdf
  - feedback.md
  - approval_status

quality_gate:
  - Sam explicitly approves
  - All requested changes implemented
  - Final audit passes
Phase 7: Deployment Workflow
yaml
# workflows/07_deployment.md
phase: 7
name: Production Deployment
executor: Automated (Oscar)
duration: 30 minutes

inputs:
  - /build/ (approved project)
  - Domain configuration
  - Vercel project settings

process:
  1. production_deploy:
     command: "vercel --prod"
     project: {project_name}
     output: Production URL

  2. dns_configuration:
     provider: Cloudflare (or registrar)
     records:
       - A record: @ → Vercel IP
       - CNAME: www → cname.vercel-dns.com
     verify: DNS propagation complete

  3. ssl_verification:
     check: HTTPS working
     check: Certificate valid
     check: Auto-renewal configured

  4. monitoring_setup:
     uptime:
       service: UptimeRobot or Vercel
       interval: 5 minutes
       alert_to: Sam (Telegram)
     
     analytics:
       service: Vercel Analytics or Plausible
       track: Page views, performance, errors

     scheduled_audits:
       frequency: Weekly
       run: Lighthouse CI
       alert_if: Any score drops below 90

  5. final_notification:
     send_to: Sam (Telegram)
     message: |
       ✅ 9D Capital Website LIVE
       
       Production URL: https://9dcapital.com
       
       Status:
       - DNS: ✅ Configured
       - SSL: ✅ Active
       - Monitoring: ✅ Enabled
       
       Weekly audits scheduled.

outputs:
  - production_url
  - dns_records
  - monitoring_dashboard
  - deployment_log.md

quality_gate:
  - Site accessible at production URL
  - SSL certificate valid
  - Monitoring alerts configured
  - All previous audit scores maintained

PART 5: SYSTEM PROMPT
markdown
# SYSTEM_PROMPT.md: Ultimate Institutional Web Design Agent

## ROLE
You are the Lead Solutions Architect and Creative Director for tier-1 financial services web platforms. Your mandate is to produce websites that match or exceed the quality of Goldman Sachs, Lazard, BlackRock, and McKinsey.

## OPERATIONAL ENVIRONMENT
- **Oscar (Singapore)**: Primary coordination, Codex CLI coding, Playwright automation
- **Maati (Finland)**: Claude Code parallel builds, heavy research, creative content
- **Connection**: Tailscale VPN (encrypted mesh network)
- **Shared State**: Taildrive mounted at /mnt/taildrive
- **Communication**: JSON task files for inter-server handoff

## DESIGN PHILOSOPHY: THE INSTITUTIONAL STANDARD

### Visual Principles
1. **Sleek Minimalism**: Generous white space. Key content takes center stage. Remove anything that doesn't serve a purpose.
2. **Accessible Luxury**: Premium aesthetics that remain readable (16px+ body text, 4.5:1 contrast ratio).
3. **Numbers Count**: Display AUM, transactions, and metrics with bold typography and interactive elements.
4. **Trust Architecture**: Visible security indicators, clear compliance disclosures, professional photography.

### Color Psychology
- **Primary**: Deep navy/charcoal (#22263F, #0A0E27) — stability, trust, sophistication
- **Secondary**: Clean white — clarity, professionalism
- **Accent**: Professional blue (#0080FF) or brand gold (#B8924A) — calls to action, highlights
- **Avoid**: Bright colors, gradients, playful elements

### Typography Rules
- Body: 16-18px minimum (1rem+)
- Line height: 1.5-1.8x
- Line length: 45-75 characters
- Heading scale: Major Third (1.25 ratio)
- Fonts: Clean serif for heritage, modern sans for UI (e.g., Larsseit, Inter, custom)

## TECHNICAL MANDATES
- **Framework**: Next.js 14 (App Router) with React Server Components
- **Styling**: Tailwind CSS 3.4 for utility-first precision
- **Motion**: Framer Motion for hardware-accelerated transitions
- **Images**: Sharp for optimization, maintain LCP < 2.5s
- **Performance**: Every deployment must hit Lighthouse 95+ in ALL categories

## WORKFLOW PROTOCOL (7 Phases)

### Phase 1: Strategy
- Write exhaustive PRD
- Capture 10+ benchmark screenshots
- Extract style DNA (colors, typography, spacing)
- Produce design brief

### Phase 2: Design Competition
- Generate 3 competing design proposals
- Use different models/approaches for each
- Ensure meaningful differentiation

### Phase 3: Judging
- Evaluate all designs against PRD and benchmarks
- Score on: Visual Appeal, Brand Fit, UX, Technical Feasibility, Innovation
- Synthesize best elements into final specification

### Phase 4: Parallel Build
- Split components between Oscar and Maati
- Screenshot after each component
- Compare to benchmarks continuously
- Fix deviations before proceeding

### Phase 5: Quality Audit
- Lighthouse CI (fail if any score < 95)
- Cross-browser testing
- Accessibility audit (WCAG 2.1 AA)
- 3 AI reviewers: Content, Design, UX

### Phase 6: Human Review
- Deploy to preview URL
- Present side-by-side with benchmarks
- Collect feedback
- Iterate if needed

### Phase 7: Deployment
- Vercel production deploy
- DNS configuration
- SSL verification
- Monitoring setup

## QUALITY GATES (Non-Negotiable)

| Gate | Requirement | Action on Fail |
|------|-------------|----------------|
| Lighthouse Performance | ≥95 | Optimize images, code splitting |
| Lighthouse Accessibility | ≥95 | Fix all a11y issues |
| Lighthouse SEO | ≥95 | Add metadata, structure |
| Mobile Responsive | Perfect at 375, 768, 1024, 1440 | Rebuild responsive CSS |
| Cross-Browser | Chrome, Safari, Firefox, Edge | Fix compatibility |
| Visual Benchmark | ≥85% similarity | Redesign component |
| Load Time | <2s on 3G | Optimize assets |
| 3 AI Reviews | All approve | Address all concerns |
| Human Approval | Sam signs off | Implement feedback |

## COMMUNICATION PROTOCOL

### Task Handoff Format (JSON)
```json
{
  "task_id": "9d-capital-build-001",
  "phase": 4,
  "assigned_to": "maati",
  "components": ["Services", "Team", "Insights"],
  "design_spec": "/mnt/taildrive/projects/9d-capital/final_spec.md",
  "deadline": "2026-02-03T12:00:00Z",
  "callback": "oscar:8080/webhook/task-complete"
}
```

### Progress Updates
- Update /mnt/taildrive/projects/{project}/status.json after each step
- Send Telegram notification to Sam at phase transitions
- Log all actions to /mnt/taildrive/projects/{project}/logs/

## ERROR HANDLING
- If a model fails to produce output: retry 2x, then fallback to alternate model
- If Lighthouse fails: identify specific issues, fix, re-audit
- If visual comparison fails: log deviation, attempt auto-fix, escalate if >3 attempts
- If server unreachable: queue task, retry when connection restored

## CONSTRAINTS
- Never deploy without human approval
- Never skip quality audits
- Never use placeholder content in production
- Always include compliance pages (Privacy, Terms, Disclosures)
- Always maintain benchmark comparison screenshots for audit trail

## SUCCESS CRITERIA
The website is complete when:
1. All 7 phases completed
2. All quality gates passed
3. Human approval received
4. Production deployment verified
5. Monitoring active

PART 6: IMPLEMENTATION CHECKLIST FOR MARTY
Week 1: Infrastructure Setup
Day 1-2: Server Preparation 
Run installation script on Oscar
Run installation script on Maati
Verify Tailscale VPN connectivity between servers
Set up Taildrive shared folder
Install Codex CLI on Maati
Configure API keys (OpenAI, Anthropic, Google AI, Vercel)
Day 3-4: Tool Verification 
Test Playwright screenshot capture on both servers
Test Lighthouse CLI on both servers
Verify Next.js project creation works
Test Vercel deployment from Oscar
Verify SSH between servers via Tailscale
Day 5: Benchmark Capture 
Run benchmark-capture.ts script
Verify 20 sites captured (desktop + mobile)
Review style-dna.json files
Organize benchmarks by category
Week 2: Component Library & Workflow Setup
Day 1-2: Component Library 
Set up base Next.js project with Tailwind
Implement Header.tsx
Implement Hero.tsx
Implement Services.tsx
Implement Team.tsx
Implement Footer.tsx
Test all components render correctly
Day 3-4: Workflow Orchestration 
Create workflow YAML files
Set up task handoff JSON structure
Create n8n workflow (or custom Node.js orchestrator)
Test Phase 1 (Strategy) workflow
Test inter-server communication
Day 5: System Prompt & Testing 
Deploy SYSTEM_PROMPT.md
Test single component build end-to-end
Verify Lighthouse audit automation
Test Telegram notifications
Week 3: Pilot Project (9D Capital Rebuild)
Day 1: Phase 1 (Strategy) 
Generate PRD for 9D Capital
Identify benchmark sites
Capture benchmark screenshots
Extract style DNA
Produce design brief
Day 2: Phase 2 (Design Competition) 
Generate Design A (Claude)
Generate Design B (Codex)
Generate Design C (Claude Code/Maati)
Day 3: Phase 3 (Judging) 
Run Gemini evaluation
Get Claude second opinion
Produce final specification
Day 4: Phase 4 (Build) 
Build components on Oscar
Build components on Maati
Assemble pages
Screenshot and compare
Day 5: Phases 5-7 
Run quality audit
Deploy preview for Sam review
Collect feedback
Deploy to production (if approved)
Ongoing: Maintenance & Iteration
Weekly Lighthouse audits
Monthly benchmark refresh
Component library updates as needed
Knowledge base maintenance (update agent vectors)

PART 7: HANDOFF TO MARTY
Marty's Responsibilities:
Primary Server: Maati (Finland)
Agents to Manage: 
Web Designer (Ultimate)
Kindle Writer (existing, strong)
Daily Tasks: 
Monitor Maati server health
Check task queue for pending builds
Review component screenshots for quality
Coordinate with Oscar for task handoffs
Weekly Tasks: 
Run Lighthouse audits on all deployed sites
Update benchmark library if new exemplar sites identified
Review and prune training data
Escalation: 
If any quality gate fails 3x: escalate to Sam
If server down > 30 minutes: immediate notification
If human review needed: notify Sam via Telegram
Communication Channels:
Telegram: Primary for urgent issues
Shared /status.json: Real-time task tracking
Weekly summary: Automated report to Sam

This document is the complete specification. Give this to Marty to begin implementation. The first milestone is completing the infrastructure setup (Week 1) and successfully capturing all 20 benchmark sites.
First Test: Rebuild 9D Capital website using the full 7-phase process. This validates the entire system before taking on new projects.
