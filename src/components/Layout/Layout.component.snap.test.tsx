import React from 'react';
import {Text} from 'react-native';
import {render} from '@testing-library/react-native';

import Layout from './Layout.component';

describe('Layout Component', () => {
  it('renders correctly with children', () => {
    const {toJSON} = render(
      <Layout>
        <Text>Test Child</Text>
      </Layout>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly with additional styles', () => {
    const {toJSON} = render(
      <Layout style={{backgroundColor: 'red'}}>
        <Text>Test Child with Style</Text>
      </Layout>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
