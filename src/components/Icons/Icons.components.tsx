import React from 'react';
import Svg, {Path, type SvgProps} from 'react-native-svg';

/**
 * ArrowDownIcon component renders a downward arrow icon using SVG.
 *
 * @component
 * @returns {JSX.Element} The rendered SVG element representing a downward arrow.
 */
export const ArrowDownIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 48 48" {...props}>
    <Path d="M0 0h48v48H0z" fill="none" />
    <Path d="M24 29.171L9.414 14.585 6.586 17.413 24 34.827 41.414 17.413 38.586 14.585z" />
  </Svg>
);

/**
 * ArrowRightIcon component renders a rightward arrow icon using SVG.
 *
 * @component
 * @returns {JSX.Element} The rendered SVG element representing a rightward arrow.
 */
export const ArrowRightIcon = (props: SvgProps) => (
  <Svg width={20} height={20} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M13.233 16.457a.75.75 0 101.034 1.086l-1.034-1.086zm6.284-3.914a.75.75 0 10-1.034-1.086l1.034 1.086zm-1.034 0a.75.75 0 101.034-1.086l-1.034 1.086zm-4.216-6.086a.75.75 0 10-1.034 1.086l1.034-1.086zM19 12.75a.75.75 0 000-1.5v1.5zm-14-1.5a.75.75 0 000 1.5v-1.5zm9.267 6.293l5.25-5-1.034-1.086-5.25 5 1.034 1.086zm5.25-6.086l-5.25-5-1.034 1.086 5.25 5 1.034-1.086zM19 11.25H5v1.5h14v-1.5z"
      fill="#000"
    />
  </Svg>
);

export const DotIcon = (props: SvgProps) => (
  <Svg width={20} height={20} viewBox="0 0 24 24" fill="none" {...props}>
    <Path d="M12 9.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5z" fill="#000" />
  </Svg>
);
