import React, { useState, useEffect } from 'react';
import API from './api';
import { useParams } from 'react-router-dom';

const GalleryUpdate = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: null,
  });

  const [existingImage, setExistingImage] = useState('');

  useEffect(() => {
    API.get(`/galleries/${id}`)
      .then((response) => {
        const gallery = response.data;
        setFormData({
          title: gallery.title,
          description: gallery.description,
        });
        setExistingImage(gallery.image);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    if (formData.image) {
      data.append('image', formData.image);
    }

    API.post(`/galleries/${id}?_method=PUT`, data)
      .then((response) => {
        alert('Gallery updated successfully!');
        console.log(response.data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Existing Image:</label>
        <img
          src={`http://your-backend-url/storage/${existingImage}`}
          alt="Existing"
          style={{ width: '100px', height: '100px' }}
        />
      </div>
      <div>
        <label>New Image (optional):</label>
        <input type="file" name="image" onChange={handleFileChange} />
      </div>
      <button type="submit">Update Gallery</button>
    </form>
  );
};

export default GalleryUpdate;
