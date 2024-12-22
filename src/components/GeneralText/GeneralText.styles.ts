import {StyleSheet} from 'react-native';

import {COLORS} from '../../constants';
import type {GeneralTextStyles} from '../../@types';

const {BLACK, BRAND, GRAY} = COLORS;

const styles: GeneralTextStyles = StyleSheet.create({
  button: {
    color: BRAND,
    fontSize: 18,
  },
  header: {
    color: BLACK,
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    color: GRAY,
    fontSize: 16,
  },
  label: {
    fontSize: 16,
  },
  normal: {
    color: BLACK,
    fontSize: 16,
  },
});

export default styles;
