import React, { useState, useEffect } from 'react';

const List = ({ category, breakdown }) => {
  const [display, setDisplay] = useState();

  useEffect(() => {
    if (breakdown && category) {
      breakdown[category].sort((a, b) => Math.abs(b.amount) - Math.abs(a.amount));
      setDisplay(breakdown[category]);
    }
  }, [breakdown, category]);

  if (display) {
    return (
      <div>
        <h2>{category}</h2>
        <div>
          <div>Title</div>
          <div>Category</div>
          <div>Amount</div>
        </div>
        {display.map((each, i) => (
          <div key={i}>
            <div>{each.title}</div>
            <div>{each.category}</div>
            <div>
              {' '}
              -$
              {Math.abs(each.amount)}
            </div>
          </div>
        ))}
      </div>
    );
  }
  return null;
};
export default List;
