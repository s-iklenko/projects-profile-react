import React from "react";
import x from './ProfileInfo.module.css';

const ProfileInfo = (props) => {



    return (
        <div>
            <div>
                <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" />
            </div>
            <div className={x.descriptionBlock}>
                <img src="https://avochka.ru/img/kartinka/1/enot_glass.jpg"></img>
            </div>
        </div>
    )
}

export default ProfileInfo;