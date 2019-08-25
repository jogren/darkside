import React from 'react';
import './CardDetails.css';
import { Link } from 'react-router-dom';

const CardDetails = ({ name, homeworld, terrain, climate, species, homePopulation, type, residents, population, language, model, vehicleClass, passengers, favorites, theme, rotationPeriod, orbitalPeriod, diameter, gravity, hairColor, eyeColor, birthYear, cost, maxSpeed, cargoCapacity }) => {
  const isDark = theme === 'dark' ? 'dark-card' : '';
  let isFavorite = favorites.map(favorite => favorite.name).includes(name) ? 'favorite' : ''; 
  isFavorite = theme === 'dark' && isFavorite ? 'dark-favorite' : isFavorite; 
  let residentNames = undefined;
  if (residents) {
    residentNames = residents.map((resident, index) => {
      return <li key={index} className="CardDetails_li">{resident}</li>
    })
  }
  console.log(type)
  return (
    <div className={`CardDetails-div ${isFavorite} ${isDark}`}>
      <Link to={`/${type}`} className='back-btn'>◀ back</Link>
      <h2 className="CardDetails_h2">{name}</h2>
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
      {residents && !!residents.length && <div><p>Residents: </p><ul>{residentNames}</ul></div>}
      {orbitalPeriod && <p>Orbital Period: {orbitalPeriod}</p>}
      {rotationPeriod && <p>Rotation Period: {rotationPeriod}</p>}
      {diameter && <p>Diameter: {diameter}</p>}
      {gravity && <p>Gravity: {gravity}</p>}
      { hairColor && <p>Hair Color: {hairColor}</p> }
      { eyeColor && <p>Eye Color: {eyeColor}</p> }
      { birthYear && <p>Birth: {birthYear}</p> }
      { cost && <p>Cost: {cost} Credits</p> }
      { maxSpeed && <p>Max Atmospheric Speed: {maxSpeed} km/h</p> }
      { cargoCapacity && <p>Cargo Capacity: {cargoCapacity} tons</p> }
    </div>
  )
}

export default CardDetails;
