import { StyleSheet } from "react-native";
import GLOBAL_STYLES from "@/constants/GlobalStyles";

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: "center",
    ...GLOBAL_STYLES.font700,
  },
});

export default styles;
