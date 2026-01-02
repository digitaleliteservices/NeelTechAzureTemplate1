import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Ananya Rajan",
    location: "Bengaluru, Karnataka",
    rating: 5,
    text: "The combo course gave me hands-on exposure to Windows Server and Azure. The guidance was clear, and the learning structure helped me stay on track throughout.",
    avatarColor: "from-blue-500 to-cyan-500",
  },
  {
    name: "Kevin Smith",
    location: "Austin, Texas (USA)",
    rating: 4,
    text: "I joined from the US and still got excellent support. The content is highly relevant, and the PowerShell part really helped me streamline my daily admin tasks.",
    avatarColor: "from-orange-500 to-amber-500",
  },
  {
    name: "Sreelekha Murthy",
    location: "Hyderabad, Telangana",
    rating: 5,
    text: "Each module was well-structured and beginner-friendly. I gained confidence in desktop support and Active Directory without feeling overwhelmed.",
    avatarColor: "from-purple-500 to-violet-500",
  },
  {
    name: "Vignesh Prabhu",
    location: "Chennai, Tamil Nadu",
    rating: 5,
    text: "It's not just theory—they walk you through real tools and scenarios. Definitely worth the time I invested.",
    avatarColor: "from-green-500 to-emerald-500",
  },
  {
    name: "Harsha Nandan",
    location: "Vijayawada, Andhra Pradesh",
    rating: 4,
    text: "Very structured and easy to follow. The PowerShell module stood out the most—it helped me automate several tasks at my current job.",
    avatarColor: "from-indigo-500 to-blue-500",
  },
  {
    name: "Deepa Ramesh",
    location: "Mysuru, Karnataka",
    rating: 5,
    text: "The trainers simplified complex topics with relatable examples and real-world scenarios. Highly recommended.",
    avatarColor: "from-red-500 to-pink-500",
  },
];

export default function Testimonials() {
  const [visible, setVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <section
      ref={ref}
      id="testimonials"
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* ================= ENHANCED BACKGROUND EFFECTS ================= */}
      <div className="absolute inset-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/40 via-white/80 to-blue-50/40" />

        {/* Animated mesh overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 10% 20%, rgba(247,148,29,0.08) 0%, transparent 40%),
              radial-gradient(circle at 90% 80%, rgba(11,90,162,0.08) 0%, transparent 40%)
            `,
            animation: "pulseMesh 8s ease-in-out infinite alternate",
          }}
        />

        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(11,90,162,0.15) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Floating quote marks */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl md:text-5xl font-serif opacity-[0.03]"
            style={{
              left: `${10 + i * 12}%`,
              top: `${10 + Math.sin(i) * 60}%`,
              color: i % 2 === 0 ? "#F7941D" : "#0B5AA2",
              animation: `floatQuote ${15 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            "
          </div>
        ))}

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: i % 2 === 0 ? "#F7941D" : "#0B5AA2",
              opacity: 0.1,
              animation: `floatParticle ${
                8 + Math.random() * 8
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* ================= ANIMATED BLOBS ================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-[#F7941D]/15 to-transparent rounded-full blur-3xl"
          style={{
            animation: "floatBlob 25s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tr from-[#0B5AA2]/15 to-transparent rounded-full blur-3xl"
          style={{
            animation: "floatBlob 30s ease-in-out infinite reverse",
            animationDelay: "5s",
          }}
        />

        {/* Additional decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-48 h-48 border-2 border-[#F7941D]/10 rounded-full animate-spin-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-56 h-56 border border-[#0B5AA2]/10 rounded-full animate-spin-slow-reverse" />
      </div>

      {/* ================= DECORATIVE LINES ================= */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F7941D]/20 to-transparent" />
        <div className="absolute bottom-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0B5AA2]/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= ENHANCED HEADER ================= */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          {/* Animated badge */}
          {/* <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 shadow-lg mb-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#F7941D] to-[#FFB347] animate-pulse" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7941D] to-[#FFB347] text-sm font-bold tracking-widest uppercase">
              STUDENT VOICES
            </span>
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0B5AA2] to-[#2E8BC0] animate-pulse delay-500" />
          </div> */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 shadow-lg mb-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B5AA2] to-[#2E8BC0] text-sm font-bold tracking-widest uppercase">
              STUDENT VOICES
            </span>
          </div>

          {/* Title */}
          <h2
            className="mt-6 text-3xl md:text-4xl font-semibold text-slate-900 leading-snug"
            style={{ fontFamily: "Poppins, Inter, system-ui" }}
          >
            What Our Learners Say About
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B5AA2] via-[#F7941D] to-[#0B5AA2]">
              Their Training Journey
            </span>
          </h2>

          {/* Animated divider */}
          <div className="mt-8 flex justify-center items-center gap-4">
            <div className="h-1 w-24 bg-gradient-to-r from-[#F7941D] to-transparent rounded-full" />
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#F7941D] via-[#FFB347] to-[#0B5AA2] animate-pulse" />
            <div className="h-1 w-24 bg-gradient-to-l from-[#0B5AA2] to-transparent rounded-full" />
          </div>

          {/* Subtitle */}
          <div
            className={`mt-8 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Real experiences from students who transformed their IT careers
              with hands-on Azure and Server training.
            </p>
          </div>
        </div>

        {/* ================= ENHANCED TESTIMONIAL GRID ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`relative group transition-all duration-700 transform hover:scale-[1.02] ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Main testimonial card */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                {/* Animated background glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${t.avatarColor} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                />

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-slate-200/50 rounded-tl-2xl group-hover:border-[#F7941D]/30 transition-colors duration-300" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-slate-200/50 rounded-br-2xl group-hover:border-[#0B5AA2]/30 transition-colors duration-300" />

                {/* Quote icon */}
                <div className="absolute top-6 right-6 text-5xl font-serif text-slate-100 group-hover:text-slate-200 transition-colors duration-300">
                  "
                </div>

                {/* Avatar and rating */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`relative w-14 h-14 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform duration-500`}
                  >
                    <span className="text-white font-bold text-lg">
                      {getInitials(t.name)}
                    </span>
                    {/* Status indicator */}
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full border-2 border-white" />
                  </div>

                  <div className="flex-1">
                    <div className="flex gap-1 mb-2">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <span
                          key={j}
                          className={`text-lg transition-all duration-300 ${
                            j < t.rating
                              ? "text-[#F7941D] group-hover:scale-110"
                              : "text-slate-300"
                          }`}
                          style={{
                            transform:
                              j < t.rating && hoveredCard === i
                                ? "translateY(-2px)"
                                : "none",
                            transitionDelay: `${j * 50}ms`,
                          }}
                        >
                          ★
                        </span>
                      ))}
                    </div>

                    <div className="font-semibold text-slate-900 group-hover:text-slate-800 transition-colors duration-300">
                      {t.name}
                    </div>
                    <div className="text-xs text-slate-500 flex items-center gap-1">
                      <span>📍</span>
                      {t.location}
                    </div>
                  </div>
                </div>

                {/* Testimonial text */}
                <p className="text-slate-700 leading-relaxed relative z-10 group-hover:text-slate-800 transition-colors duration-300">
                  "{t.text}"
                </p>

                {/* Bottom decorative line */}
                <div
                  className={`mt-8 h-0.5 w-0 bg-gradient-to-r ${t.avatarColor} rounded-full group-hover:w-16 transition-all duration-500`}
                />
              </div>

              {/* Floating effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-slate-100/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
            </div>
          ))}
        </div>

        {/* ================= STATS BANNER ================= */}
        <div
          className={`mt-20 md:mt-24 transition-all duration-1000 delay-800 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative bg-gradient-to-r from-white/80 to-blue-50/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-slate-200/80 shadow-xl overflow-hidden">
            {/* Animated background lines */}
            <div className="absolute inset-0">
              {[...Array(4)].map((_, i) => (
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

            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  value: "98%",
                  label: "Student Satisfaction",
                  color: "text-[#0B5AA2]",
                },
                {
                  value: "250+",
                  label: "Happy Students",
                  color: "text-[#F7941D]",
                },
                {
                  value: "4.8/5",
                  label: "Average Rating",
                  color: "text-[#2E8BC0]",
                },
                { value: "40+", label: "Countries", color: "text-[#FFB347]" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div
                    className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-slate-700 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= CTA ================= */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* <button className="group relative px-10 py-4 bg-gradient-to-r from-[#F7941D] to-[#0B5AA2] hover:from-[#FFA942] hover:to-[#0D6BC2] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <span className="relative z-10 flex items-center gap-3">
              <span>Join Our Success Stories</span>
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
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFB347] to-[#2E8BC0] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button> */}
          {/* <button className="group relative px-8 py-3 bg-gradient-to-r from-[#0B5AA2] to-[#F7941D] hover:from-[#0D6BC2] hover:to-[#FFA942] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0 overflow-hidden">
            <span className="relative z-10 flex items-center gap-3">
              <span>Join Our Success Stories</span>
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
            onClick={() => {
              const whatsApp = document.getElementById("whatsapp");
              if (whatsApp) {
                whatsApp.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
            className="group relative px-8 py-3 bg-gradient-to-r from-[#0B5AA2] to-[#F7941D] hover:from-[#0D6BC2] hover:to-[#FFA942] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              <span>Join Our Success Stories</span>
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

          <p className="mt-6 text-slate-600 text-sm">
            Start your journey today and become one of our success stories
          </p>
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
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes floatBlob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.05);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.95);
          }
        }

        @keyframes pulseMesh {
          0% {
            opacity: 0.2;
          }
          100% {
            opacity: 0.4;
          }
        }

        @keyframes floatQuote {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.03;
          }
          50% {
            transform: translateY(-30px) rotate(180deg);
            opacity: 0.06;
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

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-slow-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
