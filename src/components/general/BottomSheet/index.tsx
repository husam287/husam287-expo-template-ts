import { TouchableOpacity, View } from "react-native";
import { useEffect, useRef } from "react";
import { AntDesign } from "@expo/vector-icons";
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";
import GLOBAL_STYLES from "@/constants/GlobalStyles";
import { BottomSheetProps } from "./types";
import styles from "./styles";

export default function BottomSheet({
  isVisible,
  setVisible,
  children,
  draggable = false,
  isCloseButtonHidden = false,
}: BottomSheetProps) {
  const bottomSheetRef = useRef<ActionSheetRef>(null);

  const show = () => {
    if (!bottomSheetRef?.current) return;
    bottomSheetRef?.current?.show();
  };

  const close = () => {
    if (!bottomSheetRef?.current) return;
    bottomSheetRef?.current?.hide();
    setVisible(false);
  };

  useEffect(() => {
    if (isVisible) show();
    else close();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return (
    <ActionSheet
      ref={bottomSheetRef}
      gestureEnabled={draggable}
      indicatorStyle={styles.spaceTop}
      onClose={close}
    >
      <View>
        {!isCloseButtonHidden && (
          <View style={[GLOBAL_STYLES.row, styles.sheetContainer]}>
            <TouchableOpacity style={styles.spacing} onPress={close}>
              <AntDesign name="close" size={18} color="black" />
            </TouchableOpacity>
          </View>
        )}

        <View style={GLOBAL_STYLES.mainContainer}>{children}</View>
      </View>
    </ActionSheet>
  );
}
