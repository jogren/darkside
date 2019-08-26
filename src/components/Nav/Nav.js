import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'
import droidIcon from '../../images/droid.png';
import planetIcon from '../../images/Death-Star-icon.png';
import vehicleIcon from '../../images/Tie-Fighter.png';
import favoriteIcon from '../../images/favorite-icon.png';

const Nav = ({favorites, theme}) => {
  const isDark = theme === 'dark' ? 'dark-nav' : '';
  
  return (
    <nav>
      <NavLink to='/people' className="link">
      <div className={`Nav_div Nav-people ${isDark}`} >
        <p className="Nav_p">People</p>
          <img src={droidIcon} alt="icon of Star Wars droid which displays people cards on click"/>
      </div>
      </NavLink>
      <NavLink to='/planets' className="link">
      <div className={`Nav_div Nav-planets ${isDark}`}>
        <p className="Nav_p">Planets</p>
          <img src={planetIcon} alt="death star icon which displays planet cards on click"/>
      </div>
      </NavLink>
      <NavLink to='/vehicles' className="link">
      <div className={`Nav_div Nav-vehicles ${isDark}`}>
        <p className="Nav_p">Vehicles</p>
          <img src={vehicleIcon} alt="tie fighter icon which displays vehicle cards on click"/>
      </div>
      </NavLink>
      <NavLink to='/favorites' className="link">
      <div className={`Nav_div Nav-favorites ${isDark}`}>
        <p className="Nav_p">Favorites</p>
        <p className={`favorite-counter ${isDark}`}><span>{favorites.length}</span></p>
          <img src={favoriteIcon} alt="favorites star which displays favorite on click"/>
      </div>
      </NavLink>
    </nav>
  );
}

Nav.propTypes = {
  favorites: PropTypes.array.isRequired,
  theme: PropTypes.string.isRequired
}

export default Nav;