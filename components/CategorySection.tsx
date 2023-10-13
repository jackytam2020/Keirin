import React from 'react';
import categoryStyles from '../styles/Category.module.scss';

import Card from './Card';
import { products } from '@/utils/data/products';

const CategorySection = () => {
  return (
    <main className={categoryStyles.categorySection}>
      <h1 className={categoryStyles.categorySection__header}>
        Shop by category
      </h1>

      <section className={categoryStyles.categorySection__cards}>
        {products.map((product) => (
          <Card {...product} key={Math.random() * products.length} />
        ))}
      </section>
    </main>
  );
};

export default CategorySection;
