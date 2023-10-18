import React from 'react';
import footerStyles from '../styles/Footer.module.scss';
import MailIcon from '@mui/icons-material/Mail';
const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.footer__content}>
        <h1>Keirin Enterprise co.,ltd.</h1>
        <div className={footerStyles.footer__socialContents}>
          <a href="mailto: tsuper2009@gmail.com">
            <MailIcon className={footerStyles.footer__emailIcon} />
          </a>
          <p>+886 905175947</p>
        </div>
        <p className={footerStyles.footer__address}>
          © 2023 by Keirin Enterprise co.,ltd., room no.1, 8th floor, 102 ling
          yun street, north district, hsin chu, taiwan 300
        </p>
      </div>
    </footer>
  );
};

export default Footer;
