// import React, { useState, useEffect } from 'react';
// import ProductDetails from './ProductDetails';
// import './Products.css';
// import { useAuth } from '../../store/AuthContext';
// import productService from '../../services/productService';

// const Products = () => {
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [products, setProducts] = useState([]);

//   const { currentUser } = useAuth();
//   console.log("currentUser ++++++++ : - ",currentUser);
//  useEffect(() => {
//     productService
//       .getAllProducts(currentUser.accessToken)
//       .then((res) => {
//         console.log("Get all productsss ------ ",res.data);
//         setProducts(res.data);
//       })
//       .catch((err) => console.log(err.message));
//   }, []);

//   const handleProductClick = (product) => {
//     setSelectedProduct(product);
//   };

//   if (selectedProduct) {
//     return <ProductDetails product={selectedProduct} />;
//   }

//   return (
//     <>
//       <h1 className="text-center mb-5">Products</h1>
//     <div className="container">
//       {products.map((product) => (
//         <div key={product.product_name} className="card">
//           <img
//             src={product.imageUrl}
//             alt="Product Image"
//             className="card-img-top"
//             onClick={() => handleProductClick(product)}
//           />
//           <div className="card-body">
//             <h3 className="card-title">{product.product_name}</h3>
//             <p className="card-text">{product.product_description}</p>
//             <p className="card-text">$ {product.product_price}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//     </>
//   );
// };

// export default Products;


import React, { useState, useEffect } from 'react';
import ProductDetails from './ProductDetails';
import './Products.css';
import { useAuth } from '../../store/AuthContext';
import productService from '../../services/productService';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);

  const { currentUser } = useAuth();
  console.log("currentUser ++++++++ : - ",currentUser);

  useEffect(() => {
    productService
      .getAllProducts(currentUser.accessToken)
      .then((res) => {
        console.log("Get all productsss ------ ",res.data);
        setProducts(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    console.log("===== edit clicked");
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    console.log("===== delete clicked");
  };

  const renderButtons = (product) => {
    if (currentUser && (currentUser.role.toLowerCase() === "seller")) {
      return (
        <div className="card-footer">
          <button className="edit-btn" onClick={handleEdit}>Edit</button>
          <button className="delete-btn" onClick={handleDelete}>Delete</button>
        </div>
      );
    }
  };

  if (selectedProduct) {
    return <ProductDetails product={selectedProduct} />;
  }

  return (
    <>
      <h1 className="text-center mb-5">Products</h1>
      <div className="container">
        {products.map((product) => (
          <div key={product.product_name} className="card">
            <img
              src={product.imageUrl}
              alt="Product Image"
              className="card-img-top"
              onClick={() => handleProductClick(product)}
            />
            <div className="card-body">
              <h3 className="card-title">{product.product_name}</h3>
              <p className="card-text">{product.product_description}</p>
              <p className="card-text">$ {product.product_price}</p>
            </div>
            {renderButtons(product)}
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
