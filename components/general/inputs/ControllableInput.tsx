import React from 'react';
import { Controller, Control } from 'react-hook-form';
import PureInput from './PureInput';
import { InputFieldProps } from '@/components/@types/InputFieldProps';

interface ControllableInputProps extends InputFieldProps {
  control: Control<any>;
  name: string
}

export default function ControllableInput({
  control,
  name,
  ...otherProps
}: ControllableInputProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value }, fieldState }) => (
        <PureInput
          onChangeText={onChange}
          onBlur={onBlur}
          value={value}
          error={fieldState.error?.message}
          {...otherProps}
        />
      )}
    />
  );
}
