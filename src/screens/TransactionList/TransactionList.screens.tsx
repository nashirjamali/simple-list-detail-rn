import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {Button, GeneralText} from '../../components';

const TransactionList = () => {
  return (
    <SafeAreaView>
      <View>
        <GeneralText variant="normal" />
        <Button title="test" variant="normal" />
      </View>
    </SafeAreaView>
  );
};

export default TransactionList;
