import {StyleSheet} from 'react-native';

import type {TransactionDetailStyles} from '../../@types';
import {COLORS} from '../../constants';

const styles: TransactionDetailStyles = StyleSheet.create({
  transactionCode: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    padding: 10,
    backgroundColor: COLORS.WHITE,
    borderBottomColor: COLORS.GRAY,
    borderBottomWidth: 1,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: COLORS.WHITE,
    borderBottomColor: COLORS.GRAY,
    borderBottomWidth: 1,
  },
  detailContainer: {
    padding: 10,
    display: 'flex',
    gap: 10,
  },
  detailItem: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
});

export default styles;
