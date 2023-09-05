import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import ScreenWrapper from "@/components/general/ScreenWrapper";
import i18n from "@/i18n";
import Button from "@/components/general/Button";
import COLORS from "@/constants/Colors";
import KHAZYN_LOGO from "@/assets/images/icon.png";
import Img from "@/components/general/Image";
import GLOBAL_STYLES from "@/constants/GlobalStyles";
import ControllableInput from "@/components/inputs/ControllableInput";
import Icon from "@/components/general/Icon";
import styles from "./styles";
import { loginSchema } from "@/schemas";

export default function LoginScreen() {
  const { control, handleSubmit } = useForm({
    resolver: loginSchema,
  });

  const navigation = useNavigation();

  const onLoginHandler = (values: { phone: string }) => {
    navigation.navigate("OtpScreen", { phone: values.phone });
  };

  return (
    <ScreenWrapper>
      <View>
        {/* LOGO */}
        <View style={GLOBAL_STYLES.vhCentering}>
          <Img
            source={KHAZYN_LOGO}
            contentFit="contain"
            style={styles.logoImage}
          />
        </View>

        {/* PHONE INPUT */}
        <ControllableInput
          control={control}
          prefix={<Icon name="mobile" size={18} color={COLORS.dark} />}
          suffix={null}
          keyboardType="phone-pad"
          isPlaceholderDotsHidden
          placeholder={`${i18n.t("PHONE_NUMBER")}...`}
          name="phone"
        />

        <View>
          <Button
            onPress={handleSubmit(onLoginHandler)}
            title={i18n.t("LOGIN")}
            IconName="login"
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}
