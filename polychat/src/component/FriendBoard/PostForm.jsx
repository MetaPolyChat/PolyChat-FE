import React, { useState } from 'react';

const PostForm = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = () => {
        onSubmit({ title, content });
        setTitle('');
        setContent('');
    };

    return (
        <div className="post-form">
            <input
                type="text"
                placeholder="제목"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="내용을 입력하세요"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button onClick={handleSubmit}>작성</button>
        </div>
    );
};

export default PostForm;
