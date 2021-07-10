import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Input = ({ getData }) => {
  const [positive, setPositive] = useState(true);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const postCH = (e) => {
    // e.preventDefault();
    if (!title || !category || !amount || typeof JSON.parse(amount) !== 'number') {
      alert('please enter all the fields');
      return;
    }
    if (positive) {
      axios.post('/income', { title, category, amount });
    } else {
      axios.post('/expense', { title, category, amount });
    }
    getData();
  };

  return (
    <div className="input">
      <h2 className={positive ? 'inputTitle green' : 'inputTitle red'}>{ positive ? 'Income' : 'Expense'}</h2>
      <form className="inputForm" onSubmit={postCH}>
        <label className="switch">
          <input type="checkbox" onChange={(e) => setPositive(!positive)} />
          <span className="slider round" />
        </label>
        <div className="inputDescription">
          <label className="inputDescriptionComp" htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" autoComplete="off" onChange={(e) => setTitle(e.target.value)} />
          <label className="inputDescriptionComp" htmlFor="category">Category:</label>
          <input type="text" id="category" name="category" autoComplete="off" onChange={(e) => setCategory(e.target.value)} />
        </div>
        <div className="inputAmount">
          <label className="inputDescriptionComp" htmlFor="category">Amount:</label>
          <input type="text" id="amount" name="amount" autoComplete="off" onChange={(e) => setAmount(e.target.value)} />
        </div>
        <button className={positive ? 'submit gbutton' : 'submit rbutton'} type="submit">Enter</button>
      </form>
    </div>
  );
};

export default Input;
