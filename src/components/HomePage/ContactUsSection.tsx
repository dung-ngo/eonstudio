import React from "react";
import { CONTENT } from "@/app/utils/constants";
import Image from "next/image";

export const ContactUsSection = () => {
  const handleSubmit = () => {};
  return (
    <section className="section__form-contact h-screen bg-white px-6 pt-44 md:pt-0 md:px-0 text-black">
      {/* DESKTOP SCREEN */}
      <div className="hidden md:block">
        <div className="flex">
          <div className="w-3/4 text-black pl-32 pt-40">
            <h1 className="text-3xl md:text-6xl mb-5 font-semibold md:font-semibold">
              Contact Us
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="flex mt-10">
                <div className="w-1/2">
                  <div className="form-group">
                    <label
                      htmlFor="name"
                      className="home__font-rader font-bold text-md block"
                    >
                      My name is
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full focus:outline-none leading-10 text-xl placeholder:text-2xl placeholder:text-gray-300"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label
                      htmlFor="mobile"
                      className="home__font-rader font-bold text-md block"
                    >
                      My phone number is
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      required
                      placeholder="Your phone number"
                      className="w-full focus:outline-none leading-10 text-xl placeholder:text-2xl placeholder:text-gray-300"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="work" className="font-bold text-md block">
                      <span className="home__font-rader">I work at</span>
                    </label>
                    <input
                      type="text"
                      id="work"
                      name="work"
                      required
                      placeholder="Your company"
                      className="w-full focus:outline-none leading-10 text-xl placeholder:text-2xl placeholder:text-gray-300"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label
                      htmlFor="reachMeAt"
                      className="font-bold text-md block"
                    >
                      Reach me at
                    </label>
                    <input
                      type="email"
                      id="reachMeAt"
                      name="reachMeAt"
                      required
                      placeholder="Your@email.com"
                      className="w-full focus:outline-none leading-10 text-xl placeholder:text-2xl placeholder:text-gray-300"
                    />
                  </div>
                </div>
                <div className="w-1/2 px-5">
                  <div className="form-group">
                    <label
                      htmlFor="message"
                      className="font-bold text-md block"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Start typing here..."
                      className="w-full focus:outline-none leading-10 text-xl placeholder:text-2xl placeholder:text-gray-300"
                    ></textarea>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="submit-btn font-bold border border-black py-2 px-10 text-md mt-20 rounded-md"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="w-1/4 text-white">
            <div className="h-screen relative bg-black pl-10 pr-5 pt-40">
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
                  <div className="mb-3">{CONTENT.contacts.place}</div>
                  <div className="text-sm text-gray-500">
                    <a href={`tel:${CONTENT.contacts.phone}`}>
                      {CONTENT.contacts.phone}
                    </a>
                  </div>
                </li>
                <li className="text-sm font-bold text-gray-500">
                  <a href="">{CONTENT.contacts.privacy}</a>
                </li>
              </ul>
              <ul className="absolute bottom-0 mb-20">
                <li className="flex mb-8">
                  <a href="/" className="mr-8">
                    <div className="relative">
                      <Image
                        src="/sam.png"
                        width={100}
                        height={100}
                        alt="manager-1"
                        className="rounded-full w-[3.75rem]"
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
                      <div className="text-lg text-white font-extrabold">
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
          </div>
        </div>
      </div>

      {/* MOBILE SCREEN */}
      <div className="block md:hidden pl-2">
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