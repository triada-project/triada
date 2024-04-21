import { create } from "zustand";

// Crea un store Zustand para manejar el estado seleccionado
const useSelectedStateStore = create((set) => ({
  selectedState: "",
  setSelectedState: (state) => set({ selectedState: state }),
}));

export default useSelectedStateStore;
