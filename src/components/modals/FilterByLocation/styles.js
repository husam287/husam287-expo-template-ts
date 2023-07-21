import COLORS from 'constants/Colors';
import GLOBAL_STYLES from 'constants/GlobalStyles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    ...GLOBAL_STYLES.rowJustifyBetween,
    backgroundColor: COLORS.grey50,
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 9,
  },
});

export default styles;
