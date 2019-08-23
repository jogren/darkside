import React from 'react';
import Card from '../Card/Card'
import './Container.css';

const Container = ({ data, type }) => {
  const dataCards = data.map((card, index) => {
    if(type === 'planets') {
      return <Card planets={card} key={index}/>
    }
    if(type === 'people') {
      return <Card people={card} key={index}/>
    }
    if(type === 'vehicles') {
      return <Card vehicles={card} key={index}/>
    }
  })
  return (
    <output>
      {dataCards}
    </output>
  )
}

export default Container;