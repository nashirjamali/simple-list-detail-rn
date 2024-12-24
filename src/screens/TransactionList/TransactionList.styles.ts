import {StyleSheet} from 'react-native';

import type {TransactionListStyles} from '../../@types';

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
});

export default styles;
