import { create } from "zustand";

const useEditModal = create((set) => ({
  isOpen: false,
  title: "",
  data: {},
  to: "",
  type: "",
  list: [],
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  setTitle: (title) => set({ title }),
  setList: (list) => set({ list }),
  setType: (type) => set({ type }),
  setTo: (to) => set({ to }),
  setData: (data) => set({ data }),
}));

export default useEditModal;
