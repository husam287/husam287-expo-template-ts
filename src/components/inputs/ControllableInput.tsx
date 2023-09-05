import { Controller, Control } from "react-hook-form";
import PureInput from "./PureInput";
import { InputFieldProps } from "./PureInput/types";

interface ControllableInputProps extends InputFieldProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  name: string;
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
