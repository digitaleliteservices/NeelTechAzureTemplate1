import { useState, useEffect } from "react";
import { X, Clock, Zap, Sparkles, ArrowRight } from "lucide-react";

export default function OfferBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(48 * 60 * 60); // 48 hours in seconds

  // Close banner
  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("offerBannerClosed", "true");
  };

  // Check if banner was previously closed
  useEffect(() => {
    const isClosed = localStorage.getItem("offerBannerClosed");
    if (isClosed === "true") {
      setIsVisible(false);
    }
    setIsMounted(true);
  }, []);

  // Countdown timer
  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Format time
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  if (!isVisible || !isMounted) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] animate-slideDown">
      {/* Main Banner */}
      <div className="relative bg-gradient-to-r from-[#FF512F] via-[#F09819] to-[#FF512F] py-3 px-4 border-b border-white/10 shadow-2xl">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shimmer_2s_infinite]"></div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-[float_3s_ease-in-out_infinite]"></div>
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-white/40 rounded-full animate-[float_3s_ease-in-out_infinite_300ms]"></div>
          <div className="absolute bottom-1/4 left-2/3 w-1 h-1 bg-white/20 rounded-full animate-[float_3s_ease-in-out_infinite_500ms]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Left Content */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Premium badge */}
              <div className="relative">
                <div className="flex items-center gap-1.5 bg-gradient-to-r from-white/30 to-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/20">
                  <Sparkles className="w-3.5 h-3.5 text-white animate-pulse" />
                  <span className="text-white text-xs font-bold tracking-wider">
                    LIMITED OFFER
                  </span>
                </div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
              </div>

              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="text-lg font-bold bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent">
                    🎉 30% OFF Azure Courses
                  </div>
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
                </div>
              </div>

              {/* Desktop countdown */}
              <div className="hidden lg:flex items-center gap-2 bg-black/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
                <Clock className="w-4 h-4 text-yellow-300" />
                <span className="text-white text-sm font-medium">Ends in</span>
                <div className="font-mono font-bold text-white text-sm bg-black/30 px-2 py-1 rounded">
                  {formatTime(timeLeft)}
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex items-center gap-3">
              <div className="hidden md:block">
                <div className="flex items-center gap-2">
                  <span className="text-white/90 text-sm">Use code:</span>
                  <div className="relative">
                    <div className="font-bold bg-gradient-to-r from-white to-yellow-100 text-transparent bg-clip-text px-2 py-1 text-sm">
                      AZURE30
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-yellow-100/20 blur-sm -z-10"></div>
                  </div>
                </div>
              </div>

              <a
                href="#whatsapp"
                className="group relative overflow-hidden px-5 py-2.5 bg-gradient-to-r from-white to-yellow-100 text-[#FF512F] font-bold rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03] shadow-lg"
              >
                <div className="relative z-10 flex items-center gap-2">
                  <span>Claim Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              <button
                onClick={handleClose}
                className="text-white/80 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all duration-300"
                aria-label="Close banner"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mobile Countdown */}
          <div className="md:hidden mt-3 pt-3 border-t border-white/10">
            <div className="flex items-center justify-center gap-3">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-yellow-300" />
                <span className="text-white text-sm">Ends in</span>
              </div>
              <div className="font-mono font-bold text-white text-sm bg-black/30 px-3 py-1.5 rounded-lg">
                {formatTime(timeLeft)}
              </div>
            </div>
          </div>
        </div>

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-white/30 rounded-tl-lg"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-r border-t border-white/30 rounded-tr-lg"></div>
      </div>

      {/* Add CSS animations directly in style tag */}
      <style jsx global>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-10px) translateX(5px);
            opacity: 0.4;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-slideDown {
          animation: slideDown 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards !important;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}
