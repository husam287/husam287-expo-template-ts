import { ReactNode } from "react";
import { TextProps as DefaultTextProps } from "react-native";
import { TranslationKeyEnum } from "@/@types/TranslationKeyEnum";
import FontFamily from "@/constants/FontFamily";
import COLORS from "@/constants/Colors";

export interface TextProps extends DefaultTextProps {
  children?: ReactNode;
  i18nKey?: TranslationKeyEnum;
  /**
   * @default 14
   */
  fontSize?: number;
  /**
   * @default "font400"
   */
  fontFamily?: keyof typeof FontFamily;
  /**
   * @default "dark"
   */
  color?: keyof typeof COLORS;
}
