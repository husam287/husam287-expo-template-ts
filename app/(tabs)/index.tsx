import { StyleSheet, View } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Link } from 'expo-router';
import Text from '@/components/general/Text';
import Button from '@/components/general/Button';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>تاب الاولى</Text>
      <View style={styles.separator} />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
      <Link href='/product-details'>
        <Text i18nKey='HOME' />
      </Link>

      <Button
        onPress={() => { }}
        i18nKey='HOME'
      />

      <Text>
        hiiii
        <Text>noooooooooo</Text>
        <Text>noooooooooo</Text>
      </Text>
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
