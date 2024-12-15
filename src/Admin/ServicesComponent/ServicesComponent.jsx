import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ServicesComponent = () => {
    const [services, setServices] = useState([]);
    const [service, setService] = useState({
        title: '',
        description: '',
        image: null
    });
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            const response = await axios.get('/api/services');
            setServices(response.data);
        } catch (error) {
            console.error('There was an error fetching the services!', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setService({ ...service, [name]: value });
    };

    const handleFileChange = (e) => {
        setService({ ...service, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', service.title);
        formData.append('description', service.description);
        formData.append('image', service.image);

        try {
            if (editing) {
                await axios.put(`/api/services/${service.id}`, formData);
            } else {
                await axios.post('/api/services', formData);
            }
            fetchServices();
            setService({ title: '', description: '', image: null });
            setEditing(false);
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    const handleEdit = (service) => {
        setService(service);
        setEditing(true);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/services/${id}`);
            fetchServices();
        } catch (error) {
            console.error('There was an error deleting the service!', error);
        }
    };

    return (
        <div>
            <h1>Services</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    value={service.title}
                    onChange={handleInputChange}
                    placeholder="Title"
                    required
                />
                <textarea
                    name="description"
                    value={service.description}
                    onChange={handleInputChange}
                    placeholder="Description"
                    required
                />
                <input
                    type="file"
                    name="image"
                    onChange={handleFileChange}
                />
                <button type="submit">{editing ? 'Update' : 'Add'} Service</button>
            </form>
            <ul>
                {services.map((service) => (
                    <li key={service.id}>
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                        {service.image && <img src={service.image_path} alt={service.title} width="100" />}
                        <button onClick={() => handleEdit(service)}>Edit</button>
                        <button onClick={() => handleDelete(service.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ServicesComponent;
