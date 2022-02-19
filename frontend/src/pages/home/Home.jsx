import "./Home.scss";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Featured type="movie" />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
