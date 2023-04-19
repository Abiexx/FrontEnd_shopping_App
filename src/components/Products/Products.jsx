import React, { useState, useEffect } from 'react';
import ProductDetails from './ProductDetails';
import './Products.css';
import { useAuth } from '../../store/AuthContext';
import productService from '../../services/productService';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
 
  const {currentUser} = useAuth();

  useEffect(() => {
    productService.getAllProducts(currentUser.accessToken)
      .then((res) => {
        setProducts(res.data);
      }).catch((err) => console.log(err.message));
  }, []);
  
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
          <div key={product.product_name} className="col-md-4 mb-4">
            <div className="card h-100">
             
              <img
                src={product.imageUrl}
                alt="Product Image"
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
                onClick={() => handleProductClick(product)}
                />
<img src={product.imageUrl} alt="Product Image" style={{ height: '200px', objectFit: 'cover' }} onClick={() => handleProductClick(product)} />
            
              <div className="card-body">
                <h3 className="card-title">{product.product_name}</h3>
                <p className="card-text">{product.product_description}</p>
                <p className="card-text">{product.product_price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;