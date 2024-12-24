import React, {ComponentType, ReactElement, ReactNode, type FC} from 'react';
import {TouchableOpacity} from 'react-native';

import type {ButtonProps} from '../../@types';
import {BUTTON_VARIANTS, COLORS, GENERAL_TEXT_VARIANTS} from '../../constants';

import GeneralText from '../GeneralText/GeneralText.components';
import {SvgProps} from 'react-native-svg';
import styles from './Button.styles';
import ArrowDownIcon from '../Icons/ArrowDownIcon.icons';

/**
 * Renders the title of the button using the GeneralText component.
 *
 * @param {string} title - The text to be displayed as the button title.
 * @returns {ReactElement} The rendered GeneralText component containing the title.
 */
const _renderTitle = (title: string): ReactElement => (
  <GeneralText variant={GENERAL_TEXT_VARIANTS.BUTTON}>{title}</GeneralText>
);

const _renderIcon = (Icon?: ReactNode) => Icon;

/**
 * A customizable button component that can display a label and an icon.
 *
 * @param {ButtonProps} props - The properties for the Button component.
 * @param {string} props.label - The text label to display on the button.
 * @param {string} props.variant - The variant type for the button, determining its style.
 * @param {JSX.Element} [props.iconRight] - An optional icon to display on the right side of the button.
 * @param {JSX.Element} [props.icon] - An optional icon to display on the left side of the button.
 * @returns {JSX.Element} The rendered button component.
 */
const Button: FC<ButtonProps> = ({
  title,
  variant,
  iconRight,
  icon,
  ...props
}: ButtonProps): JSX.Element => (
  <TouchableOpacity style={styles.container} {...props}>
    {variant === BUTTON_VARIANTS.ICON ? _renderIcon(icon) : _renderTitle(title)}
    {_renderIcon(iconRight)}
  </TouchableOpacity>
);

export default Button;
