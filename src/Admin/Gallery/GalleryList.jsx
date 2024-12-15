import React, { useState, useEffect } from 'react';
import API from './api';
import GalleryDelete from './GalleryDelete';
import { Link } from 'react-router-dom';

const GalleryList = () => {
  const [galleries, setGalleries] = useState([]);

  useEffect(() => {
    API.get('/galleries')
      .then((response) => setGalleries(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleDelete = (id) => {
    setGalleries(galleries.filter((gallery) => gallery.id !== id));
  };

  return (
    <div>
      <h1>Our Gallery</h1>
      <ul>
        {galleries.map((gallery) => (
          <li key={gallery.id}>
            <h3>{gallery.title}</h3>
            <p>{gallery.description}</p>
            <img
              src={`http://your-backend-url/storage/${gallery.image}`}
              alt={gallery.title}
              style={{ width: '150px' }}
            />
            <div>
              <Link to={`/galleries/edit/${gallery.id}`}>
                <button>Edit</button>
              </Link>
              <GalleryDelete id={gallery.id} onDelete={handleDelete} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GalleryList;

