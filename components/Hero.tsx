import React from 'react';
import Image from 'next/image';
import HeroStyles from '../styles/Hero.module.scss';
import banner from '../public/assets/images/banner.jpg';

import Button from './Button';

const Hero = () => {
  return (
    <section className={HeroStyles.hero}>
      <Image
        className={HeroStyles.hero__banner}
        src={banner}
        alt="Hero Banner"
      />
      <div className={HeroStyles.hero__button}>
        <Button />
      </div>
    </section>
  );
};

export default Hero;
