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
  const starSrc = favorites.map(favorite => favorite.name).includes(data.name) 
  ? 'https://cdn2.iconfinder.com/data/icons/color-svg-vector-icons-part-2/512/favourites_favorites_folder-512.png' 
  : 'https://cdn1.iconfinder.com/data/icons/office-and-business-14/48/46-512.png';
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
        {residentNames && <div><p>Residents: </p><ul>{residentNames}</ul></div> }
        <img src={starSrc} onClick={() => toggleFavorite(data)}/>
        {/* <button onClick={() => toggleFavorite(data)}>
          Favorite
        </button> */}
    </article>
  )
}

export default Card;