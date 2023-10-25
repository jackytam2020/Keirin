import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ProductView from '@/components/ProductView';
import OtherProducts from '@/components/OtherProducts';

import { products } from '@/utils/data/products';

interface ProductType {
  name: string;
  mainPicture: string;
  pictures: string[];
  description: string;
  specifications?: string[];
}

const Product = () => {
  const router = useRouter();

  const [productName, setProductName] = useState<string | string[]>();
  const [currentProduct, setCurrentProduct] = useState<ProductType>();

  useEffect(() => {
    if (router.asPath) {
      window.scroll(0, 0);
      setProductName(router.query.product);
    }
  }, [router.asPath]);

  useEffect(() => {
    if (productName) {
      const foundProduct = products.find(
        (product) => product.name === productName
      );

      setCurrentProduct(foundProduct);
    }
  }, [productName]);

  return (
    <main>
      {currentProduct && (
        <ProductView
          productTitle={productName}
          currentProduct={currentProduct}
        />
      )}
      <OtherProducts productTitle={productName} />
    </main>
  );
};

export default Product;
