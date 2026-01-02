import { useState, useEffect, useRef } from "react";

const faqs = [
  {
    question:
      "Do I Need Any Previous Technical Background To Enroll In This Course?",
    answer:
      "Not at all. The course is designed to be beginner-friendly. Whether you come from a non-technical background or have basic IT knowledge, the course starts from the fundamentals and gradually progresses to advanced concepts at a comfortable pace.",
    icon: "👨‍💻",
    color: "from-blue-500 to-cyan-500",
  },
  {
    question:
      "What Does This Combo Course Include, And Who Is It Designed For?",
    answer:
      "This combo course includes IT Support fundamentals, Windows Server administration, Azure cloud concepts, PowerShell basics, and hands-on labs. It is designed for students, fresh graduates, career switchers, and working professionals aiming for IT or cloud roles.",
    icon: "🎯",
    color: "from-orange-500 to-amber-500",
  },
  {
    question:
      "What Type Of Hands-On Learning Or Projects Can I Expect During The Course?",
    answer:
      "You will work on real-world scenarios such as Active Directory setup, Azure virtual machines, user management, backups, networking, automation using PowerShell, and cloud resource management through guided labs.",
    icon: "🛠️",
    color: "from-green-500 to-emerald-500",
  },
  {
    question:
      "How Is This Course Different From Other IT Or Cloud Training Programs?",
    answer:
      "Unlike theory-heavy courses, our program focuses on practical exposure, real tools, live instructor guidance, industry workflows, and career-oriented skills that prepare you for actual job roles.",
    icon: "⚡",
    color: "from-purple-500 to-violet-500",
  },
  {
    question: "Is The Course Self-Paced Or Are There Fixed Batch Timings?",
    answer:
      "The course includes instructor-led live sessions along with recorded lectures on LMS. This gives you the flexibility to learn at your own pace while still benefiting from live guidance.",
    icon: "⏱️",
    color: "from-indigo-500 to-blue-500",
  },
  {
    question: "What Kind Of Support Can I Expect During And After The Course?",
    answer:
      "You get continuous trainer support via WhatsApp, access to a student support desk, lifetime LMS access, and guidance even after course completion for doubts, revisions, and job preparation.",
    icon: "👨‍🏫",
    color: "from-red-500 to-pink-500",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [visible, setVisible] = useState(false);
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

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      ref={ref}
      id="faq"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* ================= ENHANCED BACKGROUND EFFECTS ================= */}
      <div className="absolute inset-0">
        {/* Gradient background */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-orange-50/40 via-white/90 to-blue-50/40"
          style={{
            backgroundImage: `
              radial-gradient(circle at 10% 20%, rgba(247,148,29,0.08) 0%, transparent 40%),
              radial-gradient(circle at 90% 80%, rgba(11,90,162,0.08) 0%, transparent 40%)
            `,
          }}
        />

        {/* Animated mesh overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 2px,
                rgba(11,90,162,0.03) 2px,
                rgba(11,90,162,0.03) 4px
              ),
              repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 2px,
                rgba(247,148,29,0.03) 2px,
                rgba(247,148,29,0.03) 4px
              )
            `,
            animation: "pulseMesh 6s ease-in-out infinite alternate",
          }}
        />

        {/* Floating question marks */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-3xl md:text-4xl opacity-[0.04]"
            style={{
              left: `${5 + i * 8}%`,
              top: `${15 + Math.sin(i) * 60}%`,
              color: i % 2 === 0 ? "#F7941D" : "#0B5AA2",
              animation: `floatElement ${12 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            ?
          </div>
        ))}

        {/* Floating particles */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor:
                i % 3 === 0 ? "#F7941D" : i % 3 === 1 ? "#0B5AA2" : "#FFB347",
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
          className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-[#F7941D]/15 to-transparent rounded-full blur-3xl"
          style={{
            animation: "floatBlob 25s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tr from-[#0B5AA2]/15 to-transparent rounded-full blur-3xl"
          style={{
            animation: "floatBlob 30s ease-in-out infinite reverse",
            animationDelay: "5s",
          }}
        />

        {/* Additional decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-[#F7941D]/10 rounded-full animate-spin-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 border border-[#0B5AA2]/10 rounded-full animate-spin-slow-reverse" />
      </div>

      {/* ================= DECORATIVE LINES ================= */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F7941D]/20 to-transparent" />
        <div className="absolute bottom-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0B5AA2]/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= ENHANCED HEADER ================= */}
        <div
          className={`mb-16 text-left transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          {/* Animated badge */}
          {/* <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 shadow-lg mb-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#F7941D] to-[#FFB347] animate-pulse" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7941D] to-[#FFB347] text-sm font-bold tracking-widest uppercase">
              COMMON QUESTIONS
            </span>
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0B5AA2] to-[#2E8BC0] animate-pulse delay-500" />
          </div> */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 shadow-lg mb-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B5AA2] to-[#2E8BC0] text-sm font-bold tracking-widest uppercase">
              COMMON QUESTIONS
            </span>
          </div>

          {/* Title */}
          <h2
            className="mt-6 text-3xl md:text-4xl font-semibold text-slate-900 leading-snug"
            style={{ fontFamily: "Poppins, Inter, system-ui" }}
          >
            Frequently Asked Questions
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B5AA2] via-[#F7941D] to-[#0B5AA2]">
              About Your Learning Journey
            </span>
          </h2>

          {/* Animated divider */}
          <div className="mt-8 flex items-center gap-4">
            <div className="h-1 w-20 bg-gradient-to-r from-[#F7941D] to-transparent rounded-full" />
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#F7941D] via-[#FFB347] to-[#0B5AA2] animate-pulse" />
            <div className="h-1 w-20 bg-gradient-to-l from-[#0B5AA2] to-transparent rounded-full" />
          </div>

          {/* Subtitle */}
          <div
            className={`mt-8 max-w-2xl transition-all duration-1000 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-slate-700 text-base md:text-lg leading-relaxed">
              Everything you need to know about the combo course, learning
              format, support, and career outcomes.
            </p>
          </div>
        </div>

        {/* ================= ENHANCED FAQ LIST ================= */}
        <div
          className={`space-y-5 transition-all duration-1000 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className={`relative group transition-all duration-500 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Animated background effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    faq.color
                  } opacity-0 ${
                    isOpen ? "opacity-10" : "group-hover:opacity-5"
                  } rounded-2xl blur-xl transition-opacity duration-500`}
                />

                {/* Main FAQ card */}
                <div className="relative bg-white/90 backdrop-blur-sm border border-slate-200/80 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-slate-200/50 rounded-tl-2xl" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-slate-200/50 rounded-br-2xl" />

                  {/* Question button */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-start gap-6 p-6 md:p-8 text-left group/question"
                  >
                    {/* Icon container */}
                    {/* <div className="relative flex-shrink-0">
                      <div
                        className={`absolute -inset-2 bg-gradient-to-br ${faq.color} rounded-xl opacity-0 group-hover/question:opacity-20 blur-md transition-opacity duration-500`}
                      />

                      <div
                        className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${
                          faq.color
                        } flex items-center justify-center shadow-md transform ${
                          isOpen
                            ? "scale-110 rotate-12"
                            : "group-hover/question:scale-110 group-hover/question:rotate-12"
                        } transition-all duration-500`}
                      >
                        <span className="text-xl">{faq.icon}</span>
                      </div>
                    </div> */}

                    {/* Question content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <span className="text-base md:text-lg font-semibold text-slate-900 pr-8 group-hover/question:text-slate-800 transition-colors duration-300">
                          {faq.question}
                        </span>

                        {/* Animated arrow */}
                        <span
                          className={`flex-shrink-0 ml-4 text-[#0B5AA2] transition-all duration-500 ${
                            isOpen
                              ? "rotate-180 scale-125"
                              : "group-hover/question:scale-110"
                          }`}
                        >
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </span>
                      </div>

                      {/* Animated underline */}
                      <div
                        className={`mt-4 h-0.5 w-0 bg-gradient-to-r ${
                          faq.color
                        } rounded-full ${
                          isOpen ? "w-full" : "group-hover/question:w-32"
                        } transition-all duration-500`}
                      />
                    </div>
                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-all duration-500 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 md:px-8 pb-8 ml-18">
                        <p className="text-slate-700 leading-relaxed bg-gradient-to-r from-slate-700 to-slate-800 bg-clip-text text-transparent">
                          {faq.answer}
                        </p>

                        {/* Additional decorative element */}
                        <div className="mt-6 flex items-center gap-4">
                          <div
                            className={`h-1 w-8 bg-gradient-to-r ${faq.color} rounded-full`}
                          />
                          <span className="text-xs text-slate-500 font-medium">
                            Helpful? Contact our support team for more details
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= ADDITIONAL HELP SECTION ================= */}
        <div
          className={`mt-20 transition-all duration-1000 delay-800 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative bg-gradient-to-r from-white/90 to-blue-50/90 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-slate-200/80 shadow-xl overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    repeating-linear-gradient(
                      90deg,
                      transparent,
                      transparent 20px,
                      rgba(11,90,162,0.1) 20px,
                      rgba(11,90,162,0.1) 40px
                    )
                  `,
                  animation: "slidePattern 10s linear infinite",
                }}
              />
            </div>

            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Still have questions?
                </h3>
                <p className="text-slate-700">
                  Our support team is here to help you with any additional
                  questions about the course, enrollment process, or career
                  guidance.
                </p>
              </div>

              {/* <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative px-8 py-3 bg-gradient-to-r from-[#0B5AA2] to-[#2E8BC0] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    <span>Contact Support</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2E8BC0] to-[#0B5AA2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>

                <button className="px-8 py-3 bg-white text-slate-800 border border-slate-300 font-semibold rounded-full hover:bg-slate-100 transition-all duration-300">
                  View All FAQ
                </button>
              </div> */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Contact Support button - Opens WhatsApp */}
                <button
                  onClick={() =>
                    window.open(
                      "https://wa.me/916361866299?text=Hello!%20I%20need%20support%20with%20Azure%20training",
                      "_blank"
                    )
                  }
                  className="group relative px-8 py-3 bg-gradient-to-r from-[#0B5AA2] to-[#2E8BC0] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span>Contact Support</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2E8BC0] to-[#0B5AA2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>

                {/* View All FAQ button - Navigates to FAQ section */}
                <button
                  onClick={() => {
                    const faqSection = document.getElementById("faq");
                    if (faqSection) {
                      faqSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                  className="px-8 py-3 bg-white text-slate-800 border border-slate-300 font-semibold rounded-full hover:bg-slate-100 transition-all duration-300"
                >
                  View All FAQ
                </button>
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
            opacity: 0.15;
          }
          100% {
            opacity: 0.25;
          }
        }

        @keyframes floatElement {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.04;
          }
          50% {
            transform: translateY(-30px) rotate(180deg);
            opacity: 0.08;
          }
        }

        @keyframes slidePattern {
          0% {
            background-position-x: 0;
          }
          100% {
            background-position-x: 40px;
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
