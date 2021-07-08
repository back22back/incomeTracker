import React, { useState, useEffect } from 'react';
import ExpenseDisplay from './ExpenseDisplay.jsx';
import IncomeDisplay from './IncomeDisplay.jsx';

const FrontPage = ({ records }) => {
  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);
  const [incomeSum, setIncomeSum] = useState(0);
  const [expenseSum, setExpenseSum] = useState(0);

  useEffect(() => {
    const incomeTemp = [];
    const expenseTemp = [];
    let income = 0;
    let expense = 0;
    for (var i = 0; i < records.length; i++) {
      if (records[i].amount >= 0) {
        income += records[i].amount;
        incomeTemp.push(records[i]);
      } else {
        expense += records[i].amount;
        expenseTemp.push(records[i]);
      }
    }
    setIncome(incomeTemp);
    setExpense(expenseTemp);
    setIncomeSum(income);
    setExpenseSum(expense);
  }, [records]);

  return (
    <div>
      <IncomeDisplay income={income} sum={incomeSum} />
      <ExpenseDisplay expense={expense} sum={expenseSum} />
      <div>
        <span>Total</span>
        <span> ${incomeSum + expenseSum} </span>
      </div>
    </div>
  );
};

export default FrontPage;