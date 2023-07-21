import { Link } from "expo-router";
import { useState } from "react";
import ScreenWrapper from "@/components/general/ScreenWrapper";
import Text from "@/components/general/Text";
import Button from "@/components/general/Button";
import BottomSheet from "@/components/general/BottomSheet";
import styles from "./styles";

export default function HomeScreen() {
  const [isBottomSheetVisible, setisBottomSheetVisible] = useState(false);

  const onShowBottomSheet = () => {
    setisBottomSheetVisible(true);
  };

  return (
    <ScreenWrapper>
      <Text style={styles.title} i18nKey="HOME" />

      <Text>click home button to show bottom sheet</Text>

      <Button onPress={onShowBottomSheet} i18nKey="HOME" />

      <Link href="/product-details">
        <Text style={styles.title}>go to product details</Text>
      </Link>

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
