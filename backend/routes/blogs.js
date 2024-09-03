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
// Update a blog
router.put('/:id', async (req, res) => {
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedBlog);
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
});

// Delete a blog
router.delete('/:id', async (req, res) => {
    try {
        await Blog.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Blog deleted' });
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
});


module.exports = router;
