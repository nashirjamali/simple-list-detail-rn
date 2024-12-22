import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {Button, GeneralText, Layout} from '../../components';

const TransactionList = () => {
  return (
    <Layout>
      <GeneralText variant="header">Ini teks normal</GeneralText>
      <Button title="test" variant="normal" />
    </Layout>
  );
};

export default TransactionList;
