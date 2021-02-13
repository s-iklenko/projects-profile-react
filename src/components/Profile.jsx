import React from "react";
import x from './Profile.module.css';

const Profile = () => {
  return (
    <div className={x.content}>
      <div>
        <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" />
      </div>
      <div className={x.avatar}>
        <img src="https://avochka.ru/img/kartinka/1/enot_glass.jpg"></img>
      </div>
      <div>
        my posts
        <div>new post</div>
        <div className={x.posts}>
          <div className={x.item}>
            post 1
            </div>
          <div className={x.item}>
            post 2
            </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
