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
        <div className="hidden md:block">
          <div className="flex h-screen">
            <div className="left-content w-1/2 flex items-center justify-center">
              <Image
                src={imgSrc}
                width={500}
                height={100}
                alt={imgAlt}
                className="w-full h-full"
              />
            </div>
            <div className="right-content w-1/2 text-black pl-24 pr-24 pt-60">
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
                    <span className="py-2 text-black">{item}</span>
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
        <div className="block md:hidden">
          <div className="h-screen">
            <div className="left-content">
              <Image
                src={imgSrc}
                width={500}
                height={500}
                className="h-64 w-full object-cover object-center"
                alt="experiences"
              />
            </div>
            <div className="right-content mx-5 my-10">
              <h1
                dangerouslySetInnerHTML={{
                  __html: mainContent.desktop.title,
                }}
                className="home__text-gray text-2xl font-bold"
              ></h1>
              <p
                dangerouslySetInnerHTML={{
                  __html: mainContent.desktop.text,
                }}
                className="home__text-gray-82 font-semibold my-3"
              ></p>
              <ul className="list-none">
                {items.map((item, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <Image
                      src="/icons/cube-icon.png"
                      alt="cube-icon"
                      width={500}
                      height={500}
                      className="w-5 h-5 mr-3"
                    />
                    <span className="py-2 text-black">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
  );
};
