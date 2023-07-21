import ScreenWrapper from '@/components/general/ScreenWrapper';
import DebouncedSearchField from '@/components/general/inputs/DebouncedSearchField';
import { StyleSheet, Text, View } from 'react-native';

export default function CartScreen() {
  return (
    <ScreenWrapper>
      <Text style={styles.title}>Tab Two</Text>
      <DebouncedSearchField
        onSearchChange={(e) => console.log(e)}
      />
    </ScreenWrapper>
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
    fontWeight: 'bold',
  },
});
