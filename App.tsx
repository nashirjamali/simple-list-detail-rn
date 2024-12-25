import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Router from './src/router/Router';
import {TransactionProvider} from './src/screens/TransactionDetails/TransactionDetails.screens';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <TransactionProvider>
        <NavigationContainer theme={DefaultTheme}>
          <Router />
        </NavigationContainer>
      </TransactionProvider>
    </SafeAreaProvider>
  );
}

export default App;
