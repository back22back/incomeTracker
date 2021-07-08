import React from 'react';
import Graph from './Graph';
import List from './List';

const Analysis = ({ records }) => (
  <div>
    <Graph records={records} />
    <List records={records} />
  </div>
);

export default Analysis;
