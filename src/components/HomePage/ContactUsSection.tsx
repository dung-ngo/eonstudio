"use client";

import React from "react";
import "@/styles/components/ContactUsSection.css";
import { CONTENT, SOCIALS_ICONS } from "@/app/utils/constants";
import Image from "next/image";
import Link from "next/link";

export const ContactUsSection = () => {
  const handleSubmit = () => {};
  return (
    <section
      id="contact-us"
      className="section__form-contact h-screen bg-white text-black"
    >
      {/* DESKTOP SCREEN */}
      <div className="hidden md:block">
        <div className="flex">
          <div className="w-3/4 text-black md:w-4/6 md:pl-12 md:pr-2 md:pt-72 lg:pt-96 lg:pl-14 lg:pr-2 xl:pt-52 xl:pl-24 ">
            <h1 className="md:text-3xl lg:text-4xl xl:text-6xl xl:mb-5 font-semibold md:font-semibold ">
              Contact Us
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="flex mt-10">
                <div className="w-1/2">
                  <div className="form-group">
                    <label
                      htmlFor="name"
                      className="home__font-rader font-bold block text-xl"
                    >
                      My name is
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full focus:outline-none leading-10 text-2xl placeholder:text-2xl placeholder:text-gray-300"
                    />
                  </div>
                  <div className="form-group mt-5">
                    <label
                      htmlFor="mobile"
                      className="home__font-rader font-bold block text-xl"
                    >
                      My phone number is
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      required
                      placeholder="Your phone number"
                      className="w-full focus:outline-none leading-10 text-2xl placeholder:text-2xl placeholder:text-gray-300"
                    />
                  </div>
                  <div className="form-group mt-3 md:mt-10 lg:mt-10">
                    <label
                      htmlFor="work"
                      className="home__font-rader font-bold block text-xl"
                    >
                      I work at
                    </label>
                    <input
                      type="text"
                      id="work"
                      name="work"
                      required
                      placeholder="Your company"
                      className="w-full focus:outline-none leading-10 text-2xl placeholder:text-2xl placeholder:text-gray-300"
                    />
                  </div>
                  <div className="form-group mt-3 md:mt-10 lg:mt-10">
                    <label
                      htmlFor="reachMeAt"
                      className="home__font-rader font-bold block text-xl"
                    >
                      Reach me at
                    </label>
                    <input
                      type="email"
                      id="reachMeAt"
                      name="reachMeAt"
                      required
                      placeholder="Your@email.com"
                      className="w-full focus:outline-none leading-10 text-2xl placeholder:text-2xl placeholder:text-gray-300"
                    />
                  </div>
                </div>
                <div className="w-1/2 px-5">
                  <div className="form-group">
                    <label
                      htmlFor="message"
                      className="home__font-rader font-bold block text-xl"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Start typing here..."
                      className="w-full focus:outline-none leading-10 text-2xl placeholder:text-2xl placeholder:text-gray-300"
                    ></textarea>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="submit-btn font-bold border border-black py-2 px-10 text-xl mt-20 rounded-md w-56 h-14"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="w-1/4 text-white md:w-2/6">
            <div className="h-screen relative bg-black pl-10 pr-5 pt-40">
              <div>
                <div className="mb-2 text-lg font-bold">
                  {CONTENT.HOME_PAGE.contacts.response}
                </div>
                <div className="mb-10">
                  <Link href="/" className="text-lg pp-rader">
                    {CONTENT.HOME_PAGE.contacts.email}
                  </Link>
                </div>
              </div>
              <div>
                <div className="text-lg font-bold mb-5">
                  <div className="mb-3">{CONTENT.HOME_PAGE.contacts.place}</div>
                  <div className="text-lg pp-rader">
                    <Link href={`tel:${CONTENT.HOME_PAGE.contacts.phone}`}>
                      {CONTENT.HOME_PAGE.contacts.phone}
                    </Link>
                  </div>
                </div>
                <div className="text-lg pp-rader">
                  <Link href="">{CONTENT.HOME_PAGE.contacts.privacy}</Link>
                </div>
              </div>
              <div className="mt-10">
                <div>{CONTENT.HOME_PAGE.contacts.socials}</div>
                <div className="flex space-x-5 mt-5">
                  {SOCIALS_ICONS.map((icon, index) => (
                    <div key={index} className="cursor-pointer">
                      <Link href={icon.href}>
                        <Image
                          src={icon.src}
                          width={30}
                          height={30}
                          alt={icon.alt}
                        />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE SCREEN */}
      <div className="block md:hidden mobile pt-32 pl-8">
        <h1 className="text-4xl md:text-6xl mb-8 font-extrabold md:font-semibold">
          Contact Us
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="font-bold text-md block">
              My name is
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your name"
              className="w-full focus:outline-none leading-8 text-xl placeholder:text-xl placeholder:text-gray-300"
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="mobile" className="font-bold text-md block">
              My phone number is
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              required
              placeholder="Your phone number"
              className="w-full focus:outline-none leading-8 text-xl placeholder:text-xl placeholder:text-gray-300"
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="work" className="font-bold text-md block">
              I work at
            </label>
            <input
              type="text"
              id="work"
              name="work"
              required
              placeholder="Your company"
              className="w-full focus:outline-none leading-8 text-xl placeholder:text-xl placeholder:text-gray-300"
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="reachMeAt" className="font-bold text-md block">
              Reach me at
            </label>
            <input
              type="email"
              id="reachMeAt"
              name="reachMeAt"
              required
              placeholder="Your@email.com"
              className="w-full focus:outline-none leading-8 text-xl placeholder:text-xl placeholder:text-gray-300"
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="message" className="font-bold text-md block">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Start typing here..."
              className="w-full focus:outline-none leading-8 text-xl placeholder:text-xl placeholder:text-gray-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="submit-btn font-bold border py-2 px-10 text-md mt-1"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
