import React from 'react';

const Sidebar = ({ setPage }) => (
  <div>
    <div onClick={(e) => setPage(e.target.innerText)}>
      Front Page
    </div>
    <div>
      <span name="Analysis" />
      Analysis
    </div>
    <div>
      <span name="Contact" />
      Contact
    </div>
  </div>
);
export default Sidebar;
