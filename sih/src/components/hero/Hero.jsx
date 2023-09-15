import React from "react";
import Navbar from "./Navbar";
import Content from "./Content.jsx";
import "./Hero.css";

const types_of_lawyers = [
  { name: "Criminal Defense ", id: 1, img: "./home/criminal-def.png" },
  { name: "Civil Litigation ", id: 2, img: "./home/civil.png" },
  { name: "Family", id: 3, img: "./home/family.png" },
  { name: "Real Estate ", id: 4, img: "./home/realestate.png" },
  { name: "Intellectual Property ", id: 6, img: "./home/bag.png" },
  { name: "Bankruptcy ", id: 7, img: "./home/criminal-def.png" },
  { name: "Corporate ", id: 5, img: "./home/iproperty.png" },
  { name: "Labor and Employment ", id: 11, img: "./home/criminal-def.png" },
  { name: "Immigration ", id: 8, img: "./home/iproperty.png" },
  { name: "Environmental ", id: 9, img: "./home/realestate.png" },
  { name: "International ", id: 13, img: "./home/bag.png" },
  { name: "Tax ", id: 10, img: "./home/bag.png" },
  { name: "Admiralty and Maritime ", id: 14, img: "./home/iproperty.png" },
  { name: "Civil Rights ", id: 12, img: "./home/criminal-def.png" },
];

const Hero = () => {
  return (
    <div>
      <div className="-z-10 law-bg flex flex-col items-center h-screen">
        <Navbar />
        <Content />
        <div
          className="absolute -bottom-32   w-[66%] py-4
        bg-white rounded-md shadow-lg grid grid-cols-4"
        >
          {types_of_lawyers.map((lawyer) => (
            <div
              key={lawyer.id}
              className="flex flex-col items-center gap-4 m-1 cursor-pointer hover:bg-gray-100 p-2 rounded-md"
            >
              <img className="h-10 w-10" src={lawyer?.img} alt="" />
              <h1 className="text-center text-sm font-semibold text-gray-500">
                {lawyer.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
