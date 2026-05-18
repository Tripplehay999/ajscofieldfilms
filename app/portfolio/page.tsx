import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Marquee } from '@/components/marquee';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Selected films and edits — cinematic sequences built to elevate brand identity, event energy, and creative storytelling.',
};

const PROJECTS = [
  {
    number: '01',
    title: 'Red Brand Trailer',
    category: 'Campaign',
    year: '2024',
    description:
      'A sharp cinematic trailer built around brand identity, aggressive lighting, and punchy editorial rhythm. Every frame was calibrated to drive brand recognition and audience response.',
    details: ['Brand story', 'Music-driven edit', 'Color grade', 'Social formats'],
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80',
  },
  {
    number: '02',
    title: 'Wedding Film',
    category: 'Wedding & Events',
    year: '2026',
    description:
      'A full cinematic wedding film — ceremony coverage, intimate reception moments, and a highlight reel graded with warmth and precision. Every detail captured and every emotion preserved.',
    details: ['Ceremony film', 'Reception highlight', 'Same-day edit', 'Social cuts'],
    image: '/live-event.png',
  },
  {
    number: '03',
    title: 'Creative Short',
    category: 'Art Film',
    year: '2023',
    description:
      'An atmospheric piece with moody imagery, texture-rich lighting, and editorial tension that holds. Sound-designed and color-graded to a precise emotional register.',
    details: ['Story-driven edit', 'Sound design', 'Grade with red accents', 'Festival-ready'],
    image:
      'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1400&q=80',
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* ── Page header ──────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-36 lg:px-8">
        <p className="text-[0.58rem] uppercase tracking-[0.5em] text-zinc-600">
          Our work
        </p>
        <h1 className="mt-2 font-display leading-none tracking-[0.04em] text-white [font-size:clamp(4.5rem,12vw,10rem)]">
          PORTFOLIO
        </h1>
        <p className="mt-6 max-w-lg text-sm leading-7 text-zinc-500">
          Cinematic sequences built to elevate brand identity, event energy, and
          creative storytelling — designed to perform across every platform.
        </p>
      </div>

      {/* ── Marquee ──────────────────────────────── */}
      <Marquee />

      {/* ── Projects ─────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        {PROJECTS.map((project, i) => (
          <div
            key={project.title}
            className={`grid gap-8 border-t border-white/10 py-14 sm:grid-cols-2 sm:gap-12 lg:gap-20 lg:py-20 ${
              i % 2 === 1 ? 'sm:[&>*:first-child]:order-2' : ''
            }`}
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition duration-700 hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              {/* large watermark number */}
              <span className="pointer-events-none absolute left-4 top-4 font-display text-[6rem] leading-none text-white/10 select-none">
                {project.number}
              </span>
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 text-[0.58rem] uppercase tracking-[0.3em] text-zinc-600">
                <span>{project.category}</span>
                <span className="h-px flex-1 bg-white/10" />
                <span>{project.year}</span>
              </div>
              <h2 className="mt-4 font-display tracking-[0.05em] text-white [font-size:clamp(2rem,5vw,3.5rem)]">
                {project.title.toUpperCase()}
              </h2>
              <p className="mt-4 text-sm leading-7 text-zinc-500">
                {project.description}
              </p>
              <ul className="mt-6 space-y-2.5">
                {project.details.map((d) => (
                  <li
                    key={d}
                    className="flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.15em] text-zinc-600"
                  >
                    <span className="h-px w-5 shrink-0 bg-brand" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        <div className="border-t border-white/10" />
      </section>

      {/* ── How we work ──────────────────────────── */}
      <section className="border-t border-white/10 bg-[#080808]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="border-b border-white/10 pb-8">
            <p className="text-[0.58rem] uppercase tracking-[0.45em] text-zinc-600">
              Process
            </p>
            <h2 className="mt-1 font-display tracking-[0.05em] text-white [font-size:clamp(3rem,7vw,5.5rem)]">
              HOW WE WORK
            </h2>
          </div>

          <div className="grid gap-0 sm:grid-cols-3 sm:divide-x sm:divide-white/10">
            {[
              {
                tag: 'Shoot',
                body: 'Cinematic setup, lens choice, and camera movement designed to capture premium images with purpose and precision.',
              },
              {
                tag: 'Edit',
                body: 'Rhythm, cut timing, and story structure sharpened for emotional momentum and maximum impact.',
              },
              {
                tag: 'Grade',
                body: 'Color, contrast, and film texture tuned to deliver a powerful, signature cinematic tone.',
              },
            ].map((step) => (
              <div
                key={step.tag}
                className="border-b border-white/10 py-10 sm:border-b-0 sm:px-8 sm:first:pl-0 sm:last:pr-0"
              >
                <p className="font-display text-2xl tracking-[0.06em] text-brand">
                  {step.tag.toUpperCase()}
                </p>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="bg-brand">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-16 sm:flex-row sm:items-center lg:px-8">
          <h2 className="font-display tracking-[0.05em] text-white [font-size:clamp(2.5rem,6vw,4.5rem)]">
            HAVE A PROJECT
            <br className="sm:hidden" />
            &nbsp;IN MIND?
          </h2>
          <Link
            href="/contact"
            className="shrink-0 rounded-full bg-black px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-black"
          >
            Book a project →
          </Link>
        </div>
      </section>
    </>
  );
}
