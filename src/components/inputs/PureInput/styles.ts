import { I18nManager, StyleSheet } from "react-native";
import COLORS from "@/constants/Colors";
import GLOBAL_STYLES from "@/constants/GlobalStyles";

const styles = StyleSheet.create({
  errorBorder: {
    borderColor: COLORS.danger,
    borderWidth: 1,
  },
  errorText: {
    ...GLOBAL_STYLES.font400,
    color: COLORS.danger,
    fontSize: 12,
  },
  hintText: {
    color: COLORS.secondary,
    fontSize: 14,
    ...GLOBAL_STYLES.font400,
  },
  input: {
    color: COLORS.dark,
    flex: 1,
    fontSize: 14,
    textAlign: I18nManager.isRTL ? "right" : "left",
    textAlignVertical: "center",
    width: "100%",
    ...GLOBAL_STYLES.font500,
  },
  inputContainer: {
    alignItems: "center",
    backgroundColor: COLORS.light,
    borderRadius: 16,
    flexDirection: "row",
    height: 56,
    marginTop: 5,
    paddingHorizontal: 15,
  },
  labelText: {
    color: COLORS.dark,
    fontSize: 14,
    marginStart: 5,
    ...GLOBAL_STYLES.font500,
  },
  spaceAround: { marginHorizontal: 5 },
  spaceBottom: { marginBottom: 16 },
  spaceEnd10: { marginEnd: 10 },
  textAreaContainer: {
    alignItems: "flex-start",
    height: 140,
    paddingVertical: 20,
  },
  textAreaInput: {
    marginTop: -7,
    textAlignVertical: "top",
  },
});

export default styles;
