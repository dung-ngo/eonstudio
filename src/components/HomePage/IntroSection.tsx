"use client";

import React, { useState, useEffect } from "react";
import "@/styles/components/IntroSection.css";
import Link from "next/link";
import Image from "next/image";

interface IntroSectionProps {
  content?: {
    button: string;
    desktop: {
      title: string;
      text: string;
    };
  };
  buttonHref: string;
  videoSrc?: string;
  isIntroSection?: boolean;
}

export const IntroSection = (props: IntroSectionProps) => {
  const { content, buttonHref, isIntroSection } = props;
  const [isMuted, setIsMuted] = useState<boolean>(true);

  useEffect(() => {
    if (isIntroSection && !isMuted) {
      setIsMuted(false);
    } else {
      setIsMuted(true);
    }
  }, [isIntroSection]);

  return (
    <section className="relative section__intro first text-white h-screen">
      {content ? (
        <div className="main-content absolute bottom-24 md:bottom-16 z-10 px-5 w-full md:pl-12 md:pr-12 lg:pl-14 lg:pr-16 lg:bottom-20 xl:pl-24 xl:pr-24 xl:bottom-20">
          <h1
            dangerouslySetInnerHTML={{
              __html: content.desktop.title,
            }}
            className="text-3xl md:text-5xl font-bold mb-5 xl:mb-8"
          ></h1>
          <p
            dangerouslySetInnerHTML={{
              __html: content.desktop.text,
            }}
            className="hidden md:block mb-8 text-lg font-semibold"
          ></p>
          <div className="flex justify-between w-full">
            <div className="button flex items-center justify-center border rounded-sm border-white cursor-pointer w-44 h-12 md:w-72 md:h-16 lg:w-96 lg:h-24 xl:w-60 xl:h-14">
              <Link
                href={buttonHref}
                className="text-lg font-medium lg:text-xl"
              >
                {content.button}
              </Link>
            </div>
            <div className="flex items-end">
              <Image
                src={isMuted ? "/sound-off.svg" : "/sound-on.svg"}
                width="30"
                height="30"
                alt={isMuted ? "sound-off" : "sound-on"}
                onClick={() => {
                  setIsMuted(!isMuted);
                }}
                className="md:w-10 lg:w-12"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="absolute bottom-24 right-5 md:bottom-16 md:right-10 lg:bottom-20 lg:right-16 xl:bottom-20 xl:right-24">
          <Image
            src={isMuted ? "/sound-off.svg" : "/sound-on.svg"}
            width="50"
            height="50"
            alt={isMuted ? "sound-off" : "sound-on"}
            onClick={() => {
              setIsMuted(!isMuted);
            }}
            className="md:w-12 lg:w-14"
          />
        </div>
      )}
      <div className="h-screen w-screen">
        <video
          className="h-screen w-screen object-cover object-center"
          muted={isMuted}
          playsInline
          autoPlay
          loop
        >
          {/* <source src={videoSrc} type="video/mp4" /> */}
          <source src="/sample.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};
