// routes/blogPostRoutes.js
const express = require('express');
const router = express.Router();
const blogPostController = require('../controllers/blogPostController');

// Create a new post
router.post('/posts', blogPostController.createPost);

// Get all posts
router.get('/posts', blogPostController.getAllPosts);

// Get a single post by ID
router.get('/posts/:id', blogPostController.getPostById);

// Update a post by ID
router.put('/posts/:id', blogPostController.updatePost);

// Delete a post by ID
router.delete('/posts/:id', blogPostController.deletePost);

module.exports = router;
