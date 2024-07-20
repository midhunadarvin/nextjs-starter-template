import { Suspense } from 'react';

import Modal from '@/components/modal';
import DashboardLayout from '@/containers/layout/dashboard-layout';
import { UsersTablePage } from '@/containers/users/users-table-page';
export default function Users() {
  return (
    <DashboardLayout>
      <UsersTablePage />
      <Suspense>
        <Modal />
      </Suspense>
    </DashboardLayout>
  );
}
