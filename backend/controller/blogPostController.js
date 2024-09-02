// controllers/blogPostController.js
const BlogPost = require('../models/BlogPost');

// Create a new blog post
exports.createPost = async (req, res) => {
    try {
        const { title, content, author } = req.body;
        const newPost = new BlogPost({ title, content, author });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create post' });
    }
};

// Get all blog posts
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await BlogPost.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
};

// Get a single blog post by ID
exports.getPostById = async (req, res) => {
    try {
        const post = await BlogPost.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch post' });
    }
};

// Update a blog post
exports.updatePost = async (req, res) => {
    try {
        const { title, content, author } = req.body;
        const updatedPost = await BlogPost.findByIdAndUpdate(
            req.params.id,
            { title, content, author, updatedAt: Date.now() },
            { new: true }
        );
        if (!updatedPost) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update post' });
    }
};

// Delete a blog post
exports.deletePost = async (req, res) => {
    try {
        const deletedPost = await BlogPost.findByIdAndDelete(req.params.id);
        if (!deletedPost) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete post' });
    }
};
