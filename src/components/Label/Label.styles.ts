import {StyleSheet} from 'react-native';

import type {LabelStyles} from '../../@types';

import {COLORS} from '../../constants';

const styles: LabelStyles = StyleSheet.create({
  containerOnCheck: {
    borderRadius: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: COLORS.BRAND,
    justifyContent: 'center',
  },
  containerSuccess: {
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    backgroundColor: COLORS.SUCCESS,
  },
});

export default styles;
