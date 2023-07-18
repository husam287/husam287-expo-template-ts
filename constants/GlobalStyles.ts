import { I18nManager, StyleSheet } from 'react-native';
import METRICS from './Metrics';

const GLOBAL_STYLES = StyleSheet.create({
  /* FONTS */
  font700: {
    fontFamily: 'font700',
  },
  font500: {
    fontFamily: 'font500',
  },
  font400: {
    fontFamily: 'font400',
  },
  font300: {
    fontFamily: 'font300',
  },

  mainContainer: {
    padding: METRICS.generalSpacingValue,
  },
  flatlistProductColumnWrapper: {
    padding: METRICS.generalSpacingValue,
    paddingVertical: '2%',
    justifyContent: 'space-between',
  },
  fullSize: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowJustifyBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  vhCentering: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flipInArabic: {
    transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
  },
})

export default GLOBAL_STYLES;
