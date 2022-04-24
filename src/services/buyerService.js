import axios from "axios";

const buyersApi = 'http://localhost:8080/api/v1/users/buyers';

const authHeader = {
    headers: {
        'Authorization': 'Bearer'
    }
}

const buyerService = {
    getAllBuyers(token) {
        console.log('token: ', token)
        authHeader.headers['Authorization'] = `Bearer ${token}`;
        return axios.get(buyersApi, authHeader);
    },

}

export default buyerService;