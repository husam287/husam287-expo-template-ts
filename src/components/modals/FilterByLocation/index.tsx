import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import COLORS from "@/constants/Colors";
import ModalWrapper from "../ModalWrapper";
import styles from "./styles";
import Text from "@/components/general/Text";

export default function FilterByShiftModal() {
  const [isVisible, setisVisible] = useState(false);

  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          setisVisible(true);
        }}
      >
        <Text>FILTER_BY_LOCATION</Text>
        <Entypo name="chevron-thin-down" size={21} color={COLORS.dark} />
      </TouchableOpacity>

      <ModalWrapper isVisible={isVisible} setVisible={setisVisible}>
        <Text>filter</Text>
      </ModalWrapper>
    </View>
  );
}
