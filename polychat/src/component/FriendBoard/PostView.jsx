import React from 'react';

const PostView = ({ post, onEdit, onDelete }) => {
    return (
        <div className="post-view">
            <h2>{post.title}</h2>
            <p>{post.date}</p>
            <p>{post.content}</p>
            <button onClick={() => onEdit(post)}>수정</button>
            <button onClick={() => onDelete(post.id)}>삭제</button>
        </div>
    );
};

export default PostView;
