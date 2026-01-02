import { useEffect, useState } from "react";
import NeelLogo from "/assets/neel-logo.png";

export default function Navbar({ variant = "default" }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navHeight, setNavHeight] = useState(24);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px", // accounts for navbar height
        threshold: 0.1,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY;
      const isScrollingUp = currentScrollY < lastScrollY;

      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 20);

      if (isScrollingDown && currentScrollY > 100) {
        setNavHeight(16); // collapse nav only
      } else if (isScrollingUp || currentScrollY <= 100) {
        setNavHeight(24); // expand nav
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { label: "Home", href: "#home" },
    // { label: "Curriculum", href: "#curriculum" },
    { label: "About Us", href: "#aboutus" },
    { label: "Why Us", href: "#whychooseus" },
    // { label: "Instructors", href: "#instructors" },
    // { label: "Careers", href: "#career" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];

  const navWidth = isScrolled ? "92%" : "94%";
  const borderRadius = isScrolled ? "1.5rem" : "2rem";

  const navFontStyle = {
    fontFamily:
      '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  };
  const isHero = variant === "Hero";

  return (
    <>
      {/* Spacer */}
      <div className={`transition-all duration-300 h-${navHeight}`} />

      <nav
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 backdrop-blur-xl transition-all duration-300"
        style={{
          width: navWidth,
          maxWidth: isScrolled ? "6xl" : "7xl",
          borderRadius,
          background: isScrolled
            ? "linear-gradient(135deg, rgba(11,90,162,0.08), rgba(255,255,255,0.92))"
            : "linear-gradient(135deg, rgba(11,90,162,0.04), rgba(255,255,255,0.96))",
          // boxShadow: isScrolled
          //   ? "0 10px 30px rgba(0,0,0,0.08)"
          //   : "0 6px 20px rgba(0,0,0,0.05)",
          // boxShadow: isScrolled
          //   ? "0 12px 32px rgba(0,0,0,0.12)"
          //   : "0 6px 20px rgba(0,0,0,0.05)",
          background: isScrolled
            ? "rgba(255, 255, 255, 0.98)" // ✅ pure white
            : "linear-gradient(135deg, rgba(11,90,162,0.04), rgba(255,255,255,0.96))",
        }}
      >
        <div className="flex items-center justify-between px-8 sm:px-10 lg:px-12">
          {/* ================= LOGO (INDEPENDENT) ================= */}
          <div className="flex items-center py-2">
            <img
              src={NeelLogo}
              alt="Neel Logo"
              className="w-auto object-contain"
              style={{
                height: "5.5rem", // 🔥 change freely — logo is independent now
              }}
            />
          </div>

          {/* ============== NAV CONTENT (COLLAPSING) ============== */}
          <div
            className="hidden lg:flex items-center transition-all duration-300"
            style={{
              height: `${navHeight * 0.25}rem`,
              gap: isScrolled ? "1.5rem" : "2rem",
            }}
          >
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative group transition-all duration-300"
                  style={{ fontSize: isScrolled ? "0.875rem" : "0.9375rem" }}
                >
                  {/* <span
                    style={navFontStyle}
                    className="text-gray-800 hover:text-[#0B5AA2] transition-colors"
                  >
                    {item.label}
                  </span> */}
                  {/* <span
                    style={navFontStyle}
                    className={`transition-colors ${
                      isScrolled ? "text-gray-900" : "text-gray-800"
                    } hover:text-[#0B5AA2]`}
                  >
                    {item.label}
                  </span> */}
                  <span
                    style={navFontStyle}
                    className={`transition-colors ${
                      activeSection === item.href.replace("#", "")
                        ? "text-[#0B5AA2]"
                        : "text-gray-800"
                    } hover:text-[#0B5AA2]`}
                  >
                    {item.label}
                  </span>

                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-[#0B5AA2] to-[#F7941D] group-hover:w-full transition-all duration-300 rounded-full" />
                </a>
              ))}
            </div>

            <div className="h-8 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent" />

            {/* CTA */}
            {/* <button
              className="relative transition-all duration-300"
              style={{
                transform: isScrolled ? "scale(0.95)" : "scale(1)",
                padding: isScrolled ? "0.625rem 1.5rem" : "0.75rem 2rem",
                borderRadius: isScrolled ? "0.75rem" : "1rem",
                background: "linear-gradient(to right, #F7941D, #e68314)",
                color: "white",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Enroll Now
            </button> */}
            {/* <button className="group relative px-5 py-2 bg-gradient-to-r from-[#0B5AA2] to-[#F7941D] hover:from-[#0D6BC2] hover:to-[#FFA942] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0 overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                <span> Enroll Now</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#F7941D] to-[#0B5AA2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button> */}
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/916361866299?text=Hello!%20I%20want%20to%20enroll%20in%20Azure%20training.%20Please%20share%20admission%20details%20and%20procedure.",
                  "_blank"
                )
              }
              className="group relative px-5 py-2 bg-gradient-to-r from-[#0B5AA2] to-[#F7941D] hover:from-[#0D6BC2] hover:to-[#FFA942] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <span>Enroll Now</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#F7941D] to-[#0B5AA2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* ================= MOBILE ================= */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* <button
              className="bg-gradient-to-r from-[#F7941D] to-[#e68314] text-white rounded-lg shadow"
              style={{
                padding: isScrolled ? "0.5rem 1rem" : "0.625rem 1.25rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Enroll
            </button> */}
            {/* <button className="group relative px-5 py-2 bg-gradient-to-r from-[#0B5AA2] to-[#F7941D] hover:from-[#0D6BC2] hover:to-[#FFA942] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0 overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                <span> Enroll Now</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#F7941D] to-[#0B5AA2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button> */}
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/916361866299?text=Hello!%20I%20want%20to%20enroll%20in%20the%20Azure%20training%20course.%20Please%20share%20admission%20details.",
                  "_blank"
                )
              }
              className="group relative px-5 py-2 bg-gradient-to-r from-[#0B5AA2] to-[#F7941D] hover:from-[#0D6BC2] hover:to-[#FFA942] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <span>Enroll Now</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#F7941D] to-[#0B5AA2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl border border-gray-200 bg-white shadow-sm"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <div className="w-5 h-0.5 bg-gray-700 mb-1.5" />
                <div className="w-5 h-0.5 bg-gray-700 mb-1.5" />
                <div className="w-5 h-0.5 bg-gray-700" />
              </div>
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden mt-2 bg-white/95 backdrop-blur-xl border border-gray-200 shadow-2xl overflow-hidden"
            style={{ borderRadius }}
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-6 py-3 text-gray-800 hover:text-[#0B5AA2] hover:bg-blue-50/50 border-b last:border-b-0"
              >
                <span style={navFontStyle}>{item.label}</span>
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
