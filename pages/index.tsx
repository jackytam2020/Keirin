import React from 'react';
import Head from 'next/head';
import styles from '@/styles/Home.module.scss';

import Hero from '@/components/Hero';
import CategorySection from '@/components/CategorySection';
export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title>Keirin Enterprises</title>
      </Head>
      <Hero />
      <CategorySection />
    </div>
  );
}
