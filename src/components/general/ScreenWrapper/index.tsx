import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  View,
  ViewStyle,
} from "react-native";

import { getStatusBarHeight } from "react-native-status-bar-height";
import GLOBAL_STYLES from "@/constants/GlobalStyles";
import METRICS from "@/constants/Metrics";
import { ScreenWrapperProps } from "./types";
import styles from "./styles";

export default function ScreenWrapper({
  children,
  hasVerticalSpaceBetween,
  customStyle,
  hasNoHorizontalSpacing = false,
  isHeaderHidden = false,
  hasNoKeyboardVerticalOffset = false,
}: ScreenWrapperProps) {
  const extraStyle: ViewStyle = {
    justifyContent: hasVerticalSpaceBetween ? "space-between" : "flex-start",
    paddingTop: isHeaderHidden ? getStatusBarHeight() : 10,
  };

  const allContainerStyle = [
    styles.container,
    hasNoHorizontalSpacing && styles.paddingHorizontal0,
    extraStyle,
    customStyle,
  ];

  const MainContentMarkup = <View style={allContainerStyle}>{children}</View>;

  return (
    <SafeAreaView style={styles.innerConatiner}>
      {Platform.OS === "ios" ? (
        <KeyboardAvoidingView
          style={GLOBAL_STYLES.fullSize}
          behavior="padding"
          keyboardVerticalOffset={
            !hasNoKeyboardVerticalOffset ? METRICS.headerHeight : 0
          }
        >
          {MainContentMarkup}
        </KeyboardAvoidingView>
      ) : (
        MainContentMarkup
      )}
    </SafeAreaView>
  );
}
