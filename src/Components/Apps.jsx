import React, { useState } from "react";
import useApp from "../Hooks/useApp";
import LoadingSpinner from "./LoadingSpinner";
import AppCard from "../Pages/AppCard";

const Apps = () => {
  const { apps, loading } = useApp();
  const [search, setSearch] = useState("");
  const term = search.trim().toLocaleLowerCase();
  const searchedApps = term
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : apps;

  return (
    <div className="min-h-screen max-w-9xl mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12">
      <h1 className="text-[3rem] text-center">Our All Applications</h1>
      <h2 className="text-gray-300 text-center">
        Explore All Apps on the Market developed by us. We code for Millions
      </h2>
      <div className="flex justify-between mt-8">
        <h1>{searchedApps?.length || 0} Apps Found</h1>
        <label className="input border-gray-500">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Apps"
          />
        </label>
      </div>
      <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-6">
        {loading ? (
          <div className="flex justify-center w-full col-span-1 md:col-span-2 lg:col-span-4">
            <LoadingSpinner count="16" />
          </div>
        ) : (
          searchedApps?.map((app) => <AppCard app={app} key={app.id} />)
        )}
      </div>
    </div>
  );
};

export default Apps;
