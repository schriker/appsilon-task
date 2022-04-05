import React from 'react';
import * as sidebarStyles from './sidebar.module.css';
import Logo from '../logo/Logo';
import User from '../user/User';
import Button from '../button/Button';
import Links from '../links/Links';
import Logout from '../logout/Logout';
import Close from '../../components/icons/Close';

function Sidebar({ isOpen, toggleOpen }) {
  return (
    <div
      className={`${isOpen ? sidebarStyles.open : null} ${
        sidebarStyles.wrapper
      }`}
    >
      <div className={sidebarStyles.close}>
        <button onClick={toggleOpen}>
          <Close />
        </button>
      </div>
      <Logo />
      <User />
      <Button text="Create New Plan" to="/" />
      <Links />
      <Logout />
    </div>
  );
}

export default Sidebar;
