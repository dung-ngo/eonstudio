import React from "react";
import Image from "next/image";
import Link from "next/link";

interface AboutSectionProps {
  mainContent: {
    title: string;
    text: string;
    button?: string;
    desktop: {
      title: string;
      text: string;
    };
  };
  buttonHref: string;
  imgSrc: string;
  imgAlt: string;
}

export const AboutSection = (props: AboutSectionProps) => {
  const { mainContent, buttonHref, imgSrc, imgAlt } = props;

  return (
    <>
      <section className="section__about-us text-white relative">
        {/* DESKTOP SCREEN */}
        <div className="hidden md:block">
          <div className="flex h-screen">
            <div className="w-1/2 text-black pl-[100px] pt-[19.625rem]">
              <h1
                dangerouslySetInnerHTML={{
                  __html: mainContent.desktop.title,
                }}
                className="text-5xl font-bold mb-5"
              ></h1>
              <p
                dangerouslySetInnerHTML={{
                  __html: mainContent.desktop.text,
                }}
                className="mb-8 text-lg home__text-gray-82 font-semibold"
              ></p>
              {buttonHref && (
                <div className="button border border-[#2D2A2B] rounded-sm cursor-pointer z-10 flex items-center justify-center md:w-[233px] md:h-[54px]">
                  <Link href="/about" className="text-xl">
                    {mainContent.button}
                  </Link>
                </div>
              )}
            </div>
            <div className="w-1/2 bg-[#2D2A2B] flex items-center justify-center">
              <Image
                src={imgSrc}
                width={100}
                height={100}
                alt={imgAlt}
                className="h-[18.75rem] w-[18.75rem]"
              />
            </div>
          </div>
        </div>

        {/* MOBILE SCREEN */}
        <div className="block md:hidden h-screen home__bg-gray">
          <div className="container absolute mt-52 mb-52">
            <div className="company-logo flex justify-center mb-[0.625rem]">
              <Image
                src={imgSrc}
                width={100}
                height={100}
                className="w-[6.25rem] h-[6.25rem] object-cover object-center"
                alt={imgAlt}
              />
            </div>
            <div className="main-content mx-10 text-center">
              <div className="mt-14 px-5">
                <h1
                  dangerouslySetInnerHTML={{
                    __html: mainContent.title,
                  }}
                  className="text-2xl font-bold mb-2"
                ></h1>
              </div>
              <div className="my-8">
                <p
                  dangerouslySetInnerHTML={{
                    __html: mainContent.text,
                  }}
                  className="mb-8 text-md"
                ></p>
              </div>
              <div className="flex justify-center">
                <div className="button w-[14.6rem] h-[3.75rem] flex justify-center items-center mb-14 border border-white rounded-sm z-10">
                  <Link href={buttonHref} className="text-lg">
                    {mainContent.button}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
