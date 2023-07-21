import { ReactNode } from "react";
import { TextProps as DefaultTextProps } from "react-native";
import { TranslationKeyEnum } from "@/@types/TranslationKeyEnum";

export interface TextProps extends DefaultTextProps {
  children?: ReactNode;
  i18nKey?: TranslationKeyEnum;
}
