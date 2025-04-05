import React from 'react';
import footerStyles from '../styles/Footer.module.scss';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.footer__content}>
        <Link href={'/'}>
          <img
            className={footerStyles.footer__logo}
            src="/assets/images/logo2.png"
            alt="Kirin Logo"
          />
        </Link>

        {/* Email Row */}
        <div className={footerStyles.footer__contactRow}>
          <a href="mailto:tsuper2009@gmail.com">
            <MailIcon className={footerStyles.footer__icon} />
          </a>
          <a
            href="mailto:tsuper2009@gmail.com"
            className={footerStyles.footer__text}
          >
            tsuper2009@gmail.com
          </a>
        </div>

        {/* Phone Row */}
        <div className={footerStyles.footer__contactRow}>
          <PhoneIcon className={footerStyles.footer__icon} />
          <p className={footerStyles.footer__text}>+886 905175947</p>
        </div>

        {/* Address */}
        <p className={footerStyles.footer__address}>
          Room No.1, 8th Floor, 102 Ling Yun Street, North district, Hsin Chu,
          Taiwan 300
        </p>
      </div>
    </footer>
  );
};

export default Footer;
