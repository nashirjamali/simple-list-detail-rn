import {StyleSheet} from 'react-native';

import {COLORS} from '../../constants';
import type {GeneralTextStyles} from '../../@types';

const {BLACK, BRAND, GRAY} = COLORS;

const styles: GeneralTextStyles = StyleSheet.create({
  button: {
    color: BRAND,
    fontSize: 14,
  },
  header: {
    color: BLACK,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    color: GRAY,
    fontSize: 14,
  },
  label: {
    fontSize: 12,
  },
  normal: {
    color: BLACK,
    fontSize: 14,
  },
});

export default styles;
