import React from "react";
import "./SuccessPage.css"; // import the CSS file for styling

const SuccessPage = () => {
  return (
    <div className="success-container">
      <h1 className="success-heading">Your order is placed successfully!</h1>
      <p className="success-text">Your order is being shipped to the address you provided.</p>
    </div>
  );
};

export default SuccessPage;
