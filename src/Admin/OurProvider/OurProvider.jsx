import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OurProvider = () => {
  const [providers, setProviders] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    image_path: '',
  });

  const fetchProviders = async () => {
    try {
      const response = await axios.get('/api/our-providers');
      setProviders(response.data);
    } catch (error) {
      console.error('Error fetching providers:', error);
    }
  };

  useEffect(() => {
    fetchProviders();
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/our-providers', formData);
      setProviders([...providers, response.data]);
      setFormData({ name: '', email: '', phone: '', address: '', image_path: '' });
    } catch (error) {
      console.error('Error adding provider:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/our-providers/${id}`);
      setProviders(providers.filter((provider) => provider.id !== id));
    } catch (error) {
      console.error('Error deleting provider:', error);
    }
  };

  return (
    <div>
      <h2>Our Providers</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="image_path"
          placeholder="Image Path (optional)"
          value={formData.image_path}
          onChange={handleInputChange}
        />
        <button type="submit">Add Provider</button>
      </form>

      <ul>
        {providers.map((provider) => (
          <li key={provider.id}>
            <h3>{provider.name}</h3>
            <p>{provider.email}</p>
            <button onClick={() => handleDelete(provider.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OurProvider;
