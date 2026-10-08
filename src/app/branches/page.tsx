import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "MindSplash Academy Branches in Hyderabad | Khajaguda, Kokapet & Financial District",
  description:
    "Find MindSplash Academy coaching centres in Khajaguda, Kokapet, and Financial District, Hyderabad. Explore branch details and book a free demo.",
  openGraph: {
    title: "MindSplash Academy Branches in Hyderabad",
    description:
      "Explore MindSplash Academy locations in Khajaguda, Kokapet, and Financial District, Hyderabad.",
    type: "website",
    url: "https://mindsplash.in/branches",
  },
  alternates: { canonical: "/branches" },
};

const branches = [
  {
    name: "Khajaguda",
    href: "/branches/khajaguda",
    address: "4th Floor, Arka Rochish, Khajaguda-Nanakramguda Road, Gachibowli, Hyderabad 500089",
  },
  {
    name: "Kokapet",
    href: "/branches/kokapet",
    address: "4th Floor, Raichandani Business Bay, Opp. Rajapushpa Regalia, Kokapet, Hyderabad 500075",
  },
  {
    name: "Financial District",
    href: "/branches/financialdistrict",
    address: "Above ICICI Bank, My Home Vihanga Road, Gachibowli, Hyderabad 500032",
  },
];

export default function BranchesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Branches" }]} />
      <main className="mx-auto w-[92%] max-w-6xl py-10 md:py-16">
        <header className="mb-10 text-center md:mb-14">
          <h1 className="mb-4 text-3xl font-bold text-secondary md:text-5xl">
            MindSplash Academy Branches
          </h1>
          <p className="mx-auto max-w-2xl text-description md:text-lg">
            Visit one of our Hyderabad learning centres for IB, IGCSE, Olympiad,
            and exam preparation.
          </p>
        </header>

        <ul className="grid gap-5 md:grid-cols-3">
          {branches.map((branch) => (
            <li key={branch.href}>
              <Link
                href={branch.href}
                className="flex h-full flex-col rounded-2xl border border-card-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <MapPin className="mb-4 h-6 w-6 text-gradient-start" aria-hidden="true" />
                <h2 className="mb-2 text-xl font-bold text-secondary">{branch.name}</h2>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-description">
                  {branch.address}
                </p>
                <span className="font-semibold text-gradient-start">View branch details â†’</span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center text-description">
          Want to visit? <Link href="/contact" className="font-semibold text-gradient-start hover:underline">Contact us to book a free demo.</Link>
        </p>
      </main>
    </>
  );
}
