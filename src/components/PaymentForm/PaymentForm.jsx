
// import React, { useState } from 'react';
// import { CardElement, injectStripe } from 'react-stripe-elements';

// function PaymentForm(props) {
//     const handleSubmit = async (event) => {
//      event.preventDefault();
  
//     //   const { token } = await props.stripe.createToken();
//     //   const response = await fetch('/api/payments', {
//     //     method: 'POST',
//     //     headers: { 'Content-Type': 'application/json' },
//     //     body: JSON.stringify({ token }),
//     //   });
  
//     //   if (!response.ok) {
//     //     setError('Payment failed');
//     //   }
//     };
  
//     return (
//       <form onSubmit={handleSubmit}>
//         <CardElement />
//         {error && <div>{error}</div>}
//         <button type="submit">Pay</button>
//       </form>
//     );
//   }
  
//   export default injectStripe(PaymentForm);