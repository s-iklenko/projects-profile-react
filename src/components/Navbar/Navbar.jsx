import React from 'react';
import x from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={x.nav}>
      <div className={`${x.item} ${x.active}`}>
        <a href='/profile'>Profile</a>
      </div>
      <div className={x.item}>
        <a href='/dialogs'>Messages</a>
      </div>
      <div className={x.item}>
        <a href='/news'>News</a>
      </div>
      <div className={x.item}>
        <a href='/music'>Music</a>
      </div>
      <div className={x.item}>
        <a href='/settings'>Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
