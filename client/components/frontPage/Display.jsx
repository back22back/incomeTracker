import React from 'react';
import ExpenseDisplay from './ExpenseDisplay';
import IncomeDisplay from './IncomeDisplay';

const Display = ({
  incomes, expenses, incomeSum, expenseSum,
}) => (
  <div>
    <div className="summaries">
      <IncomeDisplay incomes={incomes} sum={incomeSum} />
      <ExpenseDisplay expenses={expenses} sum={expenseSum} />
    </div>
    <div className="summariesSum">
      <span className={incomeSum - expenseSum > 0 ? 'summariesSumComp green' : 'summariesSumComp red'}>Total</span>
      <span className={incomeSum - expenseSum > 0 ? 'summariesSumComp green' : 'summariesSumComp red'}>
        $
        {incomeSum - expenseSum}
      </span>
    </div>
  </div>
);

export default Display;
