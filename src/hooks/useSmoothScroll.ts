import { useEffect } from "react";

const useSmoothScroll = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    let currentSection = 0;
    let isScrolling = false; // Prevent simultaneous scroll events
    let touchStartY = 0;

    if (sections.length === 0) {
      console.error("No sections found.");
      return;
    }

    const scrollToSection = (index: number) => {
      if (sections[index]) {
        sections[index].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    const debounceScroll = (callback: () => void, delay: number) => {
      if (isScrolling) return;
      isScrolling = true;
      callback();
      setTimeout(() => {
        isScrolling = false;
      }, delay);
    };

    // Handle Wheel Scroll
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      debounceScroll(() => {
        if (e.deltaY > 0) {
          // Scroll down
          if (currentSection < sections.length - 1) {
            currentSection++;
          }
        } else {
          // Scroll up
          if (currentSection > 0) {
            currentSection--;
          }
        }
        scrollToSection(currentSection);
      }, 400);
    };

    // Handle Touch Scroll
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touchEndY = e.touches[0].clientY;
      const touchDelta = touchStartY - touchEndY;

      if (Math.abs(touchDelta) < 30) return; // Ignore small swipes

      e.preventDefault();

      debounceScroll(() => {
        if (touchDelta > 0) {
          // Scroll down
          if (currentSection < sections.length - 1) {
            currentSection++;
          }
        } else {
          // Scroll up
          if (currentSection > 0) {
            currentSection--;
          }
        }
        scrollToSection(currentSection);
      }, 400);
    };

    // Add Event Listeners
    document.addEventListener("wheel", handleWheel, { passive: false });
    document.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    document.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      // Cleanup Event Listeners
      document.removeEventListener("wheel", handleWheel);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);
};

export default useSmoothScroll;
