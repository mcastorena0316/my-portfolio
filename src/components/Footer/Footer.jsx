import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <p className="footer__text">Would you like to work with me? Awesome! Let&lsquo;s Talk</p>
        <div className="social-links">
          {networks &&
            networks.map((network) => {
              const { id, name2, url } = network;
              return (
                <a key={id} href={url} rel="noopener noreferrer" target="_blank" aria-label={name2}>
                  <i className={`fa fa-${name2 || 'refresh'} fa-inverse`} />
                </a>
              );
            })}
        </div>
        <hr />
        <p className="footer__date">© {new Date().getFullYear()}</p>
      </Container>
    </footer>
  );
};

export default Footer;
