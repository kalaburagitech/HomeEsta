export function MarqueeSection() {
  return (
    <div className="bg-gradient-to-r from-green-900 to-teal-900 overflow-hidden py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="mx-4 text-white">VERIFIED</span>
        <span className="mx-4 text-green-400">⋆</span>
        <span className="mx-4 text-white">NO BROKERS</span>
        <span className="mx-4 text-green-400">⋆</span>
        <span className="mx-4 text-white">DIRECT OWNERS</span>
        <span className="mx-4 text-green-400">⋆</span>
        <span className="mx-4 text-white">SECURE</span>
        <span className="mx-4 text-green-400">⋆</span>
        <span className="mx-4 text-white">TRANSPARENT</span>
        <span className="mx-4 text-green-400">⋆</span>
        <span className="mx-4 text-white">TRUSTED</span>
        <span className="mx-4 text-green-400">⋆</span>
      </div>
    </div>
  );
}
