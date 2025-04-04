import React from 'react';
import buttonStyles from '../styles/ButtonStyles.module.scss';

import { Link } from 'react-scroll/modules';

const Button = () => {
  return (
    <>
      <Link
        to="products"
        href="/"
        smooth={true}
        duration={1000}
        className={buttonStyles.container}
        offset={-120}
      >
        <h3>Browse Products</h3>
      </Link>
    </>
  );
};

export default Button;
