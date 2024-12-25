import React from 'react';
import {render} from '@testing-library/react-native';

import ArrowDownIcon from './ArrowDownIcon.icons';
import CopyIcon from './CopyIcon.icons';
import DotIcon from './DotIcon.icons';
import ArrowRightIcon from './ArrowRightIcon.icons';

describe('Icon Components', () => {
  it('renders ArrowDownIcon correctly', () => {
    const {toJSON} = render(<ArrowDownIcon color="black" />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders CopyIcon correctly', () => {
    const {toJSON} = render(<CopyIcon color="black" />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders DotIcon correctly', () => {
    const {toJSON} = render(<DotIcon color="black" />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders ArrowRightIcon correctly', () => {
    const {toJSON} = render(<ArrowRightIcon color="black" />);
    expect(toJSON()).toMatchSnapshot();
  });
});
