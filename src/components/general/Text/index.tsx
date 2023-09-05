import { I18nManager, Text as DefaultText, TextStyle } from "react-native";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";
import COLORS from "@/constants/Colors";
import { TextProps } from "./types";

export default function Text({
  children,
  i18nKey,
  style,
  fontSize = 14,
  fontFamily = "font400",
  color = "dark",
  ...otherProps
}: TextProps): JSX.Element {
  const { t } = useAutoCompleteTranslation();

  const textStyle: TextStyle = {
    color: COLORS[color],
    fontSize,
    fontFamily,
    writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
  };

  return (
    <DefaultText {...otherProps} style={[textStyle, style]}>
      {i18nKey ? t(i18nKey) : children}
    </DefaultText>
  );
}
