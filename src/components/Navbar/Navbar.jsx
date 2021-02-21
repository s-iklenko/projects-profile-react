import React from 'react';
import { NavLink } from 'react-router-dom';
import x from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={x.nav}>
      <div className={`${x.item} ${x.active}`}>
        <NavLink to='/profile' activeClassName={x.active}>Profile</NavLink>
      </div>
      <div className={x.item}>
        <NavLink to='/dialogs' activeClassName={x.active}>Messages</NavLink>
      </div>
      <div className={x.item}>
        <NavLink to='/my_blog' activeClassName={x.active}>My Blog</NavLink>
      </div>
      <div className={x.item}>
        <NavLink to='/news' activeClassName={x.active}>News</NavLink>
      </div>
      <div className={x.item}>
        <NavLink to='/music' activeClassName={x.active}>Music</NavLink>
      </div>
      <div className={x.item}>
        <NavLink to='/settings' activeClassName={x.active}>Settings</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
