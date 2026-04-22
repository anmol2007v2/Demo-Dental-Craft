"use client";

import { motion, useReducedMotion } from "framer-motion";
import { paymentMethods } from "@/data/paymentMethods";

function MethodPill({ name }: { name: string }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="group relative flex items-center justify-center overflow-hidden rounded-full border border-neutral-card bg-white px-4 py-2 text-sm font-semibold text-neutral-dark shadow-sm transition-all hover:bg-primary hover:text-white"
    >
      <span className="transition-transform duration-300 group-hover:scale-110">{name}</span>
    </motion.div>
  );
}

export default function PaymentCtaStrip() {
  const prefersReducedMotion = useReducedMotion();
  const items = paymentMethods;

  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="rounded-[2rem] border border-neutral-card bg-neutral-section px-6 py-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-mid">
                Payment options in Nepal
              </p>
              <h3 className="mt-2 font-serif text-2xl text-primary md:text-3xl">
                Pay your way — quick, local, and flexible
              </h3>
            </div>
            <p className="max-w-xl text-sm text-neutral-mid md:text-right">
              We accept popular digital wallets and transfers used across Nepal.
            </p>
          </div>

          <div className="relative mt-6 overflow-hidden rounded-2xl bg-white/60">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white/90 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white/90 to-transparent" />

            {prefersReducedMotion ? (
              <div className="flex flex-wrap gap-3 p-4">
                {items.map((m) => (
                  <MethodPill key={m.name} name={m.name} />
                ))}
              </div>
            ) : (
              <div className="p-4">
                <motion.div
                  className="flex w-max items-center gap-3"
                  initial={{ x: 0 }}
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    duration: 18,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  {[...items, ...items].map((m, idx) => (
                    <MethodPill key={`${m.name}-${idx}`} name={m.name} />
                  ))}
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

