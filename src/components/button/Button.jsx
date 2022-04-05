import { Link } from 'gatsby';
import React from 'react';
import * as buttonStyles from './button.module.css';

function Button({ text, to }) {
  return (
    <Link to={to} className={buttonStyles.button}>
      {text}
    </Link>
  );
}

export default Button;
