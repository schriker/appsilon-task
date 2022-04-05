import React from 'react';
import * as sidebarStyles from './sidebar.module.css';
import Logo from '../logo/Logo';
import User from '../user/User';
import Button from '../button/Button';
import Links from '../links/Links';
import Logout from '../logout/Logout';

function Sidebar() {
  return (
    <div className={sidebarStyles.wrapper}>
      <Logo />
      <User />
      <Button text="Create New Plan" to="/" />
      <Links />
      <Logout />
    </div>
  );
}

export default Sidebar;
