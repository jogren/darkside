import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ data, type, toggleFavorite, favorites }) => {
  const isFavorite = favorites.map(favorite => favorite.name).includes(data.name) ? 'favorite' : null; 
  const { name, homeworld, terrain, climate, species, homePopulation, language, 
          model, vehicleClass, passengers, residents, population } = data;
  let residentNames = null;
  if(residents) {
    residentNames = residents.map((resident, index) => {
      return <li key={index}>{resident}</li>
    })
  }
  return (
    <article className={`Card_section ${isFavorite}`}>
      <Link to={`/${type}/${name.replace(/\s/g, '').replace("/", "")}`} className="link">
        { name && <h3 className="Card__article-h3">{name}</h3> }
      </Link>
        { homeworld && <p>Home: {homeworld}</p> }
        { terrain && <p>Terrain: {terrain}</p> }
        { climate && <p>Climate: {climate}</p> }
        { homePopulation && <p>Population: {homePopulation}</p> }
        { species && <p>Species: {species}</p> }
        { population && <p>Population: {population}</p> }
        { language && <p>Language: {language}</p> }
        { model && <p>Model: {model}</p> }
        { vehicleClass && <p>Class: {vehicleClass}</p> }
        { passengers && <p>Number of Passengers: {passengers}</p> }
        {residentNames && <div><p>Residence: </p><ul>{residentNames}</ul></div> }
        <button onClick={() => toggleFavorite(data)}>
          Favorite
        </button>
    </article>
  )
}

export default Card;