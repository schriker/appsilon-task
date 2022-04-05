import React from 'react';
import LogoutIcon from '../icons/Logout';
import { Link } from 'gatsby';
import * as logoutStyles from './logout.module.css';

function Logout() {
  return (
    <Link to="/" className={logoutStyles.link}>
      <LogoutIcon />
      Log Out
    </Link>
  );
}

export default Logout;
