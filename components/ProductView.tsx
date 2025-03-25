import React, { useState } from 'react';
import productViewStyles from '../styles/ProductView.module.scss';

import GridDisplay from './GridDisplay';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface ProductType {
  name: string;
  mainPicture: string;
  pictures: string[];
  description: string;
  specifications?: string[];
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
        <GridDisplay currentProduct={currentProduct} />
      </div>

      <section className={productViewStyles.productView__descriptionSection}>
        <p style={{ fontSize: '24px', color: ' #8e7b57' }}>Description</p>
        <p className={productViewStyles.productView__description}>
          {currentProduct.description}
        </p>
        {currentProduct.specifications && (
          <>
            <p
              style={{ fontSize: '24px', marginTop: '2rem', color: ' #8e7b57' }}
            >
              Specifications
            </p>
            <p className={productViewStyles.productView__specifications}>
              {currentProduct.specifications.map((spec) => {
                return (
                  <>
                    <p
                      key={Math.random() * 1000}
                      className={
                        productViewStyles.productView__specificationLine
                      }
                    >
                      {spec}
                    </p>
                  </>
                );
              })}
            </p>
          </>
        )}
      </section>
    </section>
  );
};

export default ProductView;
