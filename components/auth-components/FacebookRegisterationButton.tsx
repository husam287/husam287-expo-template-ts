import { StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import * as Facebook from 'expo-auth-session/providers/facebook';
import { ResponseType } from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import FB_ICON from '@/assets/images/fb-icon.png';
import GLOBAL_STYLES from '@/constants/GlobalStyles';
import COLORS from '@/constants/Colors';
import Button from '@/components/general/Button';
import Img from '@/components/general/Image';
import { useFacebookLoginMutation } from '@/apis/services/auth';
import loginHandler from '@/utils/loginHandler';
import showSuccessMsg from '@/utils/showSuccessMsg';
import { useTranslation } from 'react-i18next';
import { router } from 'expo-router';

const styles = StyleSheet.create({
  icon: {
    borderRadius: 30 / 2,
    height: 30,
    width: 30,
  },
  optionContainer: {
    ...GLOBAL_STYLES.row,
    borderBottomColor: COLORS.grey,
    borderBottomWidth: 1,
    paddingVertical: 14,
  },
  optionText: {
    color: COLORS.dark,
    fontSize: 14,
    marginStart: 10,
    ...GLOBAL_STYLES.font700,
  },
});

const FACEBOOK_CLENT_ID = '723166616477711';
WebBrowser.maybeCompleteAuthSession();

export default function FacebookRegisterationButton() {
  const { t } = useTranslation()
  const [facebookLogin, { isLoading: isFacebookLoginLoading }] = useFacebookLoginMutation();

  const [, response, promptAsync] = Facebook.useAuthRequest({
    expoClientId: FACEBOOK_CLENT_ID,
    clientId: FACEBOOK_CLENT_ID,
    responseType: ResponseType.Token,
    scopes: ['email'],
  });

  const facebookRegister = () => {
    promptAsync();
  };

  useEffect(() => {
    if (!response) return;

    if (response.type === 'success') {
      const facebookToken = response.authentication?.accessToken;
      facebookLogin({ access_token: facebookToken })
        .unwrap()
        .then((res) => {
          loginHandler({ token: res?.access_token, refreshToken: res?.refresh_token });
          showSuccessMsg({ i18nKey: 'LOGIN_SUCCESSFULLY' });
          router.push('/(tabs)/offer');
        });
    }

  }, [response]);

  const SocialLogoMarkup = (
    <Img
      source={FB_ICON}
      style={styles.icon}
      resizeMode="contain"
    />
  );

  return (
    <Button
      i18nKey='FACEBOOK'
      onPress={facebookRegister}
      isLoading={isFacebookLoginLoading}
      borderColor={COLORS.dark}
      color={COLORS.dark}
      backgroundColor={COLORS.light}
      prefix={SocialLogoMarkup}
      btnHeight={52}
    />
  );
}
