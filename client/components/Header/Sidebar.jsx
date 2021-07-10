import React, { useEffect, useRef } from 'react';

const Sidebar = ({ setPage, setMenu }) => {
  const node = useRef();

  const handleClick = (e) => {
    console.log(e);
    console.log(node);
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setMenu(false);
  };

  useEffect(() => {
    // add when mounted
    document.addEventListener('mousedown', handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar-components" onClick={(e) => setPage(e.target.innerText)}>
        Front Page
      </div>
      <div className="sidebar-components" onClick={(e) => setPage(e.target.innerText)}>
        Analysis
      </div>
      <div className="sidebar-components" onClick={(e) => setPage(e.target.innerText)}>
        Contact
      </div>
    </div>
  );
};
export default Sidebar;
