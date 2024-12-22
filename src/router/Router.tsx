import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {RootStackParamList} from '../@types';
import TransactionList from '../screens/TransactionList/TransactionList.screens';
import {ROUTES} from '../constants';

const Stack = createStackNavigator<RootStackParamList>();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.TRANSACTION_LIST}>
      <Stack.Screen
        name={ROUTES.TRANSACTION_LIST}
        component={TransactionList}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
