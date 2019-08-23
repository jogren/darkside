import React from 'react';
import './CardDetails.css';
import { Link } from 'react-router-dom';

const CardDetails = ({ name, homeWorld, species, homePopulation, type }) => {
  return (
    <div>
      <Link to={`/${type}`} className='back-btn'>◀ back</Link>
      <h1>{name}</h1>
      <p className='creature-bio'>{homeWorld}</p>
      <p>{species}</p>
      <p>{homePopulation}</p>
    </div>
  )
}

export default CardDetails;
