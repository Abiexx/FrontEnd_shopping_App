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
import EditProduct from './EditProduct';
import './Products.css';
import { useAuth } from '../../store/AuthContext';
import productService from '../../services/productService';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(false);

  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    productService
      .getAllProducts(currentUser.accessToken)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleEdit = (product,e) => {
    e.stopPropagation();
    setEditing(true);
    setSelectedProduct(product);
    console.log("===== edit clicked");
  };

  const handleDelete = (product,e) => {
    e.stopPropagation();
    console.log("===== delete clicked");
    productService.deleteProduct(product.product_id, currentUser.accessToken)
    .then((res) => {
      console.log("Product deleted successfully");
      setProducts(products.filter((p) => p.product_id !== selectedProduct.product_id));
      navigate("/products")
    }
    ).catch((err)=>{
        console.log("Deletion error : - ",err.message);
    })

  };

  // const handleUpdate = (product) => {
  //   console.log("Update product:", product);
  //   setEditing(false);
  //   // Call API to update the product
  //   productService.updateProduct(product, currentUser.accessToken)
  //   .then((res) => {
  //     console.log("Product updated successfully");
  //     setProducts(products.map((p) => (p.product_id === product.product_id ? product : p)));
  //   }
  //   )       
  //   .catch((err) => console.log(err.message));
      

  // };

  const renderButtons = (product) => {
    if (currentUser && currentUser.role.toLowerCase() === "seller") {
      return (
        <div className="card-footer">
          <button className="edit-btn" onClick={(e)=>{handleEdit(product,e)}}>Edit</button>
          <button className="delete-btn" onClick={(e)=>{handleDelete(product, e)}}>Delete</button>
        </div>
      );
    }
  };


  if (editing && selectedProduct) {
    return <EditProduct product={selectedProduct}/>;
  } else if (selectedProduct) {
    return <ProductDetails product={selectedProduct} />;
  } else {
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
  }
};

export default Products;
