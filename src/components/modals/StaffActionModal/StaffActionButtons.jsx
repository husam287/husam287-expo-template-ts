import { View } from 'react-native';
import React from 'react';
import Button from 'components/general/Button';
import { useNavigation } from '@react-navigation/native';
import i18n from 'assets/i18n';
import COLORS from 'constants/Colors';

export default function StaffActionButtons({ staff, onDismissModal = () => {} }) {
  const navigation = useNavigation();

  const onCheckIn = () => {

  };

  const onCheckOut = () => {

  };

  const onCreateRequest = () => {
    onDismissModal();
    navigation.navigate('CreateSubmission', { user: staff });
  };

  return (
    <View>
      <Button
        title={!staff?.checked_in ? i18n.t('CHECK_IN') : i18n.t('CHECK_OUT')}
        onPress={!staff?.checked_in ? onCheckIn : onCheckOut}
      />
      <Button
        title={i18n.t('CREATE_REQUEST')}
        onPress={onCreateRequest}
        color={COLORS.primary}
        borderColor={COLORS.primary}
        backgroundColor={COLORS.light}
        hasNoShadow
      />
    </View>
  );
}
