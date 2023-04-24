import React from 'react';
import { useState,useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import { useAuth } from '../../store/AuthContext';
import productService from '../../services/productService';

import './addProductForm.css';

const AddProductForm = () => {
  const [product, setProduct] = useState({
    product_name: '',
    product_price: '',
    product_description: '',
    imageUrl: '',
  });
    const navigate = useNavigate();

    const { currentUser } = useAuth();
  
    
    
    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setProduct((prevState) => ({ ...prevState, [name]: value }));
        console.log("On change",product);
    };
    
    const handleSubmit = (event) => {
      console.log("add product clicked");
        event.preventDefault();
        console.log("on add Prod form submit--- ",product , currentUser.accessToken);
        setProduct(product);
        productService
            .postProduct(currentUser.accessToken, product)
            .then((res) => {
               
                console.log(res.data);
                setProduct(res.data);
                navigate('/Products', product);
          })
          .catch((err) => console.log(err.message));
    

    // You can handle submitting the product to your backend here
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Add Product</h2>
      <div className='form-control'>
        <label htmlFor='product_name'>Product Name</label>
        <input
          type='text'
          name='product_name'
          id='product_name'
          value={product.product_name}
          onChange={handleChange}
          className='input'
        />
      </div>
      <div className='form-control'>
        <label htmlFor='product_price'>Product Price</label>
        <input
          type='number'
          name='product_price'
          id='product_price'
          value={product.product_price}
          onChange={handleChange}
          className='input'
        />
      </div>
      <div className='form-control'>
        <label htmlFor='product_description'>Product Description</label>
        <textarea
          name='product_description'
          id='product_description'
          value={product.product_description}
          onChange={handleChange}
          className='textarea'
        />
      </div>
      <div className='form-control'>
        <label htmlFor='imageUrl'>Image URL</label>
        <input
          type='text'
          name='imageUrl'
          id='imageUrl'
          value={product.imageUrl}
          onChange={handleChange}
          className='input'
        />
      </div>
      <button type='submit' className='button'>Add Product</button>
    </form>
  );
};

export default AddProductForm;
