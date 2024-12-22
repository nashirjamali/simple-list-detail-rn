import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Router from './src/router/Router';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={DefaultTheme}>
        <Router />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
