import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ServiceList = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('/api/featured-services')
            .then(response => setServices(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h2>Featured Services</h2>
            <Link to="/services/new" className="btn btn-primary">Add New Service</Link>
            <ul>
                {services.map(service => (
                    <li key={service.id}>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        {service.image_path && <img src={service.image_path} alt={service.title} />}
                        <Link to={`/services/edit/${service.id}`} className="btn btn-secondary">Edit</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ServiceList;
