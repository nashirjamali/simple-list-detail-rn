import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';

import {
  ArrowDownIcon,
  Button,
  Card,
  DynamicModal,
  GeneralText,
  Layout,
  TextInput,
} from '../../components';
import {useFetch, useSearchTransactions, useSort} from '../../hooks';
import {
  API_URL,
  BUTTON_VARIANTS,
  COLORS,
  GENERAL_TEXT_VARIANTS,
} from '../../constants';
import type {Transactions} from '../../@types';

import styles from './TransactionList.styles';

/**
 * Renders a list of transactions.
 *
 * @param {Transactions | null} data - The transaction data to be displayed.
 * @returns {JSX.Element} The rendered list of transactions.
 */
const _renderList = (data: Transactions | null): JSX.Element => (
  <ScrollView>
    <View style={styles.containerList}>
      {data &&
        Object.entries(data).map(
          ([
            key,
            {
              amount,
              beneficiary_bank,
              beneficiary_name,
              completed_at,
              sender_bank,
              status,
            },
          ]) => (
            <Card
              key={key}
              amount={amount}
              beneficiaryBank={beneficiary_bank}
              beneficiaryName={beneficiary_name}
              completedAt={completed_at}
              senderBank={sender_bank}
              status={status}
            />
          ),
        )}
    </View>
  </ScrollView>
);

/**
 * Renders a loading indicator.
 *
 * @returns {JSX.Element} The loading indicator.
 */
const _renderLoading = (): JSX.Element => (
  <GeneralText variant={GENERAL_TEXT_VARIANTS.NORMAL}>Loading...</GeneralText>
);

/**
 * Renders an error message.
 *
 * @param {string} error - The error message to display.
 * @returns {JSX.Element} The rendered error message.
 */
const _renderError = (error: string): JSX.Element => (
  <GeneralText variant={GENERAL_TEXT_VARIANTS.NORMAL}>
    Error: {error}
  </GeneralText>
);

/**
 * A component that displays a list of transactions.
 *
 * @returns {JSX.Element} The rendered transaction list component.
 */
const TransactionList = (): JSX.Element => {
  const {data, error, loading} = useFetch<Transactions>(API_URL);
  const [searchTerm, setSearchTerm] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [sortOption, setSortOption] = useState('URUTKAN');

  const options = [
    {label: 'URUTKAN', value: 'URUTKAN'},
    {label: 'Nama A-Z', value: 'A-Z'},
    {label: 'Nama Z-A', value: 'Z-A'},
    {label: 'Tanggal Terbaru', value: 'Tanggal Terbaru'},
    {label: 'Tanggal Terlama', value: 'Tanggal Terlama'},
  ];

  const filteredData = useSearchTransactions(data, searchTerm);
  const sortedData = useSort(filteredData!, sortOption);

  const handleSortSelect = (value: string) => {
    setSortOption(value);
  };

  return (
    <Layout style={styles.container}>
      <DynamicModal
        visible={modalVisible}
        title="Sort By"
        options={options}
        onClose={() => setModalVisible(false)}
        onSelect={handleSortSelect}
      />

      <TextInput
        placeholder="Cari nama, bank, atau nominal"
        value={searchTerm}
        onChangeText={setSearchTerm}
        buttonComponentProps={{
          title: sortOption,
          variant: BUTTON_VARIANTS.NORMAL,
          iconRight: (
            <ArrowDownIcon color={COLORS.BRAND} width={20} height={20} />
          ),
          onPress: () => setModalVisible(true),
        }}
      />
      {loading && _renderLoading()}
      {error && _renderError(error)}
      {!loading && !error && _renderList(sortedData)}
    </Layout>
  );
};

export default TransactionList;
