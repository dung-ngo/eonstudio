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
          <AboutSection
            mainContent={CONTENT.ABOUT_PAGE.about}
            imgSrc="/about_page-about.png"
            imgWidth={900}
            imgAlt="eon-studios"
          />
          <ExperiencesSection
            mainContent={CONTENT.ABOUT_PAGE.services}
            buttonHref="/services"
            imgSrc="/about_page-services.png"
            imgAlt="experiences"
          />
          <CaseStudySection
            mainContent={CONTENT.ABOUT_PAGE.casestudy}
            buttonHref="/case-study"
            imgSrc="/case-study.jpg"
            imgAlt="case-study"
            imgClass="w-full h-full"
          />
          <ContactUsSection />
          <ContactsMobileSection mainContent={CONTENT.ABOUT_PAGE.contacts} />
        </div>
      </main>
    </div>
  );
};
