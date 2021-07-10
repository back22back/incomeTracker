import React from 'react';
import Display from './Display';
import Input from './Input';

const FrontPage = ({
  incomes, expenses, incomeSum, expenseSum, getData,
}) => (
  <div>
    <Input getData={getData} />
    <Display
      incomes={incomes}
      expenses={expenses}
      incomeSum={incomeSum}
      expenseSum={expenseSum}
    />
  </div>
);

export default FrontPage;
