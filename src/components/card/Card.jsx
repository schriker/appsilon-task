import React from 'react';
import * as cardStyle from './card.module.css';

function Card({ price, title, policy, claim }) {
  return (
    <div className={cardStyle.wrapper}>
      <h3>
        {price}
        <span>$</span>
      </h3>
      <p>{title}</p>
      <div className={cardStyle.value}>
        <div className={cardStyle.valueContent}>
          <div>Policy</div>
          <div className={cardStyle.valuePrice}>
            {policy}
            <span>$</span>
          </div>
        </div>
        <div className={cardStyle.bar}>
          <div style={{ width: '155px' }} className={cardStyle.barGreen}></div>
        </div>
      </div>
      <div className={cardStyle.value}>
        <div className={cardStyle.valueContent}>
          <div>Claim</div>
          <div className={cardStyle.valuePrice}>
            {claim}
            <span>$</span>
          </div>
        </div>
        <div className={cardStyle.bar}>
          <div style={{ width: '193px' }} className={cardStyle.barPurple}></div>
        </div>
      </div>
    </div>
  );
}

export default Card;
