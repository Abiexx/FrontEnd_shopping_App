import { useState } from "react";
import { Outlet,Routes,Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
// import { AppContext } from "./components/store/AppContext";
import { AuthProvider } from "./store/AuthContext";
// import ProductList from "./components/Products/productList";
import SelectUserRoles from "./pages/SelectedUserRoles";
import PaymentForm from "./components/PaymentForm/PaymentForm";
import CheckoutForm from "./CheckoutForm/CheckoutForm";

// import {Elements} from '@stripe/react-stripe-js';
// import {loadStripe} from '@stripe/stripe-js';

// const stripePromise = loadStripe('YOUR_PUBLISHABLE_KEY');

function App() {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  return (
    <AuthProvider>
      <div>
        <Header />
    
          <Outlet />
          <Footer />
     
          {/* <ProductList/> */}
      </div>
    </AuthProvider>
    // <AppContext.Provider value={{user, setUser, role, setRole}}>
    //   <div>
    //     <Header />
    //     <Outlet />
    //     <Footer />
    //   </div>
    // </AppContext.Provider>
  );
}

export default App;
