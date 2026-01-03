import { useState, useEffect, useRef, useCallback } from "react";
import {
  X,
  MessageCircle,
  Clock,
  ChevronRight,
  Percent,
  Sparkles,
  Zap,
  Users,
  Gift,
} from "lucide-react";

export default function SideFloatOffer() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isVibrating, setIsVibrating] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [showMiniIcon, setShowMiniIcon] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const vibrationTimer = useRef(null);
  const scrollTimer = useRef(null);
  const countdownTimer = useRef(null);
  const isClosing = useRef(false); // Add ref to track closing state

  // Calculate end time (5 days from now)
  const calculateTimeLeft = () => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 5);
    endDate.setHours(23, 59, 59, 999);

    const now = new Date();
    const difference = endDate.getTime() - now.getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  // Handle scroll to show/hide the offer - FIXED
  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimer.current) {
        clearTimeout(scrollTimer.current);
      }

      scrollTimer.current = setTimeout(() => {
        const scrollPosition = window.scrollY;
        const offerClosed =
          localStorage.getItem("sideFloatOfferClosed") === "true";

        if (isClosing.current) return; // Don't interfere if closing

        // Show offer after scrolling 300px if not closed
        if (scrollPosition > 300 && !offerClosed) {
          setIsVisible(true);
          setShowMiniIcon(false);
          setIsClosed(false);
        } else if (scrollPosition < 100) {
          setIsVisible(false);
        }

        // Show mini icon when scrolled down and offer is closed
        if (scrollPosition > 300 && offerClosed) {
          setShowMiniIcon(true);
        } else if (scrollPosition < 100) {
          setShowMiniIcon(false);
        }
      }, 150);
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check
    setTimeout(() => {
      const scrollPosition = window.scrollY;
      const offerClosed =
        localStorage.getItem("sideFloatOfferClosed") === "true";

      if (scrollPosition > 300 && !offerClosed) {
        setIsVisible(true);
      } else if (scrollPosition > 300 && offerClosed) {
        setShowMiniIcon(true);
      }
    }, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimer.current) {
        clearTimeout(scrollTimer.current);
      }
    };
  }, []); // Remove isClosed dependency to avoid re-triggering

  // Countdown timer
  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    countdownTimer.current = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      if (countdownTimer.current) {
        clearInterval(countdownTimer.current);
      }
    };
  }, []);

  // Vibration effect
  useEffect(() => {
    if (!isVisible || isHovering || isClosed) return;

    const vibrateCycle = () => {
      setIsVibrating(true);
      setTimeout(() => {
        setIsVibrating(false);
      }, 3000);
    };

    const initialDelay = setTimeout(vibrateCycle, 1000);
    vibrationTimer.current = setInterval(vibrateCycle, 7000);

    return () => {
      clearTimeout(initialDelay);
      if (vibrationTimer.current) {
        clearInterval(vibrationTimer.current);
      }
    };
  }, [isVisible, isHovering, isClosed]);

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/916361866299?text=Hello!%20I%20want%20to%20claim%20the%2030%%20offer%20on%20Azure%20training%20that%20ends%20in%20" +
        `${timeLeft.days}%20days.%20Please%20share%20details%20and%20help%20me%20enroll.`,
      "_blank"
    );
  };

  // FIXED: Handle close with proper state management
  const handleClose = useCallback(() => {
    if (isClosing.current) return; // Prevent multiple calls

    isClosing.current = true;

    // Clear any pending scroll timers
    if (scrollTimer.current) {
      clearTimeout(scrollTimer.current);
    }

    // Update state in the correct order
    setIsVisible(false);
    setIsClosed(true);
    setShowMiniIcon(true);

    // Store in localStorage
    localStorage.setItem("sideFloatOfferClosed", "true");

    // Reset closing flag after state updates
    setTimeout(() => {
      isClosing.current = false;
    }, 100);
  }, []);

  // FIXED: Handle reopen
  const handleReopen = useCallback(() => {
    // Clear localStorage first
    localStorage.removeItem("sideFloatOfferClosed");

    // Update state
    setIsClosed(false);
    setIsVisible(true);
    setShowMiniIcon(false);
  }, []);

  // Check localStorage on mount - FIXED
  useEffect(() => {
    const wasClosed = localStorage.getItem("sideFloatOfferClosed") === "true";
    if (wasClosed) {
      setIsClosed(true);
      setIsVisible(false);
      setShowMiniIcon(true);
    }
  }, []);

  // Format time units to always show 2 digits
  const formatTime = (time) => time.toString().padStart(2, "0");

  // Main offer component
  const OfferCard = () => (
    <div
      className={`fixed left-4 top-1/2 -translate-y-1/2 z-[9997] transition-all duration-500 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
      }`}
    >
      <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className={`relative bg-gradient-to-br from-red-500 via-red-600 to-red-700 text-white rounded-2xl shadow-2xl p-6 w-80 transform transition-all duration-300 ${
          isVibrating && !isHovering ? "animate-premium-vibrate" : ""
        } ${isHovering ? "scale-105 shadow-3xl" : ""}`}
      >
        {/* Animated background effect */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 to-red-800/10" />
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 animate-shimmer" />
        </div>

        {/* Close button - FIXED: Added pointer-events-auto and stopPropagation */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent event bubbling
            handleClose();
          }}
          className="absolute -top-2 -right-2 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-50 transition-all duration-200 z-10 hover:scale-110 pointer-events-auto"
          title="Close offer"
        >
          <X className="w-4 h-4 text-red-600" />
        </button>

        {/* Premium urgent badge */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider shadow-lg flex items-center gap-2 z-20">
          <Zap className="w-3 h-3" />
          <span>EXCLUSIVE OFFER</span>
          <Zap className="w-3 h-3" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Header with icon */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-black">30%</div>
                  <div className="text-[10px] font-bold opacity-90">OFF</div>
                </div>
              </div>
              <Sparkles className="absolute -top-2 -right-2 w-4 h-4 text-yellow-300 animate-pulse" />
            </div>
            <div>
              <h3 className="text-xl font-bold leading-tight">
                Azure Cloud Training
              </h3>
              <p className="text-sm text-red-100 opacity-90 mt-1">
                Limited Time Special Offer
              </p>
            </div>
          </div>

          {/* Premium Countdown Timer */}
          <div className="bg-gradient-to-br from-red-800/40 to-red-900/40 rounded-xl p-4 mb-6 backdrop-blur-sm border border-white/10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Clock className="w-4 h-4 text-red-200" />
              <span className="text-sm font-semibold text-red-100">
                OFFER ENDS IN
              </span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[
                {
                  value: formatTime(timeLeft.days),
                  label: "Days",
                  color: "from-yellow-400 to-orange-400",
                },
                {
                  value: formatTime(timeLeft.hours),
                  label: "Hours",
                  color: "from-orange-400 to-red-400",
                },
                {
                  value: formatTime(timeLeft.minutes),
                  label: "Minutes",
                  color: "from-red-400 to-red-500",
                },
                {
                  value: formatTime(timeLeft.seconds),
                  label: "Seconds",
                  color: "from-red-500 to-red-600",
                },
              ].map((unit, i) => (
                <div key={i} className="text-center">
                  <div
                    className={`bg-gradient-to-br ${unit.color} rounded-lg py-2 px-1 shadow-inner`}
                  >
                    <div className="text-xl font-black text-white drop-shadow-sm">
                      {unit.value}
                    </div>
                  </div>
                  <div className="text-[10px] text-red-200 mt-1.5 font-medium">
                    {unit.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-red-300/30 to-transparent rounded-full mt-3" />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-white/10 rounded-lg p-3 text-center backdrop-blur-sm">
              <div className="flex items-center justify-center gap-2">
                <Users className="w-4 h-4" />
                <span className="text-lg font-bold">142</span>
              </div>
              <div className="text-[11px] text-red-200 mt-1">
                Enrolled Today
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 text-center backdrop-blur-sm">
              <div className="flex items-center justify-center gap-2">
                <Gift className="w-4 h-4" />
                <span className="text-lg font-bold">5</span>
              </div>
              <div className="text-[11px] text-red-200 mt-1">Seats Left</div>
            </div>
          </div>

          {/* Premium CTA Button */}
          <button
            onClick={handleWhatsAppClick}
            className={`w-full bg-gradient-to-r from-white to-yellow-50 text-red-600 font-bold py-4 rounded-xl shadow-xl hover:shadow-2xl transform transition-all duration-300 flex items-center justify-center gap-3 group ${
              isHovering ? "scale-105" : ""
            }`}
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm">CLAIM 30% DISCOUNT NOW</span>
            <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-gradient-to-br from-red-800/30 to-red-900/20 rounded-full blur-lg" />
        <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-red-800/30 to-red-900/20 rounded-full blur-lg" />

        {/* Floating particles during vibration */}
        {isVibrating && !isHovering && (
          <>
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-yellow-300 rounded-full animate-ping" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-yellow-300 rounded-full animate-ping delay-300" />
            <div className="absolute -top-2 -right-2 w-3 h-3 bg-orange-400 rounded-full animate-ping delay-500" />
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-orange-400 rounded-full animate-ping delay-700" />
          </>
        )}
      </div>
    </div>
  );

  // Premium Mini Icon
  const PremiumMiniIcon = () => (
    <div
      className={`fixed left-4 top-1/2 -translate-y-1/2 z-[9996] transition-all duration-500 ${
        showMiniIcon ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
      }`}
    >
      <button
        onClick={handleReopen}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="group relative bg-gradient-to-br from-red-500 via-red-600 to-red-700 text-white rounded-full shadow-2xl hover:shadow-3xl p-4 transform transition-all duration-300 hover:scale-110 pointer-events-auto"
        title="🔥 30% OFF Azure Training"
      >
        {/* Animated background */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 to-red-800/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_50%)]" />
        </div>

        {/* Main content */}
        <div className="relative w-10 h-10 flex items-center justify-center">
          {/* Animated ring */}
          <div className="absolute inset-0 border-2 border-yellow-300/30 rounded-full animate-pulse"></div>

          {/* Percentage symbol */}
          <div className="relative">
            <Percent className="w-7 h-7 font-bold" />
            <div className="absolute -top-1.5 -right-1.5 bg-white text-red-600 rounded-full w-5 h-5 flex items-center justify-center shadow-md">
              <span className="text-[10px] font-black">30</span>
            </div>
          </div>

          {/* Sparkle effects */}
          <Sparkles className="absolute -top-1 -left-1 w-3 h-3 text-yellow-300 animate-ping" />
          <Sparkles className="absolute -bottom-1 -right-1 w-2 h-2 text-yellow-300 animate-ping delay-300" />
        </div>

        {/* Tooltip */}
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-3 bg-white text-red-600 px-4 py-3 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none scale-95 group-hover:scale-100 z-50">
          <div className="flex items-center gap-2 mb-1">
            <Zap className="w-3 h-3 text-yellow-500" />
            <div className="text-sm font-bold">30% OFFER ACTIVE</div>
            <Zap className="w-3 h-3 text-yellow-500" />
          </div>
          <div className="text-xs text-gray-600">
            {timeLeft.days} days {timeLeft.hours}h remaining
          </div>
          <div className="text-xs font-medium text-red-500 mt-1">
            Click to claim →
          </div>
          <div className="absolute top-1/2 -left-1 transform -translate-y-1/2 w-2 h-2 bg-white rotate-45"></div>
        </div>

        {/* Bounce arrow */}
        <ChevronRight className="absolute -right-2 top-1/2 transform -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 w-5 h-5 group-hover:animate-bounce-right" />

        {/* Hover glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/20 to-red-500/20 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
      </button>
    </div>
  );

  return (
    <>
      {!isClosed && isVisible && <OfferCard />}
      {isClosed && showMiniIcon && <PremiumMiniIcon />}

      {/* Animation styles */}
      <style jsx>{`
        @keyframes premium-vibrate {
          0% {
            transform: translateX(0) rotate(0deg);
            box-shadow: 0 25px 50px -12px rgba(239, 68, 68, 0.4);
          }
          20% {
            transform: translateX(4px) rotate(0.5deg);
            box-shadow: 0 35px 60px -15px rgba(239, 68, 68, 0.6);
          }
          40% {
            transform: translateX(-4px) rotate(-0.5deg);
            box-shadow: 0 30px 55px -15px rgba(239, 68, 68, 0.7);
          }
          60% {
            transform: translateX(3px) rotate(0.3deg);
            box-shadow: 0 25px 50px -12px rgba(239, 68, 68, 0.6);
          }
          80% {
            transform: translateX(-2px) rotate(-0.2deg);
            box-shadow: 0 20px 45px -12px rgba(239, 68, 68, 0.5);
          }
          100% {
            transform: translateX(0) rotate(0deg);
            box-shadow: 0 25px 50px -12px rgba(239, 68, 68, 0.4);
          }
        }

        @keyframes bounce-right {
          0%,
          100% {
            transform: translate(-50%, -50%) translateX(0);
          }
          50% {
            transform: translate(-50%, -50%) translateX(4px);
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

        .animate-premium-vibrate {
          animation: premium-vibrate 3s ease-in-out;
        }

        .animate-bounce-right {
          animation: bounce-right 0.6s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite linear;
        }
      `}</style>
    </>
  );
}
