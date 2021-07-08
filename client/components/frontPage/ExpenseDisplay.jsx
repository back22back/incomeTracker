import React, { useState, useEffect } from 'react';

const ExpenseDisplay = ({ expense, sum }) => {

  return (
    <div>
      <h4>Income Summary</h4>
      <div>
        <div>Title</div>
        <div>Category</div>
        <div>Amount</div>
      </div>
      {expense.map((record, i) => {
        return(
        <div key={i}>
          <div>{record.title}</div>
          <div>{record.category}</div>
          <div> -${Math.abs(record.amount)}</div>
        </div>
        );
      })}
      <div>
        <span>Total</span>
        <span> -${Math.abs(sum)} </span>
      </div>
    </div>
  );
};

export default ExpenseDisplay;