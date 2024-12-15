import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RealEstateService = () => {
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image_path: '',
  });

  const fetchServices = async () => {
    try {
      const response = await axios.get('/api/real-estate-services');
      setServices(response.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/real-estate-services', formData);
      setServices([...services, response.data]);
      setFormData({ title: '', description: '', image_path: '' });
    } catch (error) {
      console.error('Error adding service:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/real-estate-services/${id}`);
      setServices(services.filter((service) => service.id !== id));
    } catch (error) {
      console.error('Error deleting service:', error);
    }
  };

  return (
    <div>
      <h2>Real Estate Services</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="image_path"
          placeholder="Image Path (optional)"
          value={formData.image_path}
          onChange={handleInputChange}
        />
        <button type="submit">Add Service</button>
      </form>

      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button onClick={() => handleDelete(service.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RealEstateService;
