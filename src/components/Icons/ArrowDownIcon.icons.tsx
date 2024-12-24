import React, {FC} from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

/**
 * ArrowDownIcon component renders a downward arrow icon using SVG.
 *
 * @component
 * @returns {Element} The rendered SVG element representing a downward arrow.
 */
export const ArrowDownIcon: FC<SvgProps> = (props: SvgProps): JSX.Element => (
  <Svg viewBox="0 0 48 48" {...props}>
    <Path d="M0 0h48v48H0z" fill="none" />
    <Path d="M24 29.171L9.414 14.585 6.586 17.413 24 34.827 41.414 17.413 38.586 14.585z" fill={props.color} />
  </Svg>
);

export default ArrowDownIcon;
