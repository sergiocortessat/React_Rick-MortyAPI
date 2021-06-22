import React from 'react';

// eslint-disable-next-line react/prop-types
const Header = ({ title }) => (
  <header>
    <div className="container">
      <div className="content">
        <h1 className="title">{title}</h1>
        <p className="text">This project illustrates the characters of the famous Rick and Morty series</p>
      </div>
    </div>
  </header>
);

export default Header;
