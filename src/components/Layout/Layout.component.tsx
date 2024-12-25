import React, {FC} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, type StyleProp, type ViewStyle} from 'react-native';

import type {LayoutProps} from '../../@types';
import styles from './Layout.styles';

/**
 * A layout component that provides a safe area view for its children.
 *
 * @component
 * @param {LayoutProps} props - The properties for the Layout component.
 * @param {React.ReactNode} props.children - The content to be displayed within the layout.
 * @param {StyleProp<ViewStyle>} [props.style] - Additional styles to apply to the layout container.
 * @returns {JSX.Element} The rendered layout component.
 */
const Layout: FC<LayoutProps> = ({
  children,
  style,
}: LayoutProps): JSX.Element => {
  const combinedStyle = StyleSheet.flatten([styles.container, style]);

  return <SafeAreaView style={combinedStyle}>{children}</SafeAreaView>;
};

export default Layout;
