import React, { useEffect, useState, useRef } from 'react';
import layoutStyles from '../styles/Layout.module.scss';

import NavPopOut from './NavPopOut';
import Nav from './Nav';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('mousedown', (e) => {
      if (!navRef.current?.contains(e.target as Node)) {
        setIsNavOpen(false);
      }
    });
  }, []);

  return (
    <div className={layoutStyles.layout}>
      <NavPopOut
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
        navRef={navRef}
      />
      <Nav setIsNavOpen={setIsNavOpen} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
