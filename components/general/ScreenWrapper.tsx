import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

import { getStatusBarHeight } from "react-native-status-bar-height";
import COLORS from "@/constants/Colors";
import GLOBAL_STYLES from "@/constants/GlobalStyles";
import METRICS from "@/constants/Metrics";
import { ScreenWrapperProps } from "../@types/ScreenWrapperProps";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: METRICS.generalSpacingValue,
    paddingTop: 10,
    width: METRICS.screenWidth,
  },
  innerConatiner: {
    backgroundColor: COLORS.light,
    flex: 1,
  },
  paddingHorizontal0: {
    paddingHorizontal: 0,
  },
});

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
