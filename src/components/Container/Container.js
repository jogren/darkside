import React from 'react';
import Card from '../Card/Card'
import './Container.css';

const Container = ({ data }) => {
  const dataCards = data.map((card, index) => {
     return <Card className='Card-section 'data={card} key={index}/>
  })
  return (
    <output>
      {dataCards}
    </output>
  )
}

export default Container;