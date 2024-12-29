"use client";

import React, { createContext, useContext, useRef, useState } from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/commons/Navbar";
import Scrollbar from "@/components/commons/Scrollbar";

const ppRader = localFont({
  src: "./fonts/PPRader.otf",
  variable: "--font-pp-rader",
  weight: "100 900",
});

const neueMontreal = localFont({
  src: "./fonts/PPNeueMontreal-book.otf",
  variable: "--font-pp-neuemontreal",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Eon Studios",
//   description: "Eon Studios",
// };

const PropsContext = createContext<(sectionClass: string) => void>(() => {});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [sectionClassName, setSectionClassName] = useState<string>("");

  const handleBgClassName = (sectionClass: string) => {
    setSectionClassName(sectionClass);
  };

  return (
    <PropsContext.Provider value={handleBgClassName}>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo-white.svg" />
        </head>
        <body
          className={`${ppRader.variable} ${neueMontreal.variable} antialiased`}
        >
          <Navbar sectionClassName={sectionClassName} />
          <Scrollbar>
            <div ref={wrapperRef}>{children}</div>
          </Scrollbar>
        </body>
      </html>
    </PropsContext.Provider>
  );
}

export const useProps = () => {
  return useContext(PropsContext);
};
