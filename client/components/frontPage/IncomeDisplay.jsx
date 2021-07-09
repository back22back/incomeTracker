import React from 'react';

const IncomeDisplay = ({ incomes, sum }) => (
  <div>
    <h4>Expense Summary</h4>
    <div>
      <div>Title</div>
      <div>Category</div>
      <div>Amount</div>
    </div>
    {incomes.map((record, i) => (
      <div key={i}>
        <div>{record.title}</div>
        <div>{record.category}</div>
        <div>
          {' '}
          $
          {record.amount}
        </div>
      </div>
    ))}
    <div>
      <span>Total</span>
      <span>
        {' '}
        $
        {sum}
      </span>
    </div>
  </div>
);

export default IncomeDisplay;
