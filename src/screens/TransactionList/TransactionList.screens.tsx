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
import useFetch from '../../hooks/useFetch';
import {API_URL, GENERAL_TEXT_VARIANTS} from '../../constants';
import {Transactions} from '../../@types';

const TransactionList = () => {
  const {data, error, loading} = useFetch<Transactions>(API_URL);

  if (loading) {
    return (
      <GeneralText variant={GENERAL_TEXT_VARIANTS.NORMAL}>
        Loading...
      </GeneralText>
    );
  }

  if (error) {
    return (
      <GeneralText variant={GENERAL_TEXT_VARIANTS.NORMAL}>
        Error: {error}
      </GeneralText>
    );
  }

  return (
    <Layout>
      <TextInput placeholder="Cari nama, bank, atau nominal" />
    </Layout>
  );
};

export default TransactionList;
