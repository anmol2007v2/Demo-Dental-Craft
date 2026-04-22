import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-neutral-bg px-4 pb-20 pt-16 md:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-serif text-8xl text-primary md:text-9xl">404</p>
        <h1 className="mt-4 font-serif text-4xl text-neutral-dark md:text-5xl">
          This page got lost in the waiting room
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-mid">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-2xl bg-primary px-10 py-4 text-base font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary-dark"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}

