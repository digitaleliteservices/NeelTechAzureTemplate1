import { useEffect, useRef, useState } from "react";
import NeelLogo from "/assets/neel-logo.png";

export default function WhyChooseUs() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const points = [
    { text: "Curated Curriculum", color: "from-blue-500 to-cyan-500" },
    { text: "Expert Mentorship", color: "from-purple-500 to-violet-500" },
    { text: "Real-World Projects", color: "from-orange-500 to-amber-500" },
    { text: "Industry Tools", color: "from-indigo-500 to-blue-500" },
    { text: "Hands-On Training", color: "from-green-500 to-emerald-500" },
    { text: "Career-Focused Work", color: "from-red-500 to-pink-500" },
  ];

  return (
    <section
      ref={ref}
      id="whychooseus"
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* ================= ENHANCED BACKGROUND EFFECTS ================= */}
      <div className="absolute inset-0">
        {/* Main gradient background */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              radial-gradient(circle at 0% 0%, rgba(11,90,162,0.15) 0%, transparent 50%),
              radial-gradient(circle at 100% 100%, rgba(247,148,29,0.15) 0%, transparent 50%)
            `,
          }}
        />

        {/* Animated mesh gradient */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(11,90,162,0.1) 0%, transparent 40%),
              radial-gradient(circle at 80% 70%, rgba(247,148,29,0.1) 0%, transparent 40%)
            `,
            animation: "pulseMesh 8s ease-in-out infinite alternate",
          }}
        />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(90deg, transparent 95%, #0B5AA2 100%),
              linear-gradient(180deg, transparent 95%, #F7941D 100%)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: i % 2 === 0 ? "#0B5AA2" : "#F7941D",
              opacity: 0.15,
              animation: `floatParticle ${
                10 + Math.random() * 10
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* ================= ENHANCED ANIMATED BLOBS ================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-[#0B5AA2]/20 via-[#0B5AA2]/10 to-transparent rounded-full blur-3xl"
          style={{
            animation: "floatBlob 25s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-gradient-to-tr from-[#F7941D]/20 via-[#F7941D]/10 to-transparent rounded-full blur-3xl"
          style={{
            animation: "floatBlob 30s ease-in-out infinite reverse",
            animationDelay: "5s",
          }}
        />

        {/* Additional floating elements */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-400/5 to-cyan-400/5 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-tr from-orange-400/5 to-amber-400/5 rounded-full blur-2xl animate-pulse delay-1000" />
      </div>

      {/* ================= ANIMATED DECORATIVE LINES ================= */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Horizontal scanning lines */}
        <div className="absolute top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0B5AA2]/30 to-transparent" />
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F7941D]/30 to-transparent" />
        <div className="absolute bottom-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0B5AA2]/30 to-transparent" />

        {/* Vertical scanning lines */}
        <div className="absolute top-0 bottom-0 left-1/4 w-px bg-gradient-to-b from-transparent via-[#0B5AA2]/20 to-transparent" />
        <div className="absolute top-0 bottom-0 right-1/4 w-px bg-gradient-to-b from-transparent via-[#F7941D]/20 to-transparent" />

        {/* Corner accents with animation */}
        <div className="absolute top-10 left-10 w-32 h-32 border-t-2 border-l-2 border-[#0B5AA2]/10 rounded-tl-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-32 h-32 border-b-2 border-r-2 border-[#F7941D]/10 rounded-br-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER (SAME FONT STYLE) ================= */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 shadow-lg mb-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B5AA2] to-[#2E8BC0] text-sm font-bold tracking-widest uppercase">
              WHY CHOOSE US
            </span>
          </div>

          <h2
            className="mt-6 text-3xl md:text-4xl font-semibold text-slate-900 leading-snug"
            style={{ fontFamily: "Poppins, Inter, system-ui" }}
          >
            Your Trusted Pathway To IT
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B5AA2] via-[#2E8BC0] to-[#F7941D]">
              Support & Cloud Excellence
            </span>
          </h2>

          <div className="mt-8 flex justify-center">
            <div className="h-1 w-32 bg-gradient-to-r from-[#0B5AA2] via-[#2E8BC0] to-[#F7941D] rounded-full animate-pulse" />
          </div>

          <div
            className={`mt-8 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              We focus on delivering{" "}
              <span className="font-semibold text-[#0B5AA2]">
                real-world learning experiences
              </span>{" "}
              that go beyond just theory. Our approach blends{" "}
              <span className="font-semibold text-[#F7941D]">
                industry-standard tools
              </span>
              , expert guidance, and practical problem-solving to prepare you
              for{" "}
              <span className="font-semibold text-[#2E8BC0]">
                real IT challenges
              </span>{" "}
              from day one.
            </p>
          </div>
        </div>

        {/* ================= ENHANCED CONTENT GRID ================= */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT – ENHANCED POINTS WITH ANIMATIONS */}
          <div className="grid sm:grid-cols-2 gap-6">
            {points.map((item, i) => (
              <div
                key={i}
                className={`relative group transition-all duration-700 transform hover:scale-[1.05] ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Animated background effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity duration-500`}
                />

                {/* Main card */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Animated corner accents */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-slate-200/50 rounded-tl-2xl group-hover:border-[#0B5AA2]/30 transition-colors duration-300" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-slate-200/50 rounded-br-2xl group-hover:border-[#F7941D]/30 transition-colors duration-300" />

                  {/* Animated checkmark container */}
                  <div className="relative mb-4">
                    <div
                      className={`absolute -inset-2 bg-gradient-to-br ${item.color} rounded-full opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500`}
                    />

                    <div
                      className={`relative w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                    >
                      <svg
                        className="w-6 h-6 text-white transform group-hover:scale-110 transition-transform duration-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={3}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>

                    {/* Floating indicator */}
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 animate-pulse" />
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="relative">
                    <p className="text-slate-800 font-semibold text-lg group-hover:text-slate-900 transition-colors duration-300">
                      {item.text}
                    </p>

                    {/* Animated underline */}
                    <div
                      className={`mt-2 h-0.5 w-0 bg-gradient-to-r ${item.color} rounded-full group-hover:w-12 transition-all duration-500`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT – FIXED CIRCULAR LOGO CONTAINER ================= */}
          <div
            className={`relative transition-all duration-1000 transform hover:scale-105 ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            {/* Decorative rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-72 h-72 border-2 border-[#0B5AA2]/10 rounded-full animate-spin-slow"
                style={{ animationDuration: "20s" }}
              />
              <div
                className="w-80 h-80 border border-[#F7941D]/10 rounded-full absolute animate-spin-slow-reverse"
                style={{ animationDuration: "25s" }}
              />
            </div>

            {/* MAIN CIRCULAR LOGO CONTAINER - FIXED */}
            <div className="relative">
              {/* Outer circle container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto">
                {/* Background circle */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-blue-50/80 backdrop-blur-sm rounded-full border border-slate-200/80 shadow-2xl hover:shadow-3xl transition-all duration-500" />

                {/* Inner glow ring */}
                <div className="absolute inset-2 rounded-full border border-slate-100/50" />

                {/* Floating elements */}
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-[#F7941D] to-[#FFB347] rounded-full animate-bounce z-20" />
                <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-gradient-to-br from-[#0B5AA2] to-[#2E8BC0] rounded-full animate-bounce delay-300 z-20" />

                {/* Logo positioned perfectly in center */}
                <div className="absolute inset-8 flex items-center justify-center">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img
                      src={NeelLogo}
                      alt="Neel Techno"
                      className="max-w-full max-h-full object-contain transform hover:scale-105 transition-transform duration-500"
                      style={{
                        width: "auto",
                        height: "auto",
                        maxWidth: "80%",
                        maxHeight: "80%",
                      }}
                    />
                  </div>
                </div>

                {/* Animated pulse ring */}
                <div className="absolute inset-0 rounded-full ring-2 ring-[#0B5AA2]/30 animate-pulse" />
              </div>

              {/* Badge positioned outside the circle */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#0B5AA2] to-[#F7941D] text-white px-5 py-2 rounded-full shadow-lg whitespace-nowrap z-30">
                <span className="text-xs sm:text-sm font-bold tracking-wider">
                  Certified Training Partner
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes floatParticle {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-15px) translateX(10px);
          }
          50% {
            transform: translateY(-30px) translateX(0);
          }
          75% {
            transform: translateY(-15px) translateX(-10px);
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
            opacity: 0.3;
            transform: scale(1);
          }
          100% {
            opacity: 0.5;
            transform: scale(1.05);
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
          animation: spin-slow linear infinite;
        }

        .animate-spin-slow-reverse {
          animation: spin-slow-reverse linear infinite;
        }
      `}</style>
    </section>
  );
}
