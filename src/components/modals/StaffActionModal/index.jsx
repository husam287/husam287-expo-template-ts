import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomText from 'components/general/CustomText';
import UserAvatar from 'components/atoms/UserAvatar';
import COLORS from 'constants/Colors';
import GLOBAL_STYLES from 'constants/GlobalStyles';
import ModalWrapper from '../ModalWrapper';
import StaffActionButtons from './StaffActionButtons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  marginEnd0: { marginEnd: 0 },
  title: {
    color: COLORS.dark,
    fontSize: 16,
    marginTop: 10,
    ...GLOBAL_STYLES.font600,
  },
});

export default function StaffActionModal({
  isVisible,
  setVisible,
  staff,
}) {
  return (
    <ModalWrapper isVisible={isVisible} setVisible={setVisible}>
      <View style={styles.container}>
        <View style={GLOBAL_STYLES.vhCentering}>
          <UserAvatar
            customStyle={styles.marginEnd0}
            imageUrl={staff?.image}
            size={56}
          />
          <CustomText style={styles.title}>
            {staff?.name}
          </CustomText>
        </View>

        <StaffActionButtons
          staff={staff}
          onDismissModal={() => setVisible(false)}
        />
      </View>
    </ModalWrapper>
  );
}
