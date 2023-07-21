import { StyleSheet, View } from 'react-native';
import { Link } from 'expo-router';
import Text from '@/components/general/Text';
import Button from '@/components/general/Button';
import BottomSheet from '@/components/general/BottomSheet';
import { useState } from 'react';

export default function TabOneScreen() {
  const [isBottomSheetVisible, setisBottomSheetVisible] = useState(false)

  const onShowBottomSheet = () => {
    setisBottomSheetVisible(true)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>تاب الاولى</Text>
      <View style={styles.separator} />
      <Link href='/product-details'>
        <Text>click home button to show bottom sheet</Text>
      </Link>

      <Button
        onPress={onShowBottomSheet}
        i18nKey='HOME'
      />

      <BottomSheet
        isVisible={isBottomSheetVisible}
        setVisible={setisBottomSheetVisible}
        draggable
      >
        <Text>
          hiiii
          <Text>noooooooooo</Text>
          <Text>noooooooooo</Text>
        </Text>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'font700'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
