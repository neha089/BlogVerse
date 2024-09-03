import React, { useState, useContext } from 'react';
import axios from 'axios';
import BlogContext from '../context/BlogContext';
import { toast } from 'react-toastify';

const CreateBlog = () => {
    const { setBlogs } = useContext(BlogContext);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/blogs', { title, content, author });
            setBlogs(prevBlogs => [...prevBlogs, response.data]);
            setTitle('');
            setContent('');
            setAuthor('');
            toast.success("Blog created successfully!");
        } catch (error) {
            console.error(error);
            toast.error("Error creating blog.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="create-blog-form">
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />
            <button type="submit">Create Blog</button>
        </form>
    );
};

export default CreateBlog;
