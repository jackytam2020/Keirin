import React, { useState } from 'react';
import carouselStyles from '../styles/Carousel.module.scss';

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

import CarouselItem from './CarouselItem';

interface ProductType {
  name: string;
  mainPicture: string;
  pictures: string[];
  description: string;
  specifications?: string;
}

interface CarouselType {
  currentProduct: ProductType;
}
const Carousel: React.FC<CarouselType> = ({ currentProduct }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= currentProduct.pictures.length) {
      newIndex = currentProduct.pictures.length - 1;
    }

    setCurrentIndex(newIndex);
  };

  return (
    <div className={carouselStyles.carousel}>
      <ArrowLeftIcon
        onClick={() => {
          updateIndex(currentIndex - 1);
        }}
        className={
          currentIndex === 0
            ? carouselStyles.carousel__leftButtonHidden
            : carouselStyles.carousel__leftButton
        }
      />
      <div
        className={carouselStyles.carousel__inner}
        style={{ transform: `translate(-${currentIndex * 100}%)` }}
      >
        {currentProduct.pictures.map((picture, index) => {
          return (
            <CarouselItem
              picture={picture}
              key={Math.random() * currentProduct.pictures.length}
            />
          );
        })}
      </div>

      <div className={carouselStyles.carousel__indicators}>
        {currentProduct.pictures.map((_picture, index) => {
          return index === currentIndex ? (
            <RadioButtonCheckedIcon
              key={Math.random() * currentProduct.pictures.length}
              className={carouselStyles.carousel__radioButtons}
            />
          ) : (
            <RadioButtonUncheckedIcon
              key={Math.random() * currentProduct.pictures.length}
              className={carouselStyles.carousel__radioButtons}
              onClick={() => {
                setCurrentIndex(index);
              }}
            />
          );
        })}
      </div>

      <ArrowRightIcon
        onClick={() => {
          updateIndex(currentIndex + 1);
        }}
        className={
          currentIndex === currentProduct.pictures.length - 1
            ? carouselStyles.carousel__rightButtonHidden
            : carouselStyles.carousel__rightButton
        }
      />
    </div>
  );
};

export default Carousel;
