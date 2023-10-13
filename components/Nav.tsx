import React from 'react';
import navStyles from '../styles/Nav.module.scss';
import MenuIcon from '@mui/icons-material/Menu';

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <div className={navStyles.nav__left}>
        <h1>Keirin Enterprise co.,ltd.</h1>
      </div>
      <div className={navStyles.nav__right}>
        <div className={navStyles.nav__hamMenuIcon}>
          <MenuIcon />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
