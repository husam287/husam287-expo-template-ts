import { ReactNode } from "react";
import { TextProps as DefaultTextProps } from "react-native";

export interface TextProps extends DefaultTextProps {
  children?: ReactNode;
  i18nKey?: string;
}
