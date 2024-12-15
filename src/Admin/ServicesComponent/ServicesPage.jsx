// src/pages/ServicesPage.jsx
import React from 'react';
import ServiceList from './ServiceList';
import ServiceForm from './ServiceForm';

const ServicesPage = () => {
    return (
        <div>
            <h1>Manage Services</h1>
            <ServiceForm />
            <ServiceList />
        </div>
    );
};

export default ServicesPage;
