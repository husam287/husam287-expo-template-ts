import { StyleSheet } from "react-native";
import Button from "@/components/general/Button";
import ScreenWrapper from "@/components/general/ScreenWrapper";
import i18n from "@/i18n";
import { useTranslation } from "react-i18next";
import Text from "@/components/general/Text";

export default function ProfileScreen() {
  const onChangeLanguage = (targetLang: string) => {
    i18n.changeLanguage(targetLang)
  }

  const { t } = useTranslation()

  return (
    <ScreenWrapper>
      <Text>
        {t('PROFILE')}
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
