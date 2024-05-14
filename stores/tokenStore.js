import { create } from "zustand";

const useTokenStore = create((set) => ({
  tokenObject: null,
  setTokenObject: (tokenObject) => set({ tokenObject }),
}));

export default useTokenStore;
