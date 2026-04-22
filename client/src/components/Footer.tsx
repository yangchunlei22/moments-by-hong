/*
 * Footer — Moments by Hong
 * Style: Minimal warm footer with logo, nav links, and copyright
 */

const navLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#FAF7F4] border-t border-[#E8DDD4] py-10 md:py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="font-['Playfair_Display'] text-lg font-medium text-[#2C2420]"
          >
            Moments by Hong
          </a>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="font-['Lato'] text-xs tracking-[0.15em] uppercase text-[#A89080] hover:text-[#2C2420] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="font-['Lato'] text-xs text-[#A89080]">
            © {new Date().getFullYear()} Hong Wang. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
