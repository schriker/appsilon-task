import React from 'react';
import * as logoStyles from './logo.module.css';
import icon from '../../images/icon.svg';
import { Link } from 'gatsby';

function Logo() {
  return (
    <div>
      <Link to="/" className={logoStyles.logo}>
        <img src={icon} alt="Insurance Portal" />
        <h1>Insurance Portal</h1>
      </Link>
    </div>
  );
}

export default Logo;
