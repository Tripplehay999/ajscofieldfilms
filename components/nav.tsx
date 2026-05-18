'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? 'bg-[#050505]/95 backdrop-blur-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="font-display text-base tracking-[0.08em] text-white transition hover:text-brand"
          >
            AJSCOFIELDFILMS
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-[0.68rem] uppercase tracking-[0.18em] transition hover:text-white ${
                  pathname === l.href ? 'text-white' : 'text-zinc-500'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <Link
              href="/contact"
              className="hidden rounded-full bg-brand px-5 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-black md:inline-flex"
            >
              Book Us
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="flex h-8 w-8 flex-col items-end justify-center gap-[5px] md:hidden"
            >
              <span
                className={`block h-px bg-white transition-all duration-300 ${
                  open ? 'w-6 translate-y-[5px] rotate-45' : 'w-6'
                }`}
              />
              <span
                className={`block h-px bg-white transition-all duration-300 ${
                  open ? 'w-6 -translate-y-[5px] -rotate-45' : 'w-4'
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen mobile overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-[#050505] transition-all duration-500 md:hidden ${
          open
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="mt-[72px] flex flex-1 flex-col justify-center px-8">
          <ul className="space-y-1">
            {LINKS.map((l, i) => (
              <li
                key={l.href}
                className={`transition-all duration-300 ${
                  open
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-6 opacity-0'
                }`}
                style={{ transitionDelay: open ? `${i * 55}ms` : '0ms' }}
              >
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block py-1 font-display text-[13vw] leading-none tracking-[0.06em] transition hover:text-brand sm:text-7xl ${
                    pathname === l.href ? 'text-white' : 'text-zinc-700'
                  }`}
                >
                  {l.label.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>

          <div
            className={`mt-12 transition-all duration-300 ${
              open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: open ? '280ms' : '0ms' }}
          >
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex rounded-full bg-brand px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-black"
            >
              Book Us →
            </Link>
          </div>
        </div>

        <div
          className={`px-8 py-8 transition-all duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: open ? '320ms' : '0ms' }}
        >
          <Link
            href="https://instagram.com/ajscofieldfilms"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="text-[0.65rem] uppercase tracking-[0.3em] text-zinc-600 transition hover:text-brand"
          >
            @ajscofieldfilms
          </Link>
        </div>
      </div>
    </>
  );
}
