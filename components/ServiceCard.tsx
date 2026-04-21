import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  price?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
  price,
}: ServiceCardProps) {
  return (
    <article className="rounded-3xl bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-semibold text-neutral-dark">{title}</h3>
      <p className="mb-4 text-sm leading-6 text-neutral-muted">{description}</p>
      {price ? <p className="mb-5 text-sm font-medium text-primary">{price}</p> : null}
      {href ? (
        <Link
          href={href}
          className="inline-flex items-center gap-1 font-medium text-primary transition hover:text-primary-dark"
        >
          Learn more <ChevronRight className="h-4 w-4" />
        </Link>
      ) : null}
    </article>
  );
}
