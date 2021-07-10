import React from 'react';

const IncomeDisplay = ({ incomes, sum }) => {
  if (incomes) {
    return (
      <div className="display">
        <h4 className="displayTitle">Income Summary</h4>
        <div className="displayRows">
          <span className="displayRowItems">Title</span>
          <span className="displayRowItems">Category</span>
          <span className="displayRowItems">Amount</span>
          <span className="displayRowItems">Date</span>
        </div>
        {incomes.map((record, i) => (
          <div className="displayRows" key={i}>
            <div className="displayRowItems">{record.title}</div>
            <div className="displayRowItems">{record.category}</div>
            <div className="displayRowItems">
              $
              {record.amount}
            </div>
            <div className="displayRowItems">{record.created_at.slice(0, 10)}</div>
          </div>
        ))}
        <div className="displaySum">
          <span className="displaySumComp green">Total Income</span>
          <span className="displaySumComp green">
            $
            {sum}
          </span>
        </div>
      </div>
    );
  }
  return null;
};

export default IncomeDisplay;
