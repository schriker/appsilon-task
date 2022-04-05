import React, { useState } from 'react';
import * as layoutStyles from './layout.module.css';
import Menu from '../menu/Menu';
import Sidebar from '../sidebar/Sidebar';

function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={layoutStyles.wrapper}>
      <Sidebar isOpen={isOpen} toggleOpen={toggleOpen} />
      <div className={layoutStyles.container}>
        <Menu toggleOpen={toggleOpen} />
        <div className={layoutStyles.content}>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
