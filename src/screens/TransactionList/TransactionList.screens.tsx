import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {
  Button,
  Card,
  GeneralText,
  Label,
  Layout,
  TextInput,
} from '../../components';

const TransactionList = () => {
  return (
    <Layout>
      <TextInput placeholder="Cari nama, bank, atau nominal" />
      <Card
        amount={1000}
        beneficiaryBank="bsi"
        beneficiaryName="test"
        completedAt="2024-12-22 15:16:55"
        senderBank="bni"
        status="pending"
      />
      <Card
        amount={1000}
        beneficiaryBank="bsi"
        beneficiaryName="test"
        completedAt="2024-12-22 15:16:55"
        senderBank="bni"
        status="success"
      />
    </Layout>
  );
};

export default TransactionList;
