import React from 'react';

const ExpenseDisplay = ({ expenses, sum }) => {
  if (expenses) {
    return (
      <div className="display">
        <h4 className="displayTitle">Expense Summary</h4>
        <div className="displayRows">
          <span className="displayRowItems">Title</span>
          <span className="displayRowItems">Category</span>
          <span className="displayRowItems">Amount</span>
          <span className="displayRowItems">Date</span>
        </div>
        {expenses.map((record, i) => (
          <div className="displayRows" key={i}>
            <div className="displayRowItems">{record.title}</div>
            <div className="displayRowItems">{record.category}</div>
            <div className="displayRowItems">
              -$
              {Math.abs(record.amount)}
            </div>
            <div className="displayRowItems">{record.created_at.slice(0, 10)}</div>
          </div>
        ))}
        <div className="displaySum">
          <span className="displaySumComp red">Total Expense</span>
          <span className="displaySumComp red">
            -$
            {sum}
          </span>
        </div>
      </div>
    );
  }
  return null;
};

export default ExpenseDisplay;
