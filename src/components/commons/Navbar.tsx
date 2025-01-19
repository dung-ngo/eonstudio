"use client";

import { useState, useEffect } from "react";
import "@/styles/components/Navbar.css";
import Image from "next/image";
import Link from "next/link";
import { CONTENT, LOGOS } from "@/app/utils/constants";
import { store } from "@/store";

const Navbar = (): JSX.Element => {
  const { isMenuOpen, setIsMenuOpen, sectionClassName, setScrollbarColor } =
    store();
  const [iconSrc, setIconSrc] = useState<string>(LOGOS.default);
  const [isGray, setIsGray] = useState<boolean>(false);
  // const [isMenuOpen, setisMenuOpen] = useState<boolean>(false);
  const isTablet =
    typeof window !== "undefined" &&
    window.matchMedia("(min-width: 768px) and (max-width: 1024px)").matches;
  const isDesktop =
    typeof window !== "undefined" &&
    window.matchMedia("(min-width: 1025px)").matches;

  useEffect(() => {
    const updateIconAndColor = () => {
      let iconSrc = LOGOS.default;
      let isGray = false;
      switch (sectionClassName) {
        case "section__about-us":
          iconSrc = isDesktop ? LOGOS.black : LOGOS.default;
          break;
        case "section__services":
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
  }, [sectionClassName]);

  const menuCloseButton = isMenuOpen
    ? isGray
      ? "bg-white"
      : "home__bg-gray"
    : isGray
    ? "home__bg-gray"
    : "bg-white";

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
                <h1 className="text-xl font-semibold pt-2 flex items-center">
                  {CONTENT.logoLabel}
                </h1>
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
              className={`hamburger ${isMenuOpen ? "open" : ""}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className={menuCloseButton}></span>
              <span className={menuCloseButton}></span>
              <span className={menuCloseButton}></span>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className={`nav-menu fixed inset-y-0 right-0 ${
            isGray ? "home__bg-gray text-white" : "bg-white home__text-gray"
          } z-20 w-full px-5 pt-5 md:w-1/3 xl:w-1/5`}
        >
          <div className="flex justify-between items-center pr-4 py-4">
            <Link href="/" className="text-xl font-bold">
              <Image
                src={isGray ? LOGOS.default : LOGOS.black}
                width={100}
                height={100}
                alt="company-logo"
                className="w-16 lg:w-24 lg:h-24 xl:w-20 xl:h-20"
              />
            </Link>
            <div
              className={`hamburger ${isMenuOpen ? "open" : ""}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className={menuCloseButton}></span>
              <span className={menuCloseButton}></span>
              <span className={menuCloseButton}></span>
            </div>
          </div>
          <div className="flex flex-col mt-8 pl-2 md:pl-2 lg:pl-4">
            <Link
              href="/about"
              className="block py-2 lg:py-3 text-2xl"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="menu-item">About</div>
            </Link>
            <Link
              href="/case-study"
              className="block py-2 lg:py-3 text-2xl"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="menu-item">Case Study</div>
            </Link>
            <Link
              href="/blog"
              className="block py-2 lg:py-3 text-2xl"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="menu-item">Blog</div>
            </Link>
            <Link
              href="/contact"
              className="block py-2 lg:py-3 text-2xl"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="menu-item">Contact Us</div>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
