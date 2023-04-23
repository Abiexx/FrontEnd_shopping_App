import axios from "axios";

const paymentApi = 'http://localhost:8080/api/v1/payments';

const postSellerPayment = (cardData) => axios.post(`${paymentApi}/sellerPayment`, cardData, console.log("card data ******* ",cardData));


const paymentService = {
    postSellerPayment
};
export default paymentService;