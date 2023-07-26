import { Keyboard, Pressable, View } from "react-native";
import { useEffect, useState } from "react";
import {
  CodeField,
  Cursor,
  isLastFilledCell,
  MaskSymbol,
  RenderCellOptions,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { RouteProp, useRoute } from "@react-navigation/native";
import ScreenWrapper from "@/components/general/ScreenWrapper";
import i18n from "@/i18n";
import LoadingComponent from "@/components/general/LoadingComponent";
import styles from "./styles";
import { AuthStackParamList } from "@/routes/types";
import Text from "@/components/general/Text";
import getShadowStyle from "@/utils/getShadowStyle";
import loginHandler from "@/utils/loginHandler";
import { AuthTokenResponse } from "@/apis/@types/auth";
import { useLoginMutation } from "@/apis/services/auth";

export default function OtpScreen() {
  const phone =
    useRoute<RouteProp<AuthStackParamList, "OtpScreen">>()?.params?.phone;

  const [login, { isLoading: isLoginLoading }] = useLoginMutation();

  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: 4 });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const focusCells = () => {
    ref?.current?.focus();
  };

  const clearOtpFieldsAndFocus = () => {
    setValue("");
    focusCells();
  };

  const renderCell = ({ index, symbol, isFocused }: RenderCellOptions) => {
    let textChild = null;

    if (symbol) {
      textChild = (
        <MaskSymbol
          maskSymbol="•"
          isLastFilledCell={isLastFilledCell({ index, value })}
        >
          {symbol}
        </MaskSymbol>
      );
    } else if (isFocused) {
      textChild = <Cursor />;
    }

    return (
      <View
        key={index}
        style={[
          styles.cellBox,
          getShadowStyle(),
          isFocused && styles.focusCell,
        ]}
      >
        <Text style={styles.cellText} onLayout={getCellOnLayoutHandler(index)}>
          {textChild}
        </Text>
      </View>
    );
  };

  const onVerifyHandler = () => {
    if (!phone) return;
    if (!value) return;

    login({ phone, code: value })
      .unwrap()
      .then((res: AuthTokenResponse) => {
        loginHandler({
          token: res?.access,
          refreshToken: res?.refresh,
        });
      })
      .catch(clearOtpFieldsAndFocus);
  };

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        ref?.current?.blur();
      }
    );

    return () => {
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <ScreenWrapper isHeaderHidden customStyle={styles.spaceBottom0}>
      <View>
        {isLoginLoading && <LoadingComponent />}

        {/* OTP TEXT */}
        <Text style={styles.text}>
          {i18n.t("SMS_SEND_TO_PHONE")}
          <Text>: {phone}</Text>
        </Text>

        <Text style={styles.sendTitleText}>{i18n.t("ENTER_OTP")}</Text>

        {/* OTP INPUT */}
        <Pressable onPress={focusCells}>
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            clearTextOnFocus
            onBlur={onVerifyHandler}
            cellCount={4}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={renderCell}
          />
        </Pressable>
      </View>
    </ScreenWrapper>
  );
}
