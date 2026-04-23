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
      { src: `https://imgur.com/UbjtcNq.jpeg`, alt: "justin with dinosaur clothes" },
      { src: `https://imgur.com/9tCQmAq.jpeg`, alt: "dundun zhuazhou red" },
      { src: `https://imgur.com/qeuVM6j.jpeg`, alt: "justin 2y" },
      { src: `https://imgur.com/otxVM9j.jpeg`, alt: "twins harry potter" },
      { src: `https://imgur.com/FPApFSm.jpeg`, alt: "aria zhuazhou red" },
      { src: `https://imgur.com/uORvmBd.jpeg`, alt: "aria tradition" },
      { src: `https://imgur.com/mlKL0v9.jpeg`, alt: "chongchong cook" },
      { src: `https://imgur.com/KFgFCSF.jpeg`, alt: "jasper graduation" },
      { src: `https://imgur.com/1nR0RL0.jpeg`, alt: "aria pearl girl" },
      { src: `https://imgur.com/lcj5ng2.jpeg`, alt: "justin mulberry pickup" },
      { src: `https://imgur.com/OCqZPwS.jpeg`, alt: "aria old shanghai style" },
      { src: `https://imgur.com/VcBBuVi.jpeg`, alt: "zaozao watermelon in summer" },
      { src: `https://imgur.com/Kq58yVt.jpeg`, alt: "yoyo with airplane" },
      { src: `https://imgur.com/7fz4TRV.jpeg`, alt: "1year" },
      { src: `https://imgur.com/5Za5WHd.jpeg`, alt: "tiger hat" },
      { src: `https://imgur.com/6s46AIl.jpeg`, alt: "penny zhuazhou with green background" },
      { src: `https://imgur.com/SJvIh1B.jpeg`, alt: "harry potter" },
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
      { src: `https://imgur.com/LyByiAO.jpeg`, alt: "Studio portrait — 周岁 milestone" },
      { src: `https://imgur.com/rCJTE1G.jpeg`, alt: "Studio portrait — baby with props" },
      { src: `https://imgur.com/GnSrFrK.jpeg`, alt: "Zhuazhou ceremony — outdoor green backdrop" },
      { src: `https://imgur.com/DLqlh2P.jpeg`, alt: "Zhuazhou ceremony — baby with traditional items" },
      { src: `https://imgur.com/dS5pXs3.jpeg`, alt: "Zhuazhou ceremony — family celebration" },
      { src: `https://imgur.com/xLH8Ch1.jpeg`, alt: "Zhuazhou ceremony — baby reaching for items" },
      { src: `https://imgur.com/PSzB7SD.jpeg`, alt: "aiden 5y birthday portrait" },
      { src: `https://imgur.com/BZrsPJl.jpeg`, alt: "aiden 5y birthday portrait"},
      { src: `https://imgur.com/KslylpX.jpeg`, alt: "aiden 5y birthday portrait" },
      { src: `https://imgur.com/4Y9Gr8Z.jpeg`, alt: "muzi 1 birthday" },
      { src: `https://imgur.com/Y2KfZ3c.jpeg`, alt: "dundun 1 with mom" },
      { src: `https://imgur.com/3yOwYhT.jpeg`, alt: "dundun 1 with mom" },
      { src: `https://imgur.com/jTVM6Dg.jpeg`, alt: "kelly 1 with mom" },
      { src: `https://imgur.com/XsPRiOg.jpeg`, alt: "eve 1" },
      { src: `https://imgur.com/XDQNzT4.jpeg`, alt: "sister" },
      { src: `https://imgur.com/WUixEDA.jpeg`, alt: "hengheng 3 yr" },
      { src: `https://imgur.com/JgA04XW.jpeg`, alt: "eli" },
      { src: `https://imgur.com/Y4Yv4r9.jpeg`, alt: "muzi 1" },
      { src: `https://imgur.com/XmvPXGp.jpeg`, alt: "muzi 1" },
      { src: `https://imgur.com/QYxItdC.jpeg`, alt: "1y" },
      { src: `https://imgur.com/eSlDjFX.jpeg`, alt: "yiyi 1" },
      { src: `https://imgur.com/25Cj59Q.jpeg`, alt: "yiyi 1" },
      { src: `https://imgur.com/J4p2zOH.jpeg`, alt: "basketball 1" },
      { src: `https://imgur.com/IzFDctL.jpeg`, alt: "basketball 1" },
      { src: `https://imgur.com/zEXd9wh.jpeg`, alt: "xiaojie 1" },
      { src: `https://imgur.com/UEZoD90.jpeg`, alt: "dongdong 4" },
      { src: `https://imgur.com/wVjjeXc.jpeg`, alt: "youzi" },
      { src: `https://imgur.com/AeOgOaw.jpeg`, alt: "youzi" },
      { src: `https://imgur.com/IgaYyZ1.jpeg`, alt: "girl 1" },
      { src: `https://imgur.com/l1qRnEq.jpeg`, alt: "girl 1" },
      { src: `https://imgur.com/t8thZpV.jpeg`, alt: "girl with dog" },
      { src: `https://imgur.com/DHXKHG0.jpeg`, alt: "girl with dog" },
      { src: `https://imgur.com/rw3RKM0.jpeg`, alt: "aria 1" },
      { src: `https://imgur.com/4IiHAgU.jpeg`, alt: "aria 1" },
      { src: `https://imgur.com/zOMjkK8.jpeg`, alt: "shulin 4" },
      { src: `https://imgur.com/fG2qAcO.jpeg`, alt: "shulin 4" },
      { src: `https://imgur.com/TyhiA8q.jpeg`, alt: "hengheng family" },
      { src: `https://imgur.com/xgspDSL.jpeg`, alt: "hengheng family" },
      { src: `..jpeg`, alt: "" },
      { src: `..jpeg`, alt: "" },
      { src: `..jpeg`, alt: "" },
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
      { src: `https://imgur.com/RwEAk4h.jpeg`, alt: "yishanFamily outdoor session — toddler birthday " },
      { src: `https://imgur.com/7IUfb3H.jpeg`, alt: "yishanFamily outdoor session — toddler birthday" },
      { src: `https://imgur.com/rgJOJYP.jpeg`, alt: "yishanFamily outdoor session — toddler birthday" },
      { src: `https://imgur.com/8cnObuc.jpeg`, alt: "yishanFamily outdoor session — toddler birthday" },
      { src: `https://imgur.com/4n0AhBC.jpeg`, alt: "yishanFamily outdoor session — toddler birthday" },
      { src: `https://imgur.com/TEansOc.jpeg`, alt: "taozi 100days at home" },
      { src: `https://imgur.com/RTN5SNX.jpeg`, alt: "taozi 100days at home" },
      { src: `https://imgur.com/dyC0512.jpeg`, alt: "taozi 100days at home" },
      { src: `https://imgur.com/DbQmz7Z.jpeg`, alt: "taozi 100days at home" },
      { src: `https://imgur.com/kukLl3J.jpeg`, alt: "taozi 100days at home" },
      { src: `https://imgur.com/8Nt29PB.jpeg`, alt: "taozi 100days at home" },
      { src: `https://imgur.com/kukLl3J.jpeg`, alt: "taozi 100days at home" },
      { src: `https://imgur.com/ebi7jou.jpeg`, alt: "taozi 100days at home" },
      { src: `https://imgur.com/CPn8Qsu.jpeg`, alt: "taozi 100days at home" },
      { src: `https://imgur.com/qaQMBfo.jpeg`, alt: "taozi 100days at home" },
      { src: `https://imgur.com/yz2Hor4.jpeg`, alt: "taozi 100days at home" },
      { src: `https://imgur.com/w5Gz0w6.jpeg`, alt: "taozi 100days at home" },
      { src: `https://imgur.com/ZTUXOuC.jpeg`, alt: "shulin family at standford campus" },
      { src: `https://imgur.com/nJIaeKj.jpeg`, alt: "shulin family at standford campus" },
      { src: `https://imgur.com/b6m2SBr.jpeg`, alt: "shulin family at standford campus" },
      { src: `https://imgur.com/xq3wlB2.jpeg`, alt: "shulin family at standford campus" },
      { src: `https://imgur.com/FVKEwad.jpeg`, alt: "shulin family at standford campus" },
      { src: `https://imgur.com/urtSHdl.jpeg`, alt: "shulin family at standford campus" },
      { src: `https://imgur.com/vqxpwdn.jpeg`, alt: "shulin family at standford campus" },
      { src: `https://imgur.com/kf5ahdb.jpeg`, alt: "shulin family at standford campus" },
      { src: `..jpeg`, alt: " " },
      { src: `..jpeg`, alt: " " },
      { src: `..jpeg`, alt: " " },
      { src: `..jpeg`, alt: " " },
      { src: `..jpeg`, alt: " " },
      { src: `..jpeg`, alt: " " },
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
      { src: `https://imgur.com/NA72ms1.jpeg`, alt: "aiden in graduation gown, studio portrait" },
      { src: `https://imgur.com/0TBHhAt.jpeg`, alt: "aiden in graduation gown, studio portrait" },
      { src: `https://imgur.com/bdSifxG.jpeg`, alt: "aiden in graduation gown, studio portrait" },
      { src: `https://imgur.com/LgUzvNf.jpeg`, alt: "aiden's first day in kinder" },
      { src: `https://imgur.com/p3xy6UB.jpeg`, alt: "dongdong graduation portrait" },
      { src: `https://imgur.com/hfmHRGV.jpeg`, alt: "dongdong graduation portrait" },
      { src: `https://imgur.com/ZxJy1Dw.jpeg`, alt: "dongdong graduation portrait" },
      { src: `https://imgur.com/7AWf1VI.jpeg`, alt: " shulin portrait" },
      { src: `https://imgur.com/bW35VNk.jpeg`, alt: " shulin portrait" },
      { src: `https://imgur.com/iZSDjDc.jpeg`, alt: " shulin portrait" },
      { src: `..jpeg`, alt: " portrait" },
      { src: `..jpeg`, alt: " portrait" },
      { src: `..jpeg`, alt: " portrait" },
      { src: `..jpeg`, alt: " portrait" },
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
  {
    id: "tradition",
    label: "Heritage & Tradition",
    images: [
      { src: `${CDN}uyEwTNwacnfOSvif.jpg`, alt: "Pianist performing at Steinway & Sons concert" },
    ],
  },
  {
    id: "indoor",
    label: "At Home",
    images: [
      { src: `${CDN}uyEwTNwacnfOSvif.jpg`, alt: "Pianist performing at Steinway & Sons concert" },
    ],
  },
  {
    id: "outdoor",
    label: "Into the Wild",
    images: [
      { src: `${CDN}uyEwTNwacnfOSvif.jpg`, alt: "Pianist performing at Steinway & Sons concert" },
    ],
  },
  {
    id: "stage",
    label: "Set & Stage",
    images: [
      { src: `https://imgur.com/tnkFoCN.jpeg`, alt: "zaozao watermelon in summer" },
      { src: `https://imgur.com/jmoRDU2.jpeg`, alt: "zaozao watermelon in summer" },
      { src: `https://imgur.com/Ym5KwAB.jpeg`, alt: "zaozao watermelon in summer" },
      { src: `https://imgur.com/6Ljqa3E.jpeg`, alt: "harry potter" },
      { src: `https://imgur.com/nxyK0un.jpeg`, alt: "harry potter" },
      { src: `https://imgur.com/gzxNUNh.jpeg`, alt: "harry potter" },
      { src: `https://imgur.com/xwue090.jpeg`, alt: "aria old shanghai" },
      { src: `https://imgur.com/67T9YZq.jpeg`, alt: "eva 100day with bears" },
      { src: `https://imgur.com/B9NdoLg.jpeg`, alt: "chongchong chef" },
      { src: `https://imgur.com/yC0LR8c.jpeg`, alt: "chongchong chef" },
      { src: `https://imgur.com/NLHjl1s.jpeg`, alt: "fenfen with bears" },
      { src: `https://imgur.com/Y8se9zU.jpeg`, alt: "fenfen with bears" },
      { src: `https://imgur.com/y5ynSPf.jpeg`, alt: "fenfen with bears" },
      { src: `https://imgur.com/BYwZSwc.jpeg`, alt: "100days nba" },
      { src: `https://imgur.com/tm8OsN6.jpeg`, alt: "100days nba " },
      { src: `https://imgur.com/77mPXb8.jpeg`, alt: "xiaoming school  " },
      { src: `https://imgur.com/k3b5tv2.jpeg`, alt: "xiaoming giftbox " },
      { src: `https://imgur.com/2vD6XQD.jpeg`, alt: "xiaoming giftbox " },  
    ],
  },
  {
    id: "wedding",
    label: "The Promise",
    images: [
      { src: `${CDN}uyEwTNwacnfOSvif.jpg`, alt: "Pianist performing at Steinway & Sons concert" },
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
