import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const TopRated = () => {
  const navigate = useNavigate();
  return (
    <section class="flex border bg-inherit py-20">
      <div className="w-[70%] flex flex-col items-center">
        <div className="flex items-center justify-center gap-12 w-full">
          <div className="flex justify-between items-center ">
            <div className="leftContainer text-center scale-125">
              <p className="text-yellow-300 text-8xl font-bold">3.5</p>
              <span className="text-xs text-gray-800 font-bold">
                out of 5
                <p class="text-sm font-medium text-black dark:text-gray-400">
                  1,745 global ratings
                </p>
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 my-4 p-2 w-[40%]">
            <div className="rounded-full bg-black px-4 py-2 font-light text-sm text-white text-center">
              General Cardiology
            </div>
            <div className="rounded-full bg-black px-4 py-2 font-light text-sm text-white text-center">
              Echocardiology
            </div>
            <div className="rounded-full bg-black px-4 py-2 font-light text-sm text-white text-center">
              General Cardiology
            </div>
            <div className="rounded-full bg-black px-4 py-2 font-light text-sm text-white text-center">
              General Cardiology
            </div>
            <div className="rounded-full bg-black px-4 py-2 font-light text-sm text-white text-center">
              General Cardiology
            </div>
          </div>
        </div>
        <p className=" w-[60%] h-[100px] overflow-hidden text-sm text-black mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quod, quibusdam, quae voluptatem voluptates consequatur
          officia laboriosam eaque quia quos! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Minima voluptas facilis quia temporibus
          error autem mollitia sapiente veritatis hic magnam corrupti quae vel
          repellendus similique ipsum a modi, rem rerum?
        </p>
        <button
          onClick={() => navigate("/SingleLawyer/1")}
          className="w-[60%] text-white mt-8 bg-blue-300 py-3 px-4 rounded-md font-bold 
          text-sm shadow-sm mb-4 
          hover:scale-105 hover:bg-black transform transition-all duration-500 ease-in-out
          "
        >
          Book an Appointment
        </button>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img
          className="h-64 w-64 rounded-full  border-4 border-black shadow-md"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRh2t0TjdMAH9Y7-mc5lLcNwSllv06aiR6HQ&usqp=CAU"
          alt=""
        />
        <div className="font-bold text-xl mt-4">Dr. Stephan Munoz</div>
        <div className="font-bold text-sm text-gray-500">📍 New York, USA</div>
      </div>
    </section>
  );
};

export default TopRated;
