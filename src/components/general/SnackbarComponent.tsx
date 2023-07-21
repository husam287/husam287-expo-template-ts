import { I18nManager, StyleSheet } from "react-native";
import Toast, {
  ErrorToast,
  SuccessToast,
  BaseToastProps,
} from "react-native-toast-message";
import COLORS from "@/constants/Colors";
import GLOBAL_STYLES from "@/constants/GlobalStyles";

const styles = StyleSheet.create({
  errorTextColor: {
    color: COLORS.danger,
  },
  errorToast: {
    borderStartColor: COLORS.danger,
    height: 80,
  },
  msgStyle: {
    ...GLOBAL_STYLES.font500,
    color: COLORS.darkGrey,
    fontSize: 14,
    writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
  },
  successTextColor: {
    color: COLORS.success,
  },
  successToast: {
    borderStartColor: COLORS.success,
    height: 80,
  },
  titleStyle: {
    ...GLOBAL_STYLES.font700,
    fontSize: 16,
    writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
  },
});

function SuccessCustomToast(props: BaseToastProps) {
  return (
    <SuccessToast
      {...props}
      style={styles.successToast}
      text1Style={[styles.titleStyle, styles.successTextColor]}
      text2Style={styles.msgStyle}
    />
  );
}

function ErrorCustomToast(props: BaseToastProps) {
  return (
    <ErrorToast
      {...props}
      style={styles.errorToast}
      text1Style={[styles.titleStyle, styles.errorTextColor]}
      text2Style={styles.msgStyle}
    />
  );
}

export default function SnackbarComponent() {
  const toastConfig = {
    success: SuccessCustomToast,
    error: ErrorCustomToast,
  };

  return <Toast config={toastConfig} />;
}
