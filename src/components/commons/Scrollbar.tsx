"use client";

import React, { PropsWithChildren } from "react";
import "@/styles/Scrollbar.css";

const Scrollbar: React.FC<PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};

export default Scrollbar;
