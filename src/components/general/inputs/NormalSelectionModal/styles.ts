import { StyleSheet } from "react-native";
import COLORS from "@/constants/Colors";
import GLOBAL_STYLES from "@/constants/GlobalStyles";

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: COLORS.light,
    borderRadius: 30,
    padding: 30,
  },
  pressSpace: {
    justifyContent: "center",
    paddingVertical: 20,
  },
  text: {
    color: COLORS.dark,
    fontSize: 18,
    ...GLOBAL_STYLES.font500,
    marginStart: 10,
    textAlign: "center",
  },
});

export default styles;
