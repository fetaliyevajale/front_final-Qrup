import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogList from './BlogList';
import BlogForm from './BlogForm';

const AdminBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [selectedBlog, setSelectedBlog] = useState(null);

    const fetchBlogs = () => {
        axios.get('http://127.0.0.1:8000/api/blogs/index', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => setBlogs(response.data))
        .catch(error => console.error(error));
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    const handleUpdate = () => {
        fetchBlogs();
        setSelectedBlog(null);
    };

    return (
        <div>
            <h1>Admin - Blogs</h1>
        </div>
    );
};

export default AdminBlogs;
