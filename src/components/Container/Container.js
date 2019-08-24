import React from 'react';
import Card from '../Card/Card'
import './Container.css';

const Container = ({ data, type, toggleFavorite, favorites }) => {
  const dataCards = data.map((card, index) => {
     return <Card className='Card-section 'data={card} type={type} key={index} toggleFavorite={toggleFavorite} favorites={favorites} />
  })
  return (
    <output>
      {type === 'favorites' && !favorites.length && <p className="p_add-favorite">Click a card to favorite</p>}
      {dataCards}
    </output>
  )
}

export default Container;