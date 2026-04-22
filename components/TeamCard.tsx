import { Link2, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface TeamCardProps {
  name: string;
  specialty: string;
  bio: string;
  imageUrl: string;
  imageAlt?: string;
  href?: string;
}

export default function TeamCard({ name, specialty, bio, imageUrl, imageAlt, href }: TeamCardProps) {
  const Wrapper: React.ElementType = href ? Link : "div";

  return (
    <article className="rounded-3xl bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
      <Wrapper href={href} className={href ? "group block" : undefined}>
        <Image
          src={imageUrl}
          alt={imageAlt ?? name}
          width={120}
          height={120}
          className="mb-4 h-24 w-24 rounded-full object-cover"
        />
        <h3 className={`text-lg font-semibold text-neutral-dark ${href ? "group-hover:text-primary" : ""}`}>
          {name}
        </h3>
      </Wrapper>
      <p className="mb-3 text-sm font-medium text-primary">{specialty}</p>
      <p className="mb-4 text-sm leading-6 text-neutral-muted">{bio}</p>
      <div className="flex gap-2">
        <button className="rounded-full bg-neutral-card p-2 text-primary transition hover:bg-primary-light">
          <Link2 className="h-4 w-4" />
        </button>
        <button className="rounded-full bg-neutral-card p-2 text-primary transition hover:bg-primary-light">
          <Mail className="h-4 w-4" />
        </button>
      </div>
    </article>
  );
}
