import { View } from "react-native";
import i18n from "@/i18n";
import Button from "@/components/general/Button";

export default function LanguageSection() {
  const onChangeLanguage = (targetLang: string) => {
    i18n.changeLanguage(targetLang);
  };

  return (
    <View>
      {i18n.t("lang") === "en" ? (
        <Button
          title="عربي"
          onPress={() => {
            onChangeLanguage("ar");
          }}
        />
      ) : (
        <Button
          title="English"
          onPress={() => {
            onChangeLanguage("en");
          }}
        />
      )}
    </View>
  );
}
