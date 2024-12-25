import React, {useState} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {
  ArrowDownIcon,
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
  ROUTES,
} from '../../constants';
import type {RootStackParamList, Transaction, Transactions} from '../../@types';

import {useTransactionContext} from '../TransactionDetails/TransactionDetails.screens';

import styles from './TransactionList.styles';

/**
 * Renders a list of transactions.
 *
 * @param {Transactions | null} data - The transaction data to be displayed.
 * @param {function} onSelect - Callback function to handle transaction selection.
 * @returns {JSX.Element} The rendered list of transactions.
 */
const _renderList = (
  data: Transactions | null,
  onSelect: (transaction: Transaction) => void,
): JSX.Element => (
  <ScrollView>
    <View style={styles.containerList}>
      {data &&
        Object.entries(data).map(([key, transaction]) => (
          <Card
            key={key}
            amount={transaction.amount}
            beneficiaryBank={transaction.beneficiary_bank}
            beneficiaryName={transaction.beneficiary_name}
            completedAt={transaction.completed_at}
            senderBank={transaction.sender_bank}
            status={transaction.status}
            onPress={() => onSelect(transaction)}
          />
        ))}
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
 * Renders selectable options for sorting transactions.
 *
 * @param {function} onSelect - Callback function to handle option selection.
 * @param {function} onClose - Callback function to close the modal.
 * @param {function} setSelectedValue - Function to set the selected value.
 * @param {Array<{label: string, value: string}>} options - The options to display.
 * @param {string} selectedValue - The currently selected value.
 * @returns {JSX.Element[]} The rendered selectable options.
 */
const _renderSelectOption = (
  onSelect: (value: string) => void,
  onClose: () => void,
  setSelectedValue: (value: string) => void,
  options: {
    label: string;
    value: string;
  }[],
  selectedValue: string,
): JSX.Element[] => {
  const handleSelect = (value: string) => {
    setSelectedValue(value);
    onSelect(value);
    onClose();
  };

  return options.map(option => (
    <TouchableOpacity
      key={option.value}
      style={styles.option}
      onPress={() => handleSelect(option.value)}>
      <GeneralText variant={GENERAL_TEXT_VARIANTS.BUTTON}>
        {option.label}
      </GeneralText>
      {selectedValue === option.value && (
        <GeneralText variant={GENERAL_TEXT_VARIANTS.BUTTON}>●</GeneralText>
      )}
    </TouchableOpacity>
  ));
};

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

  const [selectedValue, setSelectedValue] = useState<string>(
    options[0]?.value || '',
  );

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const {setTransaction} = useTransactionContext();

  const filteredData = useSearchTransactions(data, searchTerm);
  const sortedData = useSort(filteredData!, sortOption);

  const handleSortSelect = (value: string) => {
    setSortOption(value);
  };

  const handleSelectTransaction = (transaction: Transaction) => {
    setTransaction(transaction);
    navigation.navigate(ROUTES.TRANSACTION_DETAILS);
  };

  return (
    <Layout style={styles.container}>
      <DynamicModal
        visible={modalVisible}
        title="Urutkan"
        onClose={() => setModalVisible(false)}>
        {_renderSelectOption(
          handleSortSelect,
          () => setModalVisible(false),
          setSelectedValue,
          options,
          selectedValue,
        )}
      </DynamicModal>

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
      {!loading && !error && _renderList(sortedData, handleSelectTransaction)}
    </Layout>
  );
};

export default TransactionList;
