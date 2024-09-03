const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/db');
const blogRoutes = require('./routes/blogs');
const userRoutes = require('./routes/users');

require('dotenv').config();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/blogs', blogRoutes);
app.use('/api/users', userRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
