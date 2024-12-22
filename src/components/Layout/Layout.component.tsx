import React, {FC} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {LayoutProps} from '../../@types';
import styles from './Layout.styles';

const Layout: FC<LayoutProps> = ({children}) => (
  <SafeAreaView style={styles.container}>{children}</SafeAreaView>
);

export default Layout;
