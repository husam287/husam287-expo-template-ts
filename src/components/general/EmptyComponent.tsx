import { StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Colors from "@/constants/Colors";
import GLOBAL_STYLES from "@/constants/GlobalStyles";
import Text from "./Text";
import { TranslationKeyEnum } from "@/@types/TranslationKeyEnum";

const styles = StyleSheet.create({
  centering: {
    justifyContent: "center",
  },
  textStyle: {
    color: Colors.secondary,
    fontSize: 14,
    marginStart: 5,
  },
});

export default function EmptyComponent({
  i18nKey = "EMPTY",
}: {
  i18nKey: TranslationKeyEnum;
}) {
  return (
    <View style={[GLOBAL_STYLES.row, styles.centering]}>
      <AntDesign name="inbox" size={18} color={Colors.secondary} />
      <Text i18nKey={i18nKey} style={styles.textStyle} />
    </View>
  );
}
