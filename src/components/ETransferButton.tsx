"use client";

import { useState } from "react";

type Labels = {
  eTransferButton: string;
  eTransferModalTitle: string;
  eTransferModalInstruction: string;
};

/** 付款相關按鈕共用樣式（綠色、易辨識） */
export const paymentActionButtonClass =
  "inline-flex shrink-0 items-center rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2";

export default function ETransferButton({
  labels,
  email,
}: {
  labels: Labels;
  email: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={paymentActionButtonClass}
      >
        {labels.eTransferButton}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="etransfer-modal-title"
        >
          <div
            className="relative w-full max-w-lg rounded-2xl bg-white p-8 shadow-xl"
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
            <h3 id="etransfer-modal-title" className="pr-10 text-xl font-semibold text-[var(--foreground)]">
              {labels.eTransferModalTitle}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
              {labels.eTransferModalInstruction}
            </p>
            <p className="mt-6 break-all text-center text-2xl font-bold tracking-tight text-emerald-700 sm:text-3xl">
              {email}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
