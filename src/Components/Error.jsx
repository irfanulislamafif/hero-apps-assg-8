import React from "react";
import { useRouteError } from "react-router";
import Error4 from "../assets/error-404.png";
import { Link } from "react-router";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col text-center justify-center items-center">
      <div className="mt-10">
        <figure>
          <img className=" w-150" src={Error4} alt="" />
        </figure>
      </div>
      <div className="mt-2">
        <p className="text-black-600 text-xl font-semibold">
          Oops, {error.statusText || error.message} !!!!
        </p>
        <h1 className="text-2xl text-gray-400 font-semibold">
          The page you are looking for is not available.
        </h1>
      </div>
      <Link
        to="/"
        className="btn text-md py-5 px-8 mt-2 text-white bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] ">
        Go Back!
      </Link>
    </div>
  );
};

export default Error;
