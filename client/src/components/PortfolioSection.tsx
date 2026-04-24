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
    ],
  },
  {
    id: "tradition",
    label: "Heritage & Tradition",
    images: [
      { src: `https://imgur.com/Aov8qP4.jpeg`, alt: "kelly" },
      { src: `https://imgur.com/YfMqTL6.jpeg`, alt: "kelly" },
      { src: `https://imgur.com/vw0bQBR.jpeg`, alt: "kelly" },
      { src: `https://imgur.com/umHVWOz.jpeg`, alt: "girl1" },
      { src: `https://imgur.com/5f6fHjw.jpeg`, alt: "girl1" },
      { src: `https://imgur.com/mTBBzOB.jpeg`, alt: "girl1" },
      { src: `https://imgur.com/mkB2HRY.jpeg`, alt: "boy1" },
      { src: `https://imgur.com/2EdeJSf.jpeg`, alt: "boy1" },
      { src: `https://imgur.com/MXGXPvI.jpeg`, alt: "boy1" },
      { src: `https://imgur.com/YXPPLDZ.jpeg`, alt: "eva red" },
      { src: `https://imgur.com/dcqRZ2z.jpeg`, alt: "chongchong" },
      { src: `https://imgur.com/m0mLKWI.jpeg`, alt: "chongchong" },
      { src: `https://imgur.com/bjuBP4T.jpeg`, alt: "chongchong" },
      { src: `https://imgur.com/gfI1pHY.jpeg`, alt: "xiaoming" },
      { src: `https://imgur.com/d31YFTa.jpeg`, alt: "xiaoming" },
      { src: `https://imgur.com/axXNkVN.jpeg`, alt: "xiaoming" },
      { src: `https://imgur.com/MWUcrvc.jpeg`, alt: "xiaoming" },
      { src: `https://imgur.com/gyHJyO8.jpeg`, alt: "aria" },
      { src: `https://imgur.com/RifyqHE.jpeg`, alt: "aria" },
      { src: `https://imgur.com/cZvFAWR.jpeg`, alt: "aria" },
      { src: `https://imgur.com/MdxcLyJ.jpeg`, alt: "aria" },
      { src: `https://imgur.com/PHLfW6s.jpeg`, alt: "100days" },
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
      { src: `https://imgur.com/tm8OsN6.jpeg`, alt: "100days nba" },
      { src: `https://imgur.com/77mPXb8.jpeg`, alt: "xiaoming school " },
      { src: `https://imgur.com/k3b5tv2.jpeg`, alt: "xiaoming giftbox" },
      { src: `https://imgur.com/2vD6XQD.jpeg`, alt: "xiaoming giftbox" },
      { src: `https://imgur.com/ga8Mn8a.jpeg`, alt: "twins harrypotter" },  
      { src: `https://imgur.com/LS1hUoQ.jpeg`, alt: "twins harrypotter" },  
      { src: `https://imgur.com/SPZqRZz.jpeg`, alt: "aria countryside" },  
      { src: `https://imgur.com/tBvoJYQ.jpeg`, alt: "aria countryside" },  
      { src: `https://imgur.com/IChWifk.jpeg`, alt: "aria countryside" },  
      { src: `https://imgur.com/M6NcN7A.jpeg`, alt: "aria 1" },  
      { src: `https://imgur.com/7zrwypH.jpeg`, alt: "aria 1" },  
      { src: `https://imgur.com/jVicwNg.jpeg`, alt: "aria pearl girl" },  
      { src: `https://imgur.com/LkBnVnl.jpeg`, alt: "aria pearl girl" },  
      { src: `https://imgur.com/6D7FKzc.jpeg`, alt: "aria pearl girl" },  
      { src: `https://imgur.com/x1FzTe6.jpeg`, alt: "aria pearl girl" },
      { src: `https://imgur.com/rWcyLbq.jpeg`, alt: "aria watermelon" },  
      { src: `https://imgur.com/AwB1vaY.jpeg`, alt: "aria watermelon" },  
      { src: `https://imgur.com/mfOTEfn.jpeg`, alt: "aria" }, 
      { src: `https://imgur.com/Rm2mjmk.jpeg`, alt: "aria" },   
    ],
  },
  {
    id: "indoor",
    label: "Indoor",
    images: [
      { src: `https://imgur.com/cCHRz8j.jpg`, alt: "8month" },
      { src: `https://imgur.com/O66HPmd.jpeg`, alt: "8" },
      { src: `https://imgur.com/nGKURYa.jpeg`, alt: "8" },
      { src: `https://imgur.com/YwXGRhp.jpeg`, alt: "8" },
      { src: `https://imgur.com/NMTKPFn.jpeg`, alt: "8" },
      { src: `https://imgur.com/8Mc2SGZ.jpeg`, alt: "peach 100days" },
      { src: `https://imgur.com/HyDd6jd.jpeg`, alt: "p" },
      { src: `https://imgur.com/9WUTdrY.jpeg`, alt: "p" },
      { src: `https://imgur.com/ZmXy5Uf.jpeg`, alt: "p" },
      { src: `https://imgur.com/qgLuvKx.jpeg`, alt: "p" },
      { src: `https://imgur.com/w7XJBsK.jpeg`, alt: "p" },
      { src: `https://imgur.com/FmyaB6N.jpeg`, alt: "p" },
      { src: `https://imgur.com/6aYg83l.jpeg`, alt: "p" },
      { src: `https://imgur.com/2gPfDU6.jpeg`, alt: "p" },
      { src: `https://imgur.com/gBjY5kh.jpeg`, alt: "p" },
      { src: `https://imgur.com/14xgXUy.jpeg`, alt: "p" },
      { src: `https://imgur.com/aijZ1r5.jpeg`, alt: "kiwi" },
      { src: `https://imgur.com/tmt05WG.jpeg`, alt: "k" },
      { src: `https://imgur.com/26l2byw.jpeg`, alt: "k" },
      { src: `https://imgur.com/ykUsf2N.jpeg`, alt: "k" },
      { src: `https://imgur.com/t5xO795.jpeg`, alt: "k" },
      { src: `https://imgur.com/Y1XIvAC.jpeg`, alt: "k" },
      { src: `https://imgur.com/MYgpuXH.jpeg`, alt: "k" },
    ],
  },
  {
    id: "outdoor",
    label: "Outdoor",
    images: [
      { src: `https://imgur.com/SPWNZXb.jpg`, alt: "dundun at standford campus" },
      { src: `https://imgur.com/TRDb5SF.jpeg`, alt: "d" },
      { src: `https://imgur.com/lef6IpX.jpeg`, alt: "d" },
      { src: `https://imgur.com/U9ly2KT.jpeg`, alt: "d" },
      { src: `https://imgur.com/TKSLbu8.jpeg`, alt: "d" },
      { src: `https://imgur.com/DCdnpR9.jpeg`, alt: "d" },
      { src: `https://imgur.com/LgVoXTy.jpeg`, alt: "d" },
      { src: `https://imgur.com/fe8Ov2n.jpeg`, alt: "yishan bparty" },
      { src: `https://imgur.com/JunuCtx.jpeg`, alt: "y" },
      { src: `https://imgur.com/uj916QG.jpeg`, alt: "y" }, 
      { src: `https://imgur.com/cDuvlzv.jpeg`, alt: "y" },
      { src: `https://imgur.com/s1UfcHr.jpeg`, alt: "y" },
      { src: `https://imgur.com/0pkfnY6.jpeg`, alt: "shulin at standford campus" },
      { src: `https://imgur.com/K4SnAay.jpeg`, alt: "s" },
      { src: `https://imgur.com/nYMhQsY.jpeg`, alt: "s" },
      { src: `https://imgur.com/W3IISlw.jpeg`, alt: "s" },
      { src: `https://imgur.com/3WdKprv.jpeg`, alt: "s" },
      { src: `https://imgur.com/3xoCQgH.jpeg`, alt: "s" },
      { src: `https://imgur.com/50qjpy7.jpeg`, alt: "s" },
      { src: `https://imgur.com/mLah2i0.jpeg`, alt: "s" },
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
    ],
  },
  {
    id: "engagement",
    label: "Engagements",
    images: [
      { src: `https://imgur.com/qThpbxb.jpeg`, alt: "dongdong aunt" },
      { src: `https://imgur.com/uRzF1ow.jpeg`, alt: "d" },
      { src: `https://imgur.com/zmUok9A.jpeg`, alt: "d" },
      { src: `https://imgur.com/NsqfCQP.jpeg`, alt: "d" },
      { src: `https://imgur.com/X1cQLr7.jpeg`, alt: "d" },
      { src: `https://imgur.com/x0oY58L.jpeg`, alt: "d" },
      { src: `https://imgur.com/oX5OHGi.jpeg`, alt: "d" },
      { src: `https://imgur.com/dIEEWPa.jpeg`, alt: "d" },
      { src: `https://imgur.com/zvTc1Lu.jpeg`, alt: "girl with hanfu" },
      { src: `https://imgur.com/EcvPEf6.jpeg`, alt: "g" },
      { src: `https://imgur.com/gR8BSiY.jpeg`, alt: "g" },
      { src: `https://imgur.com/tzusek8.jpeg`, alt: "g" },
      { src: `https://imgur.com/RFprG5W.jpeg`, alt: "g" },
      { src: `https://imgur.com/boLsKb1.jpeg`, alt: "g" },
      { src: `https://imgur.com/hB2hJsD.jpeg`, alt: "g" }, 
      { src: `https://imgur.com/jTg2x1u.jpeg`, alt: "g" },
      { src: `https://imgur.com/b4oNuG8.jpeg`, alt: "yanhe" },
      { src: `https://imgur.com/g472czO.jpeg`, alt: "y" },
      { src: `https://imgur.com/CwgdwA6.jpeg`, alt: "y" },
      { src: `https://imgur.com/dpWk0SE.jpeg`, alt: "y" },
      { src: `https://imgur.com/AQCkHXu.jpeg`, alt: "y" },
      { src: `https://imgur.com/8E6aQdA.jpeg`, alt: "y" },
      { src: `https://imgur.com/prcHpWb.jpeg`, alt: "y" },
      { src: `https://imgur.com/tMYZPPM.jpeg`, alt: "y" },
    ],
  },
  {
    id: "wedding",
    label: "Wedding Stories",
    images: [
      { src: `https://imgur.com/C2w25I5.jpeg`, alt: "prewedding at sf cityhall" },
      { src: `https://imgur.com/5XaeGGs.jpeg`, alt: "p" },
      { src: `https://imgur.com/kkDx9Od.jpeg`, alt: "p" },
      { src: `https://imgur.com/8vtAym2.jpeg`, alt: "p" },
      { src: `https://imgur.com/sYY0BGp.jpeg`, alt: "p" },
      { src: `https://imgur.com/xAoqarv.jpeg`, alt: "p" },
      { src: `https://imgur.com/hTFTMgr.jpeg`, alt: "p" },
      { src: `https://imgur.com/9LVUzFk.jpeg`, alt: "p" },
      { src: `https://imgur.com/KaDM1Sp.jpeg`, alt: "p" }, 
      { src: `https://imgur.com/sTMOXn5.jpeg`, alt: "p" },
      { src: `https://imgur.com/jLiKJN2.jpeg`, alt: "p" },
      { src: `https://imgur.com/zn0b6xB.jpeg`, alt: "p" },
      { src: `https://imgur.com/7NFxXgA.jpeg`, alt: "p" },
      { src: `https://imgur.com/fYDSQqj.jpeg`, alt: "p" },
      { src: `https://imgur.com/yIZPxZq.jpeg`, alt: "yanhe" },
      { src: `https://imgur.com/aM4FiCj.jpeg`, alt: "y" },
      { src: `https://imgur.com/cfPQuR3.jpeg`, alt: "y" },
      { src: `https://imgur.com/oH77ubm.jpeg`, alt: "y" },
      { src: `https://imgur.com/WAaCcAo.jpeg`, alt: "y" },
      { src: `https://imgur.com/gWlme8v.jpeg`, alt: "y" },
      { src: `https://imgur.com/SMru7r0.jpeg`, alt: "y" },
      { src: `https://imgur.com/6LYIYZE.jpeg`, alt: "y" },
      { src: `https://imgur.com/Jkp0hXR.jpeg`, alt: "y" },
      { src: `https://imgur.com/5UtYCvf.jpeg`, alt: "y" }, 
      { src: `https://imgur.com/FRZmwNP.jpeg`, alt: "y" },
      { src: `https://imgur.com/ylRZBf6.jpeg`, alt: "y" },
      { src: `https://imgur.com/a20bXKY.jpeg`, alt: "y" },
      { src: `https://imgur.com/Bb4fP0n.jpeg`, alt: "y" },
      { src: `https://imgur.com/N2XuWYy.jpeg`, alt: "y" },
      { src: `https://imgur.com/53GIaPs.jpeg`, alt: "y" },
      { src: `https://imgur.com/EsdzkM8.jpeg`, alt: "y" },
    ],
  },
  {
    id: "event",
    label: "Live Events",
    images: [
      { src: `https://imgur.com/C2w25I5.jpeg`, alt: "prewedding at sf cityhall" },
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
<div className="flex flex-col items-start gap-3 md:flex-row md:flex-nowrap md:items-center md:gap-4 md:overflow-x-auto mb-10 md:mb-12 border-b border-[#E8DDD4] pb-4">
  {categories.map((cat) => (
    <button
      key={cat.id}
      onClick={() => setActiveCategory(cat.id)}
      className={`text-left whitespace-nowrap py-1 font-['Lato'] text-xs tracking-[0.15em] uppercase transition-all duration-200 ${
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
