/*
 * ContactSection — Moments by Hong
 * Style: Warm minimal — centered, generous whitespace
 * Contact: email hongwang2013@gmail.com, Instagram @bbutterfly
 */

import { Mail, Instagram, MessageCircle } from "lucide-react";

export default function ContactSection() {
    const handleCopyWeChat = async () => {
    try {
      await navigator.clipboard.writeText("heybutterfly");
    } catch {
      window.prompt("Copy WeChat ID:", "heybutterfly");
    }
  };
  return (
    <section id="contact" className="py-20 md:py-28 bg-[#2C2420] relative overflow-hidden">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container relative z-10 text-center">
        <p className="font-['Lato'] text-xs tracking-[0.25em] uppercase text-[#C9A99A] mb-4">
          Get in Touch
        </p>
        <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-medium text-[#FAF7F4] mb-5 leading-tight">
          Let's create something<br />
          <em className="italic font-normal text-[#C9A99A]">beautiful together</em>
        </h2>
        <p className="font-['Lato'] text-base text-[#FAF7F4]/70 font-light leading-relaxed max-w-md mx-auto mb-12">
          Ready to book a session or just have a question? I'd love to hear from you. Send me an email or reach out on Instagram, or copy my WeChat ID — I typically respond within 24 hours.
        </p>

        {/* Contact cards */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 mb-14">
          {/* Email */}
          <a
            href="mailto:hongwang2013@gmail.com"
            className="group flex items-center gap-4 bg-[#FAF7F4]/8 border border-[#FAF7F4]/15 px-8 py-5 hover:bg-[#FAF7F4]/15 transition-all duration-300 w-full sm:w-auto"
          >
            <Mail size={20} className="text-[#C9A99A] flex-shrink-0" />
            <div className="text-left">
              <p className="font-['Lato'] text-xs tracking-widest uppercase text-[#FAF7F4]/50 mb-0.5">Email</p>
              <p className="font-['Lato'] text-sm text-[#FAF7F4] group-hover:text-[#C9A99A] transition-colors duration-200">
                hongwang2013@gmail.com
              </p>
            </div>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/bbutterfly"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 bg-[#FAF7F4]/8 border border-[#FAF7F4]/15 px-8 py-5 hover:bg-[#FAF7F4]/15 transition-all duration-300 w-full sm:w-auto"
          >
            <Instagram size={20} className="text-[#C9A99A] flex-shrink-0" />
            <div className="text-left">
              <p className="font-['Lato'] text-xs tracking-widest uppercase text-[#FAF7F4]/50 mb-0.5">Instagram</p>
              <p className="font-['Lato'] text-sm text-[#FAF7F4] group-hover:text-[#C9A99A] transition-colors duration-200">
                @bbutterfly
              </p>
            </div>
          </a>

                    {/* WeChat */}
          <button
            type="button"
            onClick={handleCopyWeChat}
            aria-label="Copy WeChat ID heybutterfly"
            title="Click to copy WeChat ID"
            className="group flex items-center gap-4 bg-[#FAF7F4]/8 border border-[#FAF7F4]/15 px-8 py-5 hover:bg-[#FAF7F4]/15 transition-all duration-300 w-full sm:w-auto text-left cursor-pointer"
          >
            <MessageCircle size={20} className="text-[#C9A99A] flex-shrink-0" />
            <div className="text-left">
              <p className="font-['Lato'] text-xs tracking-widest uppercase text-[#FAF7F4]/50 mb-0.5">
                WeChat
              </p>
              <p className="font-['Lato'] text-sm text-[#FAF7F4] group-hover:text-[#C9A99A] transition-colors duration-200">
                heybutterfly
              </p>
            </div>
          </button>
        
        </div>
        {/* Location */}
        <div className="divider-warm opacity-20 max-w-xs mx-auto mb-8" />
        <p className="font-['Lato'] text-xs tracking-[0.2em] uppercase text-[#FAF7F4]/40">
          Serving the Greater Bay Area, California
        </p>
      </div>
    </section>
  );
}
