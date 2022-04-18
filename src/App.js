import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home";

function App() {
  return (
      <div>
        {/* <Home /> */}
        <Header />
        <Outlet />
        <Footer />
      </div>
  );
}

export default App;
