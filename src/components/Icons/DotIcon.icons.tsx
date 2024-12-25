import {FC} from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

/**
 * DotIcon component renders a dot icon using SVG.
 *
 * @component
 * @param {SvgProps} props - The properties for the SVG element, including width, height, and fill color.
 * @returns {JSX.Element} The rendered SVG element representing a dot.
 */
const DotIcon: FC<SvgProps> = (props: SvgProps): JSX.Element => (
  <Svg width={20} height={20} viewBox="0 0 24 24" fill="none" {...props}>
    <Path d="M12 9.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5z" fill="#000" />
  </Svg>
);

export default DotIcon;
