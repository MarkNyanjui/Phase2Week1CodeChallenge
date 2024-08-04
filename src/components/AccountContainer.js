import React, {useState, useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactionsList, setTransactionList] = useState([])
  const [filteredTransactions, setFilteredTransactions] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then(response => response.json())
      .then(data => {
        setTransactionList(data);
        setFilteredTransactions(data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const handleAddTransaction = (newTransaction) => {
    const updatedTransactions = [...transactionsList, newTransaction]
    setTransactionList(updatedTransactions);
    setFilteredTransactions(updatedTransactions);
  };

  const handleDeleteTransaction = (id) => {
    console.log('Deleting transaction with id:', id)
    setTransactionList(prevTransactions => {
      const updatedTransactions = prevTransactions.filter(transaction => transaction.id !== id )
      setFilteredTransactions(updatedTransactions);
      return updatedTransactions;
    });

    fetch(`http://localhost:3000/transactions/${id}`, {
      method: 'DELETE',
    }).catch(error => console.error('Error:', error));
    }

  const handleSearch = (searchTerm) => {
    const filtered = transactionsList.filter(transaction =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            transaction.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
            transaction.date.includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered);
  }
  return (
    <div>
      <Search onSearch={handleSearch}/>
      <AddTransactionForm onAddTransaction={handleAddTransaction}/>
      <TransactionsList 
      transactions={filteredTransactions}
      onDeleteTransaction={handleDeleteTransaction}
      />
    </div>
  );
}
export default AccountContainer;
