import React, {ReactElement, type FC} from 'react';
import {Pressable} from 'react-native';

import type {ButtonProps} from '../../@types';
import {BUTTON_VARIANTS, GENERAL_TEXT_VARIANTS} from '../../constants';

import GeneralText from '../GeneralText/GeneralText.components';

/**
 * Renders the title of the button using the GeneralText component.
 *
 * @param {string} title - The text to be displayed as the button title.
 * @returns {ReactElement} The rendered GeneralText component containing the title.
 */
const _renderTitle = (title: string): ReactElement => (
  <GeneralText variant={GENERAL_TEXT_VARIANTS.BUTTON}>{title}</GeneralText>
);

/**
 * A customizable button component that can display a label and an icon.
 *
 * @param {ButtonProps} props - The properties for the Button component.
 * @param {string} props.label - The text label to display on the button.
 * @param {string} props.variant - The variant type for the button, determining its style.
 * @param {React.ReactElement} [props.iconRight] - An optional icon to display on the right side of the button.
 * @param {React.ReactElement} [props.icon] - An optional icon to display on the left side of the button.
 * @returns {JSX.Element} The rendered button component.
 */
const Button: FC<ButtonProps> = ({
  title,
  variant,
  iconRight,
  icon,
  ...props
}: ButtonProps): JSX.Element => (
  <Pressable {...props}>
    {variant === BUTTON_VARIANTS.ICON ? icon : _renderTitle(title)} {iconRight}
  </Pressable>
);

export default Button;
