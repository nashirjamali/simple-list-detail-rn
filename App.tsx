import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import Router from './src/router/Router';

function App(): JSX.Element {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <Router />
    </NavigationContainer>
  );
}

export default App;
