import React from "react";

const Navbar = () => {
  return (
    <div className="mx-auto w-[75%] pt-10 px-4">
      <div className="w-full flex flex-row items-center justify-between text-white font-sans font-semibold">
        <img
          alt="profile-image"
          type="photo/svg"
          className="w-[100px] lg:w-[240px]"
          src="logo.svg"
        />

        <nav className="hidden md:flex flex-row items-center space-x-5 mr-2">
          <ul className="hidden md:flex flex-row items-center space-x-5 gap-x-5">
            <li className="group relative hover:scale-105  ease-in duration-200">
              <a href="/#registerlawyer">
                <p className="underline underline-offset-4">
                  Register As A Lawyer
                </p>
              </a>
            </li>
            <li className="group relative hover:scale-105  ease-in duration-200">
              <a href="/#chatbot">Chatbot</a>
            </li>
            <li className="group relative hover:scale-105  ease-in duration-200">
              <a href="/#customers">Login/Sign Up</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
