import React from "react";
import { CONTENT } from "@/app/utils/constants";
import Link from "next/link";
import Image from "next/image";

export const BlogSection = () => {
  return (
    <section className="section__blog h-screen home__bg-gray md:bg-white pt-24 px-5 md:px-6">
      {/* DESKTOP SCREEN */}
      <div className="hidden md:block text-black">
        <div className="blog-top text-center">
          <h1
            dangerouslySetInnerHTML={{
              __html: CONTENT.blog.title,
            }}
            className="text-black text-6xl font-bold mb-6"
          ></h1>
          <p
            className="text-slate-400 text-md font-bold mb-4"
            dangerouslySetInnerHTML={{
              __html: CONTENT.blog.desktop.text,
            }}
          ></p>
          <div className="link flex justify-center">
            <Link href="/blog" className=" text-black text-md font-bold flex">
              <div>{CONTENT.blog.viewAll}</div>
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
              width={200}
              height={100}
              alt="image1"
              className="w-full h-2/3"
            />
            <h1
              dangerouslySetInnerHTML={{
                __html: CONTENT.blog.desktop.newsTitle1,
              }}
              className="text-3xl font-bold my-3"
            ></h1>
            <p
              dangerouslySetInnerHTML={{
                __html: CONTENT.blog.newsBrief1,
              }}
              className="font-semibold"
            ></p>
          </div>
          <div className="flex flex-col w-1/3 px-5">
            <Image
              src="/blog-2.jpg"
              width={200}
              height={100}
              alt="image2"
              className="w-full h-2/3"
            />
            <h1
              dangerouslySetInnerHTML={{
                __html: CONTENT.blog.newsTitle2,
              }}
              className="text-3xl font-bold my-3"
            ></h1>
            <p
              dangerouslySetInnerHTML={{
                __html: CONTENT.blog.newsBrief2,
              }}
              className="font-semibold"
            ></p>
          </div>
          <div className="flex flex-col w-1/3 pl-5">
            <Image
              src="/blog-3.jpg"
              width={300}
              height={100}
              alt="image3"
              className="w-full h-2/3"
            />
            <h1
              dangerouslySetInnerHTML={{
                __html: CONTENT.blog.desktop.newsTitle3,
              }}
              className="text-3xl font-bold my-3"
            ></h1>
            <p
              dangerouslySetInnerHTML={{
                __html: CONTENT.blog.newsBrief3,
              }}
              className="font-semibold"
            ></p>
          </div>
        </div>
      </div>

      {/* MOBILE SCREEN */}
      <div className="block md:hidden top-screen text-white mb-10 text-center">
        <h1
          dangerouslySetInnerHTML={{
            __html: CONTENT.blog.title,
          }}
          className="text-2xl font-bold"
        ></h1>
        <p
          className="text-slate-400 text-md font-bold mt-2"
          dangerouslySetInnerHTML={{
            __html: CONTENT.blog.text,
          }}
        ></p>
        <div className="h-14 flex justify-center items-center">
          <Link href="/blog" className="text-md font-bold flex">
            <div>{CONTENT.blog.viewAll}</div>
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
      <div className="block md:hidden bottom-screen text-white">
        <div className="p-6 border-b">
          <h1
            dangerouslySetInnerHTML={{
              __html: CONTENT.blog.newsTitle1,
            }}
            className="text-2xl font-bold mb-2"
          ></h1>
          <p
            className="text-slate-400 text-md font-bold mb-4"
            dangerouslySetInnerHTML={{
              __html: CONTENT.blog.newsBrief1,
            }}
          ></p>
        </div>
        <div className="p-6 border-b">
          <h1
            dangerouslySetInnerHTML={{
              __html: CONTENT.blog.newsTitle2,
            }}
            className="text-2xl font-bold mb-2"
          ></h1>
          <p
            className="text-slate-400 text-md font-bold mb-4"
            dangerouslySetInnerHTML={{
              __html: CONTENT.blog.newsBrief2,
            }}
          ></p>
        </div>
        <div className="p-6 border-b">
          <h1
            dangerouslySetInnerHTML={{
              __html: CONTENT.blog.newsTitle3,
            }}
            className="text-2xl font-bold mb-2"
          ></h1>
          <p
            className="text-slate-400 text-md font-bold mb-4"
            dangerouslySetInnerHTML={{
              __html: CONTENT.blog.newsBrief3,
            }}
          ></p>
        </div>
      </div>
    </section>
  );
};
