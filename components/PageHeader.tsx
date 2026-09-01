type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function PageHeader({ eyebrow, title, description }: Props) {
  return (
    <section className="relative bg-[#111111] pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a2744]/60 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/60 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#c9a84c] font-heading font-bold text-sm tracking-[0.3em] uppercase mb-4">
          {eyebrow}
        </p>
        <h1
          className="text-white font-heading font-black leading-tight"
          style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
        >
          {title}
        </h1>
        {description && (
          <p className="text-white/70 text-lg leading-relaxed mt-6 max-w-2xl font-light">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
