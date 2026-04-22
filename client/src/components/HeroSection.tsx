/*
 * HeroSection — Moments by Hong
 * Style: Full-bleed warm image, centered text overlay, grain texture
 * Typography: Playfair Display italic for tagline, Lato for subtitle
 */

export default function HeroSection() {
  const handleExplore = () => {
    const el = document.querySelector("#portfolio");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <img
        src="https://imgur.com/MoGfsdy.jpeg"
        alt="jasper's face painting on birthday party"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: '65% center' }}
      />

      {/* Warm gradient overlay — bottom fade for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#2C2420]/55 via-[#2C2420]/10 to-transparent" />

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
          opacity: 0.04,
        }}
      />

      {/* Text content — bottom-left aligned for editorial feel */}
      <div className="absolute bottom-0 left-0 right-0 container pb-16 md:pb-20">
        <div className="max-w-xl">
          <p className="font-['Lato'] text-xs tracking-[0.25em] uppercase text-[#FAF7F4]/80 mb-4 fade-up fade-up-delay-1">
            Greater Bay Area, California
          </p>
          <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl lg:text-7xl font-medium leading-tight text-[#FAF7F4] mb-5 fade-up fade-up-delay-2">
            Every moment<br />
            <em className="italic font-normal">deserves to last.</em>
          </h1>
          <p className="font-['Lato'] text-base md:text-lg text-[#FAF7F4]/85 mb-8 font-light leading-relaxed max-w-md fade-up fade-up-delay-3">
            Capturing the warmth of family, the joy of new beginnings, and the beauty of everyday life.
          </p>
          <button
            onClick={handleExplore}
            className="inline-block font-['Lato'] text-xs tracking-[0.2em] uppercase text-[#FAF7F4] border border-[#FAF7F4]/70 px-8 py-3 hover:bg-[#FAF7F4] hover:text-[#2C2420] transition-all duration-300 fade-up fade-up-delay-3"
          >
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}
