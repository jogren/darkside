import React from 'react';
import './Nav.css';

const Nav = () => {

  return (
    <nav>
      <div className="Nav_div Nav-people">
        <p className="Nav_p">People</p>
        <img src="https://i.pinimg.com/originals/6e/df/0f/6edf0f66c1248e21cb7695cccaafbe35.png" />
      </div>
      <div className="Nav_div Nav-planets">
        <p className="Nav_p">Planets</p>
        <img src="https://i.ebayimg.com/images/g/GS0AAOSwqVVbMde7/s-l300.png" />
      </div>
      <div className="Nav_div Nav-vehicles">
        <p className="Nav_p">Vehicles</p>
        <img src="https://dtkp6g0samjql.cloudfront.net/uploads/photo/file/11974902/gallery_hero_52e00645-0d84-4bd5-afd0-341aad91e53e.jpg" />
      </div>
      <div className="Nav_div Nav-favorites">
        <p className="Nav_p">Favorites</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Linecons_big-star.svg/1024px-Linecons_big-star.svg.png" />
      </div>
    </nav>
  );
}

export default Nav;