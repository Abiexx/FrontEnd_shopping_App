import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { AppContext } from "./components/store/AppContext";

function App() {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  return (
    <AppContext.Provider value={{user, setUser, role, setRole}}>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
