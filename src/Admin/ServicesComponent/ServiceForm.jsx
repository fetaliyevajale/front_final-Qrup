import React, { useState } from 'react';
import axios from 'axios';

const ServiceForm = () => {
    const [service, setService] = useState({ title: '', description: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setService({ ...service, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://127.0.0.1:8000/api/services', service)
            .then(response => {
                console.log('Service added:', response.data);
                // Reset form
                setService({ title: '', description: '' });
            })
            .catch(error => console.error('Error adding service:', error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                value={service.title}
                onChange={handleInputChange}
                placeholder="Service Title"
                required
            />
            <textarea
                name="description"
                value={service.description}
                onChange={handleInputChange}
                placeholder="Service Description"
                required
            ></textarea>
            <button type="submit">Add Service</button>
        </form>
    );
};

export default ServiceForm;
