import type { Metadata } from 'next';
import Link from 'next/link';
import { Marquee } from '@/components/marquee';

export const metadata: Metadata = {
  title: 'About',
  description:
    'ajscofieldfilms — built for filmmakers, brands, and creatives who need cinematic image-making with strategic editing and premium color.',
};

const VALUES = [
  {
    num: '01',
    title: 'Creative Vision',
    body: 'We fuse dramatic lighting, bold framing, and filmic texture to make every project feel cinematic and memorable — not just competent.',
  },
  {
    num: '02',
    title: 'Production Energy',
    body: 'We move fast on set, collaborate closely, and deliver visuals that feel polished, intentional, and ready for launch from day one.',
  },
  {
    num: '03',
    title: 'Precision Storytelling',
    body: 'Every cut, grade, and frame is deliberate. We build narrative momentum and emotional clarity into every edit we touch.',
  },
  {
    num: '04',
    title: 'Client Focus',
    body: 'Your project gets our full attention. We keep the process transparent, the feedback loop tight, and the results excellent.',
  },
];

const GEAR = [
  {
    title: 'Camera + Lenses',
    body: 'Cinema cameras, full-frame sensors, anamorphic glass, and controlled low-light capture for maximum texture and depth.',
  },
  {
    title: 'Stabilization',
    body: 'Gimbals, sliders, and custom rigs for dynamic camera movement that keeps shots clean and cinematic at any speed.',
  },
  {
    title: 'Lighting',
    body: 'High-output LED panels, practical rigs, and motivated light setups for dramatic and intentional cinematic imagery.',
  },
  {
    title: 'Post Production',
    body: 'Color grading, motion graphic inserts, high-end audio mix, and final deliverables optimized for every platform.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Page header ──────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-36 lg:px-8">
        <p className="text-[0.58rem] uppercase tracking-[0.5em] text-zinc-600">
          The team
        </p>
        <h1 className="mt-2 font-display leading-none tracking-[0.04em] text-white [font-size:clamp(4.5rem,12vw,10rem)]">
          ABOUT
        </h1>
      </div>

      {/* ── Marquee ──────────────────────────────── */}
      <Marquee />

      {/* ── Intro split ──────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 sm:grid-cols-2 lg:gap-24">
          <div>
            <p className="text-sm leading-8 text-zinc-300">
              ajscofieldfilms is built for filmmakers, brands, and creatives who
              need more than ordinary video. We craft cinematic image-making,
              strategic editing, and premium color work that lands with intensity
              and stays with audiences long after the last frame.
            </p>
            <p className="mt-5 text-sm leading-8 text-zinc-600">
              From location scouting to final color grade, every decision is made
              in service of the image — and in service of the story you need to
              tell. We don&apos;t do generic. We don&apos;t do average.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/portfolio"
                className="rounded-full bg-brand px-6 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-black"
              >
                See the work
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/15 px-6 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Book a call
              </Link>
            </div>
          </div>

          <div className="flex items-start pt-2">
            <blockquote className="border-l-2 border-brand pl-6">
              <p className="font-display text-3xl leading-tight tracking-[0.05em] text-white sm:text-4xl">
                &ldquo;CINEMATIC CLARITY WITH A DARK, STRIKING EDGE.&rdquo;
              </p>
              <cite className="mt-5 block text-[0.58rem] uppercase not-italic tracking-[0.35em] text-zinc-700">
                — Our creative philosophy
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────── */}
      <section className="border-t border-white/10 bg-[#080808]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="border-b border-white/10 pb-8">
            <p className="text-[0.58rem] uppercase tracking-[0.45em] text-zinc-600">
              What drives us
            </p>
            <h2 className="mt-1 font-display tracking-[0.05em] text-white [font-size:clamp(3rem,7vw,5.5rem)]">
              VALUES
            </h2>
          </div>

          {VALUES.map((v) => (
            <div
              key={v.num}
              className="grid border-b border-white/10 py-8 sm:grid-cols-[52px_1fr_1fr] sm:gap-10 sm:py-10 lg:gap-16"
            >
              <span className="mb-2 font-display text-3xl text-zinc-800 sm:mb-0">
                {v.num}
              </span>
              <h3 className="font-display text-2xl tracking-[0.05em] text-white sm:text-3xl">
                {v.title.toUpperCase()}
              </h3>
              <p className="mt-2 text-sm leading-7 text-zinc-600 sm:mt-0">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Gear ─────────────────────────────────── */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="border-b border-white/10 pb-8">
            <p className="text-[0.58rem] uppercase tracking-[0.45em] text-zinc-600">
              What we shoot with
            </p>
            <h2 className="mt-1 font-display tracking-[0.05em] text-white [font-size:clamp(3rem,7vw,5.5rem)]">
              GEAR
            </h2>
          </div>

          <div className="grid sm:grid-cols-2">
            {GEAR.map((item, i) => (
              <div
                key={item.title}
                className={`border-b border-white/10 py-8 ${
                  i % 2 === 0 ? 'sm:pr-10' : 'sm:border-l sm:border-white/10 sm:pl-10'
                } ${i >= GEAR.length - 2 ? 'sm:border-b-0' : ''}`}
              >
                <h3 className="font-display text-2xl tracking-[0.05em] text-white">
                  {item.title.toUpperCase()}
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="bg-brand">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-16 sm:flex-row sm:items-center lg:px-8">
          <h2 className="font-display tracking-[0.05em] text-white [font-size:clamp(2.5rem,6vw,4.5rem)]">
            WORK WITH US
          </h2>
          <Link
            href="/contact"
            className="shrink-0 rounded-full bg-black px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-black"
          >
            Book a call →
          </Link>
        </div>
      </section>
    </>
  );
}
