// import React, { useState } from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [errorMessage, setErrorMessage] = useState('');
//   const [isProcessing, setIsProcessing] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setIsProcessing(true);

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: 'card',
//       card: elements.getElement(CardElement),
//     });

//     if (error) {
//       setErrorMessage(error.message);
//       setIsProcessing(false);
//     } else {
//       // Send the payment method ID to your server to complete the payment
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement />
//       <button type="submit" disabled={!stripe || isProcessing}>
//         {isProcessing ? 'Processing...' : 'Pay'}
//       </button>
//       {errorMessage && <div>{errorMessage}</div>}
//     </form>
//   );
// };

// export default CheckoutForm;


import React from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import './CheckoutForm.css';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Handle form submission and payment processing here
  };

  return (
      <div className="checkout-form-container">
    <form className="checkout-form" onSubmit={handleSubmit}>
      <div className="card-form">
      <label htmlFor="card-input">Card Information</label>
     <CardElement className="card-input" />
<br />
      <div className="input-group">
        <label htmlFor="exp-input">Expiration </label>
        <input
          type="text"
          id="exp-input"
          className="exp-input"
          placeholder="MM / YY"
        />
      </div>
<br />
      <div className="input-group">
        <label htmlFor="cvv-input">CVV </label>
        <input type="text" id="cvv-input" className="cvv-input" />
      </div>
      </div>
      <button type="submit" className="checkout-btn">
        Pay Now
      </button>
      <br /><br />
    </form>
    </div>
  );
};

export default CheckoutForm;
