import React from 'react';
import navPopOutStyles from '../styles/NavPopOut.module.scss';

import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import CloseIcon from '@mui/icons-material/Close';

import { products } from '@/utils/data/products';

interface NavPopOutTypes {
  isNavOpen: boolean;
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navRef: React.RefObject<HTMLDivElement>;
}

const NavPopOut: React.FC<NavPopOutTypes> = ({
  isNavOpen,
  setIsNavOpen,
  navRef,
}) => {
  return (
    <div
      className={
        isNavOpen ? navPopOutStyles.navPopOut : navPopOutStyles.navPopOutClosed
      }
      ref={navRef}
    >
      <div className={navPopOutStyles.navPopOut__topHeader}>
        <Link href={'/'}>
          <HomeIcon
            className={navPopOutStyles.navPopOut__homeIcon}
            onClick={() => {
              setIsNavOpen(false);
            }}
          />
        </Link>
        <CloseIcon
          className={navPopOutStyles.navPopOut__exitIcon}
          onClick={() => {
            setIsNavOpen(false);
          }}
        />
      </div>

      <ul className={navPopOutStyles.navPopOut__productList}>
        {products.map((product) => {
          return (
            <Link
              key={Math.random() * products.length}
              href={`/product/${product.name}`}
              onClick={() => {
                setIsNavOpen(false);
              }}
            >
              <li className={navPopOutStyles.navPopOut__product}>
                {product.name}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default NavPopOut;
