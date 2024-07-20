import { useModal } from '@/hooks/useModal';

import { CreateEditUserForm } from '@/containers/users/create-edit-user-form';

import { User } from '@/types/User';

export function useCreateEditUserModal() {
  const { openModal } = useModal();

  const openCreateEditUserModal = (value?: User) => {
    openModal(value ? 'Edit User' : 'Add User', <CreateEditUserForm />, value);
  };

  return { openCreateEditUserModal };
}
