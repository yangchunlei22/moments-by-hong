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
      { src: `https://i.imgur.com/zV8PT0b.jpeg`, alt: "Baby in red Chinese outfit with flower crown" },
      { src: `https://imgur.com/4UP6EA9.jpeg`, alt: "Two boys picking mulberries in orchard" },
      { src: `${CDN}YgUqqsWBXoXsMMdz.jpg`, alt: "Family of three indoor lifestyle session" },
      { src: `${CDN}tilbpqmIQzVIEcMP.jpg`, alt: "Child in graduation gown studio portrait" },
      { src: `${CDN}uyEwTNwacnfOSvif.jpg`, alt: "Pianist performing at Steinway & Sons concert" },
      { src: `${CDN}inzvZXFlvNSVyccA.jpg`, alt: "Baby in red dress studio portrait" },
      { src: `${CDN}yovtbYIaAdjetrJG.jpg`, alt: "Toddler walking with balloon in park" },
      { src: `${CDN}CWXNPOLWDCTCImxp.jpg`, alt: "Wedding couple at City Hall entrance" },
      { src: `${CDN}BftUatgsdHXhsasM.jpg`, alt: "Harry Potter themed baby studio portrait" },
      { src: `${CDN}HmohxwhISnZnyPcK.jpg`, alt: "Family indoor lifestyle session" },
      { src: `${CDN}uxMJvhUhBUsUxFkb.jpg`, alt: "Baby girl 1st birthday studio portrait" },
      { src: `${CDN}nhEsgCmajkbbqaKj.jpg`, alt: "Toddler outdoor lifestyle session" },
      { src: `${CDN}MWfthEZjKNSIYcSX.jpg`, alt: "Birthday party outdoor safari theme" },
      { src: `${CDN}iMwjLkbzYjgsWmZx.jpg`, alt: "Baby studio portrait with floral props" },
      { src: `${CDN}nyyKPdzctBHxynYP.jpg`, alt: "Pianist receiving flowers after concert" },
    ],
  },
  {
    id: "studio",
    label: "Studio Portraits",
    images: [
      { src: `https://imgur.com/hJURxKb.jpeg`, alt: "Baby in red Chinese outfit with flower crown, cream background" },
      { src: `https://imgur.com/4UP6EA9.jpeg`, alt: "Baby with red bow lying on macrame, pink background" },
      { src: `https://imgur.com/jZK44r1.jpeg`, alt: "Baby in red dress on grey background" },
      { src: `https://imgur.com/RoGT5ao.jpeg`, alt: "Toddler with wooden letter toys on grey background" },
      { src: `https://imgur.com/aiotyV2.jpeg`, alt: "Baby in red in rattan basket, Zhuazhou ceremony" },
      { src: `https://imgur.com/FX6Fzdq.jpeg`, alt: "Harry Potter themed baby studio portrait" },
      { src: `https://imgur.com/ZG4fXB8.jpeg`, alt: "Zhuazhou ceremony with Chinese cultural decor" },
      { src: `https://imgur.com/KXe0IAf.jpeg`, alt: "Baby girl 1st birthday studio portrait" },
      { src: `https://imgur.com/2WMZy8D.jpeg`, alt: "Baby 1st birthday portrait with cake smash" },
      { src: `https://imgur.com/WDud1DG.jpeg`, alt: "Baby studio portrait with soft pink backdrop" },
      { src: `https://imgur.com/8r0ijKl.jpeg`, alt: "Toddler 1st birthday studio session" },
      { src: `https://imgur.com/tBR1WTC.jpeg`, alt: "Baby studio portrait with floral props" },
      { src: `https://imgur.com/jfC3ROA.jpeg`, alt: "Baby milestone portrait session" },
      { src: `https://imgur.com/gLTWTsc.jpeg`, alt: "Baby studio portrait, natural light" },
      { src: `https://imgur.com/aFbjE2D.jpeg`, alt: "Baby 1st birthday studio portrait" },
      { src: `https://imgur.com/LyByiAO.jpeg`, alt: "Studio portrait — 周岁 milestone" },
      { src: `https://imgur.com/rCJTE1G.jpeg`, alt: "Studio portrait — baby with props" },
      { src: `https://imgur.com/fXia2NH.jpeg`, alt: "Studio portrait — milestone session" },
      { src: `https://imgur.com/GnSrFrK.jpeg`, alt: "Zhuazhou ceremony — outdoor green backdrop" },
      { src: `https://imgur.com/DLqlh2P.jpeg`, alt: "Zhuazhou ceremony — baby with traditional items" },
      { src: `https://imgur.com/dS5pXs3.jpeg`, alt: "Zhuazhou ceremony — family celebration" },
      { src: `https://imgur.com/xLH8Ch1.jpeg`, alt: "Zhuazhou ceremony — baby reaching for items" },
    ],
  },
  {
    id: "lifestyle",
    label: "Lifestyle",
    images: [
      { src: `https://imgur.com/FI4wllb.jpeg`, alt: "Two boys picking mulberries in orchard" },
      { src: `https://imgur.com/nr6jTRG.jpeg`, alt: "Two boys picking mulberries in orchard" },
      { src: `https://imgur.com/IrlEGPU.jpeg`, alt: "Two boys picking mulberries in orchard" },
      { src: `https://imgur.com/upMmLj8.jpeg`, alt: "Two boys picking mulberries in orchard" },
      { src: `https://imgur.com/P4ZxcQ5.jpeg`, alt: "Two boys picking mulberries in orchard" },
      { src: `https://imgur.com/EKjf7jD.jpeg`, alt: "justin 2y birthday picture onlocation" },
      { src: `https://imgur.com/a9pRudf.jpeg`, alt: "justin 2y birthday picture onlocation" },
      { src: `https://imgur.com/oyX7DMf.jpeg`, alt: "justin 2y birthday picture onlocation" },
      { src: `https://imgur.com/PAOpAcG.jpeg`, alt: "justin 2y birthday picture onlocation" },
      { src: `https://imgur.com/WqteXdi.jpeg`, alt: "dundun 2y birthday picture onlocation" },
      { src: `https://imgur.com/ZY3WiNY.jpeg`, alt: "dundun 2y birthday picture onlocation" },
      { src: `https://imgur.com/yU9peus.jpeg`, alt: "dundun 2y birthday picture onlocation" },
      { src: `https://imgur.com/prjFdXa.jpeg`, alt: "dundun 2y birthday picture onlocation" },
      { src: `https://imgur.com/yx26mRJ.jpeg`, alt: "dundun 2y birthday picture onlocation" },
    ],
  },
  {
    id: "family",
    label: "Family Sessions",
    images: [
      { src: `https://imgur.com/VeS1AzC.jpeg`, alt: "Family of three indoor lifestyle, warm natural light" },
      { src: `https://imgur.com/gDkc862.jpeg`, alt: "Family of three indoor lifestyle, warm natural light" },
      { src: `https://imgur.com/PBzyk7e.jpeg`, alt: "Family of three indoor lifestyle, warm natural light" },
      { src: `https://imgur.com/Rw5Xpxy.jpeg`, alt: "Family of three indoor lifestyle, warm natural light" },
      { src: `https://imgur.com/RwEAk4h.jpeg`, alt: "Family outdoor session — toddler birthday " },
      { src: `https://imgur.com/7IUfb3H.jpeg`, alt: "Family outdoor session — toddler birthday" },
      { src: `https://imgur.com/rgJOJYP.jpeg`, alt: "Family outdoor session — toddler birthday" },
      { src: `https://imgur.com/8cnObuc.jpeg`, alt: "Family outdoor session — toddler birthday" },
    ],
  },
  {
    id: "headshot",
    label: "Headshot & Branding",
    images: [
      { src: `https://imgur.com/fTqyNDj.jpeg`, alt: "jasper in graduation gown, studio portrait" },
      { src: `https://imgur.com/8N5Xyk9.jpeg`, alt: "jasper in graduation gown, studio portrait" },
      { src: `https://imgur.com/Eyiwn30.jpeg`, alt: "jasper in graduation gown, studio portrait" },
      { src: `https://imgur.com/vaa29Vt.jpeg`, alt: "jasper in graduation gown, studio portrait" },
      { src: `https://imgur.com/gAvmD8X.jpeg`, alt: "jasper in graduation gown, studio portrait" },
      { src: `https://imgur.com/FFsPelZ.jpeg`, alt: "jasper in graduation gown, studio portrait" },
      { src: `https://imgur.com/zCxJOcn.jpeg`, alt: "jasper in graduation gown, studio portrait" },
      { src: `https://imgur.com/NYz8701.jpeg`, alt: "jasper in graduation gown, studio portrait" },
      { src: `https://imgur.com/4bOEMXf.jpeg`, alt: "ian graduation portrait" },
      { src: `https://imgur.com/ms6uDVL.jpeg`, alt: "dongdong graduation portrait" },
      { src: `${CDN}GwTZAieClDsHoaPS.jpg`, alt: "Professional studio portrait session" },
    ],
  },
  {
    id: "events",
    label: "Events",
    images: [
      { src: `${CDN}uyEwTNwacnfOSvif.jpg`, alt: "Pianist performing at Steinway & Sons concert" },
      { src: `${CDN}GpVWdzXBZRWZuhTT.jpg`, alt: "Steinway & Sons concert venue setup" },
      { src: `${CDN}WfFEztjUHloBAUJo.jpg`, alt: "Concert audience at Steinway & Sons" },
      { src: `${CDN}XprNJAnMCiHAyzuM.jpg`, alt: "Steinway piano concert — performer close-up" },
      { src: `${CDN}YjUSzPcvVwQKopDv.jpg`, alt: "Steinway concert — pianist at grand piano" },
      { src: `${CDN}nyyKPdzctBHxynYP.jpg`, alt: "Pianist receiving flowers after concert" },
      { src: `${CDN}kqaoNNBiUleGZBUA.jpg`, alt: "Steinway concert — post-performance celebration" },
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
