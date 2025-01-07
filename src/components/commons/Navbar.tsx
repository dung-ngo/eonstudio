"use client";

import { useState, useEffect } from "react";
import "@/styles/Navbar.css";
import Image from "next/image";
import Link from "next/link";
import { CONTENT, LOGOS } from "@/app/utils/constants";
import { store } from "@/store/store";

const Navbar = (): JSX.Element => {
  const { setIsMenuOpen, sectionClassName, setScrollbarColor } = store();
  const [iconSrc, setIconSrc] = useState<string>(LOGOS.default);
  const [isGray, setIsGray] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isTablet =
    typeof window !== "undefined" &&
    window.matchMedia("(min-width: 768px) and (max-width: 1024px)").matches;
  const isDesktop =
    typeof window !== "undefined" &&
    window.matchMedia("(min-width: 1025px)").matches;

  useEffect(() => {
    const updateIconAndColor = () => {
      setIsMenuOpen(isOpen);
      if (isOpen) {
        setIsGray(true);
        return;
      }
      let iconSrc = LOGOS.default;
      let isGray = false;
      switch (sectionClassName) {
        case "section__about-us":
          iconSrc = isDesktop ? LOGOS.black : LOGOS.default;
          break;
        case "section__experiences":
        case "section__case-study":
          iconSrc = LOGOS.black;
          isGray = true;
          break;
        case "section__blog":
          iconSrc = isDesktop ? LOGOS.black : LOGOS.default;
          isGray = isDesktop;
          break;
        case "section__form-contact":
          iconSrc = LOGOS.black;
          isGray = !(isDesktop || isTablet);
          break;
        default:
          break;
      }
      setIconSrc(iconSrc);
      setIsGray(isGray);
      setScrollbarColor(isGray ? "var(--home-gray)" : "#fff");
    };
    updateIconAndColor();
  }, [sectionClassName, isOpen]);

  return (
    <nav className="fixed top-0 w-full bg-transparent text-white z-20">
      <div className="max-w-8xl mx-auto pl-3 pr-4 py-4 md:pl-9 md:pr-10 lg:pl-10 lg:pr-16 xl:pl-20 xl:pr-24">
        <div className="flex justify-between items-center h-14 md:h-20 lg:h-32">
          <div className="company-logo">
            <Link href="/" className="text-xl font-bold flex">
              <Image
                src={iconSrc}
                width={100}
                height={100}
                alt="company-logo"
                className="w-14 h-14 mr-2 lg:w-24 lg:h-24"
              />
              {sectionClassName === "section__intro" && (
                <div className="font-pp-rader text-xl font-semibold pt-2 flex items-center">
                  {CONTENT.logoLabel}
                </div>
              )}
            </Link>
          </div>
          <div className="w-full h-svh">
            <div
              className={`navbar-vertical-hr w-px h-7 bg-${
                isGray ? "black" : "white"
              }`}
            ></div>
            <Link href="/about" className="hover:text-gray-500">
              About
            </Link>
            <Link href="/services" className="hover:text-gray-500">
              Services
            </Link>
            <Link href="/contact" className="hover:text-gray-500">
              Contact
            </Link>
          </div>
          <div className="">
            <div
              className={`hamburger ${isOpen ? "open" : ""}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className={isGray ? "home__bg-gray" : "bg-white"}></span>
              <span className={isGray ? "home__bg-gray" : "bg-white"}></span>
              <span className={isGray ? "home__bg-gray" : "bg-white"}></span>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="nav-menu fixed inset-y-0 right-0 bg-white text-black z-20 w-full px-5 pt-5 md:w-1/3 xl:w-1/5">
          <div className="flex justify-between items-center pr-4 py-4">
            <Link href="/" className="text-xl font-bold">
              <Image
                src="/eon-studios-black.png"
                width={100}
                height={100}
                alt="company-logo"
                className="w-16 lg:w-24 lg:h-24 xl:w-20 xl:h-20"
              />
            </Link>
            <div
              className={`hamburger ${isOpen ? "open" : ""}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className={isGray ? "home__bg-gray" : "bg-white"}></span>
              <span className={isGray ? "home__bg-gray" : "bg-white"}></span>
              <span className={isGray ? "home__bg-gray" : "bg-white"}></span>
            </div>
          </div>
          <div className="flex flex-col mt-8 pl-2 md:pl-2 lg:pl-4">
            <Link
              href="/about"
              className="block py-4 lg:py-6 text-2xl font-bold hover:bg-gray-100"
            >
              About
            </Link>
            <Link
              href="/case-study"
              className="block py-4 lg:py-6 text-2xl font-bold hover:bg-gray-100"
            >
              Case Study
            </Link>
            <Link
              href="/blog"
              className="block py-4 lg:py-6 text-2xl font-bold hover:bg-gray-100"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block py-4 lg:py-6 text-2xl font-bold hover:bg-gray-100"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
