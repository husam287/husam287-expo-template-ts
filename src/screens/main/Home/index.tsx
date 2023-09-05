import { useState } from "react";
import { Link, useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import ScreenWrapper from "@/components/general/ScreenWrapper";
import Text from "@/components/general/Text";
import Button from "@/components/general/Button";
import BottomSheet from "@/components/general/BottomSheet";
import styles from "./styles";

export default function HomeScreen() {
  const navigation = useNavigation();

  const [isBottomSheetVisible, setisBottomSheetVisible] = useState(false);

  const onShowBottomSheet = () => {
    setisBottomSheetVisible(true);
  };

  const goToProfile = () => {
    navigation.navigate("Root", {
      screen: "MainProfileScreen",
      params: { title: "New Profile" },
    });
  };

  return (
    <ScreenWrapper>
      <Text>click home button to show bottom sheet</Text>

      <Button onPress={onShowBottomSheet} i18nKey="HOME" />

      <Text style={styles.title} i18nKey="HOME" />

      <Link
        to={{ screen: "ProductDetails", params: { productId: "si" } }}
        style={styles.title}
      >
        go to product details
      </Link>

      <Link
        to={{ screen: "ProductDetailsModal", params: { productId: "si" } }}
        style={styles.title}
      >
        go to product modal
      </Link>

      <TouchableOpacity onPress={goToProfile}>
        <Text style={styles.title}>go to profie</Text>
      </TouchableOpacity>

      <BottomSheet
        isVisible={isBottomSheetVisible}
        setVisible={setisBottomSheetVisible}
        draggable
      >
        <Text>
          hiiii
          <Text>noooooooooo</Text>
          <Text>noooooooooo</Text>
        </Text>
      </BottomSheet>
    </ScreenWrapper>
  );
}
