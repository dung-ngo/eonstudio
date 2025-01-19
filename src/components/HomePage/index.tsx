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
import { AboutSection } from "./AboutSection";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import { store } from "@/store";
import useSectionObserve from "@/hooks/useSectionObserve";
import { SplitSection } from "../commons/SplitSection";

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
            buttonHref="contact-us"
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
          <SplitSection
            mainContent={CONTENT.HOME_PAGE.services}
            sectionName="section__services split-section"
            buttonHref="/services"
            imageProps={{
              src: `${CONTENT.HOME_PAGE.services.imgSrc}`,
              alt: "services",
              width: 500,
              height: 500,
              className: "h-full w-full object-cover object-center",
              position: "left",
            }}
          />
          <SplitSection
            mainContent={CONTENT.HOME_PAGE.casestudy}
            sectionName="section__case-study split-section"
            buttonHref="/casestudy"
            imageProps={{
              src: `${CONTENT.HOME_PAGE.casestudy.imgSrc}`,
              alt: "case-study",
              width: 500,
              height: 500,
              className: "h-full w-full object-cover object-center",
              position: "right",
            }}
          />
          <BlogSection />
          <ContactUsSection />
          <ContactsMobileSection mainContent={CONTENT.HOME_PAGE.contacts} />
        </div>
      </main>
    </div>
  );
};
