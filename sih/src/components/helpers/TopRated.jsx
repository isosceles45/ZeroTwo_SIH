import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const TopRated = () => {
  const navigate = useNavigate();
  return (
    <section class="flex bg-emerald-600 py-5">
      <div className="w-[70%] flex flex-col items-center">
        <div className="flex items-center justify-center gap-12 w-full">
          <div className="flex justify-between items-center ">
            <div className="leftContainer  text-center">
              <p className="text-yellow-500 text-8xl">3.5</p>
              <span className="text-xs text-gray-300 font-bold">
                out of 5
                <p class="text-sm font-medium text-white dark:text-gray-400">
                  1,745 global ratings
                </p>
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 my-4 p-2 w-[40%]">
            <div className="rounded-full h-7 bg-gray-200 px-2 py-1 text-sm text-gray-500 font-semibold">
              General Cardiology
            </div>
            <div className="rounded-full h-7 bg-gray-200 px-2 py-1 text-sm text-gray-500 font-semibold">
              Echocardiology
            </div>
            <div className="rounded-full h-7 bg-gray-200 px-2 py-1 text-sm text-gray-500 font-semibold">
              General Cardiology
            </div>
            <div className="rounded-full h-7 bg-gray-200 px-2 py-1 text-sm text-gray-500 font-semibold">
              General Cardiology
            </div>
            <div className="rounded-full h-7 bg-gray-200 px-2 py-1 text-sm text-gray-500 font-semibold">
              General Cardiology
            </div>
          </div>
        </div>
        <p className=" w-[60%] h-[100px] overflow-hidden mt-3 text-sm text-white font-thin">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quod, quibusdam, quae voluptatem voluptates consequatur
          officia laboriosam eaque quia quos! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Minima voluptas facilis quia temporibus
          error autem mollitia sapiente veritatis hic magnam corrupti quae vel
          repellendus similique ipsum a modi, rem rerum?
        </p>
        <button
          onClick={() => navigate("/SingleLawyer/1")}
          className="w-[60%] text-white mt-8 bg-red-500 py-3 px-4 rounded-sm font-bold text-sm shadow-sm mb-4"
        >
          Book an Appointment
        </button>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img
          className="h-44 w-44 rounded-full  border-4 border-black shadow-md"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRh2t0TjdMAH9Y7-mc5lLcNwSllv06aiR6HQ&usqp=CAU"
          alt=""
        />
        <div className="font-bold text-xl mt-4">Dr. Stephan Munoz</div>
        <div className="font-bold text-sm text-gray-50">📍 New York, USA</div>
      </div>
    </section>
  );
};

export default TopRated;
