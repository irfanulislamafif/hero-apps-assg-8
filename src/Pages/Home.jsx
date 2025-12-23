import React from "react";
import AppError from "../assets/App-Error.png";
import Hero from "./Hero";
import Trending from "./Trending";
import useApp from "../Hooks/useApp";
import LoadingSpinner from "../Components/LoadingSpinner";
const Home = () => {
  const { loading } = useApp();
  return (
    <div >
      {loading ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <>
          <Hero></Hero>
          <Trending></Trending>
        </>
      )}
    </div>
  );
};

export default Home;
