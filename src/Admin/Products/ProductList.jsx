import React from 'react';

const ProductList = ({ products, onEdit, onDelete }) => {
    return (
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    <h3>{product.name}</h3>
                    <p>Address: {product.address}</p>
                    <p>Price: {product.price}</p>
                    <p>Size: {product.size}</p>
                    <p>Bedrooms: {product.bedrooms}</p>
                    <p>Bathrooms: {product.bathrooms}</p>
                    <button onClick={() => onEdit(product)}>Redaktə et</button>
                    <button onClick={() => onDelete(product.id)}>Sil</button>
                </li>
            ))}
        </ul>
    );
};

export default ProductList;
