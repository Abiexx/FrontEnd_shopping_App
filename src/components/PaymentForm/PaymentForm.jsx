import axios from "axios";
import React, { useState } from 'react';
import {CardElement, useStripe, useElements, Elements} from '@stripe/react-stripe-js';
import './PaymentForm.css';

import { useNavigate, useLocation } from "react-router-dom";
import paymentService from "../../services/paymentService";
import { useAuth } from '../../store/AuthContext';
// import { loadStripe } from '@stripe/stripe-js';

// const stripePromise = loadStripe('pk_test_51MyLHKEXvdN6BAd1Yd48hni9wJRSzPL3ctjhr6RB7A5bGveQddd6ANfMpiMRbu0uDTxyJxkyCXySpK1tsLzVcp9s00VBbdNo0c');


// const paymentApi = 'http://localhost:8080/api/v1/payments';

const PaymentForm= () => {

  // const stripe = useStripe();
  // const elements = useElements();
  const navigate = useNavigate();
  const location = useLocation();
  const role = location.state?.role;
  const { currentUser } = useAuth();

  const [cardData, setCardData] = useState({
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvc: ""
  });
 

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("cardData : - ",cardData);
   console.log("role : - ",role);
    // const cardInput = elements.getElement(CardElement);
    // const {error, paymentMethod} = await stripe.createPaymentMethod({
    //   type: 'card',
    //   card: {
    //     number: cardData.cardNumber,
    //     exp_month: cardData.expMonth,
    //     exp_year: cardData.expYear,
    //     cvc: cardData.cvc
    //   }
    // });
    

    // if (!error) {
      const paymentData = {
        amount: 20000, // replace with the actual amount
        // paymentMethodId: paymentMethod.id,
        cardNumber: cardData.cardNumber,
        expMonth: cardData.expMonth,
        expYear: cardData.expYear,
        cvc: cardData.cvc
      };

     const paymentBuyerData = {
       cardNumber: cardData.cardNumber,
       exp_month: cardData.expMonth,
       exp_year: cardData.expYear,
       cvc: cardData.cvc ,
       buyer_id: 2 ,//hard coded for now
       currency: "USD",
       type: "card",
       amount: 500
      }
if(role === "seller"){
     paymentService.postSellerPayment(paymentData)
        .then(response => {
          console.log( "payment response : - ",response.data);
          // handle successful payment
          navigate('/signup',{state: {role: role}})
        })
        .catch(error => {
          console.log(error);
          // handle payment error
        });
      }else{
        paymentService.placeOrder(paymentBuyerData,currentUser.accessToken)
        .then(response => {
          console.log( "payment response : - ",response.data);
          // handle successful payment
          navigate('/order',{state: {role: role, paymentData: paymentData}})
        })
      }
    // if (role === "seller") {
    //   paymentService.postSellerPayment(paymentData)
    //     .then(response => {
    //       console.log( "payment response : - ",response.data);
    //       // handle successful payment
    //       navigate('/signup',{state: {role: role}})
    //     })
    //     .catch(error => {
    //       console.log(error);
    //       // handle payment error
    //     });
    // } else {
    //   // if role is not "seller", navigate to success message page
    //   navigate('/success');
    // }

    } 
    //else {
      // console.log(error);
      // handle payment error
   // }
  // };

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setCardData({ ...cardData, [name]: value });
  };

  return (
    // <Elements stripe={stripePromise}>

    <div className="checkout-form-container">
      <form className="checkout-form" onSubmit={handleSubmit}>
        <div className="card-form">
          <h2 htmlFor="card-input">Card Information</h2>
        
          <br />
          <div className="input-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={cardData.cardNumber}
              onChange={handleInputChange}
            />
          </div>
          <br />
          <div className="input-group">
            <label htmlFor="expMonth">Expiration Month</label>
            <input
              type="number"
              id="expMonth"
              name="expMonth"
              value={cardData.expMonth}
              onChange={handleInputChange}
            />
          </div>
          <br />
          <div className="input-group">
            <label htmlFor="expYear">Expiration Year</label>
            <input
              type="number"
              id="expYear"
              name="expYear"
              value={cardData.expYear}
              onChange={handleInputChange}
            />
          </div>
          <br />
          <div className="input-group">
            <label htmlFor="cvc">CVC</label>
            <input
              type="number"
              id="cvc"
              name="cvc"
              value={cardData.cvc}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button type="submit" className="checkout-btn">
          Pay Now
        </button>
        <br /><br />
      </form>
    </div>
    // </Elements>
  );
};

export default PaymentForm;
