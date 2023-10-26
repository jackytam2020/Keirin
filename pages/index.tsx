import React from 'react';
import Head from 'next/head';
import styles from '@/styles/Home.module.scss';

import Hero from '@/components/Hero';
// import { Metadata } from 'next';
import CategorySection from '@/components/CategorySection';
export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title>Keirin Enterprises</title>
      </Head>
      <meta
        name="Home Page"
        content="Browse through our different selection categories of furnitures"
      />
      <Hero />
      <CategorySection />
    </div>
  );
}
