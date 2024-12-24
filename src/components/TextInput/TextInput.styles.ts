import {StyleSheet} from 'react-native';

import type {TextInputStyles} from '../../@types';
import {COLORS} from '../../constants';

const styles: TextInputStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 5,
    width: '100%',
  },
  input: {},
});

export default styles;
