import { StyleSheet } from "react-native";
import COLORS from "@/constants/Colors";
import GLOBAL_STYLES from "@/constants/GlobalStyles";

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: 16,
    flexDirection: "row",
    height: 40,
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  prefixSpacing: {
    marginEnd: 10,
  },
  smallSpaceEnd: { marginEnd: 4 },
  suffixSpacing: {
    marginStart: 10,
  },
  text: {
    color: COLORS.light,
    fontSize: 16,
    textAlign: "center",
    ...GLOBAL_STYLES.font700,
  },
});

export default styles;
