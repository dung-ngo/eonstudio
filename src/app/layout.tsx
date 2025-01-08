"use client";

import React from "react";
import "@/styles/main.css";
import Navbar from "@/components/commons/Navbar";
import CustomScrollbar from "@/components/commons/Scrollbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Eon Studio</title>
        <meta
          name="description"
          content="Eon Studio is a creative agency that specializes in branding, photography, design, and web development."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <link rel="icon" href="/logo-white.svg" />
      </head>
      <body className="antialiased">
        <Navbar />
        <div>
          <CustomScrollbar>
            <div style={{ height: "100vh" }}>{children}</div>
          </CustomScrollbar>
        </div>
      </body>
    </html>
  );
}
