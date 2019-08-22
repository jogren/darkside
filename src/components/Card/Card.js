import React from 'react';
import { Fragment } from 'react'
import './Card.css'

const Card = (props) => {
  let newCard;
  if(props.planets) {
    const { name, terrain, climate, population, residents } = props.planets;
    const residentNames = residents.map((resident, index) => {
      return <li key={index}>{resident}</li>
    })
    newCard = (
      <Fragment>
      <h3>{name}</h3>
      <p>{terrain}</p>
      <p>{climate}</p>
      <p>{population}</p>
      <ul>{residentNames}</ul>
      </Fragment>
    )
  }
  if(props.people) {
    const { name, homeworld, species, homePopulation, language } = props.people;
    newCard = (
      <Fragment>
      <h3>{name}</h3>
      <p>{homeworld}</p>
      <p>{species}</p>
      <p>{homePopulation}</p>
      <p>{language}</p>
      </Fragment>
    )
  }
  if(props.vehicles) {
    const { name, model, vehicleClass, passengers } = props.vehicles;
    newCard = (
      <Fragment>
      <h3>{name}</h3>
      <p>{model}</p>
      <p>{vehicleClass}</p>
      <p>{passengers}</p>
      </Fragment>
    )
  }

  return (
    <section className='Card'>
    {newCard}
    </section>
  )
}

export default Card;