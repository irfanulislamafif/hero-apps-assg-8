import React from "react";
import useApp from "../Hooks/useApp";
import AppCard from "./AppCard";
import { Link } from "react-router";

const Trending = () => {
  const { apps, loading, error } = useApp();
  const featuredProducts = apps.slice(0, 8);
  return (
    <div className="max-w-8xl mx-auto w-full px-4 md:px-8 lg:px-12 x-4 md:py-8 lg:py-12">
      <h1 className="text-[3rem] font-semibold text-center">Trending Apps</h1>
      <p className="text-gray-400 text-center">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="grid grid-cols-4 gap-6 mt-8">
        {featuredProducts.map((app) => (
          <AppCard app={app}></AppCard>
        ))}
      </div>
      <div className="flex justify-center items-center mt-5">
        <Link
          className="btn px-8 py-5  bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] text-white text-lg hover:scale-105 transition ease-in-out"
          to="/apps">
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Trending;
