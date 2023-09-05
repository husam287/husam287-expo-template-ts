import { Text as DefaultText } from "react-native";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";
import { TextProps } from "./types";
import styles from "./styles";

export default function Text({
  children,
  i18nKey,
  style,
  ...otherProps
}: TextProps): JSX.Element {
  const { t } = useAutoCompleteTranslation();

  return (
    <DefaultText {...otherProps} style={[styles.text, style]}>
      {i18nKey ? t(i18nKey) : children}
    </DefaultText>
  );
}
