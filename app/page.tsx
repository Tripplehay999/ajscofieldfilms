import Image from 'next/image';
import Link from 'next/link';
import { Marquee } from '@/components/marquee';
import { Counter } from '@/components/counter';

const FEATURED = [
  {
    title: 'Red Brand Trailer',
    category: 'Campaign',
    year: '2024',
    description:
      'A sharp cinematic trailer built around brand identity, aggressive lighting, and punchy editorial rhythm. Delivered across broadcast, social, and digital campaign formats.',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Live Event Highlight',
    category: 'Wedding & Events',
    year: '2024',
    description:
      'A full wedding film capturing ceremony, reception, and intimate in-between moments — graded with warmth and cinematic intention from first frame to last.',
    image: '/live-event.png',
  },
];

const SERVICES = [
  {
    title: 'Weddings',
    desc: 'Ceremony coverage, reception highlights, and emotional love stories told with cinematic intention. Every detail preserved — every moment made timeless.',
    tags: 'Ceremony film · Reception highlight · Same-day edit · Social cuts',
  },
  {
    title: 'Music Videos',
    desc: 'Creative direction, sync editing, and precision color grading that puts your track in a cinematic world of its own. Built to perform on every platform.',
    tags: 'Creative direction · Sync edit · Color grade · BTS content',
  },
  {
    title: 'Movie Premieres',
    desc: 'Red carpet coverage, interview packages, and event highlight reels that capture the energy and prestige of your premiere night in full cinematic quality.',
    tags: 'Red carpet · Interviews · Event reel · Press package',
  },
  {
    title: 'Short Films',
    desc: 'Full production support, story-driven editing, and festival-ready color grade for creative projects that demand uncompromising craft at every stage.',
    tags: 'Full production · Story edit · Sound design · Festival delivery',
  },
  {
    title: 'Brand Films',
    desc: 'Campaign content, product stories, and brand identity films crafted with cinematic quality and delivered in every format you need to run.',
    tags: 'Campaign film · Product story · Brand identity · Social formats',
  },
  {
    title: 'Event Coverage',
    desc: 'Live events, corporate functions, concerts, and private occasions captured with precision, cinematic energy, and a professional multi-camera setup.',
    tags: 'Live events · Corporate · Concerts · Private events',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────── */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=2000&q=80"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-[#050505]" />

        <div className="relative z-10 flex flex-col items-center px-6 text-center">
          <p className="mb-6 text-[0.58rem] uppercase tracking-[0.6em] text-white/40">
            A Scofield Production · Est. 2021
          </p>
          <h1 className="font-display leading-[0.86] tracking-[0.04em] text-white [font-size:clamp(5rem,14vw,13rem)]">
            FRAME
            <br />
            EVERY
            <br />
            STORY
          </h1>
          <p className="mt-8 max-w-md text-sm leading-7 text-zinc-400 sm:text-base">
            From wedding films and music videos to movie premieres and brand
            campaigns — bold visuals, kinetic editing, and premium cinematic
            craft for every story worth telling.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-brand px-8 py-3.5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-black"
            >
              Book Us
            </Link>
            <Link
              href="/portfolio"
              className="rounded-full border border-white/20 px-8 py-3.5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              View Work
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
          <div className="h-12 w-px bg-gradient-to-b from-white/30 to-transparent" />
          <span className="text-[0.5rem] uppercase tracking-[0.5em] text-white/25">
            Scroll
          </span>
        </div>
      </section>

      {/* ── Marquee ──────────────────────────────── */}
      <Marquee />

      {/* ── Featured work ────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="flex items-end justify-between border-b border-white/10 pb-8">
          <div>
            <p className="text-[0.58rem] uppercase tracking-[0.45em] text-zinc-600">
              Selected
            </p>
            <h2 className="mt-1 font-display tracking-[0.05em] text-white [font-size:clamp(3.5rem,8vw,6rem)]">
              WORK
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="hidden pb-1 text-[0.68rem] uppercase tracking-[0.2em] text-zinc-600 transition hover:text-white sm:block"
          >
            All projects →
          </Link>
        </div>

        {FEATURED.map((project, i) => (
          <div
            key={project.title}
            className={`grid gap-8 border-b border-white/10 py-12 sm:grid-cols-2 sm:gap-12 lg:gap-20 lg:py-16 ${
              i % 2 === 1 ? 'sm:[&>*:first-child]:order-2' : ''
            }`}
          >
            <div className="relative aspect-[3/2] overflow-hidden bg-zinc-900">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition duration-700 hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 text-[0.58rem] uppercase tracking-[0.3em] text-zinc-600">
                <span>{project.category}</span>
                <span className="h-px flex-1 bg-white/10" />
                <span>{project.year}</span>
              </div>
              <h3 className="mt-4 font-display tracking-[0.05em] text-white [font-size:clamp(2.2rem,5vw,3.5rem)]">
                {project.title.toUpperCase()}
              </h3>
              <p className="mt-4 text-sm leading-7 text-zinc-500">
                {project.description}
              </p>
              <Link
                href="/portfolio"
                className="mt-8 self-start text-[0.65rem] uppercase tracking-[0.25em] text-brand transition hover:text-white"
              >
                View more →
              </Link>
            </div>
          </div>
        ))}

        <Link
          href="/portfolio"
          className="mt-6 block text-[0.68rem] uppercase tracking-[0.2em] text-zinc-600 transition hover:text-white sm:hidden"
        >
          All projects →
        </Link>
      </section>

      {/* ── Services ─────────────────────────────── */}
      <section className="border-t border-white/10 bg-[#080808]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="border-b border-white/10 pb-8">
            <p className="text-[0.58rem] uppercase tracking-[0.45em] text-zinc-600">
              What we do
            </p>
            <h2 className="mt-1 font-display tracking-[0.05em] text-white [font-size:clamp(3.5rem,8vw,6rem)]">
              SERVICES
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-600">
              We cover the full spectrum of cinematic production — from intimate
              wedding films to large-scale event coverage and creative projects
              that push the image forward.
            </p>
          </div>

          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className="group grid border-b border-white/10 py-8 sm:grid-cols-[52px_1fr_1fr] sm:gap-10 sm:py-9 lg:gap-16"
            >
              <span className="mb-2 font-display text-2xl text-zinc-800 sm:mb-0 sm:pt-1.5">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display text-3xl tracking-[0.05em] text-white transition duration-200 group-hover:text-brand sm:text-4xl">
                {s.title.toUpperCase()}
              </h3>
              <div className="mt-2 sm:mt-0">
                <p className="text-sm leading-7 text-zinc-600">{s.desc}</p>
                <p className="mt-3 text-[0.56rem] uppercase tracking-[0.22em] text-zinc-700">
                  {s.tags}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Stats ────────────────────────────────── */}
      <section className="border-b border-t border-white/10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
          {[
            { end: 50, suffix: '+', label: 'Projects' },
            { end: 3, suffix: 'yr', label: 'Experience' },
            { end: 4, suffix: 'K', label: 'Resolution' },
            { end: 24, suffix: 'h', label: 'Response' },
          ].map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center py-14 text-center"
            >
              <span className="font-display tracking-[0.05em] text-white [font-size:clamp(2.8rem,6vw,4.5rem)]">
                <Counter end={s.end} suffix={s.suffix} />
              </span>
              <span className="mt-2 text-[0.58rem] uppercase tracking-[0.35em] text-zinc-700">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="bg-brand">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-16 sm:flex-row sm:items-center lg:px-8">
          <h2 className="font-display tracking-[0.05em] text-white [font-size:clamp(3rem,7vw,5.5rem)]">
            READY
            <br className="sm:hidden" />
            &nbsp;TO CREATE?
          </h2>
          <Link
            href="/contact"
            className="shrink-0 rounded-full bg-black px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-black"
          >
            Start your project →
          </Link>
        </div>
      </section>
    </>
  );
}
