"use client";

import { FC, useLayoutEffect, useRef, useState } from "react";
import "@/styles/HomePage.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useProps } from "@/context/PropsContext";
import { BlogSection } from "@/components/HomePage/BlogSection";
import { ContactsMobileSection } from "@/components/HomePage/ContactsMobileSection";
import { ContactUsSection } from "@/components/HomePage/ContactUsSection";
import { CONTENT, SESSION_COUNT } from "@/app/utils/constants";
import { IntroSection } from "@/components/HomePage/IntroSection";
import { ExperiencesSection } from "./ExperiencesSection";
import { AboutSection } from "./AboutSection";
import { CaseStudySection } from "@/components/HomePage/CaseStudySection";

gsap.registerPlugin(ScrollTrigger);

export const HomePage: FC = () => {
  const handleProps = useProps();
  const mainRef = useRef<HTMLDivElement>(null);
  const verticalScrollRef = useRef<HTMLDivElement>(null);
  const [isIntroSection, setIsIntroSection] = useState<boolean>(true);

  useLayoutEffect(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    const mainTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".section__intro",
        start: "top top",
        endTrigger: ".section__contacts",
        end: "bottom bottom",
        snap: {
          snapTo: 1 / SESSION_COUNT,
          duration: { min: 0.25, max: 0.75 },
          delay: 0.125,
          ease: "linears.out",
        },
      },
    });
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

    return () => {
      mainTimeline.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const getSectionClassname = (text: string) => {
    const classes = text.split(" ");
    return classes.find((className) => className.startsWith("section__")) || "";
  };

  return (
    <div className="home-container md:px-[6.25rem]">
      <main ref={mainRef}>
        <div className="vertical-scroll" ref={verticalScrollRef}>
          <IntroSection
            content={CONTENT.intro}
            buttonHref="/intro"
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
            sectionClass="section__case-study"
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
