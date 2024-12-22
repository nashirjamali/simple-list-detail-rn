import {StyleSheet} from 'react-native';
import {CardStyles} from '../../@types';
import {COLORS} from '../../constants';

const styles: CardStyles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: COLORS.WHITE,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  pending: {
    width: 10,
    backgroundColor: COLORS.BRAND,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  success: {},
});

export default styles;
