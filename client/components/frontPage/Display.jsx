import React from 'react';
import ExpenseDisplay from './ExpenseDisplay';
import IncomeDisplay from './IncomeDisplay';

const FrontPage = ({
  incomes, expenses, incomeSum, expenseSum,
}) => (
  <div>
    <div>
      <IncomeDisplay incomes={incomes} sum={incomeSum} />
      <ExpenseDisplay expenses={expenses} sum={expenseSum} />
    </div>
    <div>
      <span>Total</span>
      <span>
        $
        {incomeSum - expenseSum}
      </span>
    </div>
  </div>
);

export default FrontPage;
