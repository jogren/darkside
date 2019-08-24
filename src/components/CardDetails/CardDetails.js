import React from 'react';
import './CardDetails.css';
import { Link } from 'react-router-dom';

const CardDetails = ({ name, homeworld, terrain, climate, species, homePopulation, type, residents, population, language, model, vehicleClass, passengers, favorites }) => {
  const isFavorite = favorites.map(favorite => favorite.name).includes(name) ? 'favorite' : null; 
  let residentNames = null;
  if (residents) {
    residentNames = residents.map((resident, index) => {
      return <li key={index}>{resident}</li>
    })
  }
  
  return (
    <div className={`CardDetails-div ${isFavorite}`}>
      <Link to={`/${type}`} className='back-btn'>◀ back</Link>
      <h2>{name}</h2>
      {homeworld && <p>{homeworld}</p>}
      {terrain && <p>{terrain}</p>}
      {climate && <p>{climate}</p>}
      {homePopulation && <p>{homePopulation}</p>}
      {species && <p>{species}</p>}
      {population && <p>{population}</p>}
      {language && <p>{language}</p>}
      {model && <p>{model}</p>}
      {vehicleClass && <p>{vehicleClass}</p>}
      {passengers && <p>{passengers}</p>}
      {residentNames && <ul>{residentNames}</ul>}
    </div>
  )
}

export default CardDetails;
