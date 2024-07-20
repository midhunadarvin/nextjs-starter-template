/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  OnChangeFn,
  PaginationState,
  RowSelectionState,
  useReactTable,
} from '@tanstack/react-table';
import { useEffect, useState } from 'react';

import { Filter } from '@/components/data-table/Filter';
import IndeterminateCheckbox from '@/components/data-table/IndeterminateCheckbox';
import { Pagination } from '@/components/data-table/Pagination';

import { User } from '@/types/User';

export function DataTable({
  data,
  handleEdit,
  handleDelete,
  onRowSelectionChange,
}: {
  data: User[];
  handleEdit: (user: User) => void;
  handleDelete: (users: User[]) => void;
  onRowSelectionChange: (users: User[]) => void;
}) {
  const columnHelper = createColumnHelper<User>();

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const columns = [
    {
      id: 'select',
      header: ({ table }: { table: any }) => (
        <IndeterminateCheckbox
          {...{
            checked: table.getIsAllRowsSelected(),
            indeterminate: table.getIsSomeRowsSelected(),
            onChange: table.getToggleAllRowsSelectedHandler(),
          }}
        />
      ),
      cell: ({ row }: { row: any }) => (
        <div className='px-1'>
          <IndeterminateCheckbox
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler(),
            }}
          />
        </div>
      ),
    },
    columnHelper.accessor('first_name', {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('last_name', {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('age', {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('email', {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('alternate_email', {
      cell: (info) => info.getValue(),
    }),
    // columnHelper.accessor('password', {
    //   cell: info => info.getValue()
    // }),
    {
      header: 'Action',
      accessor: 'action',
      cell: ({ row }: any) => {
        return (
          <div className='flex gap-2'>
            <button
              className='rounded bg-blue-700 p-1 px-2 text-sm text-white'
              onClick={() => handleEdit(row.original)}
            >
              Edit
            </button>
            <button
              className='rounded bg-red-700 p-1 px-2 text-sm text-white'
              onClick={() => handleDelete([row.original])}
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];

  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const handleRowSelectionChange: OnChangeFn<RowSelectionState> = (state) => {
    setRowSelection(state);
  };

  useEffect(() => {
    onRowSelectionChange(Object.keys(rowSelection).map((index: string) => data[Number(index)]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rowSelection]);

  useEffect(() => {
    setRowSelection({});
  }, [data]);

  //react
  const table = useReactTable({
    columns,
    data,
    debugTable: true,
    enableRowSelection: true, //enable row selection for all rows
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    onRowSelectionChange: handleRowSelectionChange,
    //no need to pass pageCount or rowCount with client-side pagination as it is calculated automatically
    state: {
      pagination,
      rowSelection,
    },
  });

  return (
    <div className='p-2'>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table className='w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400'>
          <thead className='bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400'>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th key={header.id} colSpan={header.colSpan} scope='col' className='px-6 py-3'>
                      <div
                        {...{
                          className: header.column.getCanSort() ? 'cursor-pointer select-none' : '',
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {{
                          asc: ' 🔼',
                          desc: ' 🔽',
                        }[header.column.getIsSorted() as string] ?? null}
                        {header.column.getCanFilter() ? (
                          <div>
                            <Filter column={header.column} table={table} />
                          </div>
                        ) : null}
                      </div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => {
              return (
                <tr
                  key={row.id}
                  className='border-b bg-white dark:border-gray-700 dark:bg-gray-800'
                >
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td key={cell.id} className='px-6 py-4'>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Pagination table={table} />
    </div>
  );
}
