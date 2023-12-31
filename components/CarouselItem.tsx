import React from 'react';
import carouselItemStyles from '../styles/CarouselItem.module.scss';

interface CarouselItemTypes {
  picture: string;
}

const CarouselItem: React.FC<CarouselItemTypes> = ({ picture }) => {
  return (
    <div className={carouselItemStyles.carouselItem}>
      <img
        src={picture}
        alt={picture}
        className={carouselItemStyles.carouselItem__image}
      />
    </div>
  );
};

export default CarouselItem;
