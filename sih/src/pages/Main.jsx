import React from "react";
import Hero from "../components/hero/Hero";
import Lawyers from "../components/Lawyers";

const Main = ({ onlineLawyers }) => {
  console.log("online1", onlineLawyers)
  return (
    <div>
      {/* To arrange all components */}
      <div className="flex flex-col space-y-20 lg:space-y-28">
        <Hero />
        <div className="pt-12">
          <Lawyers onlineLawyers={onlineLawyers} />
        </div>
      </div>
    </div>
  );
};

export default Main;
