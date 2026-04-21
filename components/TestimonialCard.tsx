import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  initials: string;
  rating: number;
  quote: string;
  service: string;
  date: string;
}

export default function TestimonialCard({
  name,
  initials,
  rating,
  quote,
  service,
  date,
}: TestimonialCardProps) {
  return (
    <article className="rounded-3xl bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
      <div className="mb-4 flex items-center gap-1 text-accent">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={`${name}-star-${i}`}
            className="h-4 w-4"
            fill={i < rating ? "currentColor" : "none"}
          />
        ))}
      </div>
      <p className="mb-5 italic leading-7 text-neutral-mid">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-light font-semibold text-primary">
            {initials}
          </span>
          <div>
            <p className="font-semibold text-neutral-dark">{name}</p>
            <p className="text-xs text-neutral-muted">
              {service} - {date}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
