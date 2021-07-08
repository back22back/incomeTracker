import React, { useState, useEffect } from 'react';

const List = ({ records }) => {
  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);
  const [incomeSum, setIncomeSum] = useState(0);
  const [expenseSum, setExpenseSum] = useState(0);

  useEffect(() => {
    const incomeTemp = [];
    const expenseTemp = [];
    let incomeNum = 0;
    let expenseNum = 0;
    for (let i = 0; i < records.length; i += 1) {
      if (records[i].amount >= 0) {
        incomeNum += records[i].amount;
        incomeTemp.push(records[i]);
      } else {
        expenseNum += records[i].amount;
        expenseTemp.push(records[i]);
      }
    }
    setIncome(incomeTemp);
    setExpense(expenseTemp);
    setIncomeSum(incomeNum);
    setExpenseSum(expenseNum);
  }, [records]);

  return (
    <div>
      <div>
        <IncomeDisplay income={income} sum={incomeSum} />
        <ExpenseDisplay expense={expense} sum={expenseSum} />
      </div>
      <div>
        <span>Total</span>
        <span>
          $
          {incomeSum + expenseSum}
        </span>
      </div>
    </div>
  );
};

export default List;
