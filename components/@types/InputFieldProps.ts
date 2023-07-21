import { TextInputProps, ViewStyle } from "react-native";

export interface InputFieldProps extends TextInputProps {
  error?: string;
  customContainerStyle?: ViewStyle;
  prefix?: JSX.Element | null;
  suffix?: JSX.Element | null;
  customInputColorWhenDisabled?: string;
  customInputStyle?: ViewStyle;
  hintText?: string;
  labelText?: string;
  isPlaceholderDotsHidden?: boolean;
  isTextAreaInput?: boolean;
}
