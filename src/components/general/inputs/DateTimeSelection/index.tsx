import { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import DatePicker from "react-native-modern-datepicker";
import moment from "moment";
import { AntDesign } from "@expo/vector-icons";
import COLORS from "@/constants/Colors";
import Button from "@/components/general/Button";
import ModalWrapper from "@/components/modals/ModalWrapper";
import GLOBAL_STYLES from "@/constants/GlobalStyles";
import styles from "./styles";
import PureInput from "../PureInput";
import { DateTimeSelectionProps } from "@/components/@types/DateTimeSelectionProps";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";
import i18n from "@/i18n";

const DatePickerThemeOptions = {
  textHeaderColor: COLORS.dark,
  textDefaultColor: COLORS.dark,
  selectedTextColor: COLORS.light,
  mainColor: COLORS.primary,
  defaultFont: GLOBAL_STYLES.font500.fontFamily,
  headerFont: GLOBAL_STYLES.font700.fontFamily,
};

export default function DateTimeSelection({
  onChange = () => {},
  placeholder = i18n.t("CHOOSE"),
  minDate = moment().format("yyyy-MM-DD"),
  mode = "calendar",
  value,
  error,
}: DateTimeSelectionProps) {
  const { t } = useAutoCompleteTranslation();

  const [isVisible, setisVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | undefined>();
  const [selectedTime, setSelectedTime] = useState<string | undefined>();

  const onShowModal = () => {
    setisVisible(true);
  };
  const onDismissModal = () => {
    setisVisible(false);
  };

  const onConfirmDateSelection = () => {
    onChange(selectedDate);
    onDismissModal();
  };

  const onConfirmTimeSelection = () => {
    onChange(selectedTime);
    if (mode !== "datepicker") {
      onDismissModal();
    }
  };

  useEffect(() => {
    if (!selectedTime) return;
    if (mode !== "time") return;

    onConfirmTimeSelection();
  }, [selectedTime]);

  const ModalHeightMap = {
    calendar: 475,
    time: 400,
    datepicker: 475,
  };

  const determineConfirmationDisableState = () => {
    switch (mode) {
      case "calendar":
        return !selectedDate;
      case "datepicker":
        return !selectedDate || !selectedTime;
      default:
        return false;
    }
  };

  const isConfirmButtonVisible = mode !== "time";

  const isConfirmDisabled = determineConfirmationDisableState();

  const ModalMarkup = (
    <ModalWrapper
      isVisible={isVisible}
      setVisible={setisVisible}
      height={ModalHeightMap[mode]}
    >
      <View style={styles.modalContainer}>
        <DatePicker
          mode={mode}
          locale={t("lang")}
          minimumDate={minDate}
          selected={value}
          current={value}
          options={DatePickerThemeOptions}
          onSelectedChange={setSelectedDate}
          onTimeChange={setSelectedTime}
        />

        {isConfirmButtonVisible && (
          <Button
            onPress={onConfirmDateSelection}
            title={t("CONFIRM")}
            disabled={isConfirmDisabled}
          />
        )}
      </View>
    </ModalWrapper>
  );

  return (
    <View>
      <TouchableOpacity onPress={onShowModal}>
        <PureInput
          placeholder={placeholder}
          editable={false}
          value={value}
          customInputColorWhenDisabled={COLORS.dark}
          suffix={
            isConfirmButtonVisible ? (
              <AntDesign name="calendar" size={21} color={COLORS.primary} />
            ) : null
          }
          error={error}
        />
      </TouchableOpacity>

      {ModalMarkup}
    </View>
  );
}
