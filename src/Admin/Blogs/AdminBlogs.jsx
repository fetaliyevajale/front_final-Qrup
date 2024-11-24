import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogList from './BlogList';
import BlogForm from './BlogForm';

const AdminBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [selectedBlog, setSelectedBlog] = useState(null);

    const fetchBlogs = () => {
        const token = localStorage.getItem('token');
        if (!token) {
            console.error('No token found');
            return;
        }

        axios.get('http://127.0.0.1:8000/api/blogs/index', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => setBlogs(response.data))
        .catch(error => {
            console.error(error);
            if (error.response && error.response.status === 401) {
                console.error('Unauthorized access - Please log in.');
                // 401 səhifə yönləndirilməsi
                window.location.href = '/login';
            }
        });
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
            <BlogList blogs={blogs} />
            <BlogForm selectedBlog={selectedBlog} onUpdate={handleUpdate} />
        </div>
    );
};

export default AdminBlogs;
