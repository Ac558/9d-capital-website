export interface Service {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

export const SERVICES: Service[] = [
  {
    title: "Wealth & Asset Management",
    subtitle: "Comprehensive Portfolio Oversight",
    description:
      "Our wealth management approach begins with understanding your complete financial picture — your goals, risk tolerance, time horizon, and values. We then construct and manage a diversified portfolio designed to grow and protect your wealth across market cycles.",
    features: [
      "Personalized investment policy statement",
      "Strategic and tactical asset allocation",
      "Continuous portfolio monitoring and rebalancing",
      "Regular performance reporting and review meetings",
    ],
  },
  {
    title: "Family Office Services",
    subtitle: "Unified Family Wealth Management",
    description:
      "Our family office services provide a centralized platform for managing the complex financial affairs of affluent families. We coordinate across investments, estate planning, tax strategy, philanthropy, and next-generation education to deliver a seamless, holistic experience.",
    features: [
      "Consolidated financial reporting and oversight",
      "Multi-generational wealth planning",
      "Family governance and education programs",
      "Coordination with external advisors and fiduciaries",
    ],
  },
  {
    title: "Tax Planning & Advisory",
    subtitle: "Preserving More of What You Earn",
    description:
      "Tax efficiency is a critical component of long-term wealth creation. Our team works closely with your tax advisors to implement strategies that minimize your tax burden while maintaining alignment with your investment objectives.",
    features: [
      "Tax-loss harvesting and gain deferral",
      "Asset location optimization across account types",
      "Charitable giving strategies (donor-advised funds, CRTs)",
      "Multi-year tax projection and scenario modeling",
    ],
  },
  {
    title: "Legacy & Estate Planning",
    subtitle: "Securing Your Family's Future",
    description:
      "Effective estate planning ensures your wealth is preserved and transferred according to your wishes, minimizing estate taxes and administrative complexity. We coordinate with your legal counsel to implement comprehensive legacy strategies.",
    features: [
      "Wealth transfer and gifting strategies",
      "Trust structure analysis and implementation support",
      "Generation-skipping tax planning",
      "Beneficiary designation review and optimization",
    ],
  },
  {
    title: "Private Markets Access",
    subtitle: "Exclusive Investment Opportunities",
    description:
      "Gain access to institutional-quality private market investments typically reserved for the largest investors. We source, evaluate, and provide access to private equity, venture capital, real estate, and other alternative investment opportunities with rigorous due diligence.",
    features: [
      "Private equity and venture capital co-investments",
      "Real estate and real asset strategies",
      "Hedge fund selection and due diligence",
      "Alternative investment portfolio construction",
    ],
  },
  {
    title: "Corporate Workplace Solutions",
    subtitle: "Executive Benefits & Equity Optimization",
    description:
      "We help corporate executives and employees maximize the value of their workplace benefits, equity compensation, and retirement plans. From stock option strategies to deferred compensation planning, we ensure your corporate benefits work as hard as you do.",
    features: [
      "Stock option and RSU exercise planning",
      "Executive deferred compensation strategies",
      "Concentrated stock position management",
      "Corporate retirement plan optimization",
    ],
  },
  {
    title: "Outsourced CFO / Financial Controller",
    subtitle: "Strategic Financial Leadership On Demand",
    description:
      "Access senior-level financial leadership without the overhead of a full-time hire. Our outsourced CFO and financial controller services provide the strategic financial management, reporting, and oversight that growing businesses and family offices need to make informed decisions and scale with confidence.",
    features: [
      "Financial reporting, budgeting, and forecasting",
      "Cash flow management and treasury optimization",
      "Board-ready financial presentations and analysis",
      "Vendor management and operational cost reduction",
    ],
  },
  {
    title: "Insurance & Risk Management",
    subtitle: "Protecting What Matters Most",
    description:
      "Comprehensive risk management goes beyond portfolio diversification. We assess vulnerabilities across your entire financial life and design insurance and mitigation strategies that protect your family, business, and legacy from unforeseen events.",
    features: [
      "Life, disability, and long-term care insurance review",
      "Property and casualty coverage assessment",
      "Umbrella and excess liability planning",
      "Business insurance and key-person risk strategies",
    ],
  },
  {
    title: "International Client Services",
    subtitle: "Your Embassy on Wall Street",
    description:
      "For international clients, we serve as your dedicated presence on Wall Street — providing seamless access to U.S. investment opportunities, custodial coordination, and cross-border wealth structuring. Whether you are in Asia, the Middle East, or Europe, we bridge the gap between global ambition and American capital markets.",
    features: [
      "U.S. market access and account establishment",
      "Cross-border tax coordination (NRA, FATCA, CRS)",
      "Multi-currency investment strategies",
      "International custodian and regulatory coordination",
    ],
  },
  {
    title: "Retirement Planning",
    subtitle: "Building Your Financial Independence",
    description:
      "We design retirement strategies that give you confidence in your financial future. From accumulation through distribution, we optimize your savings, Social Security timing, and withdrawal strategies to ensure your wealth sustains the lifestyle you have earned.",
    features: [
      "Retirement income projection and gap analysis",
      "Social Security optimization and timing strategies",
      "Roth conversion analysis and multi-year planning",
      "Required minimum distribution (RMD) management",
    ],
  },
  {
    title: "Philanthropic Advisory",
    subtitle: "Maximizing Your Charitable Impact",
    description:
      "Align your wealth with your values through strategic philanthropic planning. We help you structure charitable giving in ways that maximize both your social impact and your tax efficiency, whether through foundations, donor-advised funds, or direct giving strategies.",
    features: [
      "Charitable giving strategy and tax optimization",
      "Donor-advised fund setup and management",
      "Private foundation advisory and compliance",
      "Legacy and impact-oriented giving programs",
    ],
  },
  {
    title: "Business Owner Advisory",
    subtitle: "From Growth to Transition",
    description:
      "Business owners face unique financial challenges at every stage — from growth and expansion to succession and exit. We provide integrated advisory that aligns your personal wealth strategy with your business objectives, ensuring both thrive in concert.",
    features: [
      "Business succession and exit planning",
      "Entity structure and tax optimization",
      "Key-person insurance and buy-sell agreements",
      "Personal and business wealth integration",
    ],
  },
];

export const WHO_WE_SERVE = [
  {
    title: "High-Net-Worth Individuals & Families",
    description:
      "Comprehensive wealth management for individuals and families seeking institutional-quality advisory with personalized attention.",
  },
  {
    title: "Corporate Executives & Entrepreneurs",
    description:
      "Strategic financial planning for executives navigating equity compensation, concentrated positions, and complex benefit structures.",
  },
  {
    title: "International Clients & Expatriates",
    description:
      "Cross-border expertise for clients in Asia, the Middle East, Europe, and beyond — your embassy on Wall Street.",
  },
  {
    title: "Family Offices & Institutions",
    description:
      "Institutional-grade investment solutions and operational support for family offices and institutional investors.",
  },
  {
    title: "Business Owners",
    description:
      "Integrated advisory connecting personal wealth strategy with business growth, succession, and transition planning.",
  },
];

export const HOW_WE_WORK = [
  {
    step: 1,
    title: "Discovery & Consultation",
    description:
      "We begin with a confidential conversation to understand your financial landscape, goals, and concerns. No obligations — just an honest assessment of how we can help.",
  },
  {
    step: 2,
    title: "Strategy Development",
    description:
      "Our team develops a tailored financial strategy that addresses your unique needs — from investment management and tax optimization to estate planning and risk mitigation.",
  },
  {
    step: 3,
    title: "Implementation & Execution",
    description:
      "We put your plan into action with precision, coordinating across custodians, advisors, and institutions to ensure seamless execution.",
  },
  {
    step: 4,
    title: "Ongoing Monitoring & Review",
    description:
      "Markets change, life evolves. We continuously monitor your portfolio and financial plan, proactively adjusting strategies to keep you on track.",
  },
];
