import React from 'react';
import './style.css'; // Adjust the path as needed
import BlogList from './components/BlogList';
import CreateBlog from './components/CreateBlog';
import Header from './components/Header';
import { BlogProvider } from './context/BlogContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <BlogProvider>
            <Header />
            <CreateBlog />
            <BlogList />
            <ToastContainer />
        </BlogProvider>
    );
};

export default App;
