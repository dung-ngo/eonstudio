import React from "react";
import "@/styles/components/CaseStudySection.css";
import Image from "next/image";
import Link from "next/link";

interface CaseStudySectionProps {
  mainContent: {
    title: string;
    text: string;
    button: string;
    desktop: {
      title: string;
      text: string;
    };
  };
  buttonHref: string;
  imgSrc: string;
  imgAlt: string;
  imgClass: string;
}

export const CaseStudySection = (props: CaseStudySectionProps) => {
  const { mainContent, buttonHref, imgSrc, imgAlt, imgClass } = props;

  return (
    <section className="section__case-study md:bg-white relative h-screen">
      {/* DESKTOP SCREEN */}
      <div className="hidden xl:block">
        <div className="flex h-screen">
          <div className="w-1/2 text-black px-24 pt-72">
            <h1 className="text-5xl font-extrabold">{mainContent.title}</h1>
            <p className="my-8 text-lg home__text-gray-82 font-semibold">
              {mainContent.text}
            </p>
            <Link href={buttonHref} className="text-xl">
              <div className="button border home__border-gray rounded-sm cursor-pointer z-10 flex items-center justify-center md:w-60 md:h-14">
                {mainContent.button}
              </div>
            </Link>
          </div>
          <div className="w-1/2 home__border-gray flex items-center justify-center">
            <Image
              src={imgSrc}
              width={500}
              height={100}
              alt={imgAlt}
              className={imgClass}
            />
          </div>
        </div>
      </div>

      {/* MOBILE SCREEN */}
      <div className="block xl:hidden">
        <div className="h-screen">
          <div className="first-content">
            <Image
              src={imgSrc}
              width={500}
              height={500}
              // className="h-full w-full object-cover object-center"
              className="w-full"
              alt="case-study"
            />
          </div>
          <div className="second-content mx-5 mt-10 md:pt-16 md:pb-5 md:px-5 lg:pt-16 lg:mx-10">
            <h1 className="text-2xl font-bold md:text-6xl lg:text-7xl">
              {mainContent.title}
            </h1>
            <p className="mt-2 mb-8 home__text-gray-82 md:text-2xl md:mb-10 lg:text-3xl lg:mb-20 lg:leading-10">
              {mainContent.text}
            </p>
            <Link href={buttonHref} className="text-lg md:text-2xl lg:text-3xl">
              <div className="button border home__border-gray rounded-sm cursor-pointer z-10 flex items-center justify-center w-44 h-12 md:w-72 md:h-16 lg:w-96 lg:h-24">
                {mainContent.button}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
