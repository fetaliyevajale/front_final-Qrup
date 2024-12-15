import React, { useEffect, useState } from 'react';
import api from '../api';

const ServiceList = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        api.get('/our-services')
            .then(response => setServices(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h2>Our Services</h2>
            <ul>
                {services.map(service => (
                    <li key={service.id}>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ServiceList;
