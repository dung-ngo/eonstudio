import { create } from "zustand";

type StoreState = {
    sectionClassName: string;
    isMenuOpen: boolean;
}

const innialState: StoreState = {
    sectionClassName: "",
    isMenuOpen: false,
}

interface Store {
    sectionClassName: string;
    isMenuOpen: boolean;
    setSectionClassName: (sectionClass: string) => void;
    setIsMenuOpen: (isOpen: boolean) => void;
    resetState: () => void;
}

export const store = create<Store>((set) => ({
    ...innialState,
    setSectionClassName: (sectionClass: string) => set({ sectionClassName: sectionClass }),
    setIsMenuOpen: (isOpen: boolean) => set({ isMenuOpen: isOpen }),
    resetState: () => set({ ...innialState }),
}));