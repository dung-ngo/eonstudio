import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { ContactsSectionProps } from "@/types/interfaces";
import { CONTENT, SOCIALS_ICONS } from "@/app/utils/constants";

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
          <Link href="/" className="pp-rader">
            {mainContent.email}
          </Link>
        </div>

        <ul>
          <li className="text-lg mb-5">
            <div>{mainContent.place}</div>
            <div className="text-lg pp-rader mt-3">
              <Link href={`tel: ${mainContent.phone}`}>
                {mainContent.phone}
              </Link>
            </div>
          </li>
          <li className="text-lg">
            <Link href="">{mainContent.privacy}</Link>
          </li>
        </ul>
        <div className="mt-16">
          <div>{CONTENT.HOME_PAGE.contacts.socials}</div>
          <div className="flex space-x-5 mt-5">
            {SOCIALS_ICONS.map((icon, index) => (
              <div key={index} className="cursor-pointer">
                <Link href={icon.href}>
                  <Image src={icon.src} width={25} height={25} alt={icon.alt} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
