import { useState, useEffect } from "react";
import { Tag, Sparkles, X, Zap, ArrowRight } from "lucide-react";

export default function FloatingOfferButton() {
  const [isVisible, setIsVisible] = useState(true);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [angle, setAngle] = useState(0);
  const [radius, setRadius] = useState(1);
  const [isHovering, setIsHovering] = useState(false);

  // Close button
  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("floatingOfferClosed", "true");
  };

  // Check if button was previously closed
  useEffect(() => {
    const isClosed = localStorage.getItem("floatingOfferClosed");
    if (isClosed === "true") {
      setIsVisible(false);
    }
  }, []);

  // Revolve animation
  useEffect(() => {
    if (!isVisible) return;

    const orbitRadius = 38; // Percentage of viewport
    const orbitSpeed = isHovering ? 0.2 : 0.5; // Slower when hovering
    const breatheSpeed = 0.002; // Breathing animation speed
    let animationId;

    const animate = () => {
      const time = Date.now() / 1000;

      // Calculate orbit position
      const rad = angle * (Math.PI / 180);
      const x = 50 + orbitRadius * Math.cos(rad);
      const y = 50 + orbitRadius * Math.sin(rad) * 0.5; // Elliptical orbit

      // Breathing effect for radius
      const breathe = Math.sin(time * breatheSpeed * Math.PI * 2) * 0.15 + 1;

      setPosition({ x, y });
      setAngle((prev) => (prev + orbitSpeed) % 360);
      setRadius(isHovering ? 1.05 : breathe); // Static size when hovering

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isVisible, angle, isHovering]);

  // Handle claim offer
  const handleClaimOffer = () => {
    const element = document.getElementById("whatsapp");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Button */}
      <div
        className="fixed z-[9999] pointer-events-none"
        style={{
          left: `${position.x}%`,
          top: `${position.y}%`,
          transform: `translate(-50%, -50%) scale(${radius})`,
          transition: "left 0.1s linear, top 0.1s linear",
        }}
      >
        <div
          className="relative group pointer-events-auto"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Outer glow effect - Blue gradient */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 via-cyan-400/30 to-blue-600/30 rounded-full blur-2xl animate-pulse"></div>

          {/* Inner glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-full blur-md"></div>

          {/* Blue label container with curved design */}
          <div className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 rounded-2xl shadow-2xl border-2 border-white/30 overflow-hidden">
            {/* Blue label header */}
            <div className="relative bg-gradient-to-r from-blue-700/90 to-cyan-600/90 px-4 py-2">
              <div className="flex items-center justify-center gap-2">
                <Zap className="w-4 h-4 text-yellow-300 animate-pulse" />
                <span className="text-white text-xs font-bold tracking-wider">
                  SPECIAL OFFER
                </span>
                <Zap className="w-4 h-4 text-yellow-300 animate-pulse delay-300" />
              </div>
            </div>

            {/* Main content */}
            <div className="px-4 py-3">
              {/* Offer text */}
              <div className="text-center mb-2">
                <div className="text-white text-sm font-semibold mb-1">
                  Enroll Now & Get
                </div>
                <div className="text-2xl font-black bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">
                  30% OFF
                </div>
                <div className="text-white/90 text-xs mt-1">Azure Training</div>
              </div>

              {/* CTA Button */}
              <button
                onClick={handleClaimOffer}
                className="group/btn w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-white to-cyan-100 text-blue-700 font-bold rounded-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
              >
                <span>Register Now</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>

              {/* Code badge */}
              <div className="mt-2 text-center">
                <div className="inline-flex items-center gap-1 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                  <Tag className="w-3 h-3 text-yellow-300" />
                  <span className="text-white text-xs">
                    Code:{" "}
                    <span className="font-bold text-yellow-300">AZURE30</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Sparkle decorations */}
            <div className="absolute top-2 left-2">
              <Sparkles className="w-3 h-3 text-yellow-300/70 animate-pulse" />
            </div>
            <div className="absolute top-2 right-2">
              <Sparkles className="w-3 h-3 text-yellow-300/70 animate-pulse delay-500" />
            </div>

            {/* Bottom accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
          </div>

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 border-2 border-white"
          >
            <X className="w-3 h-3 text-white" />
          </button>

          {/* Floating particles */}
          <div className="absolute -z-10">
            <div className="absolute -top-2 -left-2 w-2 h-2 bg-blue-400/50 rounded-full animate-ping"></div>
            <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-cyan-400/50 rounded-full animate-ping delay-300"></div>
          </div>
        </div>

        {/* Tooltip on hover */}
        <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
          <div className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-xl">
            <div className="flex items-center gap-1">
              <Zap className="w-3 h-3 text-yellow-300" />
              <span>Limited Time Offer!</span>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-blue-700"></div>
          </div>
        </div>
      </div>

      {/* Orbital trail effect */}
      <div className="fixed inset-0 z-[9998] pointer-events-none overflow-hidden">
        <div
          className="absolute w-2 h-2 bg-blue-400/20 rounded-full blur-sm"
          style={{
            left: `${position.x}%`,
            top: `${position.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        ></div>
      </div>

      <style jsx global>{`
        @keyframes float-trail {
          0%,
          100% {
            transform: translateX(0) translateY(0);
            opacity: 0.8;
          }
          25% {
            transform: translateX(5px) translateY(-5px);
            opacity: 0.6;
          }
          50% {
            transform: translateX(0) translateY(-10px);
            opacity: 0.4;
          }
          75% {
            transform: translateX(-5px) translateY(-5px);
            opacity: 0.6;
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        .group:hover .animate-shimmer {
          animation: shimmer 2s infinite linear;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          background-size: 200% 100%;
        }
      `}</style>
    </>
  );
}
