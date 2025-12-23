import React, { useState } from "react";
import { loadInstallationList } from "../utils/localStorage";
import IconDownload from "../assets/icon-downloads.png";
import IconRating from "../assets/icon-ratings.png";
import { toast } from "react-toastify";

const Installation = () => {
  const [install, setInstall] = useState(() => loadInstallationList());
  const [sortOrder, setSortOrder] = useState("none");
  if (!install.length)
    return (
      <div className="min-h-screen  max-w-9xl mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12">
        <p className=" text-5xl font-bold flex justify-center items-center text-center">
          No App Found
        </p>
      </div>
    );
  const sortedItem = (() => {
    if (sortOrder === "size-asc") {
      return [...install].sort((a, b) => a.size - b.size);
    } else if (sortOrder === "size-desc") {
      return [...install].sort((a, b) => b.size - a.size);
    } else {
      return install;
    }
  })();

  const handleRemove = (id) => {
    const existingList = JSON.parse(localStorage.getItem("installation")) || [];

    const updatedList = existingList.filter((p) => p.id !== id);

    setInstall(updatedList);
    localStorage.setItem("installation", JSON.stringify(updatedList));

    toast.error("App uninstalled ❌");
  };

  return (
    <div className="min-h-screen  max-w-9xl mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12">
      <div className="mt-10 text-center">
        <h1 className="text-5xl font-bold"> Your Installed Apps</h1>
        <p className="text-gray-400 mt-2">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between py-5 items-center ">
        <h1 className="text-3xl font-semibold">
          <span className="text-gray-700">{sortedItem.length}</span> Apps Found
        </h1>
        <label className="form-control w-full max-w-xs">
          <select
            className="select select-bordered"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}>
            <option value="none">Sort by Size</option>
            <option value="size-asc">Low-&gt;High</option>
            <option value="size-desc">High-&gt;Low</option>
          </select>
        </label>
      </div>
      <div className="space-y-3">
        {sortedItem.map((p) => (
          <div
            key={p.id}
            className="border border-white shadow-md items-center p-2 rounded-md bg-white flex justify-between">
            <div className="flex gap-5 justify-center items-center">
              <div>
                <img className="w-20 h-20 rounded-sm" src={p.image} alt="" />
              </div>
              <div>
                <h1 className="font-semibold">{p.title}</h1>
                <div className="flex gap-4 ">
                  <div className="flex items-center gap-2">
                    <img className="w-4 h-4" src={IconDownload} alt="" />
                    <p className="text-green-500">{p.downloads}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img className="w-4 h-4" src={IconRating} alt="" />
                    <p className="text-orange-500">{p.ratingAvg}</p>
                  </div>
                  <p className="text-gray-400">{p.size} MB</p>
                </div>
              </div>
            </div>
            <div>
              <button
                className="text-white bg-[#00D390] px-4 py-2 rounded-md"
                onClick={() => handleRemove(p.id)}>
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
