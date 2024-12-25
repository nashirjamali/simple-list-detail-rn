import React, {FC} from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

/**
 * CopyIcon component renders a copy icon using SVG.
 *
 * @component
 * @param {SvgProps} props - The properties for the SVG element, including color and other attributes.
 * @returns {JSX.Element} The rendered SVG element representing a copy icon.
 */
const CopyIcon: FC<SvgProps> = (props: SvgProps): JSX.Element => (
  <Svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M6 11c0-2.828 0-4.243.879-5.121C7.757 5 9.172 5 12 5h3c2.828 0 4.243 0 5.121.879C21 6.757 21 8.172 21 11v5c0 2.828 0 4.243-.879 5.121C19.243 22 17.828 22 15 22h-3c-2.828 0-4.243 0-5.121-.879C6 20.243 6 18.828 6 16v-5z"
      stroke={props.color}
      strokeWidth={1.5}
    />
    <Path
      d="M6 19a3 3 0 01-3-3v-6c0-3.771 0-5.657 1.172-6.828C5.343 2 7.229 2 11 2h4a3 3 0 013 3"
      stroke={props.color}
      strokeWidth={1.5}
    />
  </Svg>
);

export default CopyIcon;
