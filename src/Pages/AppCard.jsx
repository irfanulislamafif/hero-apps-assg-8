import { Link } from "react-router";
import downloadIcon from "../assets/icon-downloads.png";
import starIcon from "../assets/icon-ratings.png";
import React from "react";

const AppCard = ({ app }) => {
  const { id, title, image, downloads, ratingAvg } = app;
  return (
    <Link
      to={`/app/${id}`}
      className="card bg-base-100 shadow-xl p-4 hover:scale-105 transition ease-in-out">
      <figure>
        <img className="h-100" src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-between">
          <div className="badge badge-outline text-green-600 font-semibold">
            <span className="">
              <img className="w-3.5" src={downloadIcon} alt="" />
            </span>
            {downloads}
          </div>
          <div className="badge badge-outline font-semibold text-orange-400">
            <span>
              <img className="w-3.5" src={starIcon} alt="" />
            </span>
            {ratingAvg}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
