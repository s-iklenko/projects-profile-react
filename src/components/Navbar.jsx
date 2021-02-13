import React from "react";
import x from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={x.nav}>
      <div className={`${x.item} ${x.active}`}>
        <a>Profile</a>
      </div>
      <div className={x.item}>
        <a>Messages</a>
      </div>
      <div className={x.item}>
        <a>News</a>
      </div>
      <div className={x.item}>
        <a>Music</a>
      </div>
      <div className={x.item}>
        <a>Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
