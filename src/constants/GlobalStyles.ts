/* eslint-disable react-native/sort-styles */
import { I18nManager, StyleSheet } from "react-native";
import METRICS from "./Metrics";

const GLOBAL_STYLES = StyleSheet.create({
  /* FONTS */
  font300: {
    fontFamily: "font300",
  },
  font400: {
    fontFamily: "font400",
  },
  font500: {
    fontFamily: "font500",
  },
  font700: {
    fontFamily: "font700",
  },

  mainContainer: {
    padding: METRICS.generalSpacingValue,
  },
  flatlistProductColumnWrapper: {
    justifyContent: "space-between",
    padding: METRICS.generalSpacingValue,
    paddingVertical: "2%",
  },
  fullSize: {
    flex: 1,
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
  },
  rowJustifyBetween: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  vhCentering: {
    alignItems: "center",
    justifyContent: "center",
  },
  flipInArabic: {
    transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
  },
});

export default GLOBAL_STYLES;
