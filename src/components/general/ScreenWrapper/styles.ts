import { StyleSheet } from "react-native";
import COLORS from "@/constants/Colors";
import METRICS from "@/constants/Metrics";

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

export default styles;
