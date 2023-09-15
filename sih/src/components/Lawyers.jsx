import React, { useEffect, useState } from "react";
import LawyerProfile from "./helpers/LawyerProfile";
import TopRated from "./helpers/TopRated";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const Lawyers = ({ onlineLawyers }) => {
  console.log("online2", onlineLawyers);
  const [onlineLawyersList, setOnlineLawyersList] = useState([]);
  const navigate = useNavigate();

  const getOnlineLawyers = async (uid) => {
    console.log("getOnlineLawyeRS CALLED  ");
    try {
      const res = await axios.post(`http://localhost:5000/api/lawyers/lawyer`, {
        ids: uid,
      });
      console.log("returned");
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const uid = onlineLawyers.map((lawyer) => lawyer.userId);
    getOnlineLawyers(uid).then((res) => {
      console.log("res", res);
      setOnlineLawyersList(res);
      console.log("onlineLawyersList", onlineLawyersList);
    });
  }, [onlineLawyers]);

  return (
    <div className="w-4/5 pt-52  mx-auto flex flex-col items-center">
      <h1 className="font-bold text-gray-900  text-center text-4xl mb-10">
        Top Rated Lawyers
      </h1>

      <div class="carousel h-96 relative shadow-3xl bg-white w-full">
        <div class="carousel-inner relative overflow-hidden w-full">
          {/* <!--Slide 1--> */}
          <input
            class="carousel-open hidden"
            type="radio"
            id="carousel-1"
            name="carousel"
            aria-hidden="true"
            hidden=""
            checked="checked"
          />
          <div class="carousel-item absolute opacity-0">
            <TopRated />
          </div>
          <label
            for="carousel-3"
            class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
          >
            ‹
          </label>
          <label
            for="carousel-2"
            class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
          >
            ›
          </label>

          {/* <!--Slide 2--> */}
          <input
            class="carousel-open hidden"
            type="radio"
            id="carousel-2"
            name="carousel"
            aria-hidden="true"
            hidden=""
          />
          <div class="carousel-item absolute opacity-0">
            <TopRated />
          </div>
          <label
            for="carousel-1"
            class="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
          >
            ‹
          </label>
          <label
            for="carousel-3"
            class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
          >
            ›
          </label>

          {/* <!--Slide 3--> */}
          <input
            class="carousel-open hidden"
            type="radio"
            id="carousel-3"
            name="carousel"
            aria-hidden="true"
            hidden=""
          />
          <div class="carousel-item absolute opacity-0">
            <TopRated />
          </div>
          <label
            for="carousel-2"
            class="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
          >
            ‹
          </label>
          <label
            for="carousel-1"
            class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
          >
            ›
          </label>
        </div>
      </div>

      <div className="online w-full  pt-48 flex flex-col items-center justify-between mt-10">
        <h1 className="font-bold text-gray-900  text-center text-4xl mb-10">
          Online Service Providers
        </h1>
        <div className="w-full flex justify-center mb-4 items-center">
          <div className="grid grid-cols-3 gap-x-12">
            {onlineLawyersList?.length > 0 &&
              onlineLawyersList.map(
                (lawyer) =>
                  lawyer.isServiceProvider && <LawyerProfile lawyer={lawyer} />
              )}
          </div>
        </div>
      </div>

      <div className="online w-full pt-12 flex flex-col items-center justify-between mt-8">
        <h1 className="font-bold text-gray-900  text-center text-4xl mb-8">
          Nearby Service Providers
        </h1>
        <div className="w-full flex justify-between mb-4"></div>
        <div className="grid grid-cols-5 gap-5"></div>
      </div>

      <button
        onClick={() => <Navigate to="/lawyers" />}
        className="mt-12 mb-4 flex items-center justify-center gap-2 bg-blue-900 text-center px-4 py-4 rounded-full text-white w-[180px] hover:text-white hover:bg-emerald-600 duration-700 ease-in-out"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
          />
        </svg>

        <h2 className="font-bold text-sm text-center">Browse All</h2>
      </button>
      <footer class="w-full bg-white rounded-lg shadow p-5">
        <hr />
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Lawyers;
