import React from "react";
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
  const { mainContent, buttonHref, imgSrc, imgAlt, imgClass } =
    props;

  return (
    <>
      <section className="section__case-study md:bg-white relative h-screen">
        {/* DESKTOP SCREEN */}
        <div className="hidden md:block">
          <div className="flex h-screen">
            <div className={`w-1/2 text-black pl-24 pt-60`}>
              <h1
                dangerouslySetInnerHTML={{
                  __html: mainContent.desktop.title,
                }}
                className="text-5xl font-bold"
              ></h1>
              <p
                dangerouslySetInnerHTML={{
                  __html: mainContent.desktop.text,
                }}
                className="my-8 text-lg home__text-gray-82 font-semibold"
              ></p>
              <div className="button border home__border-gray rounded-sm cursor-pointer z-10 flex items-center justify-center md:w-60 md:h-14">
                <Link href={buttonHref} className="text-xl">
                  {mainContent.button}
                </Link>
              </div>
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
        <div className="block md:hidden">
          <div className="h-screen">
            <div>
              <Image
                src={imgSrc}
                width={500}
                height={500}
                className="h-[17rem] w-full object-cover object-center"
                alt="case-study"
              />
            </div>
            <div className="mx-5 my-20">
              <h1
                dangerouslySetInnerHTML={{
                  __html: mainContent.desktop.title,
                }}
                className="font-pp-rader text-4xl font-semibold"
              ></h1>
              <p
                dangerouslySetInnerHTML={{
                  __html: mainContent.desktop.text,
                }}
                className="mt-5 mb-10 home__text-gray-82"
              ></p>
              <div className="button border home__border-gray rounded-sm cursor-pointer z-10 flex items-center justify-center w-[14.6rem] h-[3.375rem]">
                <Link href={buttonHref} className="text-xl">
                  {mainContent.button}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
