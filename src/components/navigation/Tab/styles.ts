import { StyleSheet } from "react-native";
import COLORS from "@/constants/Colors";
import GLOBAL_STYLES from "@/constants/GlobalStyles";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    paddingVertical: 6,
  },
  text: {
    color: COLORS.dark,
    fontSize: 10,
    ...GLOBAL_STYLES.font700,
  },
});

export default styles;
