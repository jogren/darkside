import React from 'react';
import Card from '../Card/Card'
import './Container.css';

const Container = ({ data }) => {
  const dataCards = data.map((card, index) => {
    // console.log(index)
    return <Card planet={card} key={index}/>
  })
  return (
    <output>
      {dataCards}
    </output>
  )
}

export default Container;