import React from "react";
import "./AddressForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import buyerService from "../../services/buyerService";
import addressService from "../../services/addressService";

const AddressForm = () => {
  const navigate = useNavigate();
  const [address, setAddress] = React.useState({
    street: "",
    city: "",
    state: "",
    zip: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value
    }));
  };

  const handleProceedToPayment = (event) => {
    event.preventDefault();
    console.log("Submitting address:", address);
    buyerService.postBuyerShippingAddress(address)
    .then((res) => {
      console.log("Address added successfully", res.status);
      navigate("/paymentform", {state:{role:'buyer'}});
    }).catch((err) => {
      console.log("Error while adding address", err);
    })
    
  };
  return (
    <div className="form-wrapper">
      <h2>Add Shipping Address</h2>
      <form onSubmit={handleProceedToPayment}>
        <div className="form-group">
          <label htmlFor="street">Street:</label>
          <input
            type="text"
            id="street"
            name="street"
            value={address.street}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={address.city}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <select
            id="state"
            name="state"
            value={address.state}
            onChange={handleChange}
          >
            <option value="">Select State</option>
            <option value="CA">California</option>
            <option value="NY">New York</option>
            <option value="TX">Texas</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="zipcode">Zipcode:</label>
          <input
            type="text"
            id="zipcode"
            name="zipcode"
            value={address.zipcode}
            onChange={handleChange}
          />
        </div>
        <button className="btn-proceed-to-payment" type="submit">
          Proceed to Payment
        </button>
      </form>
    </div>
  );
};

export default AddressForm;
