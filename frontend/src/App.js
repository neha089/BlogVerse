import React from 'react';
import BlogList from './components/BlogList';
import CreateBlog from './components/CreateBlog';
import Header from './components/Header';
import { BlogProvider } from './context/BlogContext';

const App = () => {
    return (
        <BlogProvider>
            <Header />
            <CreateBlog />
            <BlogList />
        </BlogProvider>
    );
};

export default App;
