import React from "react";
import { CONTENT } from "@/app/utils/constants";
import Image from "next/image";

export const ContactsMobileSection = () => {
  return (
    <section className="block md:hidden section__contacts home__bg-gray text-white">
      <div className="h-screen px-6 pt-32">
        <div className="mb-2 text-lg font-bold">
          {CONTENT.contacts.response}
        </div>
        <div className="mb-10">
          <a href="/" className="text-sm font-semibold">
            {CONTENT.contacts.email}
          </a>
        </div>

        <ul>
          <li className="text-lg font-bold mb-10">
            <div>{CONTENT.contacts.place}</div>
            <div className="text-sm home__text-gray-82">
              <a href={`tel: ${CONTENT.contacts.phone}`}>
                {CONTENT.contacts.phone}
              </a>
            </div>
          </li>
          <li className="text-sm home__text-gray-82">
            <a href="">{CONTENT.contacts.privacy}</a>
          </li>
        </ul>
        <ul className="absolute bottom-0 mb-20">
          <li className="flex mb-8">
            <a href="/" className="mr-8">
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
            </a>
            <div className="mt-1">
              <a href="/">
                <div className="text-lg font-extrabold">
                  {CONTENT.contacts.manager1.name}
                </div>
                <div className="text-sm font-bold">
                  {CONTENT.contacts.manager1.title}
                </div>
              </a>
            </div>
          </li>
          <li className="flex">
            <a href="/" className="mr-6">
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
            </a>
            <div className="mt-1">
              <a href="/">
                <div className="text-lg font-extrabold">
                  {CONTENT.contacts.manager2.name}
                </div>
                <div className="text-sm font-bold">
                  {CONTENT.contacts.manager2.title}
                </div>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
