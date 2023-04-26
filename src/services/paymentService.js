import axios from "axios";

const paymentApi = 'http://localhost:8080/api/v1/payments';
const orderApi = 'http://localhost:8080/api/v1/orders/create';

// const postSellerPayment = (cardData) => axios.post(`${paymentApi}/sellerPayment`, cardData, console.log(" seller card data ******* ",cardData));
// const postBuyerPayment = (cardData, token) => axios.post(orderApi, cardData, console.log(" buyer card data ******* ",cardData));

const authHeader = {
    headers: {
        'Authorization': 'Bearer'
    }
}
const paymentService = {
    postSellerPayment(cardData) {
        console.log(" seller card data ******* ",cardData)
        return axios.post(`${paymentApi}/sellerPayment`, cardData);
    },
    placeOrder(cardData, token) {
        authHeader.headers['Authorization'] = `Bearer ${token}`;
        console.log(" buyer card data ******* ",cardData ,token)
        return axios.post(orderApi, cardData, authHeader);
    }
};
export default paymentService; 