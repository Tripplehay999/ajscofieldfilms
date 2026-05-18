import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-[1fr_auto_auto]">
          <div>
            {/* Logo — save your logo to public/logo.png */}
            <div className="mb-4 inline-block">
              <Image
                src="/logo.png"
                alt="A Scofield Production"
                width={72}
                height={72}
                className="rounded-sm opacity-90"
              />
            </div>
            <p className="font-display text-3xl tracking-[0.06em] text-white">
              AJSCOFIELDFILMS
            </p>
            <p className="mt-1 text-[0.58rem] uppercase tracking-[0.3em] text-zinc-700">
              A Scofield Production
            </p>
            <p className="mt-5 max-w-xs text-sm leading-7 text-zinc-600">
              Cinematic image-making, strategic editing, and premium color work
              for brands that demand intensity.
            </p>
          </div>

          <div>
            <p className="mb-5 text-[0.58rem] uppercase tracking-[0.3em] text-zinc-700">
              Navigate
            </p>
            <ul className="space-y-3 text-sm text-zinc-500">
              {[
                ['/', 'Home'],
                ['/portfolio', 'Portfolio'],
                ['/about', 'About'],
                ['/contact', 'Contact'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="transition hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-5 text-[0.58rem] uppercase tracking-[0.3em] text-zinc-700">
              Connect
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="https://instagram.com/ajscofieldfilms"
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand transition hover:text-white"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:hello@ajscofieldfilms.com"
                  className="text-zinc-500 transition hover:text-white"
                >
                  Email
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-[0.58rem] uppercase tracking-[0.2em] text-zinc-800">
          © {new Date().getFullYear()} ajscofieldfilms. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
