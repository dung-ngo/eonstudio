import gsap from "gsap";
import "@/styles/components/Scrollbar.css";
import { Draggable } from "gsap/Draggable";
import { useEffect, useRef } from "react";
import { store } from "@/store";

export const CustomScrollbar = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { scrollbarColor } = store();
  gsap.registerPlugin(Draggable);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollContentRef = useRef<HTMLDivElement>(null);
  const customThumbRef = useRef<HTMLDivElement>(null);
  console.log(
    "current1 ",
    scrollContainerRef,
    scrollContentRef,
    customThumbRef
  );

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const scrollContent = scrollContentRef.current;
    const customThumb = customThumbRef.current;

    console.log("current2 ", scrollContainer, scrollContent, customThumb);

    if (scrollContainer && scrollContent && customThumb) {
      // Update the height of the thumb dynamically
      const updateThumbHeight = () => {
        const containerHeight = scrollContainer.offsetHeight;
        const contentHeight = scrollContent.scrollHeight;
        const thumbHeight = Math.max(
          (containerHeight / contentHeight) * containerHeight,
          30 // Minimum thumb height
        );
        customThumb.style.height = `${thumbHeight}px`;
      };

      updateThumbHeight();

      // Sync thumb position with scroll
      const syncThumbPosition = () => {
        const scrollTop = scrollContent.scrollTop;
        const maxScrollTop =
          scrollContent.scrollHeight - scrollContent.clientHeight;
        const thumbMaxTop =
          scrollContainer.clientHeight - customThumb.offsetHeight;

        const thumbTop = (scrollTop / maxScrollTop) * thumbMaxTop;

        gsap.to(customThumb, {
          y: thumbTop,
          duration: 0.2, // Smooth animation duration
          ease: "power2.out",
        });
      };

      scrollContent.addEventListener("scroll", syncThumbPosition);

      const maxScrollTop =
        scrollContent.scrollHeight - scrollContent.clientHeight;

      Draggable.create(customThumb, {
        type: "y",
        bounds: scrollContainer,
        onDrag: function () {
          const thumbMaxTop =
            scrollContainer.clientHeight - customThumb.offsetHeight;
          const scrollTop = (this.y / thumbMaxTop) * maxScrollTop;

          scrollContent.scrollTop = scrollTop;
        },
        onPress: () => {
          gsap.to(customThumb, { scale: 1.2, duration: 0.2 }); // Highlight the thumb on drag
        },
        onRelease: () => {
          gsap.to(customThumb, { scale: 1.2, duration: 0.2 }); // Reset thumb size
        },
      });

      // Clean up event listeners on unmount
      return () => {
        scrollContent.removeEventListener("scroll", syncThumbPosition);
      };
    }
  }, []);

  return (
    <div className="scroll-container" ref={scrollContainerRef}>
      <div className="scroll-content" ref={scrollContentRef}>
        {children}
      </div>
      <div className="custom-scrollbar">
        <div
          className="custom-thumb"
          style={{ backgroundColor: scrollbarColor }}
          ref={customThumbRef}
        ></div>
      </div>
    </div>
  );
};

export default CustomScrollbar;
