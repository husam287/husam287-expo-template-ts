import { ReactNode } from "react";
import { ViewStyle } from "react-native";

export interface ScreenWrapperProps {
  children: ReactNode;
  hasVerticalSpaceBetween?: boolean;
  customStyle?: ViewStyle;
  hasNoHorizontalSpacing?: boolean;
  isHeaderHidden?: boolean;
  hasNoKeyboardVerticalOffset?: boolean;
}
