import { StyleSheet, Text, View } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Link } from 'expo-router';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>تاب الاولى</Text>
      <View style={styles.separator} />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
      <Link href='/product-details'>
        <Text>هااااااي</Text>
      </Link>
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
