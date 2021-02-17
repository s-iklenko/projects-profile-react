import React from "react";
import x from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        { id: 1, message: 'Hi, how are you?', likesCount: 15 },
        { id: 2, message: 'It is my first post', likesCount: 25 }
    ];

    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

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
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;