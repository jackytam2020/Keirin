import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

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
      <Head>
        <title>{`Keirin Enterprises - ${productName}`}</title>
      </Head>
      <meta
        name="Product Page"
        content={`Discover ${productName}. Explore our ${productName} with stunning images and a detailed description. Find out how ${productName} can enhance your home or business.`}
      />
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
