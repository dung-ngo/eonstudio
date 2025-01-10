import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { ContactsSectionProps } from "@/types/interfaces";

export const ContactsMobileSection: FC<ContactsSectionProps> = (
  props: ContactsSectionProps
) => {
  const { mainContent } = props;
  return (
    <section
      id="contact-us"
      className="block mobile-only relative md:hidden section__contacts home__bg-gray text-white"
    >
      <div className="h-screen px-6 pt-32">
        <div className="mb-2 text-lg font-bold">{mainContent.response}</div>
        <div className="mb-10">
          <Link href="/" className="text-sm font-semibold">
            {mainContent.email}
          </Link>
        </div>

        <ul>
          <li className="text-lg font-bold mb-10">
            <div>{mainContent.place}</div>
            <div className="text-sm home__text-gray-82">
              <Link href={`tel: ${mainContent.phone}`}>
                {mainContent.phone}
              </Link>
            </div>
          </li>
          <li className="text-sm home__text-gray-82">
            <Link href="">{mainContent.privacy}</Link>
          </li>
        </ul>
        <ul className="absolute bottom-5 mb-20">
          <li className="flex mb-8">
            <Link href="/" className="mr-8">
              <div className="relative">
                <Image
                  src="/sam.png"
                  width={50}
                  height={50}
                  alt="manager-1"
                  className="rounded-full"
                />
                <span className="absolute bottom-0 right-0">
                  <Image
                    src="/linkedin.png"
                    width={20}
                    height={20}
                    alt="LinkedIn"
                  />
                </span>
              </div>
            </Link>
            <div className="mt-1">
              <Link href="/">
                <div className="text-lg font-extrabold">
                  {mainContent.manager1.name}
                </div>
                <div className="text-sm font-bold">
                  {mainContent.manager1.title}
                </div>
              </Link>
            </div>
          </li>
          <li className="flex">
            <Link href="/" className="mr-6">
              <div className="relative">
                <Image
                  src="/june.png"
                  width={50}
                  height={50}
                  alt="manager-2"
                  className="rounded-full"
                />
                <span className="absolute bottom-0 right-0">
                  <Image
                    src="/linkedin.png"
                    width={20}
                    height={20}
                    alt="LinkedIn"
                  />
                </span>
              </div>
            </Link>
            <div className="mt-1">
              <Link href="/">
                <div className="text-lg font-extrabold">
                  {mainContent.manager2.name}
                </div>
                <div className="text-sm font-bold">
                  {mainContent.manager2.title}
                </div>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
