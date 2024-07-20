/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand';

type ModalStore = {
  showModal: boolean;
  data: any;
  title?: string;
  submitButtonText?: string;
  modalContent?: React.ReactNode;
};

type ModalStoreActions = {
  setModalState: (newState?: ModalStore) => void;
  setData: (data: any) => void;
  resetData: () => void;
};

// define the initial state
const initialState: ModalStore = {
  showModal: false,
  data: null,
  title: undefined,
  submitButtonText: undefined,
  modalContent: undefined,
};

export const useModalStore = create<ModalStore & ModalStoreActions>()((set) => ({
  ...initialState,
  setModalState: (newState?: ModalStore) => (newState ? set(newState) : set(initialState)),
  setData: (newData: any) => set(() => ({ data: newData })),
  resetData: () => set(initialState),
}));
