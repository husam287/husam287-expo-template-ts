import { StyleSheet } from "react-native";
import Button from "@/components/general/Button";
import ScreenWrapper from "@/components/general/ScreenWrapper";
import i18n from "@/i18n";
import Text from "@/components/general/Text";
import FacebookRegisterationButton from "@/components/auth-components/FacebookRegisterationButton";
import GoogleRegisterationButton from "@/components/auth-components/GoogleRegisterationButton";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";

export default function ProfileScreen() {
  const onChangeLanguage = (targetLang: string) => {
    i18n.changeLanguage(targetLang)
  }

  const { t } = useAutoCompleteTranslation()

  return (
    <ScreenWrapper>
      <Text>
        {t("HOME")}
      </Text>
      {i18n.language === 'en' ?
        <Button
          title="عربي"
          onPress={() => { onChangeLanguage('ar') }}
        />
        :
        <Button
          title="English"
          onPress={() => { onChangeLanguage('en') }}
        />
      }

      <FacebookRegisterationButton />
      <GoogleRegisterationButton />
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
