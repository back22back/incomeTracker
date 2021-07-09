import React, { useState } from 'react';
import List from './List';
import CanvasJSReact from './canvasjs.react';

const { CanvasJS } = CanvasJSReact;
const { CanvasJSChart } = CanvasJSReact;

const ExpensePie = ({ expenseBreakdown, expenseBreakdownSum }) => {
  const [listCategory, setlistCategory] = useState();
  const pieCH = (e) => {
    if (e.dataPoint.label === listCategory) {
      setlistCategory();
    } else {
      setlistCategory(e.dataPoint.label);
    }
  };

  const options = {
    theme: 'white',
    animationEnabled: true,
    exportFileName: 'Expenses Breakdown',
    exportEnabled: true,
    title: {
      text: 'Expenses Breakdown',
    },
    data: [{
      type: 'pie',
      startAngle: 75,
      showInLegend: true,
      legendText: '{label}',
      toolTipContent: '{label}: <strong>-${y}</strong>',
      indexLabelFontSize: 16,
      indexLabel: '{label}: -${y}',
      click: pieCH,
      dataPoints: Object.values(expenseBreakdownSum),
    }],
  };

  return (
    <div>
      <CanvasJSChart options={options} />
      <div className="cover" />
      <div className="cover" />
      <List category={listCategory} breakdown={expenseBreakdown} />
    </div>
  );
};

export default ExpensePie;
