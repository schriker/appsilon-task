import React from 'react';
import * as cardsStyles from './cards.module.css';
import { cards } from '../../data/cards';
import Card from '../card/Card';

function Cards() {
  return (
    <div className={cardsStyles.wrapper}>
      {cards.map((card, index) => (
        <Card {...card} key={index} />
      ))}
    </div>
  );
}

export default Cards;
