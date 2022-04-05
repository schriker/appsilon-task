import React from 'react';
import * as linksStyles from './links.module.css';
import { sidebarLinks } from '../../data/sidebar';
import { Link } from 'gatsby';

function Links() {
  return (
    <ul className={linksStyles.links}>
      {sidebarLinks.map((link, index) => (
        <li key={index}>
          <Link to="/">
            {link.icon}
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Links;
