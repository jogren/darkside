import React from 'react';
import './CardDetails.css';
import { Link } from 'react-router-dom';

const CardDetails = ({ name, homeworld, terrain, climate, species, homePopulation, type, residents, population, language, model, vehicleClass, passengers, favorites }) => {
  console.log(favorites)
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
      {!name && <p>404: No data found at this location!</p>}
      {homeworld && <p>Homeworld: {homeworld}</p>}
      {terrain && <p>Terrain: {terrain}</p>}
      {climate && <p>Climate: {climate}</p>}
      {homePopulation && <p>Population: {homePopulation}</p>}
      {species && <p>Species: {species}</p>}
      {population && <p>Population: {population}</p>}
      {language && <p>Language: {language}</p>}
      {model && <p>Model: {model}</p>}
      {vehicleClass && <p>Class: {vehicleClass}</p>}
      {passengers && <p>Number of Passengers: {passengers}</p>}
      {residentNames && <div><p>Residence: </p><ul>{residentNames}</ul></div>}
    </div>
  )
}

export default CardDetails;
