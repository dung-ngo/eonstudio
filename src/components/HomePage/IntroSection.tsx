import React from "react";
import Link from "next/link";

interface IntroSectionProps {
  content: {
    button: string;
    desktop: {
      title: string;
      text: string;
    };
  };
  buttonHref: string;
  videoSrc: string;
}

export const IntroSection = (props: IntroSectionProps) => {
  const { content, buttonHref, videoSrc } = props;
  return (
    <section className="relative section__intro first text-white">
      <div className="main-content absolute bottom-20 md:bottom-16 z-10 left-5 md:left-24">
        <h1
          dangerouslySetInnerHTML={{
            __html: content.desktop.title,
          }}
          className="text-3xl md:text-5xl font-bold mb-8"
        ></h1>
        <p
          dangerouslySetInnerHTML={{
            __html: content.desktop.text,
          }}
          className="hidden md:block mb-8 text-lg font-semibold"
        ></p>
        <div className="button w-60 h-16 flex items-center justify-center border rounded-sm border-white cursor-pointer">
          <Link href={buttonHref} className="text-lg font-medium">
            {content.button}
          </Link>
        </div>
      </div>
      <div>
        <video
          className="h-screen w-screen object-cover object-center"
          muted
          autoPlay
          loop
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};
