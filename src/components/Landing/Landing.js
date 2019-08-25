import React from 'react';
import Crawl from 'react-star-wars-crawl';
import 'react-star-wars-crawl/lib/index.css'
import './Landing.css';
import PropTypes from 'prop-types';

const Landing = ({ film }) => {
  return (
    <Crawl className="Landing_crawl">
      <h2 className="Landing_h2">{film.title}</h2>
      <p className="Landing_p">{film.body}</p>
    </Crawl>
  );
}

Landing.propTypes = {
  film: PropTypes.object.isRequired,
}
export default Landing;