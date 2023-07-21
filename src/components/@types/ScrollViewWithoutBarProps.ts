import { ReactNode } from "react";
import { ScrollViewProps } from "react-native";

export interface ScrollViewWithoutBarProps extends ScrollViewProps {
  children: ReactNode;
}
