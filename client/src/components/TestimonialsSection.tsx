/*
 * TestimonialsSection — Moments by Hong
 * Style: Warm sand background, Playfair Display pull quotes, Lato body
 * Layout: Horizontal scroll cards on mobile, 3-column grid on desktop
 * Content: Fictional client testimonials emphasizing Hong's strengths
 */

import { useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Chen Jing & Wei",
    location: "San Jose, CA",
    session: "Newborn & Family Session",
    avatar: "陈",
    rating: 5,
    quote:
      "Hong has a gift that is truly rare — she made our entire family feel completely at ease from the very first minute. Our newborn son was only 8 days old and I was so nervous, but Hong was patient, gentle, and incredibly warm. The photos she delivered brought me to tears. Every single image captured something real — the way my husband looked at our son, the quiet tenderness of those early days. These are photographs I will treasure for the rest of my life.",
    highlight: "brought me to tears",
  },
  {
    name: "Liu Xiaomei",
    location: "Fremont, CA",
    session: "Baby Milestone Session",
    avatar: "刘",
    rating: 5,
    quote:
      "I've had my daughter photographed three times now with Hong — at 3 months, 6 months, and her first birthday — and each session has been more magical than the last. Hong has this incredible ability to capture my daughter's personality in every shot. She's patient with wiggly babies, creative with setups, and the final gallery always exceeds my expectations. I recommend her to every new mom I know.",
    highlight: "more magical than the last",
  },
  {
    name: "The Zhang Family",
    location: "Cupertino, CA",
    session: "Outdoor Family Session",
    avatar: "张",
    rating: 5,
    quote:
      "We did an outdoor lifestyle session with Hong at a local park during golden hour and the results were absolutely stunning. She has a wonderful eye for light and knows exactly how to position a family naturally without it feeling forced or stiff. Our kids (ages 4 and 7) were running around and laughing the whole time — and somehow Hong captured every precious moment. The photos look like they belong in a magazine.",
    highlight: "look like they belong in a magazine",
  },
  {
    name: "Amanda K.",
    location: "Palo Alto, CA",
    session: "Professional Headshots",
    avatar: "AK",
    rating: 5,
    quote:
      "I needed updated headshots for my LinkedIn and company website and was honestly dreading the process — I never feel comfortable in front of a camera. Hong completely changed that experience. She was encouraging, fun, and gave great direction without making it feel awkward. The final images are polished, professional, and genuinely look like me. I've already received so many compliments. I'll never go to anyone else for headshots.",
    highlight: "genuinely look like me",
  },
  {
    name: "Wang Fang & Li Hao",
    location: "Mountain View, CA",
    session: "Engagement & Birthday Event",
    avatar: "王",
    rating: 5,
    quote:
      "We hired Hong to photograph our daughter's first birthday party and our engagement celebration — two events in one busy weekend! She was professional, unobtrusive, and somehow managed to be everywhere at once. The candid shots she captured are priceless — real laughter, real emotion, real joy. She has a documentary instinct that makes every photo feel alive. We are already planning to book her for our wedding.",
    highlight: "already planning to book her for our wedding",
  },
  {
    name: "Huang Ling",
    location: "Sunnyvale, CA",
    session: "Indoor Lifestyle — Toddler",
    avatar: "黄",
    rating: 5,
    quote:
      "Hong came to our home for an indoor lifestyle session with my 2-year-old son and I was amazed at how naturally everything unfolded. She didn't try to pose him — she just played with him, followed his lead, and captured him exactly as he is: curious, joyful, and full of life. The warm, natural light in the photos is breathtaking. I keep one of her prints on my desk at work and get asked about it every week.",
    highlight: "captured him exactly as he is",
  },
  {
    name: "The Lin Family",
    location: "Santa Clara, CA",
    session: "Family & Children Session",
    avatar: "林",
    rating: 5,
    quote:
      "我们全家都非常喜欢和Hong合作！她非常有耐心，特别擅长和孩子互动，让我们的两个小朋友完全放松下来。拍摄过程轻松愉快，最终的照片美得让我们惊叹。每一张都充满了真实的笑容和温暖的家庭氛围。强烈推荐给所有想留住美好瞬间的家庭！",
    highlight: "充满了真实的笑容",
  },
  {
    name: "Xu Yanyan",
    location: "Milpitas, CA",
    session: "Studio Portrait — Baby",
    avatar: "徐",
    rating: 5,
    quote:
      "Hong photographed my baby girl at 100 days old — a very meaningful milestone in our culture — and she understood exactly how important this session was to our family. She was thoughtful, professional, and incredibly skilled at working with a baby that age. The studio portraits are elegant, timeless, and absolutely beautiful. Our whole family in China was moved when they saw the photos. We cannot thank Hong enough.",
    highlight: "timeless, and absolutely beautiful",
  },
  {
    name: "Michael & Jenny T.",
    location: "San Francisco, CA",
    session: "Outdoor Lifestyle Session",
    avatar: "TJ",
    rating: 5,
    quote:
      "We found Hong through a friend's recommendation and we are so grateful we did. She photographed our family of five at Baker Beach and the results were beyond anything we imagined. She has a calm, reassuring presence that puts everyone at ease — even our very shy 5-year-old warmed up to her within minutes. The photos are warm, natural, and full of genuine emotion. We'll be booking her every year.",
    highlight: "full of genuine emotion",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} className="fill-[#C9A99A] text-[#C9A99A]" />
      ))}
    </div>
  );
}

function Avatar({ initials }: { initials: string }) {
  return (
    <div className="w-10 h-10 rounded-full bg-[#C9A99A]/25 flex items-center justify-center flex-shrink-0">
      <span className="font-['Lato'] text-xs font-700 text-[#C9A99A] tracking-wide">
        {initials}
      </span>
    </div>
  );
}

export default function TestimonialsSection() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#F2EDE8]">
      <div className="container">
        {/* Section header */}
        <div className="mb-12 md:mb-16">
          <p className="font-['Lato'] text-xs tracking-[0.25em] uppercase text-[#C9A99A] mb-3">
            Kind Words
          </p>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-medium text-[#2C2420]">
            Stories from<br />
            <em className="italic font-normal">our families</em>
          </h2>
        </div>

        {/* Testimonial cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => {
            const isExpanded = expanded === i;
            const isLong = t.quote.length > 220;
            const displayQuote =
              isLong && !isExpanded ? t.quote.slice(0, 220) + "…" : t.quote;

            return (
              <div
                key={i}
                className="bg-[#FAF7F4] p-7 flex flex-col gap-5 hover:shadow-sm transition-shadow duration-300"
              >
                {/* Stars */}
                <StarRating count={t.rating} />

                {/* Quote */}
                <blockquote className="font-['Lato'] text-sm text-[#4A3C35] font-light leading-relaxed flex-1">
                  "{displayQuote}"
                  {isLong && (
                    <button
                      onClick={() => setExpanded(isExpanded ? null : i)}
                      className="ml-1 font-['Lato'] text-xs text-[#C9A99A] hover:text-[#2C2420] transition-colors duration-200 underline underline-offset-2"
                    >
                      {isExpanded ? "Show less" : "Read more"}
                    </button>
                  )}
                </blockquote>

                {/* Divider */}
                <div className="h-px bg-[#E8DDD4]" />

                {/* Client info */}
                <div className="flex items-center gap-3">
                  <Avatar initials={t.avatar} />
                  <div>
                    <p className="font-['Playfair_Display'] text-sm font-medium text-[#2C2420]">
                      {t.name}
                    </p>
                    <p className="font-['Lato'] text-xs text-[#A89080] mt-0.5">
                      {t.session} · {t.location}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom pull quote */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <div className="h-px bg-[#D9CFC8] mb-10" />
          <p className="font-['Playfair_Display'] text-2xl md:text-3xl italic font-normal text-[#2C2420] leading-relaxed">
            "Every family has a story worth telling.<br />
            I'm here to help you tell yours."
          </p>
          <p className="font-['Lato'] text-xs tracking-[0.2em] uppercase text-[#C9A99A] mt-5">
            — Hong Wang
          </p>
        </div>
      </div>
    </section>
  );
}
