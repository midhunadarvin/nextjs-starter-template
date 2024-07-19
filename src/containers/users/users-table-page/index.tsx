'use client';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

import { DataTable } from '@/components/data-table';

import { getUsers } from '@/actions/user';

import { User } from '@/types/User';

export function UsersTablePage() {
  const { isPending, error, data } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: async () => JSON.parse(await getUsers()),
  });

  if (isPending) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <>
      <div className='my-3 flex justify-between p-2'>
        <h2 className='text-2xl font-extrabold dark:text-white'>Users</h2>

        <div>
          <Link href='?modal=true'>
            <button
              type='button'
              className='inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Add User
            </button>
          </Link>
        </div>
      </div>

      <DataTable data={data} />
    </>
  );
}
