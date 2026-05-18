import type { Metadata } from 'next';
import Link from 'next/link';
import { ContactForm } from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Book ajscofieldfilms for your next brand film, event highlight, or creative project. Typical reply within 24 hours.',
};

export default function ContactPage() {
  return (
    <>
      {/* ── Page header ──────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-36 lg:px-8">
        <p className="text-[0.58rem] uppercase tracking-[0.5em] text-zinc-600">
          Get in touch
        </p>
        <h1 className="mt-2 font-display leading-none tracking-[0.04em] text-white [font-size:clamp(4rem,12vw,10rem)]">
          LET&apos;S TALK
        </h1>
        <p className="mt-6 max-w-lg text-sm leading-7 text-zinc-500">
          Reach out with your project vision, timeline, and creative goals. We
          review every brief and respond with availability, approach, and a
          tailored production plan.
        </p>
      </div>

      {/* ── Main ─────────────────────────────────── */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr] lg:gap-24">
            {/* ── Info column ──── */}
            <div className="space-y-0">
              <div className="border-b border-white/10 py-8 first:border-t first:border-white/10">
                <p className="text-[0.58rem] uppercase tracking-[0.35em] text-zinc-600">
                  Email
                </p>
                <a
                  href="mailto:hello@ajscofieldfilms.com"
                  className="mt-3 block text-base text-white transition hover:text-brand"
                >
                  hello@ajscofieldfilms.com
                </a>
              </div>

              <div className="border-b border-white/10 py-8">
                <p className="text-[0.58rem] uppercase tracking-[0.35em] text-zinc-600">
                  Instagram
                </p>
                <Link
                  href="https://instagram.com/ajscofieldfilms"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 block text-base text-brand transition hover:text-white"
                >
                  @ajscofieldfilms
                </Link>
              </div>

              <div className="border-b border-white/10 py-8">
                <p className="text-[0.58rem] uppercase tracking-[0.35em] text-zinc-600">
                  What to include
                </p>
                <ul className="mt-4 space-y-3">
                  {[
                    'Production type and scope',
                    'Your timeline and budget range',
                    'Final deliverable formats needed',
                    'Visual direction and tone',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-zinc-600"
                    >
                      <span className="mt-2.5 h-px w-4 shrink-0 bg-brand" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="py-8">
                <p className="font-display text-2xl tracking-[0.06em] text-white">
                  RESPONSE IN 24H
                </p>
                <p className="mt-2 text-sm leading-7 text-zinc-600">
                  We review every brief and respond with our availability,
                  approach, and a tailored production plan.
                </p>
              </div>
            </div>

            {/* ── Form column ──── */}
            <div className="lg:pt-4">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
