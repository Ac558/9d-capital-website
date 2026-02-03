import { redirect } from "next/navigation";

export const metadata = {
  title: "International Families — 9D Capital",
  description: "Cross-border wealth management for international families and expatriates. Your Embassy on Wall Street.",
};

export default function WhoWeServeInternationalPage() {
  redirect("/international");
}
