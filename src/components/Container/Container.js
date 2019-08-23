import React from 'react';
import Card from '../Card/Card'
import { Link } from 'react-router-dom';
import './Container.css';

const Container = ({ data, type }) => {
  const dataCards = data.map((card, index) => {
    console.log(card)
    if(type === 'planets') {
      return (
        <Link exact to={`/${type}/${index}`}>
          <Card planets={card} key={index} />
        </Link>
      )
    }
    if(type === 'people') {
      return (
        <Link exact to={`/${type}/${index}`}>
          <Card people={card} key={index} />
        </Link>
      )
    }
    if(type === 'vehicles') {
      return (
        <Link exact to={`/${type}/${index}`}>
          <Card vehicles={card} key={index} />
        </Link>
      )
    }
  })
  return (
    <output>
      {dataCards}
    </output>
  )
}

export default Container;