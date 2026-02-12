"use client";

import Image from "next/image";
import { useState } from "react";

export default function WeChatButton({ label }: { label: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium hover:border-[var(--accent)]/30 hover:text-[var(--accent)]"
      >
        {label}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="WeChat QR code"
        >
          <div
            className="relative rounded-2xl bg-white p-6 shadow-xl"
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
            <p className="mb-4 text-center text-sm font-medium text-[var(--muted)]">
              {label}
            </p>
            <div className="relative mx-auto aspect-square w-56 overflow-hidden rounded-lg bg-[var(--background)] sm:w-64">
              <Image
                src="/wechat.png"
                alt="WeChat QR code"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
