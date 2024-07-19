'use client';
import { useQueryClient } from '@tanstack/react-query';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { useModal } from '@/hooks/useModal';

import { TextInput } from '@/components/inputs/TextInput';
import Modal from '@/components/modal';

import { createUser } from '@/actions/user';

import { User } from '@/types/User';

export function CreateUserModal() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<User>();
  const { closeModal } = useModal();
  const queryClient = useQueryClient();

  const onSubmit: SubmitHandler<User> = async (data) => {
    const response = await createUser(data);

    if (response.message == 'success') {
      closeModal();
      toast.success('User added successfully!');
      queryClient.invalidateQueries({ queryKey: ['users'] });
      reset();
    } else {
      toast.error('Something went wrong!');
      reset();
    }
  };

  return (
    <Modal
      title='Create User'
      onClose={() => {
        reset();
      }}
    >
      <form className='p-4 md:p-5' onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4 grid grid-cols-2 gap-4'>
          <div className='col-span-1'>
            <TextInput
              id='first_name'
              label='First Name'
              register={register}
              errors={errors}
              required={true}
            />
          </div>
          <div className='col-span-1'>
            <TextInput
              id='last_name'
              label='Last Name'
              register={register}
              errors={errors}
              required={true}
            />
          </div>
          <div className='col-span-1'>
            <TextInput
              id='age'
              label='Age'
              register={register}
              errors={errors}
              required={true}
              type='number'
            />
          </div>
          <div className='col-span-1'>
            <TextInput
              id='email'
              label='Email'
              register={register}
              errors={errors}
              required={true}
            />
          </div>
          <div className='col-span-1'>
            <TextInput
              id='alternate_email'
              label='Alternate Email'
              register={register}
              errors={errors}
              required={false}
            />
          </div>
          <div className='col-span-1'>
            <TextInput
              id='password'
              label='Password'
              register={register}
              errors={errors}
              required={true}
              type='password'
            />
          </div>
        </div>
        <div className='flex justify-end'>
          <button
            type='submit'
            className='inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            <svg
              className='-ms-1 me-1 h-5 w-5'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
                clipRule='evenodd'
              ></path>
            </svg>
            Create User
          </button>
        </div>
      </form>
    </Modal>
  );
}
