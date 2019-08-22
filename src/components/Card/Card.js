import React from 'react';
import { Fragment } from 'react'
import './Card.css'

const Card = (props) => {
  let newCard;
  if(props.planet) {
    var { name, terrain, climate, population, residents } = props.planet;
    // console.log(props.planet.residents[0])

    newCard = (
      <Fragment>
      <h3>{name}</h3>
      <p>{terrain}</p>
      <p>{climate}</p>
      <p>{population}</p>
      <p>{residents[0]}</p>
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