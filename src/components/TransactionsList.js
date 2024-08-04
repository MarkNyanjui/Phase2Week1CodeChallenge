import React from "react";
import Transaction from "./Transaction";

function TransactionsList({ transactions, onDeleteTransaction }) {
  return (
    <div>
      <table className="ui celled striped padded table">
        <thead>
          <tr>
            <th>
              <h2 className="ui centre aligned header">Date</h2>
            </th>
            <th>
              <h2 className="ui centre aligned header">Description</h2>
            </th>
            <th>
              <h2 className="ui centre aligned header">Category</h2>
            </th>
            <th>
              <h2 className="ui centre aligned header">Amount</h2>
            </th>
            <th>
              <h2 classname="ui centre aligned header">Actions</h2>
            </th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <Transaction
              key={transaction.id}
              id={transaction.id}
              date={transaction.date}
              description={transaction.description}
              category={transaction.category}
              amount={transaction.amount}
              onDelete={onDeleteTransaction}
            />
          ))};
        </tbody>
      </table>
    </div>
  );
}


export default TransactionsList;
