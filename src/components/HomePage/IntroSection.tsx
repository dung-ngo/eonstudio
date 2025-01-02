import React from "react";
import Link from "next/link";
import Image from "next/image";

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
  const { content, buttonHref } = props;
  const [isMuted, setIsMuted] = React.useState<boolean>(true);

  return (
    <section className="relative section__intro first text-white">
        <div className="main-content absolute bottom-20 md:bottom-16 z-10 px-5 md:px-28 w-full">
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
          <div className="flex justify-between w-full">
            <div className="button w-60 h-16 flex items-center justify-center border rounded-sm border-white cursor-pointer">
              <Link href={buttonHref} className="text-lg font-medium">
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
              />
            </div>
          </div>
        </div>
      <div>
        <video
          className="h-screen w-screen object-cover object-center"
          muted={isMuted}
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
