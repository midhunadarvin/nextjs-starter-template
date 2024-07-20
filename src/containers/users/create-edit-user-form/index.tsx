import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { useModal } from '@/hooks/useModal';

import { TextInput } from '@/components/inputs/TextInput';

import { createUser, editUser } from '@/actions/user';

import { User } from '@/types/User';
export function CreateEditUserForm() {
  const { closeModal, modalData: userData } = useModal();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<User>();

  useEffect(() => {
    if (userData) {
      reset({
        ...userData,
      });
    } else {
      reset();
    }
  }, [userData, reset]);

  const queryClient = useQueryClient();

  const resetForm = () => {
    reset({});
  };

  const onSubmit: SubmitHandler<User> = async (data) => {
    let response;
    if (userData) {
      response = await editUser(data);
    } else {
      response = await createUser(data);
    }

    if (response.message == 'success') {
      closeModal();
      if (userData) {
        toast.success('User edited successfully!');
      } else {
        toast.success('User added successfully!');
      }

      queryClient.invalidateQueries({ queryKey: ['users'] });
      resetForm();
    } else {
      toast.error('Something went wrong!');
      resetForm();
    }
  };
  return (
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
            min={18}
          />
        </div>
        <div className='col-span-1'>
          <TextInput id='email' label='Email' register={register} errors={errors} required={true} />
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
          {userData ? 'Edit User' : 'Create User'}
        </button>
      </div>
    </form>
  );
}
