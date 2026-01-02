import { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";

const slides = [
  {
    title: "Microsoft Azure Training",
    highlight: "for IT & Cloud Professionals",
    subtitle:
      "Build real-world cloud skills with structured Azure training, hands-on labs, and certification-focused learning.",
  },
  {
    title: "Azure Certification Courses",
    highlight: "Designed for Real Projects",
    subtitle:
      "Learn Azure with industry-aligned curriculum, practical labs, and expert mentorship to clear certifications confidently.",
  },
  {
    title: "Become Azure Certified",
    highlight: "Advance Your Cloud Career",
    subtitle:
      "Prepare for Azure roles with hands-on experience, real-world scenarios, and career-focused guidance.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isVibrating, setIsVibrating] = useState(false);
  const vibrationTimer = useRef(null);

  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);

  useEffect(() => {
    // Auto slide timer
    const slideTimer = setInterval(nextSlide, 6000);

    // Enhanced vibration pattern: Vibrate for 3 seconds, stop for 1 second
    const startVibration = () => {
      const vibrateCycle = () => {
        // Start vibrating
        setIsVibrating(true);
        
        // Stop vibration after 3 seconds
        setTimeout(() => {
          setIsVibrating(false);
        }, 3000); // Vibrate for 3 seconds
      };
      
      // Initial vibration after 1 second delay
      setTimeout(vibrateCycle, 1000);
      
      // Set up repeating pattern
      vibrationTimer.current = setInterval(() => {
        vibrateCycle();
      }, 4000); // Total cycle = 3s vibrate + 1s pause = 4 seconds
    };

    // Start vibration pattern
    startVibration();
    
    return () => {
      clearInterval(slideTimer);
      if (vibrationTimer.current) {
        clearInterval(vibrationTimer.current);
      }
    };
  }, []);

  const current = slides[index];

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/916361866299?text=Hello!%20I%20want%20to%20claim%20the%2030%%20special%20offer%20on%20Azure%20training.%20Please%20share%20details.",
      "_blank"
    );
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(11,90,162,0.08) 0%, #ffffff 45%, rgba(247,148,29,0.12) 100%)",
      }}
    >
      {/* BLOBS */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-[#0B5AA2]/25 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] bg-[#F7941D]/25 rounded-full blur-3xl" />
      </div>

      {/* GRID */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(11,90,162,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(11,90,162,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10">
        <Navbar variant="hero" />

        {/* ARROWS */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20
                     w-11 h-11 rounded-full bg-white/80 border border-slate-300
                     flex items-center justify-center shadow-md hover:bg-white transition"
        >
          ‹
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20
                     w-11 h-11 rounded-full bg-white/80 border border-slate-300
                     flex items-center justify-center shadow-md hover:bg-white transition"
        >
          ›
        </button>

        {/* CENTER CONTENT */}
        <div className="flex min-h-screen items-center justify-center px-4">
          <div key={index} className="max-w-4xl text-center animate-fade">
            {/* BADGE CONTAINER WITH TWO BUTTONS */}
            <div className="mt-28 flex flex-wrap items-center justify-center gap-3">
              {/* AZURE CERTIFICATION TRAINING BADGE */}
              <div className="inline-flex items-center px-5 py-2 rounded-full bg-white/80 border border-slate-200 shadow-sm">
                <span className="text-[#0B5AA2] text-xs font-semibold tracking-widest">
                  AZURE CERTIFICATION TRAINING
                </span>
              </div>

              {/* LIMITED TIME OFFER BUTTON - Uses Azure theme colors */}
              <button
                onClick={handleWhatsAppClick}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className={`inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#0B5AA2] via-[#F7941D] to-[#0B5AA2] text-white text-sm font-bold tracking-wider shadow-2xl hover:shadow-3xl transition-all duration-300 transform relative overflow-hidden ${
                  isVibrating && !isHovering
                    ? "animate-azure-vibrate"
                    : ""
                } ${isHovering ? "scale-110 shadow-3xl" : ""}`}
              >
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B5AA2] via-[#F7941D] to-[#0B5AA2] opacity-100" />
                <div 
                  className={`absolute inset-0 bg-gradient-to-r from-[#F7941D] via-[#0B5AA2] to-[#F7941D] opacity-0 ${
                    isVibrating && !isHovering ? "animate-gradient-shift" : ""
                  }`}
                />
                
                {/* Glow effect during vibration */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-r from-[#0B5AA2]/40 via-[#F7941D]/40 to-[#0B5AA2]/40 rounded-full blur-md ${
                    isVibrating && !isHovering ? "opacity-100 animate-pulse-glow" : "opacity-0"
                  } transition-opacity duration-300`}
                />

                {/* Sparkle effect */}
                {isVibrating && !isHovering && (
                  <>
                    <div className="absolute -top-2 -left-2 w-4 h-4 bg-white rounded-full animate-ping" />
                    <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-white rounded-full animate-ping delay-500" />
                    <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-300 rounded-full animate-ping delay-300" />
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-yellow-300 rounded-full animate-ping delay-700" />
                  </>
                )}

                <span className="relative z-10 flex items-center gap-3">
                  {/* Offer icon */}
                  <svg
                    className={`w-6 h-6 ${
                      isVibrating && !isHovering ? "animate-spin-slow" : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                      clipRule="evenodd"
                    />
                  </svg>

                  {/* Text */}
                  <span className="relative">
                    <span className="text-white drop-shadow-md text-sm font-bold uppercase tracking-wider">
                      <span className="inline-block transform hover:scale-105 transition-transform">
                        LIMITED TIME: 30% OFF
                      </span>
                    </span>
                    <div className="absolute -top-1 left-0 right-0 h-0.5 bg-white/60 transform rotate-[-3deg]" />
                  </span>

                  {/* WhatsApp icon */}
                  <svg
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      isHovering ? "scale-125 translate-x-1" : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.32a8.188 8.188 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zM8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.86-.87 2.07 0 1.22.89 2.39 1 2.56.14.17 1.76 2.67 4.25 3.73.59.27 1.05.42 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.27-.25-.14-1.47-.74-1.69-.82-.23-.08-.37-.12-.56.12-.16.25-.64.81-.78.97-.15.17-.29.19-.53.07-.26-.13-1.06-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.12-.24-.01-.39.11-.5.11-.11.27-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.11-.56-1.35-.77-1.84-.2-.48-.41-.42-.56-.43-.14 0-.3-.01-.47-.01z" />
                  </svg>
                </span>
              </button>
            </div>

            {/* TITLE */}
            <h1
              className="mt-6 text-3xl md:text-4xl lg:text-5xl
                         font-semibold leading-snug text-slate-900"
              style={{
                fontFamily: "Poppins, Inter, system-ui",
                letterSpacing: "-0.02em",
              }}
            >
              {current.title}
              <br />
              <span className="text-[#0B5AA2] font-semibold">
                {current.highlight}
              </span>
            </h1>

            {/* SUBTITLE */}
            <p className="mt-5 text-base md:text-lg text-slate-700 leading-relaxed">
              {current.subtitle}
            </p>

            {/* ================= COMPACT STATS ================= */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "250+", label: "Students Trained" },
                { value: "5+", label: "Years of Excellence" },
                { value: "120+", label: "Hands-On Projects" },
                { value: "90%", label: "Student Satisfaction" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/80 backdrop-blur
                             border border-slate-200 rounded-lg
                             py-4 px-3 shadow-sm
                             transition hover:shadow-md"
                >
                  <div className="text-xl md:text-2xl font-bold text-[#0B5AA2]">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-slate-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            {/* ================= END STATS ================= */}
          </div>
        </div>
      </div>

      {/* CUSTOM ANIMATIONS */}
      <style>
        {`
          .animate-fade {
            animation: fade 0.6s ease-in-out;
          }
          
          @keyframes fade {
            from {
              opacity: 0;
              transform: translateY(12px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-azure-vibrate {
            animation: azure-vibrate 3s ease-in-out;
          }
          
          @keyframes azure-vibrate {
            0% {
              transform: translateX(0) scale(1);
              box-shadow: 0 20px 25px -5px rgba(11, 90, 162, 0.3), 0 10px 10px -5px rgba(247, 148, 29, 0.2);
            }
            5% {
              transform: translateX(-2px) scale(1.02);
              box-shadow: 0 25px 50px -12px rgba(11, 90, 162, 0.4);
            }
            10% {
              transform: translateX(2px) scale(1.03);
              box-shadow: 0 25px 50px -12px rgba(247, 148, 29, 0.4);
            }
            15% {
              transform: translateX(-3px) scale(1.04);
              box-shadow: 0 30px 60px -15px rgba(11, 90, 162, 0.5);
            }
            20% {
              transform: translateX(3px) scale(1.05);
              box-shadow: 0 30px 60px -15px rgba(247, 148, 29, 0.5);
            }
            25% {
              transform: translateX(-2px) scale(1.06);
              box-shadow: 0 35px 70px -15px rgba(11, 90, 162, 0.6);
            }
            30% {
              transform: translateX(2px) scale(1.06);
              box-shadow: 0 35px 70px -15px rgba(247, 148, 29, 0.6);
            }
            35% {
              transform: translateX(-3px) scale(1.05);
            }
            40% {
              transform: translateX(3px) scale(1.04);
            }
            45% {
              transform: translateX(-2px) scale(1.03);
            }
            50% {
              transform: translateX(2px) scale(1.02);
            }
            55% {
              transform: translateX(-3px) scale(1.03);
            }
            60% {
              transform: translateX(3px) scale(1.04);
            }
            65% {
              transform: translateX(-2px) scale(1.05);
            }
            70% {
              transform: translateX(2px) scale(1.06);
            }
            75% {
              transform: translateX(-1px) scale(1.05);
            }
            80% {
              transform: translateX(1px) scale(1.04);
            }
            85% {
              transform: translateX(-1px) scale(1.03);
            }
            90% {
              transform: translateX(1px) scale(1.02);
            }
            95% {
              transform: translateX(0) scale(1.01);
            }
            100% {
              transform: translateX(0) scale(1);
              box-shadow: 0 20px 25px -5px rgba(11, 90, 162, 0.3), 0 10px 10px -5px rgba(247, 148, 29, 0.2);
            }
          }
          
          .animate-gradient-shift {
            animation: gradient-shift 1.5s ease-in-out infinite alternate;
          }
          
          @keyframes gradient-shift {
            0% {
              opacity: 0;
            }
            50% {
              opacity: 0.3;
            }
            100% {
              opacity: 0;
            }
          }
          
          .animate-pulse-glow {
            animation: pulse-glow 1s ease-in-out infinite alternate;
          }
          
          @keyframes pulse-glow {
            from {
              opacity: 0.3;
              transform: scale(1);
            }
            to {
              opacity: 0.7;
              transform: scale(1.05);
            }
          }
          
          .animate-spin-slow {
            animation: spin-slow 3s linear infinite;
          }
          
          @keyframes spin-slow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </section>
  );
}