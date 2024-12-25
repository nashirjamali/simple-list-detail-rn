import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import type {RootStackParamList} from '../@types';
import TransactionList from '../screens/TransactionList/TransactionList.screens';
import {ROUTES} from '../constants';
import TransactionDetail from '../screens/TransactionDetails/TransactionDetails.screens';

const Stack = createStackNavigator<RootStackParamList>();

/**
 * Router component that defines the navigation stack for the application.
 *
 * @returns {JSX.Element} The rendered stack navigator with defined screens.
 */
const Router = (): JSX.Element => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.TRANSACTION_LIST}>
      <Stack.Screen
        name={ROUTES.TRANSACTION_LIST}
        component={TransactionList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ROUTES.TRANSACTION_DETAILS}
        component={TransactionDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
