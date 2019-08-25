import React from 'react';
import Card from '../Card/Card'
import './Container.css';
import PropTypes from 'prop-types';

const Container = ({ data, type, toggleFavorite, favorites, theme }) => {
  const dataCards = data.map((card, index) => {
     return <Card className='Card-section' data={card} type={type} key={index} toggleFavorite={toggleFavorite} favorites={favorites} theme={theme} />
  })
  return (
    <output>
      {type === 'favorites' && !favorites.length && <p className="p_add-favorite">Click a card to favorite</p>}
      {dataCards}
    </output>
  )
}

Container.propTypes = {
  data: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired,
  theme: PropTypes.string.isRequired
}

export default Container;