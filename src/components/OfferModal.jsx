import { useState, useEffect } from "react";
import { X, Clock, Zap, Gift, CheckCircle } from "lucide-react";

export default function OfferModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(2 * 60 * 60); // 2 hours for urgency

  // Show modal after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenModal = localStorage.getItem("offerModalSeen");
      if (!hasSeenModal) {
        setIsVisible(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Countdown timer
  useEffect(() => {
    if (timeLeft <= 0 || !isVisible) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isVisible]);

  // Format time
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("offerModalSeen", "true");
  };

  const handleClaimOffer = () => {
    const element = document.getElementById("whatsapp");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="relative max-w-md w-full animate-scaleIn">
        {/* Modal Content */}
        <div className="relative bg-gradient-to-br from-white via-blue-50 to-orange-50 rounded-2xl overflow-hidden shadow-2xl border-3 border-orange-100">
          {/* Header */}
          <div className="relative bg-gradient-to-r from-[#FF6B6B] via-[#FF8E53] to-[#FF6B6B] py-5 px-6 text-center">
            {/* Animated sparkles */}
            <div className="absolute top-2 left-3 w-8 h-8 bg-white/20 rounded-full animate-pulse" />
            <div className="absolute top-2 right-3 w-6 h-6 bg-white/20 rounded-full animate-pulse delay-300" />

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <Zap className="w-5 h-5 text-white animate-pulse" />
                <span className="text-white text-xs font-bold tracking-widest">
                  FLASH OFFER
                </span>
                <Zap className="w-5 h-5 text-white animate-pulse delay-200" />
              </div>

              <h2 className="text-2xl font-bold text-white mb-1">🎉 30% OFF</h2>
              <p className="text-white/90 text-sm">
                Limited Time Azure Training Offer
              </p>
            </div>
          </div>

          {/* Body - Compact */}
          <div className="p-5">
            {/* Countdown Timer */}
            <div className="mb-5 text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0B5AA2]/5 to-[#F7941D]/5 px-4 py-2 rounded-full mb-3">
                <Clock className="w-4 h-4 text-[#FF6B6B]" />
                <span className="text-slate-700 text-sm font-medium">
                  Ends in:
                </span>
                <div className="text-xl font-bold text-[#FF6B6B] font-mono">
                  {formatTime(timeLeft)}
                </div>
              </div>

              {/* Discount Code */}
              <div className="mb-5">
                <div className="text-slate-600 text-xs mb-1">
                  Use discount code:
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-[#0B5AA2] to-[#F7941D] bg-clip-text text-transparent">
                  AZURE30
                </div>
              </div>

              {/* Benefits - Compact */}
              <div className="grid grid-cols-2 gap-2 mb-5">
                <div className="flex items-start gap-2 text-slate-700 text-xs">
                  <CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Save ₹15,000+</span>
                </div>
                <div className="flex items-start gap-2 text-slate-700 text-xs">
                  <CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>All certifications</span>
                </div>
                <div className="flex items-start gap-2 text-slate-700 text-xs">
                  <CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Free career guidance</span>
                </div>
                <div className="flex items-start gap-2 text-slate-700 text-xs">
                  <CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Only 10 spots left</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3">
                <button
                  onClick={handleClaimOffer}
                  className="px-6 py-3 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] text-white font-bold rounded-full hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 text-sm"
                >
                  <span className="flex items-center justify-center gap-1.5">
                    <Gift className="w-4 h-4" />
                    Claim 30% Discount
                  </span>
                </button>

                <button
                  onClick={handleClose}
                  className="px-6 py-3 bg-white text-slate-600 text-sm font-medium rounded-full border border-slate-200 hover:border-slate-300 transition-all duration-200"
                >
                  Maybe Later
                </button>
              </div>
            </div>

            {/* Footer Note */}
            <div className="text-center text-slate-400 text-xs pt-2 border-t border-slate-100">
              <p>⚠️ Valid for first 10 enrollments only</p>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-2.5 right-2.5 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all duration-200"
          >
            <X className="w-4 h-4 text-slate-600" />
          </button>

          {/* Decorative Elements */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] rounded-full" />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF6B6B]/30 to-transparent" />
        </div>
      </div>

      <style jsx>{`
        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-scaleIn {
          animation: scaleIn 0.25s ease-out;
        }
      `}</style>
    </div>
  );
}
