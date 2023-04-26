import axios from "axios";


const productsApi = 'http://localhost:8080/api/v1/search/products';

const productPostApi = 'http://localhost:8080/api/v1/products';
const authHeader = {
    headers: {
        'Authorization': 'Bearer'
    }
}

const productService = {
    getAllProducts(token) {
        authHeader.headers['Authorization'] = `Bearer ${token}`;
        return axios.get(productsApi, authHeader);
    },
    postProduct(product, token) {
        authHeader.headers['Authorization'] = `Bearer ${token}`;
        console.log("inside productService----" + product);
        return axios.post(`${productPostApi}/3`, product, authHeader);
    },
    updateProduct(productId, product, token) {
        authHeader.headers['Authorization'] = `Bearer ${token}`;
        console.log("inside update productService----" + productId, product, token);
        return axios.put(`${productPostApi}/update/${productId}`, product, authHeader);
    },
    deleteProduct(productId, token) {
        authHeader.headers['Authorization'] = `Bearer ${token}`;
        console.log("inside delete productService----" + productId, token);
        return axios.delete(`${productPostApi}/${productId}`, authHeader);
    }

}

export default productService;