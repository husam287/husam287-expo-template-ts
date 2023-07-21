import GLOBAL_STYLES from '@/constants/GlobalStyles';
import COLORS from '@/constants/Colors';
import React, { FC } from 'react';
import { I18nManager, StyleSheet, Text as DefaultText } from 'react-native';
import { TextProps } from '../@types/TextProps';
import useAutoCompleteTranslation from '@/hooks/useAutoCompleteTranslation';

const styles = StyleSheet.create({
  textStyle: {
    color: COLORS.dark,
    fontSize: 14,
    writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
    ...GLOBAL_STYLES.font500,
  },
});

export default function Text({
  children,
  i18nKey,
  style,
  ...otherProps
}: TextProps): JSX.Element {
  const { t } = useAutoCompleteTranslation();

  return (
    <DefaultText
      {...otherProps}
      style={[styles.textStyle, style]}
    >
      {i18nKey ? t(i18nKey) : children}
    </DefaultText>
  );
}
