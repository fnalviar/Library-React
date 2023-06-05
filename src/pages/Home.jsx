import React from "react";
import Explore from "../components/Explore";
import Features from "../components/Features";
import Highlights from "../components/Highlights";
import Landing from "../components/Landing";
import Discounted from "../components/Discounted";

const Home = () => {
  return (
    <>
      <Landing />
      <Highlights />
      <Features />
      <Discounted />
      <Explore />
    </>
  );
};

export default Home;
