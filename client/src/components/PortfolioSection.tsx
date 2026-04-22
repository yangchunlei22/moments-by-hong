/*
 * PortfolioSection — Moments by Hong
 * Style: Category tabs (Lato, small caps), masonry-style grid
 * Hover: gentle scale + brightness lift
 * Real portfolio photos from Hong Wang's sessions — public CDN URLs
 */

import { useState } from "react";

type Category = {
  id: string;
  label: string;
  images: { src: string; alt: string }[];
};

const CDN = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663336746728/";

const categories: Category[] = [
  {
    id: "all",
    label: "All",
    images: [
      { src: `${CDN}YwBteRJRfQFyeguD.jpg`, alt: "Baby in red Chinese outfit with flower crown" },
      { src: `${CDN}bHxhQcyjAqVvZcWE.jpg`, alt: "Two boys picking mulberries in orchard" },
      { src: `${CDN}YgUqqsWBXoXsMMdz.jpg`, alt: "Family of three indoor lifestyle session" },
      { src: `${CDN}tilbpqmIQzVIEcMP.jpg`, alt: "Child in graduation gown studio portrait" },
      { src: `${CDN}MWfthEZjKNSIYcSX.jpg`, alt: "Birthday party outdoor safari theme" },
      { src: `${CDN}inzvZXFlvNSVyccA.jpg`, alt: "Baby in red dress studio portrait" },
      { src: `${CDN}yovtbYIaAdjetrJG.jpg`, alt: "Toddler walking with balloon in park" },
      { src: `${CDN}CWXNPOLWDCTCImxp.jpg`, alt: "Wedding couple at City Hall entrance" },
      { src: `${CDN}BftUatgsdHXhsasM.jpg`, alt: "Harry Potter themed baby studio portrait" },
      { src: `${CDN}HmohxwhISnZnyPcK.jpg`, alt: "Family indoor lifestyle session" },
    ],
  },
  {
    id: "studio",
    label: "Studio Portraits",
    images: [
      { src: `${CDN}YwBteRJRfQFyeguD.jpg`, alt: "Baby in red Chinese outfit with flower crown, cream background" },
      { src: `${CDN}BIYNGivfHztyomqX.jpg`, alt: "Baby with red bow lying on macrame, pink background" },
      { src: `${CDN}inzvZXFlvNSVyccA.jpg`, alt: "Baby in red dress on grey background" },
      { src: `${CDN}pfajhzalreYVZVdP.jpg`, alt: "Toddler with wooden letter toys on grey background" },
      { src: `${CDN}ZmaajQfsJeoqJgbY.jpg`, alt: "Baby in red in rattan basket, Zhuazhou ceremony" },
      { src: `${CDN}BftUatgsdHXhsasM.jpg`, alt: "Harry Potter themed baby studio portrait" },
      { src: `${CDN}rWkSbUUTQdSEdepL.jpg`, alt: "Zhuazhou ceremony with Chinese cultural decor" },
    ],
  },
  {
    id: "lifestyle",
    label: "Lifestyle",
    images: [
      { src: `${CDN}bHxhQcyjAqVvZcWE.jpg`, alt: "Two boys picking mulberries in orchard" },
      { src: `${CDN}hjEjxljMsdKzuuxK.jpg`, alt: "Toddler in yellow boots exploring a field" },
      { src: `${CDN}HhimJjctvXjyUpjW.jpg`, alt: "Children outdoor lifestyle session at orchard" },
      { src: `${CDN}yovtbYIaAdjetrJG.jpg`, alt: "Toddler walking with balloon on park path" },
      { src: `${CDN}bvcyqhRLwJLbqOEn.jpg`, alt: "Child outdoor lifestyle session" },
      { src: `${CDN}JoyxvoofMZLboeYO.jpg`, alt: "Summer outdoor lifestyle session" },
    ],
  },
  {
    id: "family",
    label: "Family Sessions",
    images: [
      { src: `${CDN}YgUqqsWBXoXsMMdz.jpg`, alt: "Family of three indoor lifestyle, warm natural light" },
      { src: `${CDN}OxtOQBkDWywyjzxf.jpg`, alt: "Family indoor session with baby" },
      { src: `${CDN}nJDQbGUTYACKxCcB.jpg`, alt: "Family lifestyle session at home" },
      { src: `${CDN}HmohxwhISnZnyPcK.jpg`, alt: "Family indoor portrait session" },
      { src: `${CDN}MBwuWDEaSImANbdU.jpg`, alt: "Family candid moment at home" },
    ],
  },
  {
    id: "headshot",
    label: "Headshot & Branding",
    images: [
      { src: `${CDN}tilbpqmIQzVIEcMP.jpg`, alt: "Child in graduation gown, studio portrait" },
      { src: `${CDN}BcwDFAjxkbeLoOXs.jpg`, alt: "Graduation portrait session" },
      { src: `${CDN}poFMVzGHdkdCABGR.jpg`, alt: "Studio portrait for graduation milestone" },
      { src: `${CDN}GwTZAieClDsHoaPS.jpg`, alt: "Professional studio portrait session" },
    ],
  },
  {
    id: "events",
    label: "Events",
    images: [
      { src: `${CDN}MWfthEZjKNSIYcSX.jpg`, alt: "Birthday party outdoor, safari theme" },
      { src: `${CDN}AIeywpcbgzrLMOcs.jpg`, alt: "Birthday party outdoor event photography" },
      { src: `${CDN}IIIzfeAIMhsPjMZH.jpg`, alt: "Outdoor birthday celebration" },
      { src: `${CDN}cEcvrlVjYSFsiyxv.jpg`, alt: "Couple walking at City Hall, marriage registration" },
      { src: `${CDN}YxMTQOJCyKoadbYN.jpg`, alt: "Marriage registration follow-along photography" },
      { src: `${CDN}CWXNPOLWDCTCImxp.jpg`, alt: "Wedding couple kissing at San Francisco City Hall" },
      { src: `${CDN}GnjuLjVJIIoHUmXv.jpg`, alt: "Wedding portrait at City Hall" },
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
