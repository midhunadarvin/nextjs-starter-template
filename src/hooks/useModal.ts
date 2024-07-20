/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useModalStore } from '@/store/useModalStore';

export function useModal() {
  const { showModal, setModalState, title, data: modalData, modalContent } = useModalStore();

  const closeModal = () => {
    setModalState(undefined);
  };

  const openModal = (title: string, content: React.ReactNode, data?: any) => {
    setModalState({
      showModal: true,
      title,
      data,
      modalContent: content,
    });
  };

  return { closeModal, openModal, showModal, title, modalData, modalContent };
}
