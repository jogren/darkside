import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom'

const Nav = ({favorites}) => {

  return (
    <nav>
      <NavLink to='/people' className="link">
      <div className="Nav_div Nav-people">
        <p className="Nav_p">People</p>
        <img src="https://icon-library.net/images/starwars-icon/starwars-icon-4.jpg" />
      </div>
      </NavLink>
      <NavLink to='/planets' className="link">
      <div className="Nav_div Nav-planets">
        <p className="Nav_p">Planets</p>
        <img src="http://icons.iconarchive.com/icons/sensibleworld/starwars/1024/Death-Star-icon.png" />
      </div>
      </NavLink>
      <NavLink to='/vehicles' className="link">
      <div className="Nav_div Nav-vehicles">
        <p className="Nav_p">Vehicles</p>
        <img src="https://cdn2.iconfinder.com/data/icons/star-wars-6/24/Tie-Fighter-512.png" />
      </div>
      </NavLink>
      <NavLink to='/favorites' className="link">
      <div className="Nav_div Nav-favorites">
        <p className="Nav_p">Favorites</p>
        <p className="favorite-counter">{favorites.length}</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Linecons_big-star.svg/1024px-Linecons_big-star.svg.png" />
      </div>
      </NavLink>
    </nav>
  );
}

export default Nav;