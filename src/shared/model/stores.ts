import { create } from 'zustand'

interface AddModeState {
  addMode: boolean;
  setAddMode: (isAddMode: boolean) => void;
}

export const useAddModeStore = create<AddModeState>((set) => ({
  addMode: false,
  setAddMode: (isAddMode: boolean) => set(() => ({ addMode: isAddMode }))
}));