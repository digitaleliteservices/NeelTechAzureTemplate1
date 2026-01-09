import { useState, useEffect, useRef } from "react";
import azureLogo from "../../public/assets/azureBadge.svg";
import Navbar from "./Navbar";

// const slides = [
//   {
//     title: "Microsoft Azure Training",
//     highlight: "AZ-104 Administrator Associate",
//     subtitle:
//       "Master AZ-104: Azure Administrator Associate with real-world cloud skills, hands-on labs, and certification-focused learning.",
//   },
//   {
//     title: "Azure Certification Courses",
//     highlight: "AZ-104 Exam Preparation",
//     subtitle:
//       "Learn Azure with industry-aligned curriculum focused on AZ-104 certification, practical labs, and expert mentorship.",
//   },
//   {
//     title: "Become Azure Certified",
//     highlight: "AZ-104 Administrator Associate",
//     subtitle:
//       "Prepare for AZ-104 exam and Azure Administrator roles with hands-on experience, real-world scenarios, and career guidance.",
//   },
// ];

// const slides = [
//   {
//     title: "Launch Your Cloud Career",
//     highlight: "Earn ₹10-20 LPA as Azure Administrator",
//     subtitle:
//       "Transform your career with high-paying Azure roles. 94% of our students land jobs with 65% average salary hike within 6 months of certification.",
//   },
//   {
//     title: "Get Hired by Top Companies",
//     highlight: "Microsoft, Accenture, TCS, Infosys & 200+ MNCs",
//     subtitle:
//       "Our students get placed in Fortune 500 companies. Get direct referrals, mock interviews, and placement assistance with our industry connections.",
//   },
//   {
//     title: "Secure Your Financial Future",
//     highlight: "Invest Today, Earn 3-5x Returns Tomorrow",
//     subtitle:
//       "Cloud professionals earn 40% more than traditional IT roles. Get lifetime career support, salary negotiation guidance, and continuous upskilling.",
//   },
//   {
//     title: "Master In-Demand Skills",
//     highlight: "Learn What Companies Actually Need",
//     subtitle:
//       "Get hands-on experience with real Azure projects used by enterprises. Build a portfolio that impresses recruiters and gets you hired faster.",
//   },
//   {
//     title: "Future-Proof Your Career",
//     highlight: "90% of Companies Use Azure - Be Their Expert",
//     subtitle:
//       "Cloud is not a trend, it's the future. Position yourself as an essential asset to companies migrating to digital transformation.",
//   },
// ];

const slides = [
  {
    title: "AZ-104 Azure Administrator",
    highlight: "₹10–20 LPA Career Path",
    subtitle:
      "94% certification success • 65% average salary hike • Azure skills used by 90% of enterprises worldwide.",
  },
  {
    title: "Get Hired Faster",
    highlight: "Microsoft • Accenture • TCS",
    subtitle:
      "Learn the same Azure skills used by Microsoft, Accenture, Infosys & Fortune 500 companies.",
  },
  {
    title: "From Learning to Earning",
    highlight: "3–5x Career Growth",
    subtitle:
      "Students transitioning from ₹3.5 LPA to ₹12 LPA roles with AZ-104-focused Azure expertise.",
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
  // const handleWhatsAppClick = () => {
  //   window.open("https://chat.whatsapp.com/I6NL9crBf5fLcxQFbXzT9v", "_blank");
  // };

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

      {/* BIG AZURE BADGE - Right Side */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 z-0 hidden lg:block">
        <div className="relative">
          {/* Pulsing glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B5AA2] via-[#F7941D] to-[#0B5AA2] rounded-full blur-3xl opacity-20 animate-pulse-slow" />

          {/* Rotating ring */}
          {/* <div className="absolute -inset-8 border-4 border-transparent border-t-[#0B5AA2] border-r-[#F7941D] border-b-[#0B5AA2] border-l-[#F7941D] rounded-full animate-spin-slow" /> */}

          {/* Main badge */}
          {/* <div className="relative w-64 h-64 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl flex items-center justify-center animate-float"> */}
          <div className="relative w-64 h-64 flex items-center justify-center animate-float">
            {/* Inner glow */}
            <div className="absolute inset-4 bg-gradient-to-br from-[#0B5AA2]/20 to-[#F7941D]/20 rounded-2xl blur-md" />

            {/* Azure logo */}
            <img
              src={azureLogo}
              alt="Microsoft Azure Certified"
              className="w-48 h-48 animate-pulse-gentle"
            />

            {/* Shining particles */}
            <div className="absolute top-4 right-4 w-3 h-3 bg-yellow-400 rounded-full animate-ping-slow" />
            <div className="absolute bottom-4 left-4 w-3 h-3 bg-blue-400 rounded-full animate-ping-slow delay-700" />
            <div className="absolute top-1/2 left-2 w-2 h-2 bg-white rounded-full animate-ping-slow delay-300" />
            <div className="absolute top-1/2 right-2 w-2 h-2 bg-white rounded-full animate-ping-slow delay-500" />
          </div>

          {/* Floating text */}
          {/* <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#0B5AA2] to-[#F7941D] text-white text-sm font-bold px-4 py-2 rounded-full whitespace-nowrap animate-bounce-slow">
            Certified Training
          </div> */}
        </div>
      </div>

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
            {/* BADGE CONTAINER - Now horizontal layout */}
            <div className="mt-28 flex flex-wrap items-center justify-center gap-3">
              {/* AZURE CERTIFICATION TRAINING BADGE - With pop-up blur animation */}
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 border border-slate-200 shadow-sm relative group">
                {/* Animated glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#0B5AA2] via-[#F7941D] to-[#0B5AA2] rounded-full blur opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-badge-glow" />

                {/* Azure badge - with pop-up animation */}
                <div className="relative">
                  <img
                    src={azureLogo}
                    alt="Microsoft Azure"
                    className="h-8 w-auto transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 animate-badge-pop"
                  />
                  {/* Pulsing ring effect */}
                  <div className="absolute inset-0 rounded-full border-2 border-[#0B5AA2] opacity-0 group-hover:opacity-100 animate-ping-slow" />
                </div>

                {/* Text - increased size */}
                <span className="text-[#0B5AA2] text-sm font-bold relative">
                  <span className="relative z-10">
                    AZ-104: Microsoft Certified Azure Administrator Associate
                  </span>
                  {/* Text glow effect */}
                  <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-[#0B5AA2] to-[#F7941D] opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300 transform group-hover:translate-x-1">
                    AZ-104: Microsoft Certified Azure Administrator Associate
                  </span>
                </span>

                {/* Floating sparkles */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping-slow" />
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping-slow delay-300" />
              </div>

              {/* LIMITED TIME OFFER BUTTON - Now placed next to the badge */}
              <button
                onClick={handleWhatsAppClick}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className={`inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0B5AA2] via-[#F7941D] to-[#0B5AA2] text-white text-xs font-bold tracking-wider shadow-xl hover:shadow-2xl transition-all duration-300 transform relative overflow-hidden ${
                  isVibrating && !isHovering ? "animate-azure-vibrate" : ""
                } ${isHovering ? "scale-105 shadow-2xl" : ""}`}
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
                    isVibrating && !isHovering
                      ? "opacity-100 animate-pulse-glow"
                      : "opacity-0"
                  } transition-opacity duration-300`}
                />

                {/* Sparkle effect */}
                {isVibrating && !isHovering && (
                  <>
                    <div className="absolute -top-1 -left-1 w-3 h-3 bg-white rounded-full animate-ping" />
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping delay-500" />
                    <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-yellow-300 rounded-full animate-ping delay-300" />
                    <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 bg-yellow-300 rounded-full animate-ping delay-700" />
                  </>
                )}

                <span className="relative z-10 flex items-center gap-2">
                  {/* Offer icon - reduced size */}
                  <svg
                    className={`w-5 h-5 ${
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

                  {/* Text - smaller */}
                  <span className="relative">
                    <span className="text-white drop-shadow-md text-xs font-bold uppercase tracking-wider">
                      <span className="inline-block transform hover:scale-105 transition-transform">
                        LIMITED TIME: 30% OFF
                      </span>
                    </span>
                    <div className="absolute -top-1 left-0 right-0 h-0.5 bg-white/60 transform rotate-[-3deg]" />
                  </span>

                  {/* WhatsApp icon - reduced size */}
                  <svg
                    className={`w-4 h-4 transform transition-transform duration-300 ${
                      isHovering ? "scale-125 translate-x-0.5" : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.32a8.188 8.188 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zM8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.86-.87 2.07 0 1.22.89 2.39 1 2.56.14.17 1.76 2.67 4.25 3.73.59.27 1.05.42 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.27-.25-.14-1.47-.74-1.69-.82-.23-.08-.37-.12-.56.12-.16.25-.64.81-.78.97-.15.17-.29.19-.53.07-.26-.13-1.06-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.12-.24-.01-.39.11-.50.11-.11.27-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.11-.56-1.35-.77-1.84-.2-.48-.41-.42-.56-.43-.14 0-.3-.01-.47-.01z" />
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
              box-shadow: 0 15px 20px -5px rgba(11, 90, 162, 0.3), 0 8px 10px -5px rgba(247, 148, 29, 0.2);
            }
            5% {
              transform: translateX(-2px) scale(1.02);
              box-shadow: 0 20px 40px -10px rgba(11, 90, 162, 0.4);
            }
            10% {
              transform: translateX(2px) scale(1.03);
              box-shadow: 0 20px 40px -10px rgba(247, 148, 29, 0.4);
            }
            15% {
              transform: translateX(-3px) scale(1.04);
              box-shadow: 0 25px 50px -12px rgba(11, 90, 162, 0.5);
            }
            20% {
              transform: translateX(3px) scale(1.05);
              box-shadow: 0 25px 50px -12px rgba(247, 148, 29, 0.5);
            }
            25% {
              transform: translateX(-2px) scale(1.06);
              box-shadow: 0 30px 60px -15px rgba(11, 90, 162, 0.6);
            }
            30% {
              transform: translateX(2px) scale(1.06);
              box-shadow: 0 30px 60px -15px rgba(247, 148, 29, 0.6);
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
              box-shadow: 0 15px 20px -5px rgba(11, 90, 162, 0.3), 0 8px 10px -5px rgba(247, 148, 29, 0.2);
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

          /* NEW ANIMATIONS FOR AZURE BADGE */
          .animate-badge-pop {
            animation: badge-pop 4s ease-in-out infinite;
          }
          
          @keyframes badge-pop {
            0%, 100% {
              transform: scale(1) rotate(0deg);
              filter: blur(0px);
            }
            10% {
              transform: scale(1.15) rotate(2deg);
              filter: blur(0.5px);
            }
            15% {
              transform: scale(1.2) rotate(-1deg);
              filter: blur(1px);
            }
            20% {
              transform: scale(1.15) rotate(1deg);
              filter: blur(0.5px);
            }
            25% {
              transform: scale(1.1) rotate(0deg);
              filter: blur(0px);
            }
            50% {
              transform: scale(1) rotate(0deg);
              filter: blur(0px);
            }
            60% {
              transform: scale(1.15) rotate(-2deg);
              filter: blur(0.5px);
            }
            65% {
              transform: scale(1.2) rotate(1deg);
              filter: blur(1px);
            }
            70% {
              transform: scale(1.15) rotate(-1deg);
              filter: blur(0.5px);
            }
            75% {
              transform: scale(1.1) rotate(0deg);
              filter: blur(0px);
            }
          }
          
          .animate-badge-glow {
            animation: badge-glow 4s ease-in-out infinite;
          }
          
          @keyframes badge-glow {
            0%, 50%, 100% {
              opacity: 0;
            }
            10%, 15%, 20%, 25%, 60%, 65%, 70%, 75% {
              opacity: 0.2;
            }
          }
          
          .animate-ping-slow {
            animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
          }
          
          @keyframes ping-slow {
            0% {
              transform: scale(1);
              opacity: 1;
            }
            75%, 100% {
              transform: scale(2);
              opacity: 0;
            }
          }

          /* Hover effect for the entire badge */
          .group:hover .animate-badge-pop {
            animation: badge-hover 0.5s ease-out forwards;
          }
          
          @keyframes badge-hover {
            0% {
              transform: scale(1) rotate(0deg);
            }
            50% {
              transform: scale(1.25) rotate(5deg);
            }
            100% {
              transform: scale(1.15) rotate(3deg);
            }
          }

          /* NEW ANIMATIONS FOR BIG AZURE BADGE */
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
          
          .animate-pulse-slow {
            animation: pulse-slow 4s ease-in-out infinite;
          }
          
          @keyframes pulse-slow {
            0%, 100% {
              opacity: 0.1;
              transform: scale(1);
            }
            50% {
              opacity: 0.3;
              transform: scale(1.05);
            }
          }
          
          .animate-pulse-gentle {
            animation: pulse-gentle 3s ease-in-out infinite;
          }
          
          @keyframes pulse-gentle {
            0%, 100% {
              transform: scale(1);
              opacity: 0.9;
            }
            50% {
              transform: scale(1.05);
              opacity: 1;
            }
          }
          
          .animate-bounce-slow {
            animation: bounce-slow 2s ease-in-out infinite;
          }
          
          @keyframes bounce-slow {
            0%, 100% {
              transform: translateX(-50%) translateY(0);
            }
            50% {
              transform: translateX(-50%) translateY(-10px);
            }
          }
        `}
      </style>
    </section>
  );
}
