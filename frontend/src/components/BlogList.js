import React, { useContext } from 'react';
import BlogContext from '../context/BlogContext';

const BlogList = () => {
    const { blogs } = useContext(BlogContext);

    return (
        <div>
            {blogs.map(blog => (
                <div key={blog._id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.content}</p>
                    <small>{blog.author}</small>
                </div>
            ))}
        </div>
    );
};

export default BlogList;
