import {StyleSheet} from 'react-native';

import type {TextInputStyles} from '../../@types';
import {COLORS} from '../../constants';

const styles: TextInputStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 5,
    width: '100%',
  },
  input: {
    width: '70%',
  },
});

export default styles;
