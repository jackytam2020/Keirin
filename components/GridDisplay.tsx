import React from 'react';
import styles from '../styles/Grid.module.scss';

interface ProductType {
  name: string;
  mainPicture: string;
  pictures: string[];
  description: string;
  specifications?: string[];
}

interface GridProps {
  currentProduct: ProductType;
}

const GridDisplay: React.FC<GridProps> = ({ currentProduct }) => {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.grid}>
        {currentProduct.pictures.map((picture, index) => (
          <div key={index} className={styles.gridItem}>
            <img
              src={picture}
              alt={`Product ${index}`}
              className={styles.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridDisplay;
