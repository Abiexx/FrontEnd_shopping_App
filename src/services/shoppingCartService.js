import axios from "axios";


const cartApi = 'http://localhost:8080/api/v1/carts/2/2';

const createCartApi = 'http://localhost:8080/api/v1/carts/2';
const getShoppingCartApi = ' http://localhost:8080/api/v1/carts/1/cart';
const addToCartApi = 'http://localhost:8080/api/v1/carts/2';
const deleteFromCartApi = 'http://localhost:8080/api/v1/carts/2';

const authHeader = {
    headers: {
        'Authorization': 'Bearer'
    }
}

const shoppingCartservice = {
    getShoppingCart(token) {
        authHeader.headers['Authorization'] = `Bearer ${token}`;
        return axios.get(getShoppingCartApi, authHeader);
    },
    postCreateShoppingCart(token) {
        authHeader.headers['Authorization'] = `Bearer ${token}`;
        console.log("inside cart service----" + token);
        return axios.post(createCartApi, authHeader);
    },
    addProductToShoppingCart(token, productId) {
        authHeader.headers['Authorization'] = `Bearer ${token}`;
        console.log("inside add-prod cart service----" + productId);
        return axios.post(addToCartApi+"/"+productId, authHeader);
    },
    deleteProductFromShoppingCart(token, productId) {
        authHeader.headers['Authorization'] = `Bearer ${token}`;
        console.log("inside delete-prod cart service----" + productId);
        return axios.delete(addToCartApi+"/"+productId, authHeader);
    }


}

export default shoppingCartservice;