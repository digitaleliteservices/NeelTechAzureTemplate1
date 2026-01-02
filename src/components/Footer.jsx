import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MapPin,
  ChevronRight,
  Clock,
  MessageCircle,
  BookOpen,
  Users,
  Award,
  Sparkles,
} from "lucide-react";
import NeelLogo from "/assets/neel-logo.png";

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState(null);

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#aboutus" },
    { name: "Curriculum", href: "#what-you-learn" },
    { name: "Why Choose Us", href: "#whychooseus" },
    { name: "Key Features", href: "#key-features" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  const helpLinks = [
    { name: "How to Register", href: "#how-to-register" },
    { name: "FAQs", href: "#faq" },
    { name: "WhatsApp Support", href: "#whatsapp" },
    { name: "Contact Us", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: <Facebook className="w-4 h-4" />,
      href: "https://www.facebook.com/neeltechno",
      color: "hover:bg-blue-600",
      bg: "bg-blue-500",
    },
    {
      icon: <Instagram className="w-4 h-4" />,
      href: "https://www.instagram.com/neeltechnologies/",
      color: "hover:bg-pink-600",
      bg: "bg-pink-500",
    },
    {
      icon: <Twitter className="w-4 h-4" />,
      href: "https://x.com/NeelTechnologi1",
      color: "hover:bg-black",
      bg: "bg-black",
    },
    {
      icon: <Youtube className="w-4 h-4" />,
      href: "https://www.youtube.com/channel/UC9IBxs7m2kcSNolSll3AYLA",
      color: "hover:bg-red-600",
      bg: "bg-red-600",
    },
  ];

  const stats = [
    {
      value: "5+",
      label: "Years Experience",
      icon: <Award className="w-3 h-3" />,
    },
    {
      value: "500+",
      label: "Students Trained",
      icon: <Users className="w-3 h-3" />,
    },
    {
      value: "98%",
      label: "Satisfaction Rate",
      icon: <Sparkles className="w-3 h-3" />,
    },
  ];

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-slate-50 text-slate-700 border-t border-slate-200/50">
      {/* ================= ENHANCED BACKGROUND EFFECTS ================= */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 10% 20%, rgba(11,90,162,0.1) 0%, transparent 40%),
              radial-gradient(circle at 90% 80%, rgba(247,148,29,0.1) 0%, transparent 40%)
            `,
          }}
        />

        {/* Animated mesh */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(46,139,192,0.08) 0%, transparent 30%),
              radial-gradient(circle at 80% 70%, rgba(247,148,29,0.08) 0%, transparent 30%)
            `,
            animation: "pulseMesh 8s ease-in-out infinite alternate",
          }}
        />

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor:
                i % 3 === 0 ? "#F7941D" : i % 3 === 1 ? "#2E8BC0" : "#4CAF50",
              opacity: 0.1,
              animation: `floatParticle ${
                10 + Math.random() * 10
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* ================= ANIMATED BLOBS ================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-[#0B5AA2]/10 to-[#2E8BC0]/5 rounded-full blur-3xl"
          style={{
            animation: "floatBlob 25s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tr from-[#F7941D]/10 to-[#FFB347]/5 rounded-full blur-3xl"
          style={{
            animation: "floatBlob 30s ease-in-out infinite reverse",
            animationDelay: "5s",
          }}
        />
      </div>

      {/* ================= DECORATIVE LINES ================= */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0B5AA2]/10 to-transparent" />
      </div>

      {/* ================= MAIN FOOTER ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Stats Banner */}
        {/* <div className="mb-16">
          <div className="relative bg-gradient-to-r from-white/80 to-blue-50/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-slate-200/50 shadow-xl overflow-hidden">
            <div className="absolute inset-0">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute h-px bg-gradient-to-r from-transparent via-slate-200/30 to-transparent"
                  style={{
                    top: `${20 + i * 20}%`,
                    width: "120%",
                    left: "-10%",
                    animation: `slideLine ${6 + i * 2}s linear infinite`,
                    animationDelay: `${i * 0.5}s`,
                  }}
                />
              ))}
            </div>

            <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center group">
                  <div className="inline-flex items-center gap-2 text-3xl md:text-4xl font-bold text-[#0B5AA2] mb-2">
                    <span className="transform group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </span>
                    <span
                      className={`text-[#FFB347] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${stat.icon.props.className}`}
                    >
                      {stat.icon}
                    </span>
                  </div>
                  <div className="text-slate-600 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        <div className="grid gap-12 lg:grid-cols-4 lg:gap-8">
          {/* ================= BRAND SECTION ================= */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-8 group">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-br from-[#0B5AA2]/10 to-[#F7941D]/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src={NeelLogo}
                  alt="Neel Technologies"
                  className="relative w-16 h-16 object-contain transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Neel Technologies
                </h3>
                {/* <p className="text-sm text-slate-500 mt-1">
                  Azure Training Institute
                </p> */}
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-600 mb-8">
              We are a professional training institute specializing in Microsoft
              Azure certification programs. Our mission is to help students and
              working professionals acquire practical, job-ready cloud skills.
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full ${social.bg} text-white flex items-center justify-center shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300 ${social.color}`}
                  aria-label={`Follow us on ${
                    social.href.includes("facebook")
                      ? "Facebook"
                      : social.href.includes("instagram")
                      ? "Instagram"
                      : social.href.includes("twitter")
                      ? "Twitter"
                      : "YouTube"
                  }`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0B5AA2]/10 to-[#2E8BC0]/10 flex items-center justify-center">
                <ChevronRight className="w-4 h-4 text-[#0B5AA2]" />
              </div>
              <h4 className="text-lg font-semibold text-slate-900">
                Quick Links
              </h4>
            </div>

            <div className="h-px w-12 bg-gradient-to-r from-[#0B5AA2] to-[#F7941D] rounded-full mb-6" />

            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleScrollTo(link.href.replace("#", ""))}
                    onMouseEnter={() => setHoveredLink(i)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="flex items-center gap-3 text-sm text-slate-600 hover:text-[#0B5AA2] transition-colors duration-300 group"
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#0B5AA2] to-[#F7941D] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        hoveredLink === i ? "animate-pulse" : ""
                      }`}
                    />
                    <span>{link.name}</span>
                    <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= HELP & SUPPORT ================= */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#F7941D]/10 to-[#FFB347]/10 flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-[#F7941D]" />
              </div>
              <h4 className="text-lg font-semibold text-slate-900">
                Help & Support
              </h4>
            </div>

            <div className="h-px w-12 bg-gradient-to-r from-[#F7941D] to-[#FFB347] rounded-full mb-6" />

            <ul className="space-y-3">
              {helpLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleScrollTo(link.href.replace("#", ""))}
                    onMouseEnter={() => setHoveredLink(i + quickLinks.length)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="flex items-center gap-3 text-sm text-slate-600 hover:text-[#F7941D] transition-colors duration-300 group"
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#F7941D] to-[#FFB347] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        hoveredLink === i + quickLinks.length
                          ? "animate-pulse"
                          : ""
                      }`}
                    />
                    <span>{link.name}</span>
                    <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= CONTACT CARD ================= */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2E8BC0]/10 to-[#4CAF50]/10 flex items-center justify-center">
                <Phone className="w-4 h-4 text-[#2E8BC0]" />
              </div>
              <h4 className="text-lg font-semibold text-slate-900">
                Contact Info
              </h4>
            </div>

            <div className="h-px w-12 bg-gradient-to-r from-[#2E8BC0] to-[#4CAF50] rounded-full mb-6" />

            <div className="bg-gradient-to-br from-white/80 to-blue-50/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 shadow-lg">
              <ul className="space-y-5">
                <li className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0B5AA2]/10 to-[#2E8BC0]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-4 h-4 text-[#0B5AA2]" />
                  </div>
                  <div>
                    <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors duration-300">
                      Doddabele Kengeri, Bangalore – 560040
                    </span>
                  </div>
                </li>

                <li className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#F7941D]/10 to-[#FFB347]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-[#F7941D]" />
                  </div>
                  <a
                    href="mailto:info@neeltechnologies.net"
                    className="text-sm text-slate-600 hover:text-[#F7941D] transition-colors duration-300"
                  >
                    info@neeltechnologies.net
                  </a>
                </li>

                <li className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2E8BC0]/10 to-[#4CAF50]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-[#2E8BC0]" />
                  </div>
                  <a
                    href="tel:+916361866299"
                    className="text-sm text-slate-600 hover:text-[#2E8BC0] transition-colors duration-300 font-medium"
                  >
                    +91 63618 66299
                  </a>
                </li>

                <li className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#25D366]/10 to-[#4CAF50]/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  </div>
                  <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors duration-300">
                    WhatsApp Support Available
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="mt-16 pt-8 border-t border-slate-200/50 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-slate-300/50 to-transparent rounded-full" />
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <div className="text-slate-600">
            <p className="flex items-center gap-2">
              <span>© {new Date().getFullYear()} Neel Technologies.</span>
              <span className="hidden sm:inline">•</span>
              <span className="text-slate-500">All Rights Reserved.</span>
            </p>
            <p className="text-xs text-slate-500 mt-2">
              Microsoft Azure and related trademarks are property of Microsoft
              Corporation.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-4 text-slate-500">
              <div className="flex items-center gap-2">
                <Clock className="w-3 h-3" />
                <span className="text-xs">Mon-Sat: 9AM-7PM</span>
              </div>
              <div className="h-4 w-px bg-slate-300" />
              <div className="flex items-center gap-2">
                <BookOpen className="w-3 h-3" />
                <span className="text-xs">Azure Certified Trainers</span>
              </div>
            </div>

            <div className="h-4 w-px bg-slate-300" />

            <div className="flex items-center gap-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-slate-900 transition-colors duration-300"
                  aria-label="Social media link"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes floatParticle {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(180deg);
          }
        }

        @keyframes floatBlob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(20px, -20px) scale(1.03);
          }
          66% {
            transform: translate(-15px, 15px) scale(0.97);
          }
        }

        @keyframes pulseMesh {
          0% {
            opacity: 0.08;
          }
          100% {
            opacity: 0.12;
          }
        }

        @keyframes slideLine {
          0% {
            transform: translateX(-10%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </footer>
  );
}
