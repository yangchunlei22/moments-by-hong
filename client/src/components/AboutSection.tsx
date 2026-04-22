/*
 * AboutSection — Moments by Hong
 * Style: Asymmetric split layout — text left, large portrait right (offset)
 * Warm sand background, Playfair Display headings, Lato body
 */

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#F2EDE8]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Text column */}
          <div className="order-2 md:order-1">
            <p className="font-['Lato'] text-xs tracking-[0.25em] uppercase text-[#C9A99A] mb-4">
              About Hong
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-medium text-[#2C2420] leading-tight mb-6">
              Storytelling through<br />
              <em className="italic font-normal">a gentle lens</em>
            </h2>

            <div className="space-y-4 font-['Lato'] text-[#4A3C35] text-base leading-relaxed font-light">
              <p>
                Hi, I'm Hong — a photographer based in the Greater Bay Area, California, with a deep passion for capturing the fleeting, tender moments that define early family life. My heart belongs to babies and little ones: the curl of a newborn's fingers, the wide-eyed wonder of a toddler discovering the world, and the unscripted laughter that fills a family session.
              </p>
              <p>
                I specialize in both <strong className="font-normal text-[#2C2420]">indoor and outdoor lifestyle photography</strong>, crafting sessions that feel natural, unhurried, and true to your family's personality. Whether we're in a sun-drenched studio or exploring a favorite park at golden hour, my goal is always the same: to make you feel at ease so the real moments can unfold.
              </p>
              <p>
                Beyond family sessions, I bring the same documentary eye to <strong className="font-normal text-[#2C2420]">events</strong> — from intimate birthday parties and milestone celebrations to engagements and weddings. Every gathering holds stories worth preserving, and I consider it a privilege to be the one holding the camera.
              </p>
              <p>
                I also offer <strong className="font-normal text-[#2C2420]">professional headshots and personal branding</strong> sessions for those who want imagery that feels authentic and polished — because how you show up in your professional world matters too.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-[#D9CFC8]">
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { number: "5+", label: "Years of Experience" },
                  { number: "500+", label: "Sessions Captured" },
                  { number: "5", label: "Specialties" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-['Playfair_Display'] text-3xl font-medium text-[#C9A99A]">{stat.number}</p>
                    <p className="font-['Lato'] text-xs tracking-wide text-[#7A6A60] mt-1 leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image column — offset for editorial feel */}
          <div className="order-1 md:order-2 relative">
            <div className="relative md:translate-y-6">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663336746728/Lhkc6eRcFy3KePGXkq6CWZ/portfolio-family-byc2PTsAtFa9PuJ5ZHX2xj.webp"
                alt="A warm family session in the park"
                className="w-full h-auto object-cover"
                style={{ maxHeight: "580px", objectPosition: "center top" }}
              />
              {/* Decorative warm border offset */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-[#C9A99A]/40 -z-10 hidden md:block" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
