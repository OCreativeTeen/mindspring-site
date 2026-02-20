import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import LangSwitcher from "@/components/LangSwitcher";
import WeChatButton from "@/components/WeChatButton";
import { siteConfig, sectionIcons } from "@/site-config";

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
  const why = t.why as Record<string, string>;
  const vision = t.vision as Record<string, string>;
  const principles = t.principles as {
    title: string;
    reality: { title: string; desc: string };
    integrated: { title: string; desc: string };
    human: { title: string; desc: string };
    relational: { title: string; desc: string };
    meaning: { title: string; desc: string };
  };
  const trust = t.trust as Record<string, { title: string; desc: string }>;
  const mission = t.mission as { title: string; intro: string; pillars: string[] };
  const offerings = t.offerings as {
    servicesTitle: string;
    services: string[];
    specialitiesTitle: string;
    specialities: string[];
    serveTitle: string;
    serve: Record<string, string>;
  };
  const services = t.services as {
    title: string;
    ai: { title: string; desc: string };
    relationship: { title: string; desc: string };
    education: { title: string; desc: string };
    spiritual: { title: string; desc: string };
  };
  const positioning = t.positioning as {
    title: string;
    not: { title: string; items: string[] };
    are: { title: string; text: string };
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
  const youtube = t.youtube as { title: string; subtitle: string; cta: string };

  const principleItems = [
    principles.reality,
    principles.integrated,
    principles.human,
    principles.relational,
    principles.meaning,
  ];

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
          <div className="section-card p-8 md:p-10">
            <h2 className="text-2xl font-semibold"><span className="mr-2" aria-hidden>{sectionIcons.why}</span>{why.title}</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              {why.intro}
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              {why.challenges}
            </p>
            <p className="mt-4 text-sm font-medium leading-7">
              {why.conclusion}
            </p>
          </div>
        </section>

        <section className="container-shell pb-16">
          <div className="section-card p-8 md:p-10">
            <h2 className="text-2xl font-semibold"><span className="mr-2" aria-hidden>{sectionIcons.vision}</span>{vision.title}</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              {vision.text}
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              {vision.believe}
            </p>
          </div>
        </section>

        <section className="container-shell pb-16">
          <h2 className="text-2xl font-semibold"><span className="mr-2" aria-hidden>{sectionIcons.principles}</span>{principles.title}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {principleItems.map((item) => (
              <article key={item.title} className="section-card p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="container-shell pb-16">
          <div className="section-card p-8 md:p-10">
            <h2 className="text-2xl font-semibold"><span className="mr-2" aria-hidden>{sectionIcons.mission}</span>{mission.title}</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              {mission.intro}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {mission.pillars.map((item) => (
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

        <section id="offerings" className="container-shell pb-16">
          <div className="grid gap-6 md:grid-cols-3">
            <article className="section-card p-6">
              <h3 className="text-lg font-semibold"><span className="mr-1.5" aria-hidden>{sectionIcons.offeringsServices}</span>{offerings.servicesTitle}</h3>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-[var(--muted)]">
                {offerings.services.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="section-card p-6">
              <h3 className="text-lg font-semibold"><span className="mr-1.5" aria-hidden>{sectionIcons.offeringsSpecialities}</span>{offerings.specialitiesTitle}</h3>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-[var(--muted)]">
                {offerings.specialities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="section-card p-6">
              <h3 className="text-lg font-semibold"><span className="mr-1.5" aria-hidden>{sectionIcons.offeringsServe}</span>{offerings.serveTitle}</h3>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-[var(--muted)]">
                <li>{offerings.serve.individuals}</li>
                <li>{offerings.serve.couplesEnrichment}</li>
                <li>{offerings.serve.couplesDistressed}</li>
                <li>{offerings.serve.families}</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="services" className="container-shell pb-16">
          <h2 className="text-2xl font-semibold"><span className="mr-2" aria-hidden>{sectionIcons.services}</span>{services.title}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <article className="section-card p-6">
              <h3 className="font-medium">{services.ai.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                {services.ai.desc}
              </p>
            </article>
            <article className="section-card p-6">
              <h3 className="font-medium">{services.relationship.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                {services.relationship.desc}
              </p>
            </article>
            <article className="section-card p-6">
              <h3 className="font-medium">{services.education.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                {services.education.desc}
              </p>
            </article>
            <article className="section-card p-6">
              <h3 className="font-medium">{services.spiritual.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                {services.spiritual.desc}
              </p>
            </article>
          </div>
        </section>

        <section className="container-shell pb-16">
          <div className="section-card p-8 md:p-10">
            <h2 className="text-2xl font-semibold"><span className="mr-2" aria-hidden>{sectionIcons.positioning}</span>{positioning.title}</h2>
            <div className="mt-5 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold text-[var(--muted)]">
                  {positioning.not.title}
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-[var(--muted)]">
                  {positioning.not.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[var(--muted)]">
                  {positioning.are.title}
                </h3>
                <p className="mt-2 text-sm leading-7">{positioning.are.text}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="container-shell pb-16">
          <div className="grid gap-4 md:grid-cols-3">
            <article className="section-card p-6">
              <h2 className="text-lg font-semibold"><span className="mr-1.5" aria-hidden>{sectionIcons.trustMethod}</span>{trust.method.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                {trust.method.desc}
              </p>
            </article>
            <article className="section-card p-6">
              <h2 className="text-lg font-semibold"><span className="mr-1.5" aria-hidden>{sectionIcons.trustApproach}</span>{trust.approach.title}</h2>
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

        <section id="about" className="container-shell pb-16">
          <div className="section-card p-8 md:p-10">
            <h2 className="text-2xl font-semibold"><span className="mr-2" aria-hidden>{sectionIcons.about}</span>{about.title}</h2>
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
            <h2 className="text-2xl font-semibold"><span className="mr-2" aria-hidden>{sectionIcons.booking}</span>{booking.title}</h2>
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
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${contact.email}`}
                className="rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white"
              >
                {booking.cta}
              </a>
              <a
                href={`sms:+1${contact.phone.replace(/\D/g, "")}`}
                className="rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium"
              >
                {booking.sms}
              </a>
              <WeChatButton label={booking.wechat as string} />
            </div>
            <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
              {booking.cancelPolicy}
            </p>
            <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
              {booking.paymentNote}
            </p>
          </div>
        </section>

        <section id="privacy" className="container-shell pb-16">
          <div className="section-card p-8 md:p-10">
            <h2 className="text-2xl font-semibold"><span className="mr-2" aria-hidden>{sectionIcons.privacy}</span>{privacy.title}</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--muted)]">
              {privacy.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="faq" className="container-shell pb-16">
          <h2 className="text-2xl font-semibold"><span className="mr-2" aria-hidden>{sectionIcons.faq}</span>{faq.title}</h2>
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

        {siteConfig.showYouTubeSection && (
          <section id="youtube" className="container-shell pb-24">
            <div className="section-card p-8 md:p-10 text-center">
              <h2 className="text-2xl font-semibold"><span className="mr-2" aria-hidden>{sectionIcons.youtube}</span>{youtube.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)] max-w-xl mx-auto">
                {youtube.subtitle}
              </p>
              <a
                href="https://www.youtube.com/channel/UCeZ9nobfYZ5ToOLESIfE5bA"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#ff0000] px-6 py-3 text-sm font-medium text-white hover:bg-[#cc0000]"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                {youtube.cta}
              </a>
            </div>
          </section>
        )}
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
              <p>
                © {new Date().getFullYear()} {footer.copyright}
              </p>
              <p className="text-xs">
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-[var(--accent)]"
                >
                  {contact.email}
                </a>
                {" · "}
                <a
                  href={`tel:+1${contact.phone.replace(/\D/g, "")}`}
                  className="hover:text-[var(--accent)]"
                >
                  {contact.phone}
                </a>
              </p>
            </div>
          </div>
          <p>{footer.domain}</p>
        </div>
      </footer>
    </div>
  );
}
