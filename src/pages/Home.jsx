import React from "react";
import DealsForYou from "../components/FeaturedHomePage/DealsForYou/DealsForYou";
import GoodDeals from "../components/FeaturedHomePage/GoodDeals/GoodDeals";
import Topdeals from "../components/FeaturedHomePage/TopDeals/Topdeals";
import HealthFeaturedProducts from "../components/FeaturedHomePage/HealthProducts/HealthFeaturedProducts";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Topdeals />
      <GoodDeals />
      <DealsForYou />
      <HealthFeaturedProducts />
    </div>
  );
};

export default Home;
