import React from "react";
import "@/styles/ExperiencesSection.css";
import Image from "next/image";
import Link from "next/link";

interface ExperiencesSectionProps {
  mainContent: {
    title: string;
    text: string;
    button: string;
    desktop: {
      title: string;
      text: string;
      item1: string;
      item2: string;
      item3: string;
      item4: string;
      item5: string;
      [key: string]: string;
    };
    [key: string]: string | { [key: string]: string };
  };
  buttonHref: string;
  imgSrc: string;
  imgAlt: string;
}

export const ExperiencesSection = (props: ExperiencesSectionProps) => {
  const { mainContent, buttonHref, imgSrc, imgAlt } = props;
  const items = Object.keys(mainContent.desktop)
    .filter((item) => item.startsWith("item"))
    .map((item) => mainContent.desktop[item]);

  return (
      <section className="section__experiences md:bg-white relative h-screen">
        {/* DESKTOP SCREEN */}
        <div className="hidden xl:block">
          <div className="flex h-screen">
            <div className="w-1/2 flex items-center justify-center">
              <Image
                src={imgSrc}
                width={500}
                height={100}
                alt={imgAlt}
                className="w-full h-full"
              />
            </div>
            <div className="w-1/2 text-black px-24 pt-60">
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
                className="text-lg home__text-gray-82 font-semibold"
              ></p>
              <ul className="list-none my-8">
                {items.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Image
                      src="/icons/cube-icon.png"
                      alt="cube-icon"
                      width={100}
                      height={100}
                      className="w-5 h-5 mr-3"
                    />
                    <span className="py-1 text-black text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="button border home__border-gray rounded-sm cursor-pointer z-10 flex items-center justify-center md:w-60 md:h-14">
                <Link href={buttonHref} className="text-xl">
                  {mainContent.button}
                </Link>
              </div>
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
                className="w-full object-center"
                alt="experiences"
              />
            </div>
            <div className="second-content mx-5 mt-10 md:py-5 md:px-5 lg:pt-8 lg:mx-10">
              <h1
                dangerouslySetInnerHTML={{
                  __html: mainContent.desktop.title,
                }}
                className="home__text-gray text-2xl font-bold md:text-5xl lg:text-7xl"
              ></h1>
              <p
                dangerouslySetInnerHTML={{
                  __html: mainContent.desktop.text,
                }}
                className="home__text-gray-82 text-xs font-semibold mt-2 mb-3 md:text-xl md:mb-5 lg:text-3xl lg:mb-8"
              ></p>
              <ul className="list-none">
                {items.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Image
                      src="/icons/cube-icon.png"
                      alt="cube-icon"
                      width={500}
                      height={500}
                      className="w-5 h-5 mr-3"
                    />
                    <span className="py-1 text-black text-xs md:text-xl lg:text-2xl">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
  );
};
