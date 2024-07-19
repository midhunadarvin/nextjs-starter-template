import { Suspense } from 'react';

import DashboardLayout from '@/containers/layout/dashboard-layout';
import { CreateUserModal } from '@/containers/users/create-user-modal';
import { UsersTablePage } from '@/containers/users/users-table-page';
export default function Users() {
  return (
    <DashboardLayout>
      <UsersTablePage />
      <Suspense>
        <CreateUserModal />
      </Suspense>
    </DashboardLayout>
  );
}
