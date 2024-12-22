import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {Button, GeneralText, Label, Layout, TextInput} from '../../components';

const TransactionList = () => {
  return (
    <Layout>
      <TextInput placeholder="Cari nama, bank, atau nominal" />
      <Label variant="onCheck" text="Pengecekan" />
      <Label variant="success" text="Berhasil" />
    </Layout>
  );
};

export default TransactionList;
