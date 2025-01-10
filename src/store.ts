import { create } from "zustand";

type StoreState = {
  sectionClassName: string;
  isMenuOpen: boolean;
  scrollbarColor: string;
  isIntroSection: boolean;
};

const innialState: StoreState = {
  sectionClassName: "",
  isMenuOpen: false,
  scrollbarColor: "",
  isIntroSection: true,
};

interface Store {
  sectionClassName: string;
  isMenuOpen: boolean;
  scrollbarColor: string;
  isIntroSection: boolean;
  setSectionClassName: (sectionClass: string) => void;
  setIsMenuOpen: (isOpen: boolean) => void;
  setScrollbarColor: (colorString: string) => void;
  setIsIntroSection: (isIntro: boolean) => void;
  resetState: () => void;
}

export const store = create<Store>((set) => ({
  ...innialState,
  setSectionClassName: (sectionClass: string) =>
    set({ sectionClassName: sectionClass }),
  setIsMenuOpen: (isOpen: boolean) => set({ isMenuOpen: isOpen }),
  setScrollbarColor: (colorString: string) =>
    set({ scrollbarColor: colorString }),
  setIsIntroSection: (isIntro: boolean) => set({ isIntroSection: isIntro }),
  resetState: () => set({ ...innialState }),
}));
