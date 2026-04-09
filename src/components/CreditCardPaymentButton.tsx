"use client";

import { useState } from "react";
import { stripePaymentOptions } from "@/site-config";
import { paymentActionButtonClass } from "@/components/ETransferButton";

type Labels = {
  creditCard: string;
  creditCardTitle: string;
  creditCardHint: string;
  stripeSingle: string;
  stripeCouple: string;
  stripeOther100: string;
  stripeOther180: string;
  stripeOther250: string;
};

const labelKeyById: Record<
  (typeof stripePaymentOptions)[number]["id"],
  keyof Labels
> = {
  single: "stripeSingle",
  couple: "stripeCouple",
  other100: "stripeOther100",
  other180: "stripeOther180",
  other250: "stripeOther250",
};

export default function CreditCardPaymentButton({ labels }: { labels: Labels }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={paymentActionButtonClass}
      >
        {labels.creditCard}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cc-payment-title"
        >
          <div
            className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 rounded-full p-1 text-[var(--muted)] hover:bg-[var(--border)] hover:text-[var(--foreground)]"
              aria-label="Close"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 id="cc-payment-title" className="pr-10 text-lg font-semibold">
              {labels.creditCardTitle}
            </h3>
            <p className="mt-2 text-sm text-[var(--muted)]">{labels.creditCardHint}</p>
            <ul className="mt-5 space-y-2">
              {stripePaymentOptions.map((opt) => {
                const label = labels[labelKeyById[opt.id]];
                return (
                  <li key={opt.id}>
                    <a
                      href={opt.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-between rounded-xl border border-[var(--border)] px-4 py-3 text-sm font-medium transition-colors hover:border-[var(--accent)]/40 hover:bg-[var(--accent-soft)]/30"
                    >
                      <span>{label}</span>
                      <span className="text-[var(--muted)]" aria-hidden>
                        →
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
