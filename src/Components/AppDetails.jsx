import React from "react";
import { useParams } from "react-router";
import useApp from "../Hooks/useApp";
import DownloadIcon from "../assets/icon-downloads.png";
import RatingIcon from "../assets/icon-ratings.png";
import ReviewIcon from "../assets/icon-review.png";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const AppDetails = () => {
  const [installed, setInstalled] = useState(false);

  const { id } = useParams();
  const { apps } = useApp();
  const app = apps.find((p) => String(p.id) === id);

  const {
    image,
    title,
    downloads,
    ratingAvg,
    reviews,
    size,
    description,
    ratings,
    companyName,
  } = app || {};

  const chartData = ratings ? [...ratings].reverse() : [];
useEffect(() => {
  if (!app) return;

  const existingList =
    JSON.parse(localStorage.getItem("installation")) || [];

  const isInstalled = existingList.some((p) => p.id === app.id);
  setInstalled(isInstalled);
}, [app]);




  const handleAddToInstallation = () => {
    const existingList = JSON.parse(localStorage.getItem("installation")) || [];

    const isDuplicate = existingList.some((p) => p.id === app.id);

    if (isDuplicate) {
      toast.info("App already installed");
      return;
    }

    const updatedList = [...existingList, app];
    localStorage.setItem("installation", JSON.stringify(updatedList));

    setInstalled(true);
    toast.success("App installed successfully ✅");
  };

  return (
    <div className="min-h-screen  max-w-9xl mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12">
      <div className="flex gap-8 flex-col items-center lg:flex-row bg-gray-100 ">
        <div className="shadow-md">
          <figure>
            <img className="w-90 h-90 " src={image} alt="Album" />
          </figure>
        </div>
        <div className="w-full">
          <h2 className="text-[2rem] font-bold text-center lg:text-left">{title}</h2>
          <p className="text-2xl text-gray-500">
            Developed by{" "}
            <span
              className="
      bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] 
      bg-clip-text 
      text-transparent
      transition-colors font-semibold">
              {companyName}
            </span>
          </p>
          <br />
          <hr className="text-gray-300 font-semibold" />
          <div className="mt-5 flex flex-col gap-10 lg:flex-row lg:gap-40 ">
            <div className="flex flex-col gap-2 justify-center items-center">
              <img className="w-10" src={DownloadIcon} alt="" />
              <p className="text-xl mt-1 font-semibold">Downloads</p>
              <h1 className="font-extrabold text-4xl">{downloads}</h1>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <img className="w-10" src={RatingIcon} alt="" />
              <p className="text-xl mt-1 font-semibold">Ratings</p>
              <h1 className="font-extrabold text-4xl">{ratingAvg}</h1>
            </div>
            <div className="flex flex-col gap-2  gap-2justify-center items-center">
              <img className="w-10" src={ReviewIcon} alt="" />
              <p className="text-xl mt-1 font-semibold">Reviews</p>
              <h1 className="font-extrabold text-4xl">{reviews}</h1>
            </div>
          </div>
          <button
            onClick={handleAddToInstallation}
            disabled={installed}
            className={`shadow mt-5 px-8 py-3 text-xl font-semibold rounded
    ${
      installed
        ? "bg-gray-400 text-white cursor-not-allowed"
        : "bg-[#00D390] text-white border border-[#00D390]"
    }`}>
            {installed ? "Installed" : `Install Now (${size}MB)`}
          </button>
        </div>
      </div>
      <br />
      <hr className="text-gray-300" />
      <br />
      <div className=" p-6 rounded-xl w-full max-w-9xl">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Ratings</h2>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              layout="vertical"
              margin={{ top: 0, right: 20, left: 0, bottom: 0 }}>
              <CartesianGrid
                strokeDasharray="3 3"
                horizontal={false}
                stroke="#e5e7eb"
              />

              <XAxis
                type="number"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#6B7280", fontSize: 12 }}
              />

              <YAxis
                dataKey="name"
                type="category"
                axisLine={false}
                tickLine={false}
                width={60}
                tick={{ fill: "#374151", fontSize: 14, fontWeight: 500 }}
              />

              <Tooltip
                cursor={{ fill: "transparent" }}
                contentStyle={{
                  borderRadius: "8px",
                  border: "none",
                  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                }}
              />

              <Bar
                dataKey="count"
                fill="#F97316"
                radius={[0, 4, 4, 0]}
                barSize={32}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <br />
      <hr className="text-gray-300" />
      <br />
      <h1 className="text-2xl font-semibold">Description</h1>
      <br />
      <p className="text-gray-400 text-xl">{description}</p>
    </div>
  );
};

export default AppDetails;
