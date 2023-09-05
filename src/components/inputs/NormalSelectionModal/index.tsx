import { FlatList, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import ReactNativeModal from "react-native-modal";
import { SimpleLineIcons, AntDesign } from "@expo/vector-icons";
import METRICS from "@/constants/Metrics";
import Text from "@/components/general/Text";
import GLOBAL_STYLES from "@/constants/GlobalStyles";
import LoadingComponent from "@/components/general/LoadingComponent";
import COLORS from "@/constants/Colors";
import i18n from "@/i18n";
import PureInput from "../PureInput";
import styles from "./styles";
import { NormalSelectionModalProps } from "./types";

export default function NormalSelectionModal({
  data,
  onChange,
  inputValue,
  InputLabel,
  InputPlaceholder = i18n.t("CHOOSE"),
  error,
  containerStyle,
  customInputStyle,
  isLoading,
  prefix,
  emptyPlaceholder,
}: NormalSelectionModalProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const onShowModal = () => {
    setIsModalVisible(true);
  };
  const onDismissModal = () => {
    setIsModalVisible(false);
  };

  const onSelectItem = (selectedItemValue: number | string) => {
    onChange(selectedItemValue);
    onDismissModal();
  };

  const ModalMarkup = (
    <ReactNativeModal
      isVisible={isModalVisible}
      onBackdropPress={onDismissModal}
      useNativeDriver
      hideModalContentWhileAnimating
    >
      <View style={styles.modalContainer}>
        <FlatList
          style={{ height: METRICS.screenHeight / 3 }}
          keyExtractor={(_) => `${_.value}`}
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => onSelectItem(item?.value)}
              style={[GLOBAL_STYLES.row, styles.pressSpace]}
            >
              <Text style={styles.text}>{item.label}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </ReactNativeModal>
  );

  const InputIcon = data?.length ? (
    <SimpleLineIcons name="arrow-down" size={16} color={COLORS.darkGrey} />
  ) : (
    <AntDesign name="inbox" size={16} color={COLORS.darkGrey} />
  );

  const selectedItem = data?.find((item) => item.value === inputValue);

  return (
    <View>
      <TouchableOpacity
        disabled={isLoading || !data?.length}
        onPress={onShowModal}
      >
        <PureInput
          editable={false}
          labelText={InputLabel}
          placeholder={emptyPlaceholder || InputPlaceholder}
          isPlaceholderDotsHidden
          placeholderTextColor={COLORS.darkGrey}
          value={selectedItem?.label}
          customInputColorWhenDisabled={COLORS.dark}
          customContainerStyle={containerStyle}
          customInputStyle={customInputStyle}
          error={error}
          prefix={prefix}
          suffix={!isLoading ? InputIcon : <LoadingComponent />}
        />
      </TouchableOpacity>

      {ModalMarkup}
    </View>
  );
}
