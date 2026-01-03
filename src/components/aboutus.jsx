import { useEffect, useRef, useState } from "react";
import azurelogo from "../../public/assets/azure_new.png";

export default function AboutUs() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.25 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="aboutus"
      ref={ref}
      className="relative overflow-hidden bg-white scroll-mt-[140px] pt-[100px] pb-28"
    >
      {/* ================= DOT PATTERN ================= */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(11,90,162,0.15) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      {/* ================= GRID OVERLAY ================= */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(11,90,162,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(11,90,162,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* ================= CORNER BLOBS ================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-[#0B5AA2]/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] bg-[#F7941D]/30 rounded-full blur-3xl" />
      </div>

      <div
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-opacity duration-700 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* ================= CENTERED BADGE ================= */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex items-center px-7 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 shadow-lg">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B5AA2] to-[#2E8BC0] text-sm font-bold tracking-widest uppercase">
              ABOUT US
            </span>
          </div>
        </div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT – IMAGE */}
          <div
            className={`flex justify-center transition-all duration-700 ${
              visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl">
              <img
                src={azurelogo}
                alt="Azure Training Institute"
                className="w-full max-w-xs lg:max-w-sm object-contain"
              />
            </div>
          </div>

          {/* RIGHT – TEXT */}
          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Trusted Microsoft Azure Training
              <br />
              <span className="text-[#0B5AA2]">
                Built for Real-World Cloud Careers
              </span>
            </h2>

            <p className="mt-6 text-base md:text-lg text-slate-700 leading-relaxed">
              We at <strong>Neel Technologies</strong> are a professional
              training institute specializing in{" "}
              <strong>Microsoft Azure certification programs</strong>. Our
              mission is to help students and working professionals acquire
              practical, job-ready cloud skills aligned with real industry
              requirements.
            </p>

            <p className="mt-4 text-base md:text-lg text-slate-700 leading-relaxed">
              Through expert-led sessions, hands-on Azure labs, and
              certification-focused curriculum, we prepare learners for roles
              such as <strong>Azure Administrator</strong>,{" "}
              <strong>Developer</strong>, and{" "}
              <strong>Solutions Architect</strong>.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                "Industry-Aligned Curriculum",
                "Hands-On Azure Labs",
                "Certified Azure Trainers",
                "Career & Certification Guidance",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-700">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0B5AA2]" />
                  <span className="text-sm md:text-base font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= YOUTUBE VIDEO SECTION ================= */}
        {/* <div
          className={`mt-24 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
              Get a Glimpse of Our Azure Training
            </h3>
            <p className="mt-3 text-slate-600 text-base">
              Watch how our training approach helps learners build real-world
              Azure expertise.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-black">
            <div className="relative w-full pt-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/SiK6n-_W6-g"
                title="Neel Technologies Azure Training"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
