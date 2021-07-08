import React, { useState, useEffect } from 'react';

const IncomeDisplay = ({ income, sum }) => {

  return (
    <div>
      <h4>Expense Summary</h4>
      <div>
        <div>Title</div>
        <div>Category</div>
        <div>Amount</div>
      </div>
      {income.map((record, i) => {
        return(
        <div key={i}>
          <div>{record.title}</div>
          <div>{record.category}</div>
          <div> ${record.amount}</div>
        </div>
        );
      })}
      <div>
        <span>Total</span>
        <span> ${sum} </span>
      </div>
    </div>
  );
};

export default IncomeDisplay;