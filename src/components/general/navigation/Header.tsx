import { SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import {
  I18nManager,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import GLOBAL_STYLES from "@/constants/GlobalStyles";
import Colors from "@/constants/Colors";

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
  },
  headerStyle: {
    alignItems: "center",
    backgroundColor: Colors.light,
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingTop: getStatusBarHeight(),
  },
  headerTitle: {
    color: Colors.primary,
    fontSize: 18,
    ...GLOBAL_STYLES.font500,
  },
  logoImage: {
    height: 50,
  },
  saveText: {
    color: Colors.success,
    marginBottom: -20,
    marginEnd: -20,
    marginTop: -20,
    padding: 20,
    ...GLOBAL_STYLES.font700,
    textDecorationLine: "underline",
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  spacing: {
    marginStart: -15,
    padding: 15,
  },
});

export default function NavigationHeader({
  title = "",
  hasBackArrow = true,
  showLogo = false,
  isPopupHeader = false,
  hasSaveButton = false,
}) {
  const navigation = useNavigation();

  const BackButtonMarkup = (
    <SimpleLineIcons
      name={I18nManager.isRTL ? "arrow-right" : "arrow-left"}
      size={18}
      color={Colors.dark}
    />
  );

  const CloseButtonMarkup = (
    <SimpleLineIcons name="close" size={18} color={Colors.dark} />
  );

  const isBackButtonVisible = hasBackArrow && navigation.canGoBack();

  return (
    <View
      style={[
        styles.headerStyle,
        (showLogo || !isBackButtonVisible) && styles.center,
        (isPopupHeader || hasSaveButton) && styles.spaceBetween,
      ]}
    >
      {/* BACK BUTTON */}
      <View style={GLOBAL_STYLES.row}>
        {isBackButtonVisible && !isPopupHeader && (
          <TouchableOpacity
            style={styles.spacing}
            onPress={() => navigation.goBack()}
          >
            {BackButtonMarkup}
          </TouchableOpacity>
        )}

        {!!title && (
          <View>
            <Text style={styles.headerTitle}>{title}</Text>
          </View>
        )}
      </View>

      {/* CLOSE BUTTON */}
      {isBackButtonVisible && isPopupHeader && (
        <TouchableOpacity
          style={styles.spacing}
          onPress={() => navigation.goBack()}
        >
          {CloseButtonMarkup}
        </TouchableOpacity>
      )}
    </View>
  );
}
