import React, { useState } from 'react';
import IncomeList from './IncomeList';
import CanvasJSReact from './canvasjs.react';

const { CanvasJS } = CanvasJSReact;
const { CanvasJSChart } = CanvasJSReact;

const IncomePie = ({ incomeBreakdownSum, incomeBreakdown }) => {
  const [listCategory, setlistCategory] = useState();
  const pieCH = (e) => {
    console.log(e);
    if (e.dataPoint.label === listCategory) {
      setlistCategory();
    } else {
      setlistCategory(e.dataPoint.label);
    }
  };

  const options = {
    theme: 'white',
    animationEnabled: true,
    exportFileName: 'Income Breakdown',
    exportEnabled: true,
    title: {
      text: 'Income Breakdown',
    },
    data: [{
      type: 'pie',
      startAngle: 100,
      showInLegend: true,
      legendText: '{label}',
      toolTipContent: '{label}: <strong>${y}</strong>',
      indexLabelFontSize: 16,
      indexLabel: '{label}: ${y}',
      click: pieCH,
      dataPoints: Object.values(incomeBreakdownSum),
    }],
  };

  return (
    <div>
      <CanvasJSChart options={options} />
      <IncomeList category={listCategory} breakdown={incomeBreakdown} />
    </div>
  );
};

export default IncomePie;
