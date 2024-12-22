import React, {type FC} from 'react';

import type {ButtonProps} from '../../@types';
import {BUTTON_VARIANTS} from '../../constants';

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
  label,
  variant,
  iconRight,
  icon,
}: ButtonProps): JSX.Element => (
  <button>
    {variant === BUTTON_VARIANTS.ICON ? icon : label} {iconRight}
  </button>
);

export default Button;
