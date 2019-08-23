import React from 'react';
import Card from '../Card/Card'
import { Link } from 'react-router-dom';
import './Container.css';

const Container = ({ data, type }) => {
  const dataCards = data.map((card, index) => {
    if(type === 'planets') {
      return (
        <Link to={`/${type}/${card.name.replace(/\s/g, '')}`} className="link">
          <Card planets={card} key={index} />
        </Link>
      )
    }
    if(type === 'people') {
      return (
        <Link to={`/${type}/${card.name.replace(/\s/g, '')}`} className="link">
          <Card people={card} key={index} />
        </Link>
      )
    }
    if(type === 'vehicles') {
      return (
        <Link to={`/${type}/${card.name.replace(/\s/g, '')}`} className="link">
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