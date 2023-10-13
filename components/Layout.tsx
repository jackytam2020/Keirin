import React from 'react';
import layoutStyles from '../styles/Layout.module.scss';
import Nav from './Nav';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className={layoutStyles.layout}>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
