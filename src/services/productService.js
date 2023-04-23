import axios from "axios";


const productsApi = 'http://localhost:8080/api/v1/search/products';

const productPostApi = 'http://localhost:8080/api/v1/products/3';
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
    postProduct(token, product) {
        authHeader.headers['Authorization'] = `Bearer ${token}`;
        console.log("inside productService----" + product);
        return axios.post(productPostApi, product, authHeader);
    }

}

export default productService;