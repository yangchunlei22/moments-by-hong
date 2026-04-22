/*
 * PricingSection — Moments by Hong
 * Style: Warm minimal — clean cards, Playfair Display headings
 * Pricing: inquiry-based via email, no fixed prices shown
 */

const services = [
  {
    icon: "✦",
    title: "Studio Portraits",
    description: "Timeless, beautifully lit portraits in a controlled studio setting. Perfect for newborns, babies, and individual children's milestones.",
    includes: ["1–2 hour session", "Studio backdrop & props", "Professional lighting", "Online gallery delivery"],
  },
  {
    icon: "✦",
    title: "Lifestyle Sessions",
    description: "Natural, candid photography in your home or a meaningful outdoor location. Indoor and outdoor settings available throughout the Bay Area.",
    includes: ["1–2 hour session", "Indoor or outdoor location", "Relaxed, documentary style", "Online gallery delivery"],
  },
  {
    icon: "✦",
    title: "Family Sessions",
    description: "Capture the connection, laughter, and love of your family at this moment in time — a gift you'll treasure for generations.",
    includes: ["1–2 hour session", "Location of your choice", "All family members welcome", "Online gallery delivery"],
  },
  {
    icon: "✦",
    title: "Headshot & Branding",
    description: "Professional imagery that tells your story. Ideal for LinkedIn, websites, press kits, and personal branding needs.",
    includes: ["1 hour session", "Studio or lifestyle setting", "Multiple looks/outfits", "Retouched selects"],
  },
  {
    icon: "✦",
    title: "Events",
    description: "Documentary coverage of your special occasions — birthday parties, engagements, weddings, and family celebrations.",
    includes: ["2–8 hour coverage", "Candid & posed moments", "Full event timeline", "Online gallery delivery"],
  },
];

export default function PricingSection() {
  const handleInquiry = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#FAF7F4]">
      <div className="container">
        {/* Section header */}
        <div className="mb-12 md:mb-16 max-w-xl">
          <p className="font-['Lato'] text-xs tracking-[0.25em] uppercase text-[#C9A99A] mb-3">
            Investment
          </p>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-medium text-[#2C2420] mb-4">
            Tailored to your<br />
            <em className="italic font-normal">unique story</em>
          </h2>
          <p className="font-['Lato'] text-base text-[#7A6A60] font-light leading-relaxed">
            Every session is unique, and pricing is customized to fit your needs. Reach out to receive a personalized quote — I'd love to hear about what you have in mind.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-[#F2EDE8] p-8 flex flex-col group hover:bg-[#E8DDD4] transition-colors duration-300"
            >
              <span className="text-[#C9A99A] text-lg mb-4">{service.icon}</span>
              <h3 className="font-['Playfair_Display'] text-xl font-medium text-[#2C2420] mb-3">
                {service.title}
              </h3>
              <p className="font-['Lato'] text-sm text-[#7A6A60] font-light leading-relaxed mb-6 flex-1">
                {service.description}
              </p>
              <ul className="space-y-1.5 mb-6">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 font-['Lato'] text-xs text-[#7A6A60]">
                    <span className="text-[#C9A99A] mt-0.5 flex-shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={handleInquiry}
                className="font-['Lato'] text-xs tracking-[0.15em] uppercase text-[#2C2420] border border-[#C9A99A] px-5 py-2.5 hover:bg-[#C9A99A] hover:text-[#FAF7F4] transition-all duration-300 self-start"
              >
                Inquire
              </button>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 pt-8 border-t border-[#E8DDD4] text-center">
          <p className="font-['Lato'] text-sm text-[#A89080] font-light">
            All sessions include a pre-session consultation and a private online gallery. Travel fees may apply for locations outside the Greater Bay Area.
          </p>
        </div>
      </div>
    </section>
  );
}
