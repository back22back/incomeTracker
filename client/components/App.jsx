import React, { useState, useEffect } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import axios from 'axios';
import FrontPage from './frontPage/FrontPage';
import Analysis from './analysis/Analysis';
import Sidebar from './Header/Sidebar';

const App = () => {
  const [page, setPage] = useState('Front Page');
  const [menu, setMenu] = useState(false);
  const [incomes, setIncomes] = useState();
  const [expenses, setExpenses] = useState();
  const [incomeSum, setIncomeSum] = useState(0);
  const [expenseSum, setExpenseSum] = useState(0);
  const [pageReady, setPageReady] = useState(false);

  const getData = async () => {
    const incomePromise = axios.get('/income');
    const expensePromise = axios.get('/expense');
    const [incomeP, expenseP] = await Promise.all([incomePromise, expensePromise]);
    setIncomes(incomeP.data);
    const formatted = expenseP.data.map((each) => {
      each.amount = Math.abs(each.amount);
      return each;
    });
    setExpenses(formatted);
    const incomeSumTemp = incomeP.data.reduce((accum, curr) => accum + JSON.parse(curr.amount), 0);
    setIncomeSum(incomeSumTemp);
    const exPSumTemp = expenseP.data.reduce((accum, curr) => accum + Math.abs(JSON.parse(curr.amount)), 0);
    setExpenseSum(Math.abs(exPSumTemp));
  };

  useEffect(() => {
    getData();
    setPageReady(true);
  }, []);

  if (!pageReady) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="mainTitle" onClick={() => setPage('Front Page')}>Income Tracker</h1>
      <div className="hamburger">
        <HamburgerMenu
          isOpen={menu}
          menuClicked={() => setMenu(!menu)}
          width={30}
          height={24}
          strokeWidth={1}
          rotate={0}
          color="black"
          borderRadius={0}
          animationDuration={0.5}
        />
      </div>

      {menu ? <Sidebar setPage={setPage} setMenu={setMenu} /> : null}
      {page === 'Front Page' ? (
        <FrontPage
          incomes={incomes}
          expenses={expenses}
          incomeSum={incomeSum}
          expenseSum={expenseSum}
          getData={getData}
        />
      ) : null}
      {page === 'Analysis' ? (
        <Analysis
          incomes={incomes}
          expenses={expenses}
          incomeSum={incomeSum}
          expenseSum={expenseSum}
        />
      ) : null}
      <div />
    </div>
  );
};

export default App;
