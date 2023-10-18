import React, { useState } from 'react';
import productViewStyles from '../styles/ProductView.module.scss';

import Carousel from './Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface ProductType {
  name: string;
  mainPicture: string;
  pictures: string[];
  description: string;
  specifications?: string;
}

interface ProductView {
  productTitle: string | undefined | string[];
  currentProduct: ProductType;
}

const ProductView: React.FC<ProductView> = ({
  productTitle,
  currentProduct,
}) => {
  return (
    <section className={productViewStyles.productView}>
      <p className={productViewStyles.productView__header}>{productTitle}</p>

      <div className={productViewStyles.productView__carouselContainer}>
        <Carousel currentProduct={currentProduct} />
      </div>

      <section className={productViewStyles.productView__descriptionSection}>
        <p style={{ fontSize: '24px' }}>Description</p>
        <p className={productViewStyles.productView__description}>
          {currentProduct.description}
        </p>
      </section>
    </section>
  );
};

export default ProductView;
