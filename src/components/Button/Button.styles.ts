import {StyleSheet} from 'react-native';

import {COLORS} from '../../constants';
import type {ButtonStyles} from '../../@types';

const {WHITE} = COLORS;

const styles: ButtonStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    backgroundColor: WHITE,
  },
});

export default styles;
