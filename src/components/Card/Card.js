import React from 'react';
import { Fragment } from 'react'
import './Card.css'

const Card = (props) => {
  let newCard;
  if(props.planet) {
    const { name, terrain, climate, population, residents } = props.planet;
    const residentNames = residents.map(resident => {
      return <li>{resident}</li>
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

  return (
    <section className='Card'>
    {newCard}
    </section>
  )
}

export default Card;