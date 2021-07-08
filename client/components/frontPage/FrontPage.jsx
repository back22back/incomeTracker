import React, { useState, useEffect } from 'react';
import Display from './Display.jsx';
import Input from './Input.jsx';

const FrontPage = ({ records }) => {

  return (
    <div>
      <Input />
      <Display records={records} />
    </div>
  );
};

export default FrontPage;