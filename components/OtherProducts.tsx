import React from 'react';
import OtherProductStyles from '../styles/OtherProduct.module.scss';

import { products } from '@/utils/data/products';
import Card from './Card';

interface OtherProductsTypes {
  productTitle: string | undefined | string[];
}

const OtherProducts: React.FC<OtherProductsTypes> = ({ productTitle }) => {
  return (
    <section className={OtherProductStyles.otherProducts}>
      <p className={OtherProductStyles.otherProducts__header}>Other Products</p>

      <div className={OtherProductStyles.otherProducts__cards}>
        {products
          .filter((product) => product.name !== productTitle)
          .map((product) => (
            <Card {...product} key={Math.random() * products.length} />
          ))}
      </div>
    </section>
  );
};

export default OtherProducts;
