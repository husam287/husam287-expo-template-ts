import { StyleSheet } from "react-native";
import COLORS from "@/constants/Colors";

const styles = StyleSheet.create({
  closeSection: { justifyContent: "flex-end" },
  modalContainer: {
    backgroundColor: COLORS.light,
    borderRadius: 30,
    padding: 20,
  },
});

export default styles;
