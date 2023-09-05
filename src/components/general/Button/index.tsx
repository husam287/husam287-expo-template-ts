import {
  ActivityIndicator,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

import GLOBAL_STYLES from "@/constants/GlobalStyles";
import COLORS from "@/constants/Colors";
import getShadowStyle from "@/utils/getShadowStyle";
import { ButtonProps } from "./types";
import Text from "@/components/general/Text";
import Icon from "@/components/general/Icon";
import styles from "./styles";

export default function Button({
  title,
  i18nKey,
  onPress,
  color = COLORS.light,
  backgroundColor = COLORS.primary,
  borderColor,
  disabled = false,
  btnHeight = 52,
  buttonCustomStyle,
  textCustomStyle,
  fontSize = 16,
  iconSize = 18,
  prefix,
  IconName,
  isLoading,
  suffix,
  isFullWidth = false,
}: ButtonProps) {
  const customStyle: ViewStyle = {
    backgroundColor: disabled ? COLORS.grey : backgroundColor,
    borderColor,
    borderWidth: borderColor ? 1 : 0,
    height: btnHeight,
    flex: isFullWidth ? 1 : undefined,
    ...buttonCustomStyle,
  };

  const textExtraStyle = { color, fontSize };

  const hasTitle = !!title || !!i18nKey;

  return (
    <TouchableOpacity
      style={[styles.button, customStyle, getShadowStyle()]}
      disabled={disabled || isLoading}
      activeOpacity={disabled ? 1 : 0.2}
      onPress={onPress}
    >
      {!isLoading ? (
        <View style={GLOBAL_STYLES.row}>
          {prefix && <View style={styles.prefixSpacing}>{prefix}</View>}

          {!!IconName && (
            <Icon
              name={IconName}
              size={iconSize}
              color={color}
              style={styles.smallSpaceEnd}
            />
          )}

          {hasTitle && (
            <Text
              style={[styles.text, textExtraStyle, textCustomStyle]}
              i18nKey={i18nKey}
            >
              {title}
            </Text>
          )}

          {suffix && <View style={styles.suffixSpacing}>{suffix}</View>}
        </View>
      ) : (
        <ActivityIndicator color={color} size={24} />
      )}
    </TouchableOpacity>
  );
}
