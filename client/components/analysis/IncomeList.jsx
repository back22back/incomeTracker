import React, { useState, useEffect } from 'react';

const IncomeList = ({ category, breakdown }) => {
  const [display, setDisplay] = useState();

  useEffect(() => {
    if (breakdown && category) {
      breakdown[category].sort((a, b) => Math.abs(b.amount) - Math.abs(a.amount));
      setDisplay(breakdown[category]);
    } else {
      setDisplay(false);
    }
  }, [breakdown, category]);

  if (display) {
    return (
      <div className="display list">
        <h2 className="displayTitle">{category}</h2>
        <div className="displayRows">
          <span className="displayRowItems">Title</span>
          <span className="displayRowItems">Category</span>
          <span className="displayRowItems">Amount</span>
          <span className="displayRowItems">Date</span>
        </div>
        {display.map((each, i) => (
          <div className="displayRows" key={i}>
            <div className="displayRowItems">{each.title}</div>
            <div className="displayRowItems">{each.category}</div>
            <div className="displayRowItems">
              -$
              {Math.abs(each.amount)}
            </div>
            <div className="displayRowItems">{each.created_at.slice(0, 10)}</div>
          </div>
        ))}
      </div>
    );
  }
  return null;
};
export default IncomeList;
