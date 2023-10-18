import React, { useState } from 'react';
import Link from 'next/link';

import Image from 'next/image';
import cardStyles from '../styles/Card.module.scss';

const CardPicture: React.FC<card> = ({ mainPicture, name }) => {
  return (
    <div className={cardStyles.card__pictureHolder}>
      <img src={mainPicture} alt={name} className={cardStyles.card__picture} />
    </div>
  );
};

interface card {
  name: string;
  mainPicture: string;
}

const Card: React.FC<card> = ({ name, mainPicture }) => {
  const [cardHovered, setCardHovered] = useState<boolean>(false);
  return (
    <Link
      href={`/product/${name}`}
      className={
        cardHovered
          ? `${cardStyles.card} ${cardStyles.card__hovered}`
          : `${cardStyles.card}`
      }
      onMouseEnter={() => {
        setCardHovered(true);
      }}
      onMouseLeave={() => {
        setCardHovered(false);
      }}
    >
      <div className={cardStyles.card__left}>
        <p className={cardStyles.card__name}>{name}</p>
      </div>
      <div className={cardStyles.card__right}>
        <CardPicture mainPicture={mainPicture} name={name} />
      </div>
    </Link>
  );
};

export default Card;
