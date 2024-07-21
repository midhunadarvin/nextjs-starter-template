'use client';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { useAlertModal } from '@/hooks/useAlertModal';
import { useCreateEditUserModal } from '@/hooks/useCreateEditUserModal';

import { DataTable } from '@/components/data-table';

import { deleteUsers, getUsers } from '@/actions/user';

import { User } from '@/types/User';

export function UsersTablePage() {
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
  const { openCreateEditUserModal } = useCreateEditUserModal();
  const { openAlertModal } = useAlertModal();
  const queryClient = useQueryClient();
  const { isPending, error, data } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: async () => await getUsers(),
  });

  if (isPending) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  const handleEdit = async (value: User) => {
    openCreateEditUserModal(value);
  };

  const handleDelete = async (value: User[]) => {
    openAlertModal('Are you sure you want to delete this user(s) ?', async (val: boolean) => {
      if (val) {
        const response = await deleteUsers(value);
        if (response.message == 'success') {
          toast.success('Deleted users successfully!');
          queryClient.invalidateQueries({ queryKey: ['users'] });
          setSelectedUsers([]);
        }
      }
    });
  };

  const handleRowSelectionChange = (value: User[]) => {
    setSelectedUsers(value);
  };

  return (
    <>
      <div className='my-3 flex justify-between p-2'>
        <h2 className='text-2xl font-extrabold dark:text-white'>Users</h2>

        <div className='flex gap-3'>
          {selectedUsers.length ? (
            <button
              type='button'
              onClick={() => handleDelete(selectedUsers)}
              className='inline-flex items-center rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Delete Users
            </button>
          ) : null}

          <button
            type='button'
            onClick={() => openCreateEditUserModal()}
            className='inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Add User
          </button>
        </div>
      </div>

      <DataTable
        data={data}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        onRowSelectionChange={handleRowSelectionChange}
      />
    </>
  );
}
