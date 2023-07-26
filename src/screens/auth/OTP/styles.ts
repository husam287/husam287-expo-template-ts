import { I18nManager, StyleSheet } from "react-native";
import COLORS from "@/constants/Colors";
import GLOBAL_STYLES from "@/constants/GlobalStyles";

const styles = StyleSheet.create({
  cellBox: {
    alignItems: "center",
    backgroundColor: COLORS.light,
    borderRadius: 16,
    height: 86,
    justifyContent: "center",
    lineHeight: 45,
    marginHorizontal: 12,
    width: 64,
  },
  cellText: {
    color: `${COLORS.dark}8a`,
    fontSize: 38,
  },
  codeFieldRoot: {
    flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
    justifyContent: "center",
    marginVertical: 20,
    width: "100%",
  },
  counterDigit: {
    backgroundColor: undefined,
    height: null,
    width: null,
  },
  focusCell: {
    borderColor: COLORS.primary,
    borderWidth: 1,
  },
  paddingTop0: {
    paddingTop: 0,
  },
  remainingTimeText: {
    color: COLORS.success,
    fontSize: 18,
    ...GLOBAL_STYLES.font700,
  },
  sendTitleText: {
    color: COLORS.lightPrimary,
    fontSize: 28,
    ...GLOBAL_STYLES.font700,
  },
  separatorStyle: {
    color: COLORS.success,
    fontSize: 18,
    ...GLOBAL_STYLES.font700,
  },
  shadowBoxStyle: {
    marginTop: 20,
  },
  spaceBottom0: {
    paddingBottom: 0,
  },
  spaceBottom15: { marginBottom: 15 },
  spaceStart5: { marginStart: 5 },
  spaceTop10: {
    marginTop: 10,
  },
  spaceVertical20: {
    marginVertical: 20,
  },
  text: {
    color: `${COLORS.dark}8A`,
    fontSize: 16,
    ...GLOBAL_STYLES.font500,
  },
});

export default styles;
