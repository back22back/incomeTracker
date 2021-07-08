import React, {useState, useEffect} from 'react';
import FrontPage from './frontPage/FrontPage.jsx';

const sampleData = [
  {
    title: 'work pay',
    category: 'salary',
    amount: 5000
  },
  {
    title: 'tips',
    category: 'tips',
    amount: 1500
  },
  {
    title: 'rent',
    category: 'housing',
    amount: -1000
  },
  {
    title: 'QFC',
    category: 'grocery',
    amount: -100
  }
]

const App = () => {
  return (
    <div>
      <div>hello world</div>
      <FrontPage records={sampleData} />
      <div></div>
    </div>
  );
};

export default App;