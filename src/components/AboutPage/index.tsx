"use client";

import React from "react";
import { IntroSection } from "@/components/HomePage/IntroSection";
import { AboutSection } from "@/components/HomePage/AboutSection";
import { ExperiencesSection } from "@/components/HomePage/ExperiencesSection";
import { CaseStudySection } from "@/components/HomePage/CaseStudySection";
import { ContactUsSection } from "@/components/HomePage/ContactUsSection";
import { ContactsMobileSection } from "@/components/HomePage/ContactsMobileSection";
import { CONTENT } from "@/app/utils/constants";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import useSectionObserve from "@/hooks/useSectionObserve";
import { store } from "@/store";
import { SplitSection } from "../commons/SplitSection";

export const AboutPage = () => {
  useSmoothScroll();
  useSectionObserve();
  const { isMenuOpen, isIntroSection } = store();

  return (
    <div className="">
      <main>
        <div className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <IntroSection
            buttonHref="contact-us"
            isIntroSection={isIntroSection}
            videoSrc="intro-video.mp4"
          />
          <SplitSection
            mainContent={CONTENT.ABOUT_PAGE.about}
            sectionName="section__about split-section"
            imageProps={{
              src: `${CONTENT.ABOUT_PAGE.about.imgSrc}`,
              alt: "about-us",
              width: 500,
              height: 500,
              className: "h-full w-full object-cover object-center",
              position: "right",
            }}
          />
          <SplitSection
            mainContent={CONTENT.ABOUT_PAGE.services}
            sectionName="section__services split-section"
            buttonHref="/services"
            imageProps={{
              src: `${CONTENT.ABOUT_PAGE.services.imgSrc}`,
              alt: "services",
              width: 500,
              height: 500,
              className: "h-full w-full object-cover object-center",
              position: "left",
            }}
          />
          <SplitSection
            mainContent={CONTENT.ABOUT_PAGE.casestudy}
            sectionName="section__casestudy split-section"
            buttonHref="/services"
            imageProps={{
              src: `${CONTENT.ABOUT_PAGE.casestudy.imgSrc}`,
              alt: "case-study",
              width: 500,
              height: 500,
              className: "h-full w-full object-cover object-center",
              position: "right",
            }}
          />
          <ContactUsSection />
          <ContactsMobileSection mainContent={CONTENT.ABOUT_PAGE.contacts} />
        </div>
      </main>
    </div>
  );
};
