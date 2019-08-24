import React from 'react';
import Card from '../Card/Card'
import './Container.css';

const Container = ({ data, type }) => {
  const dataCards = data.map((card, index) => {
     return <Card className='Card-section 'data={card} type={type} key={index}/>
  })
  return (
    <output>
      {dataCards}
    </output>
  )
}

export default Container;