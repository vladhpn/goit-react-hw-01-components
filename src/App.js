import React from 'react';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/Friends/FriendList';
import TransactionHistory from './components/Transactions/TransactionHistory';

import user from './data-json/user.json';
import statistical from './data-json/statistical-data.json';
import friends from './data-json/friends.json';
import transactions from './data-json/transactions.json';

const App = () => {
  return (
    <>
      <Profile {...user} />
      <Statistics statistical={statistical} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};
export default App;
