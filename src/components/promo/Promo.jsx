import React from 'react';
import * as promoStyles from './promo.module.css';
import promo from '../../images/promo.png';

function Promo({ title, code }) {
  return (
    <div className={promoStyles.wrapper}>
      <img src={promo} alt="Promo Code" />
      <div className={promoStyles.content}>
        <h2>{title}</h2>
        <div className={promoStyles.code}>
          <div>{code}</div>
          <p>Copy Code</p>
        </div>
      </div>
    </div>
  );
}

export default Promo;
