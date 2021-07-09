import React from 'react';

const ExpenseDisplay = ({ expenses, sum }) => (
  <div>
    <h4>Income Summary</h4>
    <div>
      <div>Title</div>
      <div>Category</div>
      <div>Amount</div>
    </div>
    {expenses.map((record, i) => (
      <div key={i}>
        <div>{record.title}</div>
        <div>{record.category}</div>
        <div>
          -$
          {Math.abs(record.amount)}
        </div>
      </div>
    ))}
    <div>
      <span>Total</span>
      <span>
        -$
        {sum}
      </span>
    </div>
  </div>
);

export default ExpenseDisplay;
