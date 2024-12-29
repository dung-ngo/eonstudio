import { createContext, useContext } from "react";

const PropsContext = createContext<(sectionClass: string) => void>(() => {});

export const PropsProvider = PropsContext.Provider;

export const useProps = () => {
  return useContext(PropsContext);
};
