"use client";

import { FC, useEffect, useLayoutEffect, useRef, useState } from "react";
import "@/styles/HomePage.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BlogSection } from "@/components/HomePage/BlogSection";
import { ContactsMobileSection } from "@/components/HomePage/ContactsMobileSection";
import { ContactUsSection } from "@/components/HomePage/ContactUsSection";
import { CONTENT } from "@/app/utils/constants";
import { IntroSection } from "@/components/HomePage/IntroSection";
import { ExperiencesSection } from "./ExperiencesSection";
import { AboutSection } from "./AboutSection";
import { CaseStudySection } from "@/components/HomePage/CaseStudySection";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import { store } from "@/store/store";

gsap.registerPlugin(ScrollTrigger);

export const HomePage: FC = () => {
  const { isMenuOpen, setSectionClassName } = store();
  const mainRef = useRef<HTMLDivElement>(null);
  const verticalScrollRef = useRef<HTMLDivElement>(null);
  const [isIntroSection, setIsIntroSection] = useState<boolean>(true);

  // useEffect(() => {
  //   // const scrollContainers = document.querySelector(".scroll-container");
  //   const scrollContainers = mainRef.current;
  //   console.log("scrollContainers ", scrollContainers);
  //   if (!scrollContainers) return;
  //   ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   ScrollTrigger.defaults({
  //     scroller: scrollContainers,
  //   });
  //   const handleSectionBackground = (section: Element) => {
  //     console.log("sectionClass ", section);
  //     const sectionClass = getSectionClassname(section.className);
  //     setIsIntroSection(sectionClass === "section__intro");
  //     setSectionClassName(sectionClass);
  //   };
  //   const sections = document.querySelectorAll("section");
  //   console.log("sectionssssss ", sections);
  //   sections.forEach((section) => {
  //     ScrollTrigger.create({
  //       trigger: section,
  //       start: "top 60%",
  //       end: "bottom 40%",
  //       invalidateOnRefresh: true,
  //       fastScrollEnd: true,
  //       onEnter: () => handleSectionBackground(section),
  //       onEnterBack: () => handleSectionBackground(section),
  //     });
  //   });
  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, []);

  useEffect(() => {
    const handleSectionEnter = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Trigger the action when the section enters the viewport
          const sectionClass = getSectionClassname(
            (entry.target as Element).className
          );
          console.log("sectionClass ", sectionClass);
          setIsIntroSection(sectionClass === "section__intro");
          setSectionClassName(sectionClass);
        }
      });
    };

    // Create a new IntersectionObserver
    const observer = new IntersectionObserver(handleSectionEnter, {
      root: null, // Observe visibility relative to the viewport
      threshold: 0.5, // Trigger when 50% of the section is visible
    });

    // Observe all sections
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    // Cleanup on unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  const getSectionClassname = (text: string) => {
    const classes = text.split(" ");
    return classes.find((className) => className.startsWith("section__")) || "";
  };
  useSmoothScroll();

  return (
    <div className="home-container md:px-24">
      <main ref={mainRef}>
        <div
          className={`vertical-scroll nav-menu  ${isMenuOpen ? "open" : ""}`}
          ref={verticalScrollRef}
        >
          <IntroSection
            content={CONTENT.intro}
            buttonHref="#contact-us"
            isIntroSection={isIntroSection}
            // videoSrc="intro-video.mp4"
          />
          <AboutSection
            mainContent={CONTENT.about}
            buttonHref="/about"
            imgSrc="/eon-studios-white.png"
            imgAlt="eon-studios"
          />
          <ExperiencesSection
            mainContent={CONTENT.experiences}
            buttonHref="/services"
            imgSrc="/experiences.jpg"
            imgAlt="experiences"
          />
          <CaseStudySection
            mainContent={CONTENT.casestudy}
            buttonHref="/case-study"
            imgSrc="/case-study.jpg"
            imgAlt="case-study"
            imgClass="w-full h-full"
          />
          <BlogSection />
          <ContactUsSection />
          <ContactsMobileSection />
        </div>
      </main>
    </div>
  );
};
