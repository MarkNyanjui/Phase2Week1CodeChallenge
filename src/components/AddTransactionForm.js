import React, { useState } from "react";

function AddTransactionForm ({onAddTransaction}) {
  const [transactions, setTransactions] = useState({
    date: "",
    description: "",
    category: "",
    amount: ""
  })


  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransactions(prevState => ({
      ...prevState,
      [name]: value
    }))
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const amountNum = parseFloat(transactions.amount)
    const newTransaction = {
      ...transactions,
      amount: amountNum 
    };
    onAddTransaction(newTransaction);
    setTransactions({ date: "", description: "", category: "", amount: "" })
  };



  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input
            type="date"
            name="date"
            value={transactions.date}
            onChange={handleChange}

          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={transactions.description}
            onChange={handleChange}

          />
          <input type="text"
            name="category"
            placeholder="Category"
            value={transactions.category}
            onChange={handleChange}

          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={transactions.amount}
            onChange={handleChange}
          />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
