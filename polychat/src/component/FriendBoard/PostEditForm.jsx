import React, { useState } from 'react';

const PostEditForm = ({ post, onUpdate }) => {
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);

    const handleUpdate = () => {
        onUpdate({ ...post, title, content });
    };

    return (
        <div className="post-edit-form">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button onClick={handleUpdate}>수정</button>
        </div>
    );
};

export default PostEditForm;
