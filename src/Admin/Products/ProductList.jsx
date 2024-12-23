import React from 'react';

const ProductList = ({ products, onEdit, onDelete }) => {
    return (
        <ul className="product-list">
            {products.map(product => (
                <li className="product-item" key={product.id}>
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-address">Address: {product.address}</p>
                    <p className="product-price">Price: {product.price}</p>
                    <p className="product-size">Size: {product.size}</p>
                    <p className="product-bedrooms">Bedrooms: {product.bedrooms}</p>
                    <p className="product-bathrooms">Bathrooms: {product.bathrooms}</p>
                    <button className="product-edit-button" onClick={() => onEdit(product)}>Redaktə et</button>
                    <button className="product-delete-button" onClick={() => onDelete(product.id)}>Sil</button>
                </li>
            ))}
        </ul>
    );
};

export default ProductList;
