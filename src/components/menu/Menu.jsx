import React from 'react';
import * as menuStyles from './menu.module.css';
import { menuLinks } from '../../data/menu';
import { Link } from "gatsby"

function Menu() {
  return (
    <div className={menuStyles.wrapper}>
      <ul className={menuStyles.links}>
        {menuLinks.map((link, index) => (
          <li
            key={index}
            className={link === 'Reports' ? menuStyles.active : null}
          >
            <Link to="/">{link}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
