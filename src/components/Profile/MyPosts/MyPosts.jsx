import React from "react";
import x from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={x.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={x.posts}>
                <Post message='Hi, how are you?' likesCount='15' />
                <Post message='It is my first post' likesCount='25' />
            </div>
        </div>
    )
}

export default MyPosts;