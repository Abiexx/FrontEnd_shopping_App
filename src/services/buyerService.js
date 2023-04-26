import axios from "axios";

const buyersApi = 'http://localhost:8080/api/v1/users/buyers';
const addressApi = 'http://localhost:8080/api/v1/address/shipping/2';
const authHeader = {
    headers: {
        'Authorization': 'Bearer'
    }
}

const buyerService = {
    getAllBuyers(token) {
        authHeader.headers['Authorization'] = `Bearer ${token}`;
        return axios.get(buyersApi, authHeader);
    },

   postBuyerShippingAddress(address){
    
    // authHeader.headers['Authorization'] = `Bearer ${token}`;
    return  axios.post(addressApi, address);
}
}
export default buyerService;