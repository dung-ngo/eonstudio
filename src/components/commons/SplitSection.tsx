import React from "react";
import Image from "next/image";
import Link from "next/link";
import "@/styles/components/SplitSection.css";

interface SplitSectionProps {
  mainContent: {
    title: string;
    text: string;
    button?: string;
  };
  sectionName: string;
  buttonHref?: string;
  imageProps: {
    src: string;
    alt: string;
    width: number;
    height: number;
    className: string;
    position: string;
  };
}

export const SplitSection = ({
  mainContent,
  sectionName,
  buttonHref,
  imageProps,
}: SplitSectionProps) => {
  const { src, alt, width, height, className, position = "right" } = imageProps;

  const ImageSection = (
    <div className="w-1/2 flex items-center justify-center">
      <Image
        src={`${src}.png`}
        width={width}
        height={height}
        alt={alt}
        className={className}
      />
    </div>
  );

  const ContentSection = (
    <div className="w-1/2 text-black px-24 pt-72">
      <div className="w-5/6">
        <h1 className="text-5xl font-extrabold leading-normal">
          {mainContent.title}
        </h1>
        <p className="text-lg home__text-gray-82 font-semibold mt-5 mb-10">
          {mainContent.text}
        </p>
      </div>
      {buttonHref && (
        <Link href={buttonHref} className="text-xl">
          <div className="button border home__border-gray rounded-sm cursor-pointer z-10 flex items-center justify-center md:w-60 md:h-14">
            {mainContent.button}
          </div>
        </Link>
      )}
    </div>
  );
  return (
    <section className={`${sectionName} md:bg-white relative h-screen `}>
      {/* DESKTOP SCREEN */}
      <div className="hidden xl:block">
        <div className="flex h-screen">
          {position === "right" ? (
            <>
              {ContentSection}
              {ImageSection}
            </>
          ) : (
            <>
              {ImageSection}
              {ContentSection}
            </>
          )}
        </div>
      </div>

      {/* MOBILE + Ipad Mini(md) + Ipad Pro(lg) SCREEN */}
      <div className="block xl:hidden">
        <div className="h-screen">
          <div className="first-content">
            <Image
              src={`${src}-mobile.png`}
              width={width}
              height={height}
              className={className}
              //   className="w-auto h-1/2 md:w-60 md:h-60 lg:w-80 lg:h-80"
              //   className="w-full h-80 md:h-[30rem] md:object-cover lg:h-[45rem] xl:h-80"
              alt={alt}
            />
          </div>
          <div className="second-content mx-5 mt-12 md:mt-18 md:pb-5 md:px-5 md:mt-16 lg:mx-10">
            <h1 className="text-2xl font-bold leading-normal md:text-6xl lg:text-7xl">
              {mainContent.title}
            </h1>
            <p className="mt-2 mb-8 home__text-gray-82 md:text-2xl md:mb-10 lg:text-3xl lg:mb-20 lg:leading-10">
              {mainContent.text}
            </p>
            {buttonHref && (
              <Link
                href={buttonHref}
                className="text-lg md:text-2xl lg:text-3xl"
              >
                <div className="button border home__border-gray rounded-sm cursor-pointer z-10 flex items-center justify-center w-44 h-12 md:w-72 md:h-16 lg:w-96 lg:h-24">
                  {mainContent.button}
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
