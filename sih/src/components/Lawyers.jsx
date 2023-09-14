import React from "react";
import LawyerProfile from "./helpers/LawyerProfile";
import TopRated from "./helpers/TopRated";
import { Navigate, useNavigate } from "react-router-dom";

const LawyerList = [1, 2, 3];
const LawyerList2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Lawyers = () => {
  const navigate = useNavigate();
  return (
    <div className="w-4/5  mx-auto flex flex-col items-center">
      <div className="w-full flex justify-between  mb-4">
        <h1 className="font-bold  text-2xl text-emerald-600">
          Top Rated Lawyers
        </h1>
      </div>
      <div class="carousel h-96 relative shadow-2xl bg-white w-full">
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

      <div className="online w-full flex flex-col items-center justify-between mt-10">
        <div className="w-full flex justify-between  mb-4">
          <h1 className="text-xl font-bold text-emerald-600">Online Now</h1>
          <h1 className="text-xs font-semibold flex items-center gap-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-emerald-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            All
          </h1>
        </div>
        <div className="grid grid-cols-5 gap-3">
          {LawyerList.map((lawyer) => (
            <LawyerProfile />
          ))}
        </div>
      </div>

      <div className="online w-full flex flex-col items-center justify-between mt-8">
        <div className="w-full flex justify-between  mb-4">
          <h1 className="text-xl font-bold text-emerald-600">
            Nearby Service Providers
          </h1>
          <h1 className="text-xs font-semibold flex items-center gap-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-emerald-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            All
          </h1>
        </div>
        <div className="grid grid-cols-5 gap-3">
          {LawyerList2.map((lawyer) => (
            <LawyerProfile />
          ))}
        </div>
      </div>

      <button
        onClick={() => <Navigate to="/lawyers" />}
        className="my-8 flex items-center justify-center gap-2 bg-emerald-600 text-center px-4 py-2 rounded-full text-white w-[180px] h-9 hover:text-white hover:bg-emerald-600 duration-700 ease-in-out"
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
    </div>
  );
};

export default Lawyers;
