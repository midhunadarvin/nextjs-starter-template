'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorMessage } from '@hookform/error-message';
import { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

import 'react-datepicker/dist/react-datepicker.css';

interface DateTimeInputProps {
  label?: string;
  id: string;
  className?: string;
  register?: UseFormRegister<any>;
  defaultValue?: Date;
  errors?: FieldErrors<any>;
  onChange: (data: Date) => void;
}
export function DateTimeInput({
  id,
  label,
  className,
  register,
  defaultValue,
  errors,
  onChange,
}: DateTimeInputProps) {
  const [value, setValue] = useState(defaultValue);
  let registerParams = {};
  if (register) {
    registerParams = register(id, {
      required: `${label} is required`,
    });
  }

  return (
    <>
      {label && <label className='mb-2 inline-block text-sm'>{label}</label>}

      <ReactDatePicker
        selected={value}
        className={className || ''}
        {...registerParams}
        onChange={(date: Date | null) => {
          if (date) {
            setValue(date);
            if (onChange) onChange(date);
          }
        }}
        timeInputLabel='Time:'
        dateFormat='MM/dd/yyyy h:mm aa'
        showTimeInput
      />

      {errors && (
        <ErrorMessage
          name={id}
          errors={errors}
          render={({ message }) => <p className='text-red'>{message}</p>}
        />
      )}
    </>
  );
}
