import React from 'react';
import API from './api';

const GalleryDelete = ({ id, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this gallery?')) {
      API.delete(`/galleries/${id}`)
        .then((response) => {
          alert('Gallery deleted successfully!');
          onDelete(id); // Gallery siyahısını yeniləmək üçün parent komponentdən gəlir.
        })
        .catch((error) => console.error(error));
    }
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default GalleryDelete;
