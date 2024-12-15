import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const ServiceForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [service, setService] = useState({ title: '', description: '', image_path: '' });

    useEffect(() => {
        if (id) {
            axios.get(`/api/featured-services/${id}`)
                .then(response => setService(response.data))
                .catch(error => console.error('Error fetching data:', error));
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setService({ ...service, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const request = id ? axios.put(`/api/featured-services/${id}`, service) : axios.post('/api/featured-services', service);

        request
            .then(response => {
                console.log('Success:', response.data);
                navigate('/services');
            })
            .catch(error => console.error('Error submitting data:', error));
    };

    return (
        <div>
            <h2>{id ? 'Edit Service' : 'Add New Service'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" name="title" value={service.title} onChange={handleChange} required className="form-control" />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea name="description" value={service.description} onChange={handleChange} required className="form-control"></textarea>
                </div>
                <div className="form-group">
                    <label>Image Path</label>
                    <input type="text" name="image_path" value={service.image_path} onChange={handleChange} className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">{id ? 'Update' : 'Add'}</button>
            </form>
        </div>
    );
};

export default ServiceForm;
