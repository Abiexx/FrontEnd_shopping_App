import axios from "axios";


const productsApi = 'http://localhost:8080/api/v1/search/products';

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

}

export default productService;