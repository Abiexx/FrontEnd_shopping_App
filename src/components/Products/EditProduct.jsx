import React, { useState } from "react";
import productService from "../../services/productService";
import { Link, useNavigate } from "react-router-dom";
import "./EditProduct.css";
import Products from "./Products";
import { useAuth } from '../../store/AuthContext';

const EditProduct = ({ product, accessToken }) => {
    
  console.log("product in edit product", product);
  const [name, setName] = useState(product.product_name);
  const [imageUrl, setImageUrl] = useState(product.imageUrl);
  const [description, setDescription] = useState(product.product_description);
  const [price, setPrice] = useState(product.product_price);

  const navigate = useNavigate();
    const { currentUser } = useAuth();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePriceChange = (e) => {
    const newPrice = e.target.value;
    if (newPrice !== price) {
      setPrice(newPrice);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("===== handleSubmit clicked");
    try {
      await productService.updateProduct(
        product.product_id,
        {
          product_name: name,
          imageUrl: imageUrl,
          product_description: description,
          product_price: price,
        },
        currentUser.accessToken
      );
      console.log("Product updated successfully");
      navigate("/products");
    } catch (err) {
      console.log(err.message);
    }
  };



  return (
    <div className="container mt-5">
      <h1 className="mb-5">Edit Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl">Image URL</label>
          <input
            type="text"
            className="form-control"
            id="imageUrl"
            value={imageUrl}
            onChange={handleImageUrlChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            value={description}
            onChange={handleDescriptionChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            value={price}
            onChange={handlePriceChange}
          />
        </div>
     
          <button type="submit" className="btn btn-primary">
            Save
          </button>
      
           <Link to='/Products'>Back</Link>
      </form>
    </div>
  );
};

export default EditProduct;
