import { SimpleLineIcons } from "@expo/vector-icons";
import { I18nManager, StyleSheet, TouchableOpacity, View } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { useNavigation } from "@react-navigation/native";
import GLOBAL_STYLES from "@/constants/GlobalStyles";
import Colors from "@/constants/Colors";
import Text from "@/components/general/Text";
import NotificationBell from "./NotificationBell";

const styles = StyleSheet.create({
  headerStyle: {
    alignItems: "center",
    backgroundColor: Colors.light,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingTop: getStatusBarHeight(),
  },
  headerTitle: {
    color: Colors.primary,
    fontSize: 18,
    ...GLOBAL_STYLES.font500,
  },
  hiddenStyle: { opacity: 0 },
  spacing: {
    marginStart: -15,
    padding: 15,
  },
});

export default function NavigationHeader({
  title = "",
  hasBackArrow = true,
  hasLogo = false,
  isRightComponentHidden = false,
}) {
  const navigation = useNavigation();

  const BackButtonMarkup = (
    <SimpleLineIcons
      name={I18nManager.isRTL ? "arrow-right" : "arrow-left"}
      size={18}
      color={Colors.dark}
    />
  );

  const isBackButtonVisible = hasBackArrow && navigation.canGoBack();

  return (
    <View style={styles.headerStyle}>
      {/* BACK BUTTON */}
      <TouchableOpacity
        disabled={!isBackButtonVisible}
        style={[styles.spacing, !isBackButtonVisible && styles.hiddenStyle]}
        onPress={navigation.goBack}
      >
        {BackButtonMarkup}
      </TouchableOpacity>

      {/* CENTER COMPONENT */}
      <View>
        {!!title && (
          <View>
            <Text style={styles.headerTitle}>{title}</Text>
          </View>
        )}
        {!!hasLogo && (
          <View>
            <Text>LOGO</Text>
          </View>
        )}
      </View>

      {/* RIGHT COMPONENT */}
      <View
        pointerEvents={isRightComponentHidden ? "none" : undefined}
        style={isRightComponentHidden && styles.hiddenStyle}
      >
        <NotificationBell />
      </View>
    </View>
  );
}
