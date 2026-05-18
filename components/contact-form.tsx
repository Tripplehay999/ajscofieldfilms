'use client';

import { useState } from 'react';

type State = 'idle' | 'loading' | 'success';

const inputClass =
  'w-full border-0 border-b border-white/15 bg-transparent pb-3 pt-1 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-brand';

/* Select needs an explicit bg so native OS dropdown options are visible */
const selectClass =
  'w-full cursor-pointer border-0 border-b border-white/15 bg-[#111111] pb-3 pt-1 text-sm text-white outline-none transition focus:border-brand';

export function ContactForm() {
  const [state, setState] = useState<State>('idle');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('loading');
    setTimeout(() => setState('success'), 1100);
  }

  if (state === 'success') {
    return (
      <div className="py-16 text-center">
        <p className="font-display text-6xl tracking-[0.06em] text-brand">
          SENT!
        </p>
        <p className="mt-4 text-sm text-zinc-500">
          We&apos;ll review your brief and reply within 24 hours.
        </p>
        <button
          onClick={() => setState('idle')}
          className="mt-8 text-[0.65rem] uppercase tracking-[0.3em] text-zinc-600 transition hover:text-white"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-8">
      <label className="grid gap-2">
        <span className="text-[0.6rem] uppercase tracking-[0.3em] text-zinc-600">
          Name
        </span>
        <input
          required
          type="text"
          placeholder="Your name"
          className={inputClass}
        />
      </label>

      <label className="grid gap-2">
        <span className="text-[0.6rem] uppercase tracking-[0.3em] text-zinc-600">
          Email
        </span>
        <input
          required
          type="email"
          placeholder="you@example.com"
          className={inputClass}
        />
      </label>

      <label className="grid gap-2">
        <span className="text-[0.6rem] uppercase tracking-[0.3em] text-zinc-600">
          Project type
        </span>
        <select required defaultValue="" className={selectClass}>
          <option value="" disabled>Select a type</option>
          <option value="wedding">Wedding</option>
          <option value="music-video">Music Video</option>
          <option value="movie-premiere">Movie Premiere</option>
          <option value="short-film">Short Film</option>
          <option value="brand-film">Brand Film</option>
          <option value="event">Event Coverage</option>
          <option value="other">Other</option>
        </select>
      </label>

      <label className="grid gap-2">
        <span className="text-[0.6rem] uppercase tracking-[0.3em] text-zinc-600">
          Budget range
        </span>
        <select className={selectClass}>
          <option value="">Select a range (optional)</option>
          <option value="under-1k">Under £1,000</option>
          <option value="1k-3k">£1,000 – £3,000</option>
          <option value="3k-5k">£3,000 – £5,000</option>
          <option value="5k-10k">£5,000 – £10,000</option>
          <option value="10k+">£10,000+</option>
        </select>
      </label>

      <label className="grid gap-2">
        <span className="text-[0.6rem] uppercase tracking-[0.3em] text-zinc-600">
          Brief
        </span>
        <textarea
          required
          rows={5}
          placeholder="Vision, timeline, deliverables..."
          className={inputClass}
        />
      </label>

      <button
        type="submit"
        disabled={state === 'loading'}
        className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-brand py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-50"
      >
        {state === 'loading' ? 'Sending…' : 'Send inquiry'}
      </button>
    </form>
  );
}
