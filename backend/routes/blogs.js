const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

// Get all blogs
router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
});

// Create a blog
router.post('/', async (req, res) => {
    const { title, content, author } = req.body;
    try {
        const newBlog = new Blog({ title, content, author });
        const savedBlog = await newBlog.save();
        res.json(savedBlog);
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
});

module.exports = router;
