import {StyleSheet} from 'react-native';

import {COLORS} from '../../constants';
import type {ButtonStyles} from '../../@types';

const styles: ButtonStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 2,
    backgroundColor: COLORS.WHITE,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default styles;
