const ITEMS = [
  'Brand Films',
  'Event Highlights',
  'Short Films',
  'Color Grade',
  'Motion Editing',
  'Cinematic Direction',
  'On Location',
  'Post Production',
];

export function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="overflow-hidden border-y border-white/10 bg-brand py-3.5">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="mx-6 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-white"
          >
            {item}
            <span className="ml-6 text-white/40">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
