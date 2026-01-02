import { useEffect, useState } from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MessageCircle,
  Phone,
  ChevronUp,
  X,
} from "lucide-react";

export default function FloatingIcons() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSocial, setShowSocial] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating icons after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="w-5 h-5" />,
      url: "https://www.facebook.com/neeltechno",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      url: "https://www.instagram.com/neeltechnologies/",
      color: "bg-pink-600 hover:bg-pink-700",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      url: "https://x.com/NeelTechnologi1",
      color: "bg-black hover:bg-gray-800",
    },
    {
      name: "YouTube",
      icon: <Youtube className="w-5 h-5" />,
      url: "https://www.youtube.com/channel/UC9IBxs7m2kcSNolSll3AYLA",
      color: "bg-red-600 hover:bg-red-700",
    },
  ];

  const phoneNumber = "916361866299";
  const whatsappNumber = "916361866299";
  const whatsappMessage =
    "Hello, I'm interested in your Azure training courses. Can you provide more information?";

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Social Media Icons (Expandable) */}
      <div
        className={`flex flex-col items-end gap-2 transition-all duration-300 ${
          showSocial
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-10 pointer-events-none"
        }`}
      >
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${social.color} text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group relative`}
            aria-label={social.name}
          >
            {social.icon}
            {/* Tooltip */}
            <div className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
              {social.name}
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45" />
            </div>
          </a>
        ))}
      </div>

      {/* Toggle Social Media Button */}
      <button
        onClick={() => setShowSocial(!showSocial)}
        className={`p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${
          showSocial
            ? "bg-gradient-to-r from-[#0B5AA2] to-[#2E8BC0] text-white"
            : "bg-white text-slate-700 border border-slate-200"
        }`}
        aria-label={showSocial ? "Hide social media" : "Show social media"}
      >
        {showSocial ? (
          <X className="w-5 h-5" />
        ) : (
          <div className="flex items-center">
            <Facebook className="w-3 h-3" />
            <Instagram className="w-3 h-3 ml-[-2px]" />
            <Twitter className="w-3 h-3 ml-[-2px]" />
          </div>
        )}
      </button>

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group relative"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
        {/* Tooltip */}
        <div className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          WhatsApp: {whatsappNumber}
          <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45" />
        </div>
      </button>

      {/* Call Button */}
      <button
        onClick={handleCall}
        className="bg-gradient-to-r from-[#F7941D] to-[#FFB347] text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group relative"
        aria-label="Call us"
      >
        <Phone className="w-5 h-5" />
        {/* Tooltip */}
        <div className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Call: {phoneNumber}
          <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45" />
        </div>
      </button>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="bg-white text-slate-700 p-3 rounded-full shadow-lg hover:shadow-xl border border-slate-200 transition-all duration-300 transform hover:scale-110"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </div>
  );
}
