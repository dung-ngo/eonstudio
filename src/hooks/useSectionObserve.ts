"use client";

import { useEffect, useRef } from "react";
import { getSectionClassname } from "@/app/utils/helpers";
import { store } from "@/store";

const useSectionObserve = () => {
  const { setIsIntroSection, setSectionClassName } = store();
  const lastLoggedSection = useRef<string | null>(null);

  useEffect(() => {
    const handleSectionEnter = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Trigger the action when the section enters the viewport
          const sectionClass = getSectionClassname(
            (entry.target as Element).className
          );

          // Log only if the section is different from the last logged one
          if (lastLoggedSection.current !== sectionClass) {
            console.log("New intersection:", sectionClass);
            lastLoggedSection.current = sectionClass;
            setSectionClassName(sectionClass);
            setIsIntroSection(sectionClass === "section__intro");
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleSectionEnter, {
      root: null,
      threshold: 0.0001,
    });

    const sections = Array.from(document.querySelectorAll("section"));
    sections.forEach((section) => observer.observe(section));

    // Clearn up unmount
    return () => observer.disconnect();
  }, []);
};

export default useSectionObserve;
