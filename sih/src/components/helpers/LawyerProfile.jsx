import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const LawyerProfile = ({ lawyer }) => {
  const [currLawyer, setCurrLawyer] = useState({});
  console.log("lawyer", lawyer);
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/SingleLawyer/${id}`, { state: { lawyer: currLawyer } });
  };

  useEffect(() => {
    const getAllInfo = async (id) => {
      const res = await axios.get(
        `http://localhost:5000/api/lawyers/info/${id}`
      );
      console.log("res", res);
      setCurrLawyer(res.data[0]);
    };

    getAllInfo(lawyer._id);
  }, []);

  return (
    <div
      className="flex flex-col items-center shadow-md w-60 
    bg-gray-100 rounded-lg px-12 py-10
    hover:shadow-xl hover:scale-105 duration-700 ease-in-out
    "
    >
      <img
        src="https://media.istockphoto.com/id/1326908785/photo/shot-of-a-business-women-using-laptop-working-at-home-stock-photo.jpg?s=612x612&w=0&k=20&c=HuaPJRwxIlxQaeT-rhb-YwvBzhf4GrgqCDk5F7rvqHg="
        alt=""
        className="h-28 w-28 rounded-full object-cover"
      />
      <h1 className="w-full text-center text-xl font-bold text-gray-800 pt-3">
        {currLawyer.name}
      </h1>
      <p className="text-gray-500 text-sm font-thin py-1">
        {currLawyer.specialization}
      </p>
      <div className="flex h-5 mt-1">
        <svg
          class="w-3 h-3 text-blue-600 mr-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
          class="w-3 h-3 text-blue-600 mr-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
          class="w-3 h-3 text-blue-600 mr-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      </div>
      <button
        onClick={() => handleClick(currLawyer._id)}
        className="mt-2 flex items-center justify-center gap-2 border border-blue-600 text-center px-4 py-2 rounded-full text-blue-600 my-2 w-[180px] h-9 hover:text-white hover:bg-blue-600 duration-700 ease-in-out"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
          />
        </svg>
        <h2 className="font-bold text-sm text-center">View Profile</h2>
      </button>
    </div>
  );
};

export default LawyerProfile;
