import { useEffect, useRef, useState } from "react";

export default function HowToRegister() {
  const [visible, setVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      step: "STEP – 01",
      title: "Explore the Course",
      desc: "Go through the course details and curriculum on this page to understand what's included.",
      icon: "🔍",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      align: "left",
      delay: 100,
    },
    {
      step: "STEP – 02",
      title: 'Click "Get Started"',
      desc: "Scroll to the contact section and tap the WhatsApp or Get Started button.",
      icon: "🚀",
      color: "from-orange-500 to-amber-500",
      bgColor: "bg-gradient-to-br from-orange-50 to-amber-50",
      align: "center",
      delay: 200,
    },
    {
      step: "STEP – 03",
      title: "Join the WhatsApp Group",
      desc: "Our team will guide you with batch details, fees, and registration steps.",
      icon: "💬",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      align: "right",
      delay: 300,
    },
  ];

  return (
    <section
      ref={ref}
      id="how-to-register"
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* ================= ENHANCED BACKGROUND ================= */}
      <div className="absolute inset-0">
        {/* Main gradient background */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-white/80 to-orange-50/40"
          style={{
            backgroundImage: `
              radial-gradient(circle at 10% 20%, rgba(11,90,162,0.08) 0%, transparent 40%),
              radial-gradient(circle at 90% 80%, rgba(247,148,29,0.08) 0%, transparent 40%)
            `,
          }}
        />

        {/* Animated mesh overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(11,90,162,0.05) 0%, transparent 30%),
              radial-gradient(circle at 80% 70%, rgba(247,148,29,0.05) 0%, transparent 30%)
            `,
            animation: "pulseMesh 6s ease-in-out infinite alternate",
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

        {/* Floating particles */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor:
                i % 3 === 0 ? "#0B5AA2" : i % 3 === 1 ? "#F7941D" : "#2E8BC0",
              opacity: 0.1,
              animation: `floatParticle ${
                15 + Math.random() * 10
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* ================= ANIMATED FLOWING PATH ================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Main flowing curve */}
        <svg
          className="absolute inset-x-0 top-1/2 w-full h-64 -translate-y-1/2 opacity-40"
          viewBox="0 0 1440 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 150 C 240 70, 480 230, 720 170 C 960 110, 1200 190, 1440 130"
            stroke="url(#flowGradient)"
            strokeWidth="4"
            fill="none"
            strokeDasharray="20,10"
            style={{
              animation: "flowPath 30s linear infinite",
            }}
          />
          <defs>
            <linearGradient id="flowGradient" x1="0" y1="0" x2="1440" y2="0">
              <stop offset="0%" stopColor="#0B5AA2" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#F7941D" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0B5AA2" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Animated nodes along the path */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 opacity-60"
            style={{
              left: `${12.5 + i * 12.5}%`,
              top: `calc(50% - ${Math.sin(i * 0.8) * 40}px)`,
              animation: `glowNode 3s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}

        {/* Connection lines between steps */}
        <div className="hidden lg:block absolute top-1/2 left-1/4 w-1/4 h-1 bg-gradient-to-r from-blue-400/30 to-orange-400/30 transform -translate-y-1/2 opacity-60" />
        <div className="hidden lg:block absolute top-1/2 left-1/2 w-1/4 h-1 bg-gradient-to-r from-orange-400/30 to-green-400/30 transform -translate-y-1/2 opacity-60" />
      </div>

      {/* ================= ANIMATED BACKGROUND BLOBS ================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-cyan-400/5 rounded-full blur-3xl"
          style={{
            animation: "floatBlob 25s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tr from-orange-400/10 to-amber-400/5 rounded-full blur-3xl"
          style={{
            animation: "floatBlob 30s ease-in-out infinite reverse",
            animationDelay: "5s",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= ENHANCED HEADER ================= */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          {/* Animated badge */}
          {/* <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 shadow-lg mb-8 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 text-sm font-bold tracking-widest uppercase">
              REGISTRATION PROCESS
            </span>
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 animate-pulse delay-500" />
          </div> */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 shadow-lg mb-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B5AA2] to-[#2E8BC0] text-sm font-bold tracking-widest uppercase">
              REGISTRATION PROCESS
            </span>
          </div>

          {/* Title */}
          <h2
            className="mt-6 text-3xl md:text-4xl font-semibold text-slate-900 leading-snug"
            style={{ fontFamily: "Poppins, Inter, system-ui" }}
          >
            Join The Course In Just
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B5AA2] via-[#F7941D] to-[#0B5AA2]">
              A Few Simple Steps
            </span>
          </h2>

          {/* Animated divider */}
          <div className="mt-8 flex justify-center items-center gap-4">
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-transparent rounded-full" />
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 via-orange-500 to-green-500 animate-pulse" />
            <div className="h-1 w-24 bg-gradient-to-l from-green-500 to-transparent rounded-full" />
          </div>
        </div>

        {/* ================= ENHANCED STEPS WITH FLOW ANIMATION ================= */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start relative">
          {/* Step connector lines (mobile) */}
          <div className="md:hidden absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-blue-400/20 via-orange-400/20 to-green-400/20 transform -translate-x-1/2" />

          {steps.map((item, i) => (
            <div
              key={i}
              className={`relative group transition-all duration-700 transform hover:scale-[1.02] ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${item.delay}ms`,
                marginTop:
                  item.align === "center"
                    ? "2rem"
                    : item.align === "right"
                    ? "4rem"
                    : "0",
              }}
              onMouseEnter={() => setActiveStep(i)}
              onMouseLeave={() => setActiveStep(null)}
            >
              {/* Step connector dot */}
              <div className="absolute top-0 left-1/2 md:left-auto md:top-1/2 w-8 h-8 rounded-full bg-white border-4 border-blue-100 shadow-lg transform -translate-x-1/2 md:-translate-y-1/2 z-10">
                <div
                  className={`w-full h-full rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold text-sm transform group-hover:scale-110 transition-transform duration-300`}
                >
                  {i + 1}
                </div>
              </div>

              {/* Step content card */}
              <div
                className={`relative ${item.bgColor} rounded-3xl p-8 border border-slate-200/80 shadow-xl hover:shadow-2xl transition-all duration-500 mt-12 md:mt-0`}
              >
                {/* Animated glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-3xl blur-xl transition-opacity duration-500`}
                />

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-slate-200/50 rounded-tl-3xl" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-slate-200/50 rounded-br-3xl" />

                {/* Step badge with animation */}
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/80 shadow-sm">
                  <span className="text-xs font-semibold tracking-widest bg-gradient-to-r bg-clip-text text-transparent from-blue-600 to-cyan-600">
                    {item.step}
                  </span>
                </div>

                {/* Icon container */}
                <div className="relative mb-6">
                  <div
                    className={`absolute -inset-3 bg-gradient-to-br ${item.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500`}
                  />

                  {/* <div 
                    className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                  >
                    <span className="text-2xl">{item.icon}</span>
                  </div> */}

                  {/* Floating indicator */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 animate-pulse" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-slate-800 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                  {item.desc}
                </p>

                {/* Animated underline */}
                <div
                  className={`mt-6 h-1 w-0 bg-gradient-to-r ${item.color} rounded-full group-hover:w-16 transition-all duration-500`}
                />
              </div>

              {/* Arrow connector (for flow) */}
              {i < steps.length - 1 && (
                <>
                  {/* Mobile arrow */}
                  <div className="md:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-6 h-6 text-slate-300 z-20">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>

                  {/* Desktop arrow */}
                  <div className="hidden md:block absolute top-1/2 -right-6 transform translate-x-1/2 -translate-y-1/2 w-6 h-6 text-slate-300 z-20 group-hover:text-blue-400 transition-colors duration-300">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* ================= FLOWING TIMELINE INDICATOR ================= */}
        <div className="hidden lg:block relative h-2 mt-20 mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-orange-500/20 to-green-500/20 rounded-full" />
          <div
            className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-700"
            style={{
              width:
                activeStep === null ? "0%" : `${(activeStep + 1) * 33.33}%`,
            }}
          />
        </div>

        {/* ================= ANIMATED CTA ================= */}
        <div
          className={`mt-16 md:mt-20 text-center transition-all duration-1000 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-8 bg-gradient-to-r from-blue-50/50 to-green-50/50 rounded-2xl p-8 md:p-10 border border-slate-200/50 shadow-xl backdrop-blur-sm">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Ready to Start Your Journey?
              </h3>
              <p className="text-slate-700 max-w-2xl">
                Follow these simple steps and begin your Azure training journey
                today. Our team is ready to guide you through the entire
                process.
              </p>
            </div>

            {/* <button className="group relative px-10 py-4 bg-gradient-to-r from-[#0B5AA2] to-[#F7941D] hover:from-[#0D6BC2] hover:to-[#FFA942] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0 overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                <span>Begin Registration</span>
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
                <span>Begin Registration</span>
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

          {/* Progress indicator */}
          <div className="mt-8 flex items-center justify-center gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse" />
              <span>Step 1: Explore</span>
            </div>
            <div className="h-4 w-px bg-slate-300" />
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 animate-pulse delay-300" />
              <span>Step 2: Click</span>
            </div>
            <div className="h-4 w-px bg-slate-300" />
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 animate-pulse delay-600" />
              <span>Step 3: Join</span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes floatParticle {
          0%,
          100% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) translateX(10px) rotate(90deg);
          }
          50% {
            transform: translateY(-40px) translateX(0) rotate(180deg);
          }
          75% {
            transform: translateY(-20px) translateX(-10px) rotate(270deg);
          }
        }

        @keyframes floatBlob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          33% {
            transform: translate(30px, -30px) scale(1.05);
            opacity: 0.4;
          }
          66% {
            transform: translate(-20px, 20px) scale(0.95);
            opacity: 0.3;
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

        @keyframes flowPath {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: 1000;
          }
        }

        @keyframes glowNode {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.2);
            box-shadow: 0 0 20px currentColor;
          }
        }
      `}</style>
    </section>
  );
}
