import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';

const Article = () => {
  const { article } = useContext(PortfolioContext);
  const { title1, title2, title3, url1, url2, url3 } = article;
  return (
    <section id="article">
      <Container>
        <Title title="My published articles" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="article-wrapper">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={url1}
            >
              <p className="article-wrapper__text">{title1}</p>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={url2}
            >
              <p className="article-wrapper__text">{title2}</p>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={url3}
            >
              <p className="article-wrapper__text">{title3}</p>
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Article;
