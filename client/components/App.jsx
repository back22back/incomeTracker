import React, { useState, useEffect } from 'react';
import FrontPage from './frontPage/FrontPage.jsx';
import Analysis from './analysis/Analysis.jsx';

const sampleData = [
  {
    title: 'work pay',
    category: 'salary',
    amount: 5000,
  },
  {
    title: 'tips',
    category: 'tips',
    amount: 1500,
  },
  {
    title: 'rent',
    category: 'housing',
    amount: -1000,
  },
  {
    title: 'QFC',
    category: 'grocery',
    amount: -100,
  },
];

const App = () => {
  const [page, setPage] = useState('FrontPage');

  return (
    <div>
      <div>hello world</div>
      {page === 'FrontPage' ? <FrontPage records={sampleData} /> : null}
      {page === 'Analysis' ? <Analysis records={sampleData} /> : null}

      <div />
    </div>
  );
};

export default App;
