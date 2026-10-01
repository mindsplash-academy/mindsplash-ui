import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className="w-[85%] lg:w-[75%] mx-auto mt-6 mb-2"
      >
        <ol className="flex flex-wrap items-center gap-1 text-sm text-description">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1">
              {i > 0 && <ChevronRight className="w-3.5 h-3.5 text-description/50" />}
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-gradient-start transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="font-semibold text-secondary">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* BreadcrumbList structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: items.map((item, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: item.label,
              ...(item.href
                ? { item: `https://mindsplash.in${item.href}` }
                : {}),
            })),
          }),
        }}
      />
    </>
  );
}
