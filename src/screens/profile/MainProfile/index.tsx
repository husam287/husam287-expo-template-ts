import { View } from "react-native";
import ScreenWrapper from "@/components/general/ScreenWrapper";
import Text from "@/components/general/Text";
import FacebookRegisterationButton from "@/components/auth-components/FacebookRegisterationButton";
import GoogleRegisterationButton from "@/components/auth-components/GoogleRegisterationButton";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";
import LanguageSection from "./LanguageSection";

export default function MainProfileScreen() {
  const { t } = useAutoCompleteTranslation();

  return (
    <ScreenWrapper>
      <Text>{t("HOME")}</Text>

      <LanguageSection />

      <View>
        <FacebookRegisterationButton />
        <GoogleRegisterationButton />
      </View>
    </ScreenWrapper>
  );
}
