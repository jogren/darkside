import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import PropTypes from 'prop-types';
import favoriteIcon from '../../images/favorite.png';
import favoriteActiveIcon from '../../images/favorite-active.png';

const Card = ({ data, type, toggleFavorite, favorites, theme }) => {
  const isDark = theme === 'dark' ? 'dark-card' : '';
  let isFavorite = favorites.map(favorite => favorite.name).includes(data.name) ? 'favorite' : ''; 
  isFavorite = theme === 'dark' && isFavorite ? 'dark-favorite' : isFavorite; 
  const { name, homeworld, terrain, climate, species, homePopulation, language, 
    model, vehicleClass, passengers, residents, population } = data;
  let residentNames = null;
  if(residents) {
    residentNames = residents.map((resident, index) => {
      return <li key={index}>{resident}</li>
    });
  };
  const starSrc = favorites.map(favorite => favorite.name).includes(data.name) ? favoriteActiveIcon : favoriteIcon;
  return (
    <article className={`Card_section ${isFavorite} ${isDark}`}>
      <Link to={`/${type}/${name.replace(/\s/g, '').replace("/", "")}`} className="link">
        { name && <h3 className={`Card__article-h3 ${isFavorite}`}>{name}</h3> }
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
        { residents && !!residents.length && <div><p>Residents: </p><ul>{residentNames}</ul></div> }
        <img src={starSrc} alt='icon denoting when the card is favorited' onClick={() => toggleFavorite(data)}/>
    </article>
  )
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired,
  theme: PropTypes.string.isRequired
}

export default Card;