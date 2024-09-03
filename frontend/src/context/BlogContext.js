import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/blogs')
            .then(response => setBlogs(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <BlogContext.Provider value={{ blogs }}>
            {children}
        </BlogContext.Provider>
    );
};

export default BlogContext;
