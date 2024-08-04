import React from "react";

function Transaction({ id, date ,description, category, amount, onDelete }) {
  const handleDelete = () => {
    console.log('Deleting transaction with id:', id)
    if (typeof onDelete === 'function') {
       onDelete(id); 
    } else {
      console.error('onDelete is not a function');
    }};

  return (
    <tr>
      <td> {date} </td>
      <td> {description} </td>
      <td> {category} </td>
      <td> {amount} </td>
      <td>
        <button 
        className="ui button" 
        onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
}

export default Transaction;
