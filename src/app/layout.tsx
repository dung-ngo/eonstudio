"use client";

import React, { useRef, useState } from "react";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/commons/Navbar";
import Scrollbar from "@/components/commons/Scrollbar";
import { PropsProvider } from "@/context/PropsContext";

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
    <PropsProvider value={handleBgClassName}>
      <html lang="en">
        <head>
          <title>Eon Studio</title>
          <meta name="description" content="Eon Studio is a creative agency that specializes in branding, photography, design, and web development." />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
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
    </PropsProvider>
  );
}
