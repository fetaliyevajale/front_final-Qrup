import React, { useState } from 'react';
import api from '../api';

const ServiceForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        api.post('/our-services', formData)
            .then(() => alert('Service created successfully'))
            .catch(error => console.error(error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                placeholder="Title"
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
            />
            <textarea
                name="description"
                placeholder="Description"
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
            ></textarea>
            <button type="submit">Create Service</button>
        </form>
    );
};

export default ServiceForm;
