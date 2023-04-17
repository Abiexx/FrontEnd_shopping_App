
import React, { Component } from 'react'


// import React from 'react';
import axios from 'axios';

class ProductList extends React.Component {
  state = {
    products: [],
    error: null
  };
  componentDidMount() {
    axios.get('http://localhost:8081/api/v1/products')
      .then(response => {
        this.setState({ products: response.data });
      })
      .catch(error => {
        this.setState({ error });
      });
  }

 render() {
    const { products, error } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    }
    console.log("============",products)
    return (
      
      <div>
        {products.map(product => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default ProductList;
