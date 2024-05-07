import { create } from "zustand";

// Creamos un store Zustand para almacenar los datos del usuario
const useUserStore = create((set) => ({
  userData: {},
  setUserData: (data) => set({ userData: data }),
}));

export default useUserStore;
