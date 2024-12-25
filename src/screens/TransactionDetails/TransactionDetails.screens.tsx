import React, {createContext, useContext, useState} from 'react';
import {Alert, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Clipboard from '@react-native-clipboard/clipboard';

import type {
  RootStackParamList,
  Transaction,
  TransactionContextType,
} from '../../@types';
import {
  ArrowRightIcon,
  Button,
  CopyIcon,
  GeneralText,
  Layout,
} from '../../components';
import {BUTTON_VARIANTS, COLORS, GENERAL_TEXT_VARIANTS} from '../../constants';
import {formatDateToIndonesian, formatToIDR} from '../../utils';

import styles from './TransactionDetails.styles';

const TransactionContext = createContext<TransactionContextType | undefined>(
  undefined,
);

/**
 * Provider component for managing transaction state.
 *
 * @param {React.ReactNode} children - The child components to be rendered within the provider.
 * @returns {JSX.Element} The rendered TransactionProvider component.
 */
export const TransactionProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [transaction, setTransaction] = useState<Transaction | null>(null);

  return (
    <TransactionContext.Provider value={{transaction, setTransaction}}>
      {children}
    </TransactionContext.Provider>
  );
};

/**
 * Custom hook to access the transaction context.
 *
 * @returns {TransactionContextType} The current transaction context.
 * @throws {Error} If used outside of a TransactionProvider.
 */
export const useTransactionContext = () => {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error(
      'useTransactionContext must be used within a TransactionProvider',
    );
  }
  return context;
};

/**
 * TransactionDetail component displays the details of a specific transaction.
 *
 * @returns {JSX.Element} The rendered TransactionDetail component.
 */
const TransactionDetail: React.FC = () => {
  const {transaction} = useTransactionContext();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleCloseButton = () => {
    navigation.goBack();
  };

  const handleCopy = (id: string) => {
    Clipboard.setString(id);
    Alert.alert('Copied to Clipboard');
  };

  return (
    <Layout>
      {transaction && (
        <View>
          <View style={styles.transactionCode}>
            <GeneralText variant={GENERAL_TEXT_VARIANTS.HEADER}>
              ID TRANSAKSI: #{transaction.id}
            </GeneralText>
            <Button
              title="Copy"
              icon={
                <CopyIcon
                  color={COLORS.BRAND}
                  width={20}
                  height={20}
                  onPress={() => handleCopy(transaction.id)}
                />
              }
              variant={BUTTON_VARIANTS.ICON}
            />
          </View>
          <View style={styles.header}>
            <GeneralText variant={GENERAL_TEXT_VARIANTS.HEADER}>
              DETAIL TRANSAKSI
            </GeneralText>
            <Button
              title="Tutup"
              variant={BUTTON_VARIANTS.NORMAL}
              onPress={handleCloseButton}
            />
          </View>

          <View style={styles.detailContainer}>
            <View style={styles.detailItem}>
              <GeneralText variant={GENERAL_TEXT_VARIANTS.HEADER}>
                {transaction.sender_bank.toUpperCase()}
              </GeneralText>
              <ArrowRightIcon />
              <GeneralText variant={GENERAL_TEXT_VARIANTS.HEADER}>
                {transaction.beneficiary_bank.toUpperCase()}
              </GeneralText>
            </View>

            <View style={styles.detailItem}>
              <View style={{flex: 1}}>
                <GeneralText variant={GENERAL_TEXT_VARIANTS.HEADER}>
                  {transaction.beneficiary_name}
                </GeneralText>
                <GeneralText variant={GENERAL_TEXT_VARIANTS.NORMAL}>
                  {transaction.account_number}
                </GeneralText>
              </View>
              <View style={{flex: 1}}>
                <GeneralText variant={GENERAL_TEXT_VARIANTS.HEADER}>
                  NOMINAL
                </GeneralText>
                <GeneralText variant={GENERAL_TEXT_VARIANTS.NORMAL}>
                  {formatToIDR(transaction.amount)}
                </GeneralText>
              </View>
            </View>

            <View style={styles.detailItem}>
              <View style={{flex: 1}}>
                <GeneralText variant={GENERAL_TEXT_VARIANTS.HEADER}>
                  BERITA TRANSFER
                </GeneralText>
                <GeneralText variant={GENERAL_TEXT_VARIANTS.NORMAL}>
                  {transaction.remark}
                </GeneralText>
              </View>
              <View style={{flex: 1}}>
                <GeneralText variant={GENERAL_TEXT_VARIANTS.HEADER}>
                  KODE UNIK
                </GeneralText>
                <GeneralText variant={GENERAL_TEXT_VARIANTS.NORMAL}>
                  {transaction.unique_code}
                </GeneralText>
              </View>
            </View>

            <View style={styles.detailItem}>
              <View style={{flex: 1}}>
                <GeneralText variant={GENERAL_TEXT_VARIANTS.HEADER}>
                  WAKTU DIBUAT
                </GeneralText>
                <GeneralText variant={GENERAL_TEXT_VARIANTS.NORMAL}>
                  {formatDateToIndonesian(transaction.created_at)}
                </GeneralText>
              </View>
            </View>
          </View>
        </View>
      )}
    </Layout>
  );
};

export default TransactionDetail;
