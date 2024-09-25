import React from 'react';

const PostDetails = ({ post }) => {
    return (
        <div className="post-details">
            <h2>{post.title}</h2>
            <p>{post.date}</p>
            <p>{post.content}</p>
            <button onClick={() => window.history.back()}>뒤로</button>
        </div>
    );
};

export default PostDetails;
