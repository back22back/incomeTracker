import React, { useState, useEffect } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import FrontPage from './frontPage/FrontPage';
import Analysis from './analysis/Analysis';
import Sidebar from './Header/Sidebar';

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
  const [page, setPage] = useState('Front Page');
  const [menu, setMenu] = useState(false);
  const [incomes, setIncome] = useState([]);
  const [expenses, setExpense] = useState([]);
  const [incomeSum, setIncomeSum] = useState(0);
  const [expenseSum, setExpenseSum] = useState(0);

  useEffect(() => {
    const incomesTemp = [];
    const expensesTemp = [];
    let incomeNum = 0;
    let expenseNum = 0;
    for (let i = 0; i < sampleData.length; i += 1) {
      if (sampleData[i].amount >= 0) {
        incomeNum += sampleData[i].amount;
        incomesTemp.push(sampleData[i]);
      } else {
        expenseNum += sampleData[i].amount;
        expensesTemp.push(sampleData[i]);
      }
    }
    setIncome(incomesTemp);
    setExpense(expensesTemp);
    setIncomeSum(incomeNum);
    setExpenseSum(Math.abs(expenseNum));
  }, [sampleData]);

  return (
    <div>
      <h1>Income Tracker</h1>

      <HamburgerMenu
        isOpen={menu}
        menuClicked={() => setMenu(!menu)}
        width={18}
        height={15}
        strokeWidth={1}
        rotate={0}
        color="black"
        borderRadius={0}
        animationDuration={0.5}
      />
      {menu ? <Sidebar setPage={setPage} /> : null}

      {page === 'Front Page' ? <FrontPage incomes={incomes} expenses={expenses} incomeSum={incomeSum} expenseSum={expenseSum} /> : null}
      {page === 'Analysis' ? <Analysis incomes={incomes} expenses={expenses} incomeSum={incomeSum} expenseSum={expenseSum} /> : null}

      <div />
    </div>
  );
};

export default App;
