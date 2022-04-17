import React from "react";
import DealsForYou from "../components/FeaturedHomePage/DealsForYou/DealsForYou";
import Footer from "../components/Footer/Footer";
import GoodDeals from "../components/FeaturedHomePage/GoodDeals/GoodDeals";
import Header from "../components/Header/Header";
import Topdeals from "../components/FeaturedHomePage/TopDeals/Topdeals";
import HealthFeaturedProducts from "../components/FeaturedHomePage/HealthProducts/HealthFeaturedProducts";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Topdeals />
      <GoodDeals />
      <DealsForYou />
      <HealthFeaturedProducts />
      <Footer />
    </div>
  );
};

export default Home;
