"use client";

import { useState, useEffect } from "react";
import "@/styles/Navbar.css";
import Image from "next/image";
import Link from "next/link";
import { CONTENT, LOGOS } from "@/app/utils/constants";

interface NavbarProps {
  sectionClassName: string;
}

const Navbar = (props: NavbarProps): JSX.Element => {
  const { sectionClassName } = props;
  const [iconSrc, setIconSrc] = useState<string>(LOGOS.default);
  const [isGray, setIsGray] = useState<boolean>(false);

  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches;

  useEffect(() => {
    const updateIconAndColor = () => {
      switch (sectionClassName) {
        case "section__about-us":
          setIconSrc(isMobile ? LOGOS.default : LOGOS.black);
          setIsGray(false);
          break;
        case "section__experiences":
        case "section__case-study":
          setIconSrc(LOGOS.black);
          setIsGray(true);
          break;
        case "section__blog":
          setIconSrc(LOGOS.black);
          setIsGray(!isMobile);
          break;
        case "section__form-contact":
          setIconSrc(LOGOS.black);
          setIsGray(isMobile);
          break;
        default:
          setIconSrc(LOGOS.default);
          setIsGray(false);
          break;
      }
    };
    updateIconAndColor();
  }, [sectionClassName, isMobile]);

  // useEffect(() => {
  //   hamburgerMenuColor();
  // }, [sectionClassName]);

  // const hamburgerMenuColor = () => {
  //   const isSpecialSection =
  //     sectionClassName === "section--about" ||
  //     sectionClassName === "section--form-contact";
  //   return isOpen || (isGray && !isSpecialSection) ? "bg-black" : "bg-white";
  // };

  return (
    <nav className="fixed top-0 w-full bg-transparent text-white z-10">
      <div className="max-w-8xl mx-auto pl-3 pr-4 py-4 md:pl-9 md:pr-10 lg:pl-10 lg:pr-16 xl:pl-20 xl:pr-24">
        <div className="flex justify-between items-center h-14 md:h-20 lg:h-32">
          <div className="company-logo">
            <Link href="/" className="text-xl font-bold flex">
              <Image
                src={iconSrc}
                width={100}
                height={100}
                alt="company-logo"
                className="w-14 h-14 mr-3 lg:w-24 lg:h-24"
              />
              {sectionClassName === "section--intro" && (
                <div className="font-pp-rader text-xl font-semibold py-3 flex items-center">
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
              // className={`hamburger ${isOpen ? "open" : ""}`}
              // onClick={() => setIsOpen(!isOpen)}
              className="hamburger"
            >
              <span className={isGray ? "home__bg-gray" : "bg-white"}></span>
              <span className={isGray ? "home__bg-gray" : "bg-white"}></span>
              <span className={isGray ? "home__bg-gray" : "bg-white"}></span>
            </div>
          </div>
        </div>
      </div>
      {/* {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white text-black z-20">
          <div className="flex justify-between items-center p-4">
            <Link href="/" className="text-xl font-bold">
              <Image
                src={iconSrc}
                width={100}
                height={0}
                alt="company-logo"
                className="w-12"
              />
            </Link>
            <div
              className={`hamburger md:hidden ${isOpen ? "open" : ""}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className={hamburgerMenuColor()}></span>
              <span className={hamburgerMenuColor()}></span>
              <span className={hamburgerMenuColor()}></span>
            </div>
          </div>
          <div className="flex flex-col mt-8">
            <Link
              href="/about"
              className="block px-4 py-4 text-xl hover:bg-gray-100"
            >
              About
            </Link>
            <Link
              href="/services"
              className="block px-4 py-4 text-xl hover:bg-gray-100"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-4 text-xl hover:bg-gray-100"
            >
              Contact
            </Link>
          </div>
        </div>
      )} */}
    </nav>
  );
};

export default Navbar;
