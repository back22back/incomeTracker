import React, { useState, useEffect } from 'react';

const Input = () => {
  const [positive, setPositive] = useState(false);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  return (
    <div>
      { positive ? <h3>Income</h3> : <h3>Expense</h3>}
      <form>
        <label className="switch">
          <input type="checkbox" onChange={(e)=>setPositive(!positive)} />
          <span className="slider round"></span>
        </label>
        <label htmlFor="title">title:</label>
        <input type="text" id="title" name="title" onChange={(e)=>setTitle(e.target.value)}></input>
        <label htmlFor="category">category:</label>
        <input type="text" id="category" name="category" onChange={(e)=>setCategory(e.target.value)}></input>
        <label htmlFor="category">amount:</label>
        <input type="text" id="amount" name="amount" onChange={(e)=>setAmount(e.target.value)}></input>
        <input type="submit" value="enter" />
      </form>
    </div>
  );
};

export default Input;