import { SimpleLineIcons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { useNavigation } from "@react-navigation/native";
import GLOBAL_STYLES from "@/constants/GlobalStyles";
import Colors from "@/constants/Colors";
import Text from "@/components/general/Text";

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
  spacing: {
    marginStart: -15,
    padding: 15,
  },
});

export default function PopupHeader({ title = "" }) {
  const navigation = useNavigation();

  const CloseButtonMarkup = (
    <SimpleLineIcons name="close" size={18} color={Colors.dark} />
  );

  return (
    <View style={styles.headerStyle}>
      {/* CENTER COMPONENT */}
      {!!title && (
        <View>
          <Text style={styles.headerTitle}>{title}</Text>
        </View>
      )}

      {/* CLOSE BUTTON */}
      <TouchableOpacity style={styles.spacing} onPress={navigation.goBack}>
        {CloseButtonMarkup}
      </TouchableOpacity>
    </View>
  );
}
