"use client";

import { FC, useLayoutEffect, useRef, useState } from "react";
import "@/styles/HomePage.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useProps } from "@/context/PropsContext";
import { BlogSection } from "@/components/HomePage/BlogSection";
import { ContactsMobileSection } from "@/components/HomePage/ContactsMobileSection";
import { ContactUsSection } from "@/components/HomePage/ContactUsSection";
import { CONTENT } from "@/app/utils/constants";
import { IntroSection } from "@/components/HomePage/IntroSection";
import { ExperiencesSection } from "./ExperiencesSection";
import { AboutSection } from "./AboutSection";
import { CaseStudySection } from "@/components/HomePage/CaseStudySection";
import useSmoothScroll from "@/hooks/useSmoothScroll";

gsap.registerPlugin(ScrollTrigger);

export const HomePage: FC = () => {
  const handleProps = useProps();
  const mainRef = useRef<HTMLDivElement>(null);
  const verticalScrollRef = useRef<HTMLDivElement>(null);
  const [isIntroSection, setIsIntroSection] = useState<boolean>(true);

  useLayoutEffect(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    ScrollTrigger.defaults({
      scroller: "body",
    });
    const handleSectionBackground = (section: Element) => {
      const sectionClass = getSectionClassname(section.className);
      setIsIntroSection(sectionClass === "section__intro");
      handleProps(sectionClass);
    };
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 60%",
        end: "bottom 40%",
        invalidateOnRefresh: true,
        fastScrollEnd: true,
        onEnter: () => handleSectionBackground(section),
        onEnterBack: () => handleSectionBackground(section),
      });
    });
  }, []);

  // useEffect(() => {
  //   const smoothScroll = () => {
  //     const sections = document.querySelectorAll('section');
  //     let currentSection = 0;
  //     const scrollToSection = (index:number) => {
  //       sections[index].scrollIntoView({
  //         behavior: 'smooth',
  //         block: 'start',
  //         inline: 'nearest',
  //       });
  //     };
  //     const handleScroll = (e: any) => {
  //       if (e.deltaY > 0) {
  //         if (currentSection < sections.length - 1) {
  //           currentSection++;
  //         }
  //       } else {
  //         if (currentSection > 0) {
  //           currentSection--;
  //         }
  //       }
  //       currentSection = Math.max(0, Math.min(currentSection, sections.length - 1));
  //       scrollToSection(currentSection);
  //     };
  //     document.addEventListener('wheel', handleScroll);
  //     return () => {
  //       document.removeEventListener('wheel', handleScroll);
  //     };
  //   };
  //   smoothScroll();
  // }, []);

  const getSectionClassname = (text: string) => {
    const classes = text.split(" ");
    return classes.find((className) => className.startsWith("section__")) || "";
  };
  useSmoothScroll();

  return (
    <div className="home-container md:px-24">
      <main ref={mainRef}>
        <div className="vertical-scroll" ref={verticalScrollRef}>
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