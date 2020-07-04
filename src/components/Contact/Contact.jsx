import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';

const Contact = () => {
  return (
    <section id="contact">
      <Container>
        <Title title="My published articles" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            {/* <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p> */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href="https://hackernoon.com/the-definitive-command-cheat-sheet-for-rails-beginners-2uli3yb8"
            >
              <p className="contact-wrapper__text">
                Hacerknoon-The Definitive Command Cheat Sheet for Rails Beginners
              </p>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href="https://hackernoon.com/understanding-and-making-your-life-easier-with-bootstrap-nnr2gpb"
            >
              <p className="contact-wrapper__text">
                Hackernoon-Understanding (And Making Your Life Easier) With Bootstrap
              </p>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href="https://hackernoon.com/beginners-guider-to-react-router-dw1j3uuq"
            >
              <p className="contact-wrapper__text">Hackernoon-Beginners Guider To React Router</p>
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
