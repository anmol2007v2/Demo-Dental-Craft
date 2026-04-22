"use client";

import { ChevronDown } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { useState } from "react";

export default function FaqAccordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const prefersReducedMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-neutral-card overflow-hidden rounded-3xl border border-neutral-card bg-white">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={item.question} className="p-6">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 text-left"
              onClick={() => setOpenIndex((prev) => (prev === idx ? null : idx))}
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-neutral-dark">{item.question}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-neutral-mid transition-transform ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            <div
              className={`grid ${prefersReducedMotion ? "" : "transition-[grid-template-rows] duration-200 ease-out"} ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="mt-3 leading-relaxed text-neutral-mid">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

