import React from 'react';
import x from './Header.module.css';

const Header = () => {
  return (
    <header className={x.header}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" />
    </header>
  );
};

export default Header;
