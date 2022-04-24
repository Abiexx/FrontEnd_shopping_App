import axios from "axios";

const sellersApi = 'http://localhost:8080/api/v1/users/sellers';

const authHeader = {
    headers: {
        'Authorization': 'Bearer'
    }
}

const sellerService = {
    getAllSellers(token) {
        console.log('token: ', token)
        authHeader.headers['Authorization'] = `Bearer ${token}`;
        return axios.get(sellersApi, authHeader);
    },

}

export default sellerService;