import React from "react";
import like from './up_like.svg'
import x from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={x.item}>
                <img src='https://camo.githubusercontent.com/48d099290b4cb2d7937bcd96e8497cf1845b54a810a6432c70cf944b60b40c77/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667' />
                {props.message}
            </div>
            <div className={x.like}>
                <img src={like} /> :
                {props.likesCount}
            </div>
        </div>
    )
}

export default Post;