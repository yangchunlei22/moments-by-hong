/*
 * PortfolioSection — Moments by Hong
 * Style: Category tabs (Lato, small caps), masonry-style grid
 * Hover: gentle scale + brightness lift
 * Real portfolio photos from Hong Wang's sessions
 */

import { useState } from "react";

type Category = {
  id: string;
  label: string;
  images: { src: string; alt: string }[];
};

// Real photos from Hong Wang's portfolio sessions
const S = "/manus-storage/";

const categories: Category[] = [
  {
    id: "all",
    label: "All",
    images: [
      { src: `${S}studio-1_32561a1e.jpg`, alt: "Baby in red Chinese outfit with flower crown" },
      { src: `${S}lifestyle-1_ae04eb47.jpg`, alt: "Two boys picking mulberries in orchard" },
      { src: `${S}family-1_57079191.jpg`, alt: "Family of three indoor lifestyle session" },
      { src: `${S}headshot-1_09dfe07e.jpg`, alt: "Child in graduation gown studio portrait" },
      { src: `${S}events-1_8d0fc969.jpg`, alt: "Birthday party outdoor safari theme" },
      { src: `${S}studio-3_0fba366a.jpg`, alt: "Baby in red dress studio portrait" },
      { src: `${S}lifestyle-4_21db4bab.jpg`, alt: "Toddler walking with balloon in park" },
      { src: `${S}events-6_7a07dd74.jpg`, alt: "Wedding couple at City Hall entrance" },
      { src: `${S}studio-6_e43b40da.jpg`, alt: "Harry Potter themed baby studio portrait" },
      { src: `${S}family-4_fe8eec4f.jpg`, alt: "Family indoor lifestyle session" },
    ],
  },
  {
    id: "studio",
    label: "Studio Portraits",
    images: [
      { src: `${S}studio-1_32561a1e.jpg`, alt: "Baby in red Chinese outfit with flower crown, cream background" },
      { src: `${S}studio-2_424c66cb.jpg`, alt: "Baby with red bow lying on macrame, pink background" },
      { src: `${S}studio-3_0fba366a.jpg`, alt: "Baby in red dress on grey background" },
      { src: `${S}studio-4_7f62a23c.jpg`, alt: "Toddler with wooden letter toys on grey background" },
      { src: `${S}studio-5_f81de841.jpg`, alt: "Baby in red in rattan basket, Zhuazhou ceremony" },
      { src: `${S}studio-6_e43b40da.jpg`, alt: "Harry Potter themed baby studio portrait" },
      { src: `${S}studio-7_2595ce09.jpg`, alt: "Zhuazhou ceremony with Chinese cultural decor" },
    ],
  },
  {
    id: "lifestyle",
    label: "Lifestyle",
    images: [
      { src: `${S}lifestyle-1_ae04eb47.jpg`, alt: "Two boys picking mulberries in orchard" },
      { src: `${S}lifestyle-2_ec462ab0.jpg`, alt: "Toddler in yellow boots exploring a field" },
      { src: `${S}lifestyle-3_85e25425.jpg`, alt: "Children outdoor lifestyle session at orchard" },
      { src: `${S}lifestyle-4_21db4bab.jpg`, alt: "Toddler walking with balloon on park path" },
      { src: `${S}lifestyle-5_5f4d8c4d.jpg`, alt: "Child outdoor lifestyle session" },
      { src: `${S}lifestyle-6_080a5d28.jpg`, alt: "Summer outdoor lifestyle session" },
    ],
  },
  {
    id: "family",
    label: "Family Sessions",
    images: [
      { src: `${S}family-1_57079191.jpg`, alt: "Family of three indoor lifestyle, warm natural light" },
      { src: `${S}family-2_48badbdc.jpg`, alt: "Family indoor session with baby" },
      { src: `${S}family-3_84043526.jpg`, alt: "Family lifestyle session at home" },
      { src: `${S}family-4_fe8eec4f.jpg`, alt: "Family indoor portrait session" },
      { src: `${S}family-5_153073c9.jpg`, alt: "Family candid moment at home" },
    ],
  },
  {
    id: "headshot",
    label: "Headshot & Branding",
    images: [
      { src: `${S}headshot-1_09dfe07e.jpg`, alt: "Child in graduation gown, studio portrait" },
      { src: `${S}headshot-2_4279629a.jpg`, alt: "Graduation portrait session" },
      { src: `${S}headshot-3_a0fb4053.jpg`, alt: "Studio portrait for graduation milestone" },
      { src: `${S}headshot-4_849a65ec.jpg`, alt: "Professional studio portrait session" },
    ],
  },
  {
    id: "events",
    label: "Events",
    images: [
      { src: `${S}events-1_8d0fc969.jpg`, alt: "Birthday party outdoor, safari theme" },
      { src: `${S}events-2_c778a5d7.jpg`, alt: "Birthday party outdoor event photography" },
      { src: `${S}events-3_04add185.jpg`, alt: "Outdoor birthday celebration" },
      { src: `${S}events-4_460b0fc9.jpg`, alt: "Couple walking at City Hall, marriage registration" },
      { src: `${S}events-5_d23a3e1b.jpg`, alt: "Marriage registration follow-along photography" },
      { src: `${S}events-6_7a07dd74.jpg`, alt: "Wedding couple kissing at San Francisco City Hall" },
      { src: `${S}events-7_616ce9e0.jpg`, alt: "Wedding portrait at City Hall" },
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
