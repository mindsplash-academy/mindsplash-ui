import Link from "next/link";

const locations = [
  { name: "Khajaguda", slug: "khajaguda" },
  { name: "Kokapet", slug: "kokapet" },
  { name: "Financial District", slug: "financialdistrict" },
];

export default function ProgramLocations({ programme }: { programme: string }) {
  return (
    <section className="mx-auto mb-16 w-[85%] lg:w-[75%]" aria-labelledby="programme-locations-heading">
      <h2 id="programme-locations-heading" className="mb-6 text-2xl font-bold text-secondary md:text-3xl">
        {programme} locations in Hyderabad
      </h2>
      <ul className="grid gap-4 sm:grid-cols-3">
        {locations.map((location) => (
          <li key={location.slug}>
            <Link
              href={`/branches/${location.slug}`}
              className="block rounded-2xl border border-card-border bg-secondary-foreground p-5 font-semibold text-gradient-start transition-shadow hover:shadow-md hover:underline"
            >
              {programme} at the {location.name} centre
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
