import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ data, type }) => {
  const { name, homeworld, terrain, climate, species, homePopulation, language, 
          model, vehicleClass, passengers, residents, population } = data;
  let residentNames = null;
  if(residents) {
    residentNames = residents.map((resident, index) => {
      return <li key={index}>{resident}</li>
    })
  }
  return (
    <article className='Card_section'>
      <Link to={`/${type}/${name.replace(/\s/g, '').replace("/", "")}`} className="link">
        { name && <h3>{name}</h3> }
      </Link>
        { homeworld && <p>{homeworld}</p> }
        { terrain && <p>{terrain}</p> }
        { climate && <p>{climate}</p> }
        { homePopulation && <p>{homePopulation}</p> }
        { residentNames && <ul>{residentNames}</ul> }
        { species && <p>{species}</p> }
        { population && <p>{population}</p> }
        { language && <p>{language}</p> }
        { model && <p>{model}</p> }
        { vehicleClass && <p>{vehicleClass}</p> }
        { passengers && <p>{passengers}</p> }
    </article>
  )
}

export default Card;