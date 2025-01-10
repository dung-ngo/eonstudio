"use client";

import { FC } from "react";
import "@/styles/components/HomePage.css";
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
import { store } from "@/store";
import useSectionObserve from "@/hooks/useSectionObserve";

gsap.registerPlugin(ScrollTrigger);

export const HomePage: FC = () => {
  const { isMenuOpen, isIntroSection } = store();

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
  //     const sectionClass = getSectionClassname(section.className);
  //     setIsIntroSection(sectionClass === "section__intro");
  //     setSectionClassName(sectionClass);
  //   };
  //   const sections = document.querySelectorAll("section");
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

  useSmoothScroll();
  useSectionObserve();

  return (
    <div className="home-container md:px-24">
      <main>
        <div className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <IntroSection
            content={CONTENT.HOME_PAGE.intro}
            buttonHref="#contact-us"
            isIntroSection={isIntroSection}
            // videoSrc="intro-video.mp4"
          />
          <AboutSection
            mainContent={CONTENT.HOME_PAGE.about}
            buttonHref="/about"
            imgSrc="/eon-studios-white.png"
            imgWidth={300}
            imgAlt="eon-studios"
          />
          <ExperiencesSection
            mainContent={CONTENT.HOME_PAGE.experiences}
            buttonHref="/services"
            imgSrc="/experiences.jpg"
            imgAlt="experiences"
          />
          <CaseStudySection
            mainContent={CONTENT.HOME_PAGE.casestudy}
            buttonHref="/case-study"
            imgSrc="/case-study.jpg"
            imgAlt="case-study"
            imgClass="w-full h-full"
          />
          <BlogSection />
          <ContactUsSection />
          <ContactsMobileSection mainContent={CONTENT.HOME_PAGE.contacts} />
        </div>
      </main>
    </div>
  );
};
