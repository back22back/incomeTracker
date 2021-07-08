import React from 'react';
import Display from './Display';
import Input from './Input';

const FrontPage = ({ records }) => (
  <div>
    <Input />
    <Display records={records} />
  </div>
);

export default FrontPage;
