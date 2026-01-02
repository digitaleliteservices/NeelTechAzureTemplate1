import { useEffect, useRef, useState } from "react";
import NeelLogo from "/assets/neel-logo.png";

export default function WhatYouLearn() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  /* 🔒 OBSERVER TRIGGERS ONLY ONCE (CRITICAL FIX) */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // ✅ prevents vibration
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
      id="what-you-learn"
      className="relative overflow-hidden py-24 md:py-32"
      style={{
        background:
          "linear-gradient(155deg, rgba(247,148,29,0.05) 0%, #ffffff 25%, #ffffff 50%, #ffffff 75%, rgba(11,90,162,0.05) 100%)",
      }}
    >
      {/* ================= ENHANCED BACKGROUND EFFECTS ================= */}
      <div className="absolute inset-0">
        {/* Main gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-orange-50/30" />

        {/* Subtle mesh gradient */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(247,148,29,0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(11,90,162,0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(255,255,255,0.8) 0%, transparent 50%)
            `,
            backgroundSize: "cover",
          }}
        />

        {/* Enhanced dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(11,90,162,0.2) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Subtle horizontal lines */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 1px,
                rgba(11,90,162,0.05) 1px,
                rgba(11,90,162,0.05) 2px
              )
            `,
            backgroundSize: "100% 4px",
          }}
        />
      </div>

      {/* ================= ENHANCED STATIC BLOBS ================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Primary blobs */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-[#F7941D]/20 via-[#F7941D]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gradient-to-tr from-[#0B5AA2]/20 via-[#0B5AA2]/10 to-transparent rounded-full blur-3xl" />

        {/* Secondary blobs for depth */}
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-gradient-to-br from-[#FFB347]/10 to-transparent rounded-full blur-2xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-gradient-to-tr from-[#2E8BC0]/10 to-transparent rounded-full blur-2xl" />

        {/* Tiny accent dots */}
        <div className="absolute top-1/3 left-1/3 w-3 h-3 bg-[#F7941D]/20 rounded-full" />
        <div className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-[#0B5AA2]/20 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-[#FFB347]/20 rounded-full" />
        <div className="absolute bottom-1/2 right-1/4 w-2 h-2 bg-[#2E8BC0]/20 rounded-full" />
      </div>

      {/* ================= GEOMETRIC OVERLAYS ================= */}
      <div className="pointer-events-none absolute inset-0">
        {/* Corner triangles */}
        <div className="absolute top-0 left-0 w-0 h-0 border-l-[100px] border-l-transparent border-t-[100px] border-t-[#F7941D]/5" />
        <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[100px] border-r-transparent border-b-[100px] border-b-[#0B5AA2]/5" />

        {/* Diagonal lines */}
        <div className="absolute top-0 right-0 bottom-0 left-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F7941D]/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0B5AA2]/20 to-transparent" />
          <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#F7941D]/20 to-transparent" />
          <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-[#0B5AA2]/20 to-transparent" />
        </div>

        {/* Floating circles */}
        <div className="absolute top-20 left-10 w-12 h-12 border-2 border-[#F7941D]/10 rounded-full" />
        <div className="absolute bottom-20 right-10 w-16 h-16 border-2 border-[#0B5AA2]/10 rounded-full" />
        <div className="absolute top-32 right-32 w-8 h-8 border border-[#FFB347]/10 rounded-full" />
        <div className="absolute bottom-32 left-32 w-10 h-10 border border-[#2E8BC0]/10 rounded-full" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div
          className={`text-center mb-16 md:mb-24 transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 text-[#0B5AA2] text-xs font-semibold tracking-widest shadow-sm mb-6">
            <span>CURRICULUM HIGHLIGHTS</span>
          </div> */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 shadow-lg mb-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B5AA2] to-[#2E8BC0] text-sm font-bold tracking-widest uppercase">
              CURRICULUM HIGHLIGHTS
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-slate-900 leading-tight">
            Hands-On Microsoft Azure
            <br />
            {/* <span className="bg-gradient-to-r from-[#0B5AA2] to-[#2E8BC0] bg-clip-text text-transparent">
              Skills For Real Cloud Roles
            </span> */}
            <span className="text-[#0B5AA2]">Skills For Real Cloud Roles</span>
          </h2>

          <p className="mt-6 text-slate-600 text-base md:text-lg max-w-3xl mx-auto">
            Master in-demand Azure skills through our structured curriculum
            designed by industry experts
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* LEFT */}
          <FeatureColumn
            visible={visible}
            direction="left"
            items={[
              {
                title: "Azure Cloud Fundamentals",
                desc: "Understand Azure subscriptions, regions, pricing models and AZ-900 aligned concepts.",
                color: "#F7941D",
                bg: "bg-gradient-to-br from-orange-50/80 to-white backdrop-blur-sm",
              },
              {
                title: "Azure Virtual Machines & Networking",
                desc: "Deploy VMs, VNets, subnets, NSGs, load balancers and secure connectivity.",
                color: "#0B5AA2",
                bg: "bg-gradient-to-br from-blue-50/80 to-white backdrop-blur-sm",
              },
            ]}
          />

          {/* CENTER */}
          <div
            className={`my-12 lg:my-0 transition-all duration-700 ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative flex justify-center">
              {/* Decorative rings around logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 md:w-72 md:h-72 border-2 border-[#F7941D]/10 rounded-full" />
                <div className="w-72 h-72 md:w-80 md:h-80 border border-[#0B5AA2]/10 rounded-full absolute" />
              </div>

              <div className="relative bg-white/90 backdrop-blur-sm rounded-full p-8 md:p-10 border border-slate-200/80 shadow-xl">
                <div className="absolute inset-4 rounded-full border border-slate-100/50" />
                <img
                  src={NeelLogo}
                  alt="Neel Techno Logo"
                  className="relative w-48 h-48 md:w-56 md:h-56 object-contain"
                />
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#F7941D] to-[#0B5AA2] text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                  Azure Certified
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <FeatureColumn
            visible={visible}
            direction="right"
            items={[
              {
                title: "Azure Storage & Security",
                desc: "Work with storage accounts, Blob containers, backups, RBAC and security best practices.",
                color: "#0B5AA2",
                bg: "bg-gradient-to-br from-blue-50/80 to-white backdrop-blur-sm",
              },
              {
                title: "Azure Automation & PowerShell",
                desc: "Automate Azure using PowerShell and CLI for efficient cloud administration.",
                color: "#F7941D",
                bg: "bg-gradient-to-br from-orange-50/80 to-white backdrop-blur-sm",
              },
            ]}
          />
        </div>

        {/* CTA */}
        <div
          className={`mt-16 md:mt-24 text-center transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* <button className="px-8 py-3.5 bg-gradient-to-r from-[#F7941D] to-[#0B5AA2] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition active:scale-95 relative group overflow-hidden">
            <span className="relative z-10">View Full Curriculum</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFB347] to-[#2E8BC0] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button> */}
          {/* <button className="group relative px-8 py-3 bg-gradient-to-r from-[#0B5AA2] to-[#F7941D] hover:from-[#0D6BC2] hover:to-[#FFA942] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0 overflow-hidden">
            <span className="relative z-10 flex items-center gap-3">
              <span> View Full Curriculum</span>
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
              const curriculumSection = document.getElementById("curriculum");
              if (curriculumSection) {
                curriculumSection.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
            className="group relative px-8 py-3 bg-gradient-to-r from-[#0B5AA2] to-[#F7941D] hover:from-[#0D6BC2] hover:to-[#FFA942] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              <span>View Full Curriculum</span>
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
      </div>
    </section>
  );
}

/* ================= HELPER ================= */
function FeatureColumn({ items, visible, direction }) {
  return (
    <div className="space-y-12">
      {items.map((item, i) => (
        <div
          key={i}
          className={`transition-all duration-500 ${
            visible
              ? "opacity-100 translate-x-0"
              : direction === "left"
              ? "opacity-0 -translate-x-6"
              : "opacity-0 translate-x-6"
          }`}
          style={{ transitionDelay: `${i * 100}ms` }}
        >
          <div
            className={`relative ${item.bg} rounded-2xl p-6 border border-slate-200/80 shadow-sm`}
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-slate-200/50 rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-slate-200/50 rounded-br-2xl" />

            <h3
              className="text-xl font-bold mb-3 relative"
              style={{ color: item.color }}
            >
              {item.title}
              <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-current opacity-20 rounded-full" />
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed relative z-10">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
