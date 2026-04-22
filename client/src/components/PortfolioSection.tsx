/*
 * PortfolioSection — Moments by Hong
 * Style: Category tabs (Lato, small caps), masonry-style grid
 * Hover: gentle scale + brightness lift
 * Uses dummy images per category; will be replaced with real portfolio photos
 */

import { useState } from "react";

type Category = {
  id: string;
  label: string;
  images: { src: string; alt: string; span?: "tall" | "wide" | "normal" }[];
};

const categories: Category[] = [
  {
    id: "all",
    label: "All",
    images: [
      { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663336746728/Lhkc6eRcFy3KePGXkq6CWZ/portfolio-studio-portrait-iBd4fb5Lz8pg6FTo7KUUi8.webp", alt: "Studio portrait of a young child", span: "tall" },
      { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663336746728/Lhkc6eRcFy3KePGXkq6CWZ/portfolio-lifestyle-eiSk6Cc54kVsoikppX3vEk.webp", alt: "Family lifestyle session at the beach", span: "normal" },
      { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663336746728/Lhkc6eRcFy3KePGXkq6CWZ/portfolio-family-byc2PTsAtFa9PuJ5ZHX2xj.webp", alt: "Family session in the park", span: "tall" },
      { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663336746728/Lhkc6eRcFy3KePGXkq6CWZ/portfolio-headshot-AWwareQN8dwN9VDMyX8A7V.png", alt: "Professional headshot", span: "normal" },
      { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663336746728/Lhkc6eRcFy3KePGXkq6CWZ/portfolio-events-C3hSicR52WhUHMncsMDX5y.webp", alt: "Birthday party event photography", span: "tall" },
      { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663336746728/Lhkc6eRcFy3KePGXkq6CWZ/hero-main-8CkPp7NHpMkXsHPR6HCiyM.webp", alt: "Mother and newborn", span: "wide" },
    ],
  },
  {
    id: "studio",
    label: "Studio Portraits",
    images: [
      { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663336746728/Lhkc6eRcFy3KePGXkq6CWZ/portfolio-studio-portrait-iBd4fb5Lz8pg6FTo7KUUi8.webp", alt: "Studio portrait of a young child", span: "tall" },
      { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663336746728/Lhkc6eRcFy3KePGXkq6CWZ/hero-main-8CkPp7NHpMkXsHPR6HCiyM.webp", alt: "Mother and newborn studio session", span: "wide" },
      { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663336746728/Lhkc6eRcFy3KePGXkq6CWZ/portfolio-headshot-AWwareQN8dwN9VDMyX8A7V.png", alt: "Professional studio portrait", span: "normal" },
    ],
  },
  {
    id: "lifestyle",
    label: "Lifestyle",
    images: [
      { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663336746728/Lhkc6eRcFy3KePGXkq6CWZ/portfolio-lifestyle-eiSk6Cc54kVsoikppX3vEk.webp", alt: "Family lifestyle session at the beach", span: "tall" },
      { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663336746728/Lhkc6eRcFy3KePGXkq6CWZ/portfolio-family-byc2PTsAtFa9PuJ5ZHX2xj.webp", alt: "Outdoor lifestyle family session", span: "normal" },
      { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663336746728/Lhkc6eRcFy3KePGXkq6CWZ/hero-main-8CkPp7NHpMkXsHPR6HCiyM.webp", alt: "Indoor lifestyle newborn session", span: "wide" },
    ],
  },
  {
    id: "family",
    label: "Family Sessions",
    images: [
      { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663336746728/Lhkc6eRcFy3KePGXkq6CWZ/portfolio-family-byc2PTsAtFa9PuJ5ZHX2xj.webp", alt: "Family of four in the park", span: "tall" },
      { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663336746728/Lhkc6eRcFy3KePGXkq6CWZ/portfolio-lifestyle-eiSk6Cc54kVsoikppX3vEk.webp", alt: "Family beach session", span: "normal" },
      { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663336746728/Lhkc6eRcFy3KePGXkq6CWZ/portfolio-studio-portrait-iBd4fb5Lz8pg6FTo7KUUi8.webp", alt: "Child studio portrait", span: "tall" },
    ],
  },
  {
    id: "headshot",
    label: "Headshot & Branding",
    images: [
      { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663336746728/Lhkc6eRcFy3KePGXkq6CWZ/portfolio-headshot-AWwareQN8dwN9VDMyX8A7V.png", alt: "Professional headshot", span: "tall" },
      { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663336746728/Lhkc6eRcFy3KePGXkq6CWZ/portfolio-studio-portrait-iBd4fb5Lz8pg6FTo7KUUi8.webp", alt: "Studio branding portrait", span: "normal" },
    ],
  },
  {
    id: "events",
    label: "Events",
    images: [
      { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663336746728/Lhkc6eRcFy3KePGXkq6CWZ/portfolio-events-C3hSicR52WhUHMncsMDX5y.webp", alt: "Birthday party event", span: "tall" },
      { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663336746728/Lhkc6eRcFy3KePGXkq6CWZ/portfolio-family-byc2PTsAtFa9PuJ5ZHX2xj.webp", alt: "Family gathering event", span: "normal" },
      { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663336746728/Lhkc6eRcFy3KePGXkq6CWZ/portfolio-lifestyle-eiSk6Cc54kVsoikppX3vEk.webp", alt: "Outdoor event photography", span: "wide" },
    ],
  },
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxImg, setLightboxImg] = useState<{ src: string; alt: string } | null>(null);

  const current = categories.find((c) => c.id === activeCategory) ?? categories[0];

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-[#FAF7F4]">
      <div className="container">
        {/* Section header */}
        <div className="mb-12 md:mb-16">
          <p className="font-['Lato'] text-xs tracking-[0.25em] uppercase text-[#C9A99A] mb-3">
            Portfolio
          </p>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-medium text-[#2C2420]">
            A glimpse into<br />
            <em className="italic font-normal">our sessions</em>
          </h2>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 md:gap-4 mb-10 md:mb-12 border-b border-[#E8DDD4] pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`font-['Lato'] text-xs tracking-[0.15em] uppercase pb-1 transition-all duration-200 ${
                activeCategory === cat.id
                  ? "text-[#2C2420] border-b-2 border-[#C9A99A]"
                  : "text-[#A89080] hover:text-[#2C2420]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <div className="columns-2 md:columns-3 gap-3 md:gap-4 space-y-3 md:space-y-4">
          {current.images.map((img, i) => (
            <div
              key={`${activeCategory}-${i}`}
              className="portfolio-img break-inside-avoid cursor-zoom-in overflow-hidden bg-[#E8DDD4]"
              onClick={() => setLightboxImg(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto block transition-transform duration-500 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Placeholder note */}
        <p className="mt-8 font-['Lato'] text-xs text-[#A89080] text-center tracking-wide">
          * Placeholder images shown — real portfolio photos will be added soon.
        </p>
      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 bg-[#2C2420]/90 flex items-center justify-center p-4 md:p-8"
          onClick={() => setLightboxImg(null)}
        >
          <img
            src={lightboxImg.src}
            alt={lightboxImg.alt}
            className="max-w-full max-h-full object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-4 right-4 text-[#FAF7F4]/80 hover:text-[#FAF7F4] font-['Lato'] text-sm tracking-widest uppercase"
            onClick={() => setLightboxImg(null)}
          >
            Close
          </button>
        </div>
      )}
    </section>
  );
}
