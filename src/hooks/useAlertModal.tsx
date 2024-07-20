import { useModal } from '@/hooks/useModal';

import { AlertForm } from '@/components/alert/alert-form';

export function useAlertModal() {
  const { openModal, closeModal } = useModal();
  const openAlertModal = (title: string, callback: (val: boolean) => void) => {
    openModal(
      'Alert',
      <AlertForm
        title={title}
        callback={(val: boolean) => {
          callback(val);
          closeModal();
        }}
      />,
    );
  };
  return { openAlertModal };
}
