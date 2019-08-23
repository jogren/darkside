import React from 'react';
import { Fragment } from 'react';
import './Card.css';

const Card = ({ data }) => {
  console.log(data)
  const { name, homeworld, terrain, climate, species, homePopulation, language, 
          model, vehicleClass, passengers, residents, population } = data;
  let residentNames = null;
  if(residents) {
    residentNames = residents.map((resident, index) => {
      return <li key={index}>{resident}</li>
    })
  }
  return (
    <article className='Card-section'>
        { name && <h3>{name}</h3> }
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