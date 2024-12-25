import {StyleSheet} from 'react-native';

import {COLORS} from '../../constants';
import type {DynamicModalStyles} from '../../@types';

const styles: DynamicModalStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    padding: 20,
    width: '80%',
  },
});

export default styles;
