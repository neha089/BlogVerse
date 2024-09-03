import React, { useContext, useState } from 'react';
import BlogContext from '../context/BlogContext';
import UpdateBlog from './UpdateBlog';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const BlogList = () => {
    const { blogs, setBlogs } = useContext(BlogContext);
    const [editingBlog, setEditingBlog] = useState(null);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this blog?")) {
            try {
                await axios.delete(`/api/blogs/${id}`);
                setBlogs(blogs.filter(blog => blog._id !== id));
                toast.success("Blog deleted successfully!");
            } catch (error) {
                console.error(error);
                toast.error("Error deleting blog.");
            }
        }
    };

    const handleUpdate = (updatedBlog) => {
        setBlogs(blogs.map(blog => blog._id === updatedBlog._id ? updatedBlog : blog));
        setEditingBlog(null);
        toast.success("Blog updated successfully!");
    };

    return (
        <div className="blog-list">
            {blogs.map(blog => (
                <div key={blog._id} className="blog-card">
                    {editingBlog === blog._id ? (
                        <UpdateBlog blog={blog} onUpdate={handleUpdate} />
                    ) : (
                        <>
                            <h2 className="blog-title">{blog.title}</h2>
                            <p className="blog-content">{blog.content}</p>
                            <small className="blog-author">{blog.author}</small>
                            <div className="blog-buttons">
                                <button className="edit-btn" onClick={() => setEditingBlog(blog._id)}>Edit</button>
                                <button className="delete-btn" onClick={() => handleDelete(blog._id)}>Delete</button>
                            </div>
                        </>
                    )}
                </div>
            ))}
            <ToastContainer />
        </div>
    );
};

export default BlogList;
