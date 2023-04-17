import React, { useState } from 'react';
import ProductDetails from './ProductDetails';
import './Products.css';
import brand from '../../assets/img/brand2.jpg'

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { name: 'Product 1', description: 'Description 1', price: '$10', imageUrl: '/assets/img/brand2.jpg' },
    { name: 'Product 2', description: 'Description 2', price: '$20', imageUrl: '/assets/img/lambo.jpg' },
    { name: 'Product 3', description: 'Description 3', price: '$30', imageUrl: '/assets/img/lambo.jpg' },
    { name: 'Product 4', description: 'Description 4', price: '$40', imageUrl: '/assets/img/lambo.jpg' },
    // { name: 'Product 3', description: 'Description 3', price: '$30', imageUrl: '/images/lambo.jpg' },
    // { name: 'Product 4', description: 'Description 4', price: '$40', imageUrl: '/images/lambo.jpg' },
    // { name: 'Product 5', description: 'Description 5', price: '$50', imageUrl: '/images/lambo.jpg' },
    // { name: 'Product 6', description: 'Description 6', price: '$60', imageUrl: '/images/lambo.jpg' },
 ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  if (selectedProduct) {
    return <ProductDetails product={selectedProduct} />;
  }

  return (
    <div className="container">
      <h1 className="text-center mb-5">Products</h1>
      <div className="row">
        {products.map((product) => (
          <div key={product.name} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src='./assets/img/lambo.jpg'
                className="card-img-top"
                alt={product.name}
                onClick={() => handleProductClick(product)}
              />
              <div className="card-body">
                <h3 className="card-title">{product.name}</h3>
                <p className="card-text">{product.description}</p>
                <p className="card-text">{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Products;
