import React from 'react';
import * as layoutStyles from './layout.module.css';
import Menu from '../menu/Menu';
import Sidebar from '../sidebar/Sidebar';

function Layout({ children }) {
  return (
    <div className={layoutStyles.wrapper}>
      <Sidebar />
      <div className={layoutStyles.container}>
        <Menu />
        <div className={layoutStyles.content}>Content</div>
      </div>
    </div>
  );
}

export default Layout;
