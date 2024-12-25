import {StyleSheet} from 'react-native';

import type {TransactionListStyles} from '../../@types';
import {COLORS} from '../../constants';

const styles: TransactionListStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  containerList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    paddingBottom: 100,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.GRAY,
  },
  selectedIndicator: {
    color: COLORS.BRAND,
    fontSize: 16,
  },
});

export default styles;
