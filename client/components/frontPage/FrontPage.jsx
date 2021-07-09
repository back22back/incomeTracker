import React from 'react';
import Display from './Display';
import Input from './Input';

const FrontPage = (props) => (
  <div>
    <Input />
    <Display props={props} />
  </div>
);

export default FrontPage;
