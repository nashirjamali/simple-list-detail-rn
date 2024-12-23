import {StyleSheet} from 'react-native';

import type {CardStyles} from '../../@types';

import {COLORS} from '../../constants';

const styles: CardStyles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: COLORS.WHITE,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  contentContainer: {
    padding: 20,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pending: {
    width: 10,
    backgroundColor: COLORS.BRAND,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  success: {
    width: 10,
    backgroundColor: COLORS.SUCCESS,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  bankTransfer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center'
  },
  amountAndDate: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
});

export default styles;
