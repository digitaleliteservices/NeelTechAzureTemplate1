import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    // Add hover effect for links and buttons
    const handleLinkHoverEvents = () => {
      document.querySelectorAll("a, button, [role='button']").forEach((el) => {
        el.addEventListener("mouseover", () => setLinkHovered(true));
        el.addEventListener("mouseout", () => setLinkHovered(false));
      });
    };

    addEventListeners();
    handleLinkHoverEvents();

    return () => {
      removeEventListeners();
    };
  }, []);

  // Don't render on mobile/touch devices
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches
  ) {
    return null;
  }

  const cursorClasses = `
    fixed pointer-events-none z-[9999] transition-transform duration-100 ease-out
    ${hidden ? "opacity-0" : "opacity-100"}
    ${clicked ? "scale-75" : "scale-100"}
    ${linkHovered ? "scale-125" : ""}
  `;

  return (
    <>
      {/* Main cursor dot */}
      <div
        className={cursorClasses}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${clicked ? 0.75 : 1})`,
        }}
      >
        <div className="relative">
          {/* Outer ring */}
          <div
            className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
              linkHovered
                ? "border-[#0B5AA2] bg-[#0B5AA2]/10"
                : "border-[#0B5AA2]"
            }`}
          />

          {/* Inner dot */}
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-100 ${
              linkHovered ? "w-3 h-3 bg-[#F7941D]" : "w-2 h-2 bg-[#0B5AA2]"
            }`}
          />
        </div>
      </div>

      {/* Follower circle */}
      <div
        className="fixed pointer-events-none z-[9998] w-12 h-12 rounded-full border border-[#0B5AA2]/30 transition-all duration-300 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${clicked ? 0.9 : 1})`,
          opacity: hidden ? 0 : 0.5,
        }}
      />
    </>
  );
}
