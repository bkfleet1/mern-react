import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import background from "../assets/images/logo.jpg";

const Home = () => {
  return (
    <div style={{
      backgroundImage: `url(${background})`}} 
      className="homeContainer">
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
