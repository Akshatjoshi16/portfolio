export default function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-fade" />
      <div className="absolute -top-40 -left-32 h-[32rem] w-[32rem] rounded-full bg-amber/20 blur-[120px] animate-blob" />
      <div className="absolute top-1/3 -right-40 h-[28rem] w-[28rem] rounded-full bg-teal/20 blur-[120px] animate-blob-delay" />
      <div className="absolute bottom-0 left-1/4 h-[24rem] w-[24rem] rounded-full bg-violet/15 blur-[120px] animate-blob" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/0 to-ink" />
    </div>
  );
}
