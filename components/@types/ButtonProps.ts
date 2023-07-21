import { TranslationKeyEnum } from "@/@types/TranslationKeyEnum";
import { GestureResponderEvent, TextStyle, ViewStyle } from "react-native";

export interface ButtonProps {
  title?: string;
  i18nKey?: TranslationKeyEnum;
  onPress: (event: GestureResponderEvent) => void;
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  disabled?: boolean;
  btnHeight?: number;
  buttonCustomStyle?: ViewStyle;
  textCustomStyle?: TextStyle;
  fontSize?: number;
  iconSize?: number;
  prefix?: JSX.Element;
  IconName?: string;
  isLoading?: boolean;
  suffix?: JSX.Element;
  isFullWidth?: boolean;
}
