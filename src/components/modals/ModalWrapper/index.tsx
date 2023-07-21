import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import ReactNativeModal from "react-native-modal";
import GLOBAL_STYLES from "@/constants/GlobalStyles";
import COLORS from "@/constants/Colors";
import METRICS from "@/constants/Metrics";
import { ModalWrapperProps } from "@/components/@types/ModalWrapperProps";

const styles = StyleSheet.create({
  closeSection: { justifyContent: "flex-end" },
  modalContainer: {
    backgroundColor: COLORS.light,
    borderRadius: 30,
    padding: 20,
  },
});

function ModalWrapper({
  isVisible,
  setVisible,
  children,
  containerStyle,
  cannotDismiss,
  height = METRICS.screenHeight / 2.5,
  onDismiss = () => {},
}: ModalWrapperProps) {
  const hideModal = () => {
    if (cannotDismiss) return;
    setVisible(false);
    onDismiss();
  };

  const sizeStyle = { height };

  return (
    <ReactNativeModal
      avoidKeyboard
      isVisible={isVisible}
      onBackdropPress={hideModal}
      onDismiss={onDismiss}
      backdropColor="#000"
      backdropOpacity={0.6}
      useNativeDriver
      hideModalContentWhileAnimating
    >
      <StatusBar backgroundColor="#00000099" />
      <View style={[styles.modalContainer, sizeStyle, containerStyle]}>
        {!cannotDismiss && (
          <View style={[GLOBAL_STYLES.row, styles.closeSection]}>
            <TouchableOpacity onPress={hideModal}>
              <AntDesign name="close" size={18} color={COLORS.dark} />
            </TouchableOpacity>
          </View>
        )}

        {children}
      </View>
    </ReactNativeModal>
  );
}

export default ModalWrapper;
