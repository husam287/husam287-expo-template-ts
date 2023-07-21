import { Text, View, ViewStyle } from "react-native";

import GLOBAL_STYLES from "@/constants/GlobalStyles";
import COLORS from "@/constants/Colors";
import { NavigationTabProps } from "@/components/@types/NavigationTabProps";

function NavigationTab({
  focused,
  title,
  tabWidth,
  iconComponent,
}: NavigationTabProps) {
  const SPACE_BETWEEN = 10.5;

  const containerStyle: ViewStyle = {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 6,
    marginHorizontal: SPACE_BETWEEN,
    width: tabWidth - SPACE_BETWEEN * 2,
    marginTop: 10,
  };

  const focusContainer: ViewStyle = {
    backgroundColor: focused ? "#D1D5DB" : "transpparent",
    borderRadius: 16,
  };

  const textStyle = {
    color: COLORS.dark,
    fontSize: 10,
  };

  return (
    <View style={[containerStyle, focusContainer]}>
      {iconComponent}
      <Text style={[textStyle, GLOBAL_STYLES.font700]}>{title}</Text>
    </View>
  );
}

export default NavigationTab;
