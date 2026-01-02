import { useEffect, useState } from "react";

export default function AzureCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    // Check for hoverable elements
    const handleHoverEvents = () => {
      const hoverSelectors =
        "a, button, input, textarea, [role='button'], [data-cursor='hover']";
      document.querySelectorAll(hoverSelectors).forEach((el) => {
        el.addEventListener("mouseenter", () => setHovered(true));
        el.addEventListener("mouseleave", () => setHovered(false));
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    setTimeout(handleHoverEvents, 100); // Small delay to ensure DOM is ready

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // Don't show on touch devices
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches
  ) {
    return null;
  }

  return (
    <>
      {/* Azure Cloud-inspired cursor */}
      <div
        className="fixed pointer-events-none z-[9999] transition-all duration-75 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${
            clicked ? 0.8 : hovered ? 1.2 : 1
          })`,
          opacity: hidden ? 0 : 1,
        }}
      >
        {/* Cloud shape */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          className={`transition-all duration-200 ${
            hovered ? "text-[#F7941D]" : "text-[#0B5AA2]"
          }`}
        >
          <path
            fill="currentColor"
            d="M23 14c0-3.31-2.69-6-6-6-2.83 0-5.2 1.97-5.82 4.62C7.88 13.5 6 15.61 6 18c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5 0-2.76-2.24-5-5-5z"
          />
        </svg>
      </div>

      {/* Pulse effect */}
      <div
        className="fixed pointer-events-none z-[9998] transition-all duration-500 ease-out rounded-full"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${hovered ? 1.5 : 1})`,
          width: hovered ? "60px" : "40px",
          height: hovered ? "60px" : "40px",
          background: `radial-gradient(circle, ${
            hovered ? "#F7941D20" : "#0B5AA210"
          } 0%, transparent 70%)`,
          opacity: hidden ? 0 : 0.7,
        }}
      />
    </>
  );
}
