import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ServiceList = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/services')
            .then(response => setServices(response.data))
            .catch(error => console.error('Error fetching services:', error));
    }, []);

    return (
        <div>
            <h2>Services List</h2>
            <ul>
                {services.map(service => (
                    <li key={service.id}>{service.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default ServiceList;
