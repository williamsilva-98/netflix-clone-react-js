import React from 'react';
import './styles.css';

const Header = ({blackHeader}) => {
  return (
    <header className={blackHeader ? 'black' : ''}>
        <div className="header--logo">
          <a href="/">
            <img src='/netflix_logo.png'alt='netflix'/>
          </a>
        </div>
        <div className="header--avatar">
          <img src='/netflix_avatar.png'/>
        </div>
    </header>
  );
}

export default Header;