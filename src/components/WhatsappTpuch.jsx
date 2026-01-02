import { useEffect, useRef, useState } from "react";
import whatsApp from "../../public/assets/whatsapp.webp";
import {
  MessageCircle,
  Calendar,
  Video,
  HelpCircle,
  BookOpen,
  ChevronRight,
  Users,
  Clock,
  Bell,
  FileText,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export default function WhatsAppTouch() {
  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState(false);
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

  return (
    <section
      ref={ref}
      id="whatsapp"
      className="relative overflow-hidden py-24 md:py-32"
      style={{
        background:
          "linear-gradient(135deg, rgba(11,90,162,0.08) 0%, #ffffff 40%, rgba(247,148,29,0.10) 100%)",
      }}
    >
      {/* ================= ENHANCED BACKGROUND EFFECTS ================= */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 10% 30%, rgba(46,139,192,0.15) 0%, transparent 50%),
              radial-gradient(circle at 90% 70%, rgba(247,148,29,0.15) 0%, transparent 50%)
            `,
          }}
        />

        {/* Animated mesh */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 40%, rgba(46,139,192,0.08) 0%, transparent 40%),
              radial-gradient(circle at 80% 60%, rgba(247,148,29,0.08) 0%, transparent 40%)
            `,
            animation: "pulseMesh 8s ease-in-out infinite alternate",
          }}
        />

        {/* Floating message icons */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-[0.05]"
            style={{
              left: `${5 + i * 8}%`,
              top: `${10 + Math.sin(i) * 70}%`,
              color: i % 2 === 0 ? "#FFB347" : "#2E8BC0",
              animation: `floatIcon ${15 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          >
            <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
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
              backgroundColor:
                i % 3 === 0 ? "#F7941D" : i % 3 === 1 ? "#2E8BC0" : "#4CAF50",
              opacity: 0.15,
              animation: `floatParticle ${
                8 + Math.random() * 8
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* ================= ANIMATED BLOBS ================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-[#2E8BC0]/15 to-[#4CAF50]/10 rounded-full blur-3xl"
          style={{
            animation: "floatBlob 25s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tr from-[#F7941D]/15 to-[#FFB347]/10 rounded-full blur-3xl"
          style={{
            animation: "floatBlob 30s ease-in-out infinite reverse",
            animationDelay: "5s",
          }}
        />
      </div>

      {/* ================= DECORATIVE LINES ================= */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFB347]/20 to-transparent" />
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2E8BC0]/20 to-transparent" />
        <div className="absolute bottom-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4CAF50]/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* ================= LEFT CONTENT ================= */}
          <div
            className={`transition-all duration-1000 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            {/* Animated badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 shadow-lg mb-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#2E8BC0] to-[#0B5AA2] animate-pulse" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B5AA2] to-[#2E8BC0] text-sm font-bold tracking-widest uppercase">
                QUICK CONNECTION
              </span>
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#F7941D] to-[#FFB347] animate-pulse delay-500" />
            </div>
            {/* <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 shadow-lg mb-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B5AA2] to-[#2E8BC0] text-sm font-bold tracking-widest uppercase">
                QUICK CONNECTION
              </span>
            </div> */}

            {/* Heading */}
            <h2
              className="mt-6 text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight"
              style={{ fontFamily: "Poppins, Inter, system-ui" }}
            >
              Connect With Us On
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB347] via-[#0B5AA2] to-[#2E8BC0]">
                WhatsApp For Instant Updates
              </span>
            </h2>

            {/* Animated divider */}
            <div className="mt-8 flex items-center gap-4">
              <div className="h-1 w-24 bg-gradient-to-r from-[#FFB347] to-transparent rounded-full" />
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#FFB347] via-[#0B5AA2] to-[#2E8BC0] animate-pulse" />
              <div className="h-1 w-24 bg-gradient-to-l from-[#2E8BC0] to-transparent rounded-full" />
            </div>

            {/* Description */}
            <div
              className={`mt-8 transition-all duration-1000 delay-300 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-slate-700 text-lg leading-relaxed">
                Get{" "}
                <span className="font-semibold text-[#0B5AA2]">
                  real-time updates
                </span>{" "}
                on batch schedules,
                <span className="font-semibold text-[#0B5AA2]">
                  {" "}
                  live session links
                </span>
                , and exclusive learning resources. Join our active WhatsApp
                community for{" "}
                <span className="font-semibold text-[#0B5AA2]">
                  direct support
                </span>{" "}
                from trainers.
              </p>
            </div>

            {/* Benefits with Professional Icons */}
            <div
              className={`mt-10 grid sm:grid-cols-2 gap-5 transition-all duration-1000 delay-500 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {[
                {
                  text: "Batch Schedule Alerts",
                  icon: <Calendar className="w-5 h-5" />,
                  color: "text-[#FFB347]",
                  bgColor: "bg-[#FFB347]/10",
                },
                {
                  text: "Live Session Access",
                  icon: <Video className="w-5 h-5" />,
                  color: "text-[#0B5AA2]",
                  bgColor: "bg-[#0B5AA2]/10",
                },
                {
                  text: "24/7 Doubt Support",
                  icon: <MessageSquare className="w-5 h-5" />,
                  color: "text-[#2E8BC0]",
                  bgColor: "bg-[#2E8BC0]/10",
                },
                {
                  text: "Study Materials",
                  icon: <FileText className="w-5 h-5" />,
                  color: "text-[#F7941D]",
                  bgColor: "bg-[#F7941D]/10",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 text-slate-700 group"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${item.bgColor} border border-slate-200 flex items-center justify-center group-hover:border-slate-300 transition-all duration-300 group-hover:scale-110 shadow-sm`}
                  >
                    <span className={item.color}>{item.icon}</span>
                  </div>
                  <div>
                    <span className="text-sm font-semibold block">
                      {item.text}
                    </span>
                    <span className="text-xs text-slate-500 mt-1 block">
                      Instant access & updates
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced CTA */}
            <div
              className={`mt-12 transition-all duration-1000 delay-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {/* <a
                href="#"
                className="group relative inline-flex items-center gap-4 px-10 py-4 rounded-full overflow-hidden"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              > */}
              <a
                href="https://wa.me/916361866299?text=Hello!%20I'm%20interested%20in%20Azure%20training.%20Can%20you%20share%20more%20details?"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-4 px-10 py-4 rounded-full overflow-hidden"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B5AA2] to-[#2E8BC0] rounded-full shadow-2xl" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#25D366] to-[#0B5AA2] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute -inset-1 bg-gradient-to-r from-[#25D366]/30 via-[#FFB347]/30 to-[#2E8BC0]/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <span className="relative z-10 text-white font-bold text-lg flex items-center gap-3">
                  <MessageCircle className="w-6 h-6" />
                  <span>Join WhatsApp Community</span>
                  <ChevronRight
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      hover ? "translate-x-1 scale-110" : ""
                    }`}
                  />
                </span>
              </a>

              <div className="mt-4 flex items-center gap-4 text-slate-600 text-sm">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#0B5AA2]" />
                  <span>500+ Active Learners</span>
                </div>
                <div className="h-4 w-px bg-slate-300"></div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#FFB347]" />
                  <span>Instant Responses</span>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT GRAPHIC ================= */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            {/* Decorative rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-72 h-72 border-4 border-[#FFB347]/10 rounded-full animate-spin-slow"
                style={{ animationDuration: "20s" }}
              />
              <div
                className="w-80 h-80 border-2 border-[#0B5AA2]/10 rounded-full absolute animate-spin-slow-reverse"
                style={{ animationDuration: "25s" }}
              />
            </div>

            {/* Main floating container */}
            <div className="relative flex justify-center">
              {/* Glow effect */}
              <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-[#0B5AA2]/10 to-[#FFB347]/10 rounded-full blur-3xl animate-pulse" />

              {/* Floating WhatsApp container */}
              <div className="relative group">
                {/* Outer ring with animation */}
                <div
                  className="absolute inset-0 rounded-full ring-4 ring-[#25D366]/30 animate-ping"
                  style={{ animationDuration: "2s" }}
                />

                {/* Inner ring with animation */}
                <div
                  className="absolute inset-0 rounded-full ring-2 ring-[#FFB347]/20 animate-ping"
                  style={{ animationDuration: "3s", animationDelay: "0.5s" }}
                />

                {/* Main circle */}
                <div className="relative bg-gradient-to-br from-white to-slate-50 rounded-full p-8 md:p-10 shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105 border border-slate-200">
                  {/* Inner glow */}
                  <div className="absolute inset-4 rounded-full border border-slate-100/50" />

                  {/* Floating elements */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-[#F7941D] to-[#FFB347] rounded-full animate-bounce z-20 shadow-md flex items-center justify-center">
                    <Bell className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-gradient-to-br from-[#0B5AA2] to-[#2E8BC0] rounded-full animate-bounce delay-300 z-20 shadow-md flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>

                  {/* WhatsApp logo */}
                  <div className="relative w-48 h-48 md:w-56 md:h-56 flex items-center justify-center">
                    <img
                      src={whatsApp}
                      alt="WhatsApp"
                      className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Animated rings */}
                  <div className="absolute inset-0 rounded-full ring-2 ring-[#0B5AA2]/20 animate-pulse" />
                  <div className="absolute inset-2 rounded-full ring-1 ring-[#FFB347]/15 animate-pulse delay-1000" />

                  {/* Badge */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#0B5AA2] to-[#FFB347] text-white px-5 py-2 rounded-full shadow-lg whitespace-nowrap z-30">
                    <span className="text-xs md:text-sm font-bold tracking-wider">
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        Active Community
                      </span>
                    </span>
                  </div>
                </div>

                {/* Floating notification dots */}
                <div className="absolute -top-2 right-6 w-8 h-8 rounded-full bg-gradient-to-br from-[#FF5252] to-[#FF8A80] animate-bounce flex items-center justify-center shadow-md z-30">
                  <span className="text-white text-xs font-bold">3</span>
                </div>
              </div>
            </div>

            {/* Stats indicator */}
            <div className="absolute -bottom-6 right-6 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-slate-200 shadow-md">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] animate-pulse" />
                <span className="text-slate-700 text-xs font-medium">
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    500+ Active
                  </span>
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
            opacity: 0.08;
          }
          100% {
            opacity: 0.12;
          }
        }

        @keyframes floatIcon {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.05;
          }
          50% {
            transform: translateY(-25px) rotate(180deg);
            opacity: 0.1;
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
