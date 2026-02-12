import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import LangSwitcher from "@/components/LangSwitcher";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const localeTyped = locale as Locale;
  const t = await getDictionary(localeTyped);

  const header = t.header as Record<string, string>;
  const hero = t.hero as Record<string, string>;
  const trust = t.trust as Record<string, { title: string; desc: string }>;
  const whatYouGet = t.whatYouGet as {
    title: string;
    desc: string;
    services: string[];
  };
  const services = t.services as {
    title: string;
    individual: { title: string; desc: string };
    couple: { title: string; desc: string };
    anxiety: { title: string; desc: string };
    family: { title: string; desc: string };
  };
  const about = t.about as {
    title: string;
    credentials: { label: string; text: string };
    approach: { label: string; text: string };
    values: { label: string; text: string };
    workStyle: { label: string; text: string };
  };
  const booking = t.booking as Record<string, string | string[]>;
  const privacy = t.privacy as { title: string; items: string[] };
  const faq = t.faq as { title: string; items: { q: string; a: string }[] };
  const footer = t.footer as Record<string, string>;
  const contact = t.contact as { phone: string; email: string };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur">
        <div className="container-shell flex h-16 items-center justify-between">
          <Link href={`/${localeTyped}`} className="flex items-center gap-3">
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
              <Image
                src="/logo_r.png"
                alt={header.brand}
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold">{header.brand}</p>
              <p className="text-xs text-[var(--muted)]">{header.tagline}</p>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <LangSwitcher locale={localeTyped} />
            <a
              href="#booking"
              className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white"
            >
              {header.cta}
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="container-shell py-20 md:py-28">
          <p className="mb-4 text-sm font-medium text-[var(--accent)]">
            {hero.label}
          </p>
          <h1 className="max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-[var(--muted)] md:text-lg">
            {hero.subtitle}
          </p>
          <div className="mt-8">
            <a
              href="#booking"
              className="inline-flex rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white"
            >
              {hero.cta}
            </a>
          </div>
        </section>

        <section className="container-shell pb-16">
          <div className="grid gap-4 md:grid-cols-3">
            <article className="section-card p-6">
              <h2 className="text-lg font-semibold">{trust.method.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                {trust.method.desc}
              </p>
            </article>
            <article className="section-card p-6">
              <h2 className="text-lg font-semibold">{trust.approach.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                {trust.approach.desc}
              </p>
            </article>
            <article className="section-card p-6">
              <h2 className="text-lg font-semibold">
                {trust.confidentiality.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                {trust.confidentiality.desc}
              </p>
            </article>
          </div>
        </section>

        <section className="container-shell pb-16">
          <div className="section-card p-8 md:p-10">
            <h2 className="text-2xl font-semibold">{whatYouGet.title}</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--muted)]">
              {whatYouGet.desc}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {whatYouGet.services.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="container-shell pb-16">
          <h2 className="text-2xl font-semibold">{services.title}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <article className="section-card p-6">
              <h3 className="font-medium">{services.individual.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                {services.individual.desc}
              </p>
            </article>
            <article className="section-card p-6">
              <h3 className="font-medium">{services.couple.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                {services.couple.desc}
              </p>
            </article>
            <article className="section-card p-6">
              <h3 className="font-medium">{services.anxiety.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                {services.anxiety.desc}
              </p>
            </article>
            <article className="section-card p-6">
              <h3 className="font-medium">{services.family.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                {services.family.desc}
              </p>
            </article>
          </div>
        </section>

        <section id="about" className="container-shell pb-16">
          <div className="section-card p-8 md:p-10">
            <h2 className="text-2xl font-semibold">{about.title}</h2>
            <div className="mt-5 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold text-[var(--muted)]">
                  {about.credentials.label}
                </h3>
                <p className="mt-2 text-sm leading-7">
                  {about.credentials.text}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[var(--muted)]">
                  {about.approach.label}
                </h3>
                <p className="mt-2 text-sm leading-7">
                  {about.approach.text}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[var(--muted)]">
                  {about.values.label}
                </h3>
                <p className="mt-2 text-sm leading-7">
                  {about.values.text}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[var(--muted)]">
                  {about.workStyle.label}
                </h3>
                <p className="mt-2 text-sm leading-7">
                  {about.workStyle.text}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="booking" className="container-shell pb-16">
          <div className="section-card p-8 md:p-10">
            <h2 className="text-2xl font-semibold">{booking.title}</h2>
            <ol className="mt-5 list-decimal space-y-2 pl-5 text-sm leading-7 text-[var(--muted)]">
              {(booking.steps as string[]).map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-[var(--border)] p-4">
                <p className="text-xs text-[var(--muted)]">{booking.duration}</p>
                <p className="mt-1 font-medium">{booking.durationValue}</p>
              </div>
              <div className="rounded-xl border border-[var(--border)] p-4">
                <p className="text-xs text-[var(--muted)]">{booking.fee}</p>
                <p className="mt-1 font-medium">{booking.feeValue}</p>
              </div>
              <div className="rounded-xl border border-[var(--border)] p-4">
                <p className="text-xs text-[var(--muted)]">{booking.format}</p>
                <p className="mt-1 font-medium">{booking.formatValue}</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
              {booking.cancelPolicy}
            </p>
            <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
              {booking.paymentNote}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${contact.email}`}
                className="rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white"
              >
                {booking.cta}
              </a>
              <a
                href={`tel:+1${contact.phone.replace(/\D/g, "")}`}
                className="rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium"
              >
                {booking.phone}
              </a>
            </div>
          </div>
        </section>

        <section id="privacy" className="container-shell pb-16">
          <div className="section-card p-8 md:p-10">
            <h2 className="text-2xl font-semibold">{privacy.title}</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--muted)]">
              {privacy.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="faq" className="container-shell pb-24">
          <h2 className="text-2xl font-semibold">{faq.title}</h2>
          <div className="mt-6 space-y-4">
            {faq.items.map((item) => (
              <article key={item.q} className="section-card p-6">
                <h3 className="font-medium">{item.q}</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  {item.a}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--border)] py-8">
        <div className="container-shell flex flex-col gap-4 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg">
              <Image
                src="/logo.png"
                alt={footer.copyright}
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div>
              <p>© {new Date().getFullYear()} {footer.copyright}</p>
              <p className="text-xs">
                <a href={`mailto:${contact.email}`} className="hover:text-[var(--accent)]">{contact.email}</a>
                {" · "}
                <a href={`tel:+1${contact.phone.replace(/\D/g, "")}`} className="hover:text-[var(--accent)]">{contact.phone}</a>
              </p>
            </div>
          </div>
          <p>{footer.domain}</p>
        </div>
      </footer>
    </div>
  );
}
