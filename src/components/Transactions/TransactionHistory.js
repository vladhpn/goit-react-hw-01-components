import React from 'react';
import PropTypes from 'prop-types';

import TransactionHistoryItem from '../Transactions/TransactionHistoryItem';

import styles from '../Transactions/styles.module.scss';

const TransactionHistory = ({ transactions }) => (
  <table className={styles.transactionHistory}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map(transaction => (
        <TransactionHistoryItem {...transaction} key={transaction.id} />
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  transaction: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};

export default TransactionHistory;
