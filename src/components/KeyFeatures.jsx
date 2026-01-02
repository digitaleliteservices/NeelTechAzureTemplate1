import { useEffect, useRef, useState } from "react";

export default function KeyFeatures() {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
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

    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const progress = Math.max(
        0,
        Math.min(1, (window.innerHeight - rect.top) / (rect.height * 0.5))
      );
      setScrollProgress(progress);
    };

    if (ref.current) {
      observer.observe(ref.current);
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const features = [
    {
      title: "Instructor led live Training",
      description:
        "Real-time interactive sessions with certified Azure experts",
      icon: "🎓",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      delay: 100,
    },
    {
      title: "Hands-on Practical Training",
      description: "Access to Azure portal with real-world projects and labs",
      icon: "🛠️",
      color: "from-orange-500 to-amber-500",
      bgColor: "bg-gradient-to-br from-orange-50 to-amber-50",
      borderColor: "border-orange-200",
      delay: 200,
    },
    {
      title: "Trainer Support on WhatsApp",
      description: "24/7 access to instructors for doubt resolution",
      icon: "💬",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      delay: 300,
    },
    {
      title: "Recorded lectures on LMS",
      description: "Lifetime access to course recordings and materials",
      icon: "🎥",
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-violet-50",
      borderColor: "border-purple-200",
      delay: 400,
    },
    {
      title: "Access to Learning Portal",
      description:
        "Dedicated portal with quizzes, assignments, and progress tracking",
      icon: "🚪",
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-gradient-to-br from-indigo-50 to-blue-50",
      borderColor: "border-indigo-200",
      delay: 500,
    },
    {
      title: "Certificate from Neel Technologies",
      description: "Industry-recognized certification upon completion",
      icon: "📜",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-red-50 to-pink-50",
      borderColor: "border-red-200",
      delay: 600,
    },
    {
      title: "Access to forum for new Job Openings",
      description: "Exclusive job portal with Azure-specific opportunities",
      icon: "💼",
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-teal-50 to-cyan-50",
      borderColor: "border-teal-200",
      delay: 700,
    },
    {
      title: "Support Desk for Students",
      description: "Dedicated support team for technical and career guidance",
      icon: "👨‍🏫",
      color: "from-amber-500 to-yellow-500",
      bgColor: "bg-gradient-to-br from-amber-50 to-yellow-50",
      borderColor: "border-amber-200",
      delay: 800,
    },
  ];

  return (
    <section
      ref={ref}
      id="key-features"
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* ================= NEW BACKGROUND DESIGN ================= */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        {/* Animated mesh gradient */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 10% 20%, rgba(11, 90, 162, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 90% 80%, rgba(247, 148, 29, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.8) 0%, transparent 100%)
            `,
          }}
        />

        {/* Subtle geometric pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                rgba(11, 90, 162, 0.05) 10px,
                rgba(11, 90, 162, 0.05) 20px
              ),
              repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 10px,
                rgba(247, 148, 29, 0.05) 10px,
                rgba(247, 148, 29, 0.05) 20px
              )
            `,
          }}
        />

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: i % 3 === 0 ? "#0B5AA2" : "#F7941D",
              opacity: 0.1,
              animation: `floatParticle ${
                8 + Math.random() * 10
              }s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* ================= ENHANCED FLOWING HORIZONTAL LINES ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top animated line with glow effect */}
        <div
          className="absolute top-16 w-full h-[2px]"
          style={{
            transform: `translateX(${scrollProgress * 100 - 100}%)`,
          }}
        >
          <div className="h-full w-full bg-gradient-to-r from-transparent via-[#0B5AA2] to-transparent shadow-[0_0_10px_rgba(11,90,162,0.5)]" />
        </div>

        {/* Middle line with pulse animation */}
        <div
          className="absolute top-1/2 w-full h-[1px]"
          style={{
            transform: `translateX(${scrollProgress * 150 - 150}%)`,
          }}
        >
          <div className="h-full w-full bg-gradient-to-r from-transparent via-[#F7941D] to-transparent animate-pulse" />
        </div>
        {/* Additional diagonal moving lines */}
        <div
          className="absolute top-40 w-full h-[1px] rotate-45"
          style={{
            transform: `translateX(${scrollProgress * 200 - 200}%)`,
            opacity: 0.3,
          }}
        >
          <div className="h-full w-full bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
        </div>

        {/* Static decorative lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300/20 to-transparent" />
      </div>

      {/* ================= ANIMATED BACKGROUND ORBS ================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Blue orb */}
        <div
          className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-[#0B5AA2]/10 to-transparent rounded-full blur-3xl"
          style={{
            animation: `floatOrb 25s ease-in-out infinite`,
          }}
        />

        {/* Orange orb */}
        <div
          className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tr from-[#F7941D]/10 to-transparent rounded-full blur-3xl"
          style={{
            animation: `floatOrb 30s ease-in-out infinite reverse`,
            animationDelay: "5s",
          }}
        />

        {/* Small floating circles */}
        <div
          className="absolute top-1/4 right-1/4 w-8 h-8 border border-[#0B5AA2]/20 rounded-full"
          style={{ animation: "rotate 20s linear infinite" }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-12 h-12 border border-[#F7941D]/20 rounded-full"
          style={{ animation: "rotate 25s linear infinite reverse" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER (SAME FONT FAMILY & STYLE) ================= */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Badge */}
          {/* <div className="inline-flex items-center px-5 py-2 rounded-full bg-white border border-slate-200 shadow-sm">
            <span className="text-[#0B5AA2] text-xs font-semibold tracking-widest">
              KEY FEATURES
            </span>
          </div> */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 shadow-lg mb-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B5AA2] to-[#2E8BC0] text-sm font-bold tracking-widest uppercase">
              KEY FEATURES
            </span>
          </div>

          {/* Title - EXACT SAME STYLE */}
          <h2
            className="mt-6 text-3xl md:text-4xl font-semibold text-slate-900 leading-snug"
            style={{ fontFamily: "Poppins, Inter, system-ui" }}
          >
            Everything You Get With Our
            <br />
            <span className="text-[#0B5AA2]">
              Microsoft Azure Training Program
            </span>
          </h2>

          {/* Divider */}
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-28 bg-gradient-to-r from-[#0B5AA2] to-[#F7941D] rounded-full" />
          </div>
        </div>

        {/* ================= FEATURES GRID (UNCHANGED) ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative transition-all duration-700 transform hover:scale-[1.03] ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${feature.delay}ms` }}
            >
              <div
                className={`relative h-full ${feature.bgColor} border ${feature.borderColor} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500`}
              >
                {/* <div
                  className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-md`}
                >
                  <span className="text-2xl">{feature.icon}</span>
                </div> */}

                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes floatParticle {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0.1;
          }
          25% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-40px) translateX(0);
            opacity: 0.1;
          }
          75% {
            transform: translateY(-20px) translateX(-10px);
            opacity: 0.2;
          }
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0.1;
          }
        }

        @keyframes floatOrb {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(40px, -40px) scale(1.05);
          }
          50% {
            transform: translate(0, 0) scale(1);
          }
          75% {
            transform: translate(-40px, 40px) scale(0.95);
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
