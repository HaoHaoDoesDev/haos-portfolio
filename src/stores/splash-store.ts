import { create } from "zustand";

interface SplashState {
  hasSeenSplash: boolean;
  setHasSeenSplash: () => void;
}

export const useSplashStore = create<SplashState>((set) => ({
  hasSeenSplash: false,
  setHasSeenSplash: () => set({ hasSeenSplash: true }),
}));
