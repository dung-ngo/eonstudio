import React from "react";
import "@/styles/components/BlogSection.css";
import { CONTENT } from "@/app/utils/constants";
import Link from "next/link";
import Image from "next/image";

export const BlogSection = () => {
  return (
    <section className="section__blog h-screen home__bg-gray xl:bg-white px-5 md:px-6">
      {/* DESKTOP SCREEN */}
      <div className="hidden xl:block text-black pt-24 mb-10">
        <div className="blog-top text-center">
          <h1 className="text-black text-6xl font-bold">
            {CONTENT.HOME_PAGE.blog.title}
          </h1>
          <p className="text-slate-400 text-md font-bold">
            {CONTENT.HOME_PAGE.blog.text}
          </p>
          <div className="link flex justify-center pt-5">
            <Link href="/blog" className=" text-black text-md font-bold flex">
              <div>{CONTENT.HOME_PAGE.blog.viewAll}</div>
              <Image
                src="/icons/arrow-right.png"
                width={30}
                height={10}
                alt="arrow-right"
                className="h-4 mt-1 ml-5"
              />
            </Link>
          </div>
        </div>
        <div className="blog-bottom flex flex-row mt-10 w-full">
          <div className="flex flex-col w-1/3 pr-5">
            <Image
              src="/blog-1.jpg"
              width={300}
              height={100}
              alt="image1"
              className="w-full h-2/4"
            />
            <h1 className="text-3xl font-bold my-3">
              {CONTENT.HOME_PAGE.blog.newsTitle1}
            </h1>
            <p className="font-semibold">{CONTENT.HOME_PAGE.blog.newsBrief1}</p>
          </div>
          <div className="flex flex-col w-1/3 px-5">
            <Image
              src="/blog-2.jpg"
              width={300}
              height={100}
              alt="image2"
              className="w-full h-2/4"
            />
            <h1 className="text-3xl font-bold my-3">
              {CONTENT.HOME_PAGE.blog.newsTitle2}
            </h1>
            <p className="font-semibold">{CONTENT.HOME_PAGE.blog.newsBrief2}</p>
          </div>
          <div className="flex flex-col w-1/3 pl-5">
            <Image
              src="/blog-3.jpg"
              width={300}
              height={100}
              alt="image3"
              className="w-full h-2/4"
            />
            <h1 className="text-3xl font-bold my-3">
              {CONTENT.HOME_PAGE.blog.newsTitle3}
            </h1>
            <p className="font-semibold">{CONTENT.HOME_PAGE.blog.newsBrief3}</p>
          </div>
        </div>
      </div>

      {/* MOBILE SCREEN */}
      <div className="block xl:hidden top-screen text-white pt-24 mb-3 md:pt-36 text-center lg:pt-52">
        <h1 className="text-2xl font-bold md:text-6xl lg:text-7xl">
          {CONTENT.HOME_PAGE.blog.title}
        </h1>
        <p className="text-slate-400 text-md font-bold md:my-5 md:text-xl lg:text-2xl">
          {CONTENT.HOME_PAGE.blog.text}
        </p>
        <div className="h-14 flex justify-center items-center md:h-20">
          <Link href="/blog" className="flex">
            <div className="text-md font-bold md:text-xl lg:text-2xl">
              {CONTENT.HOME_PAGE.blog.viewAll}
            </div>
            <Image
              src="/icons/arrow-right-white.png"
              width={30}
              height={10}
              alt="arrow-right"
              className="h-6 w-5 ml-3"
            />
          </Link>
        </div>
      </div>
      <div className="block xl:hidden bottom-screen text-white md:mx-5">
        {(["newsTitle1", "newsTitle2", "newsTitle3"] as const).map(
          (title, index) => {
            const briefKey = `newsBrief${
              index + 1
            }` as keyof typeof CONTENT.HOME_PAGE.blog;

            return (
              <div
                key={title}
                className="py-5 px-6 border-b md:py-12 md:px-8 lg:py-16 lg:px-12"
              >
                <h2 className="text-xl font-bold md:text-3xl lg:text-5xl">
                  {CONTENT.HOME_PAGE.blog[title]}
                </h2>
                <p className="text-slate-400 text-sm font-bold mt-2 md:text-lg md:mt-3 lg:text-2xl lg:mt-5">
                  {CONTENT.HOME_PAGE.blog[briefKey]}
                </p>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};
