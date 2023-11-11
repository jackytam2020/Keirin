import React from 'react';
import navStyles from '../styles/Nav.module.scss';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

interface NavTypes {
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav: React.FC<NavTypes> = ({ setIsNavOpen }) => {
  return (
    <nav className={navStyles.nav}>
      <div className={navStyles.nav__left}>
        <Link href={'/'}>
          <img
            className={navStyles.nav__logo}
            src="/assets/images/logo2.png"
            alt="Kirin Logo"
          />
        </Link>
      </div>
      <div className={navStyles.nav__right}>
        <div className={navStyles.nav__hamMenuIcon}>
          <MenuIcon
            onClick={() => {
              setIsNavOpen(true);
            }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
