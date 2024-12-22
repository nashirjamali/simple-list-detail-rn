import {StyleSheet} from 'react-native';

import type {LayoutStyles} from '../../@types';
import {COLORS} from '../../constants';

const styles: LayoutStyles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: COLORS.SLATE,
    minHeight: '100%',
  },
});

export default styles;
