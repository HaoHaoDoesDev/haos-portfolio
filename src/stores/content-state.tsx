import { create } from "zustand";

type LayoutState = {
  isAltLayout: boolean;
  toggleLayout: () => void;
  setLayout: (value: boolean) => void;
};

export const useLayoutStore = create<LayoutState>((set) => ({
  isAltLayout: false,
  toggleLayout: () => set((state) => ({ isAltLayout: !state.isAltLayout })),
  setLayout: (value) => set({ isAltLayout: value }),
}));
