import { create } from "zustand";

type StoreState = {
  sectionClassName: string;
  isMenuOpen: boolean;
  scrollbarColor: string;
};

const innialState: StoreState = {
  sectionClassName: "",
  isMenuOpen: false,
  scrollbarColor: "",
};

interface Store {
  sectionClassName: string;
  isMenuOpen: boolean;
  scrollbarColor: string;
  setSectionClassName: (sectionClass: string) => void;
  setIsMenuOpen: (isOpen: boolean) => void;
  setScrollbarColor: (colorString: string) => void;
  resetState: () => void;
}

export const store = create<Store>((set) => ({
  ...innialState,
  setSectionClassName: (sectionClass: string) =>
    set({ sectionClassName: sectionClass }),
  setIsMenuOpen: (isOpen: boolean) => set({ isMenuOpen: isOpen }),
  setScrollbarColor: (colorString: string) =>
    set({ scrollbarColor: colorString }),
  resetState: () => set({ ...innialState }),
}));
