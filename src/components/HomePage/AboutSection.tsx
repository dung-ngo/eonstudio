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
      <section className="section__about-us text-white relative h-screen">
        {/* DESKTOP SCREEN */}
        <div className="hidden xl:block">
          <div className="flex h-screen">
            <div className="w-1/2 text-black pl-24 pr-24 pt-80">
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
                <div className="button border home__border-gray rounded-sm cursor-pointer z-10 flex items-center justify-center w-60 h-14">
                  <Link href="/about" className="text-xl">
                    {mainContent.button}
                  </Link>
                </div>
              )}
            </div>
            <div className="w-1/2 home__bg-gray flex items-center justify-center">
              <Image
                src={imgSrc}
                width={300}
                height={300}
                alt={imgAlt}
                className="h-72 w-72"
              />
            </div>
          </div>
        </div>

        {/* MOBILE + Ipad Mini(md) + Ipad Pro(lg) SCREEN */}
        <div className="block xl:hidden h-screen home__bg-gray">
          <div className="container absolute mt-32 md:mt-52 lg:mt-56">
            <div className="company-logo flex justify-center">
              <Image
                src={imgSrc}
                width={500}
                height={500}
                className="w-24 h-24 md:w-60 md:h-60 lg:w-80 lg:h-80"
                alt={imgAlt}
              />
            </div>
            <div className="main-content mx-10 text-center">
              <div className="mt-14 px-5 md:my-10">
                <h1
                  dangerouslySetInnerHTML={{
                    __html: mainContent.title,
                  }}
                  className="text-2xl font-bold md:text-4xl lg:text-5xl"
                ></h1>
              </div>
              <div className="mt-5 mb-8 md:mb-20">
                <p
                  dangerouslySetInnerHTML={{
                    __html: mainContent.text,
                  }}
                  className="text-md md:text-xl lg:text-3xl"
                ></p>
              </div>
              <div className="flex justify-center">
                <div className="button flex justify-center items-center border border-white rounded-sm z-10 w-44 h-12 md:w-72 md:h-16 lg:w-96 lg:h-24">
                  <Link href={buttonHref} className="text-lg md:text-2xl lg:text-3xl">
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
