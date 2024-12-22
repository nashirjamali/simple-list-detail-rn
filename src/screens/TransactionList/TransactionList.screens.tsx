import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {Button, GeneralText, Layout, TextInput} from '../../components';

const TransactionList = () => {
  return (
    <Layout>
      <TextInput placeholder='Cari nama, bank, atau nominal' />
    </Layout>
  );
};

export default TransactionList;
