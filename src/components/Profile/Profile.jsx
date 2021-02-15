import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import x from './Profile.module.css';

const Profile = (props) => {
  return (
    <div>
      <div>
        <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" />
      </div>
      <div className={x.avatar}>
        <img src="https://avochka.ru/img/kartinka/1/enot_glass.jpg"></img>
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
