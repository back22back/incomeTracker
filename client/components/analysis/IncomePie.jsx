import React, { useState } from 'react';
import List from './List';
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
      <div className="cover" />
      <div className="cover" />
      <List category={listCategory} breakdown={incomeBreakdown} />
    </div>
  );
};

export default IncomePie;
