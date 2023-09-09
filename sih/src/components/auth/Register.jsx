import React, { useState } from "react";
import axios from "axios";

const inputStyle =
  "py-2 px-4  rounded-[4px] border-2 border-blue-gray-200  border-gray-400 outline-none font-sans text-sm font-normal text-gray-600 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-emerald-500 placeholder-shown:border-emerald-500 focus:border-2 focus:border-emerald-500  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 ";

const Register = () => {
  const [gender, setGender] = useState(-1);
  const [service, setService] = useState("none");

  console.log("service", service);
  console.log("gender", gender);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/api/auth/register";
    const { username, password, phoneNumber, email } = e.target;
    console.log(username.value, password.value, phoneNumber.value, email.value);
    const res = await axios.post(url, {
      username: username.value,
      password: password.value,
      phoneNumber: phoneNumber.value,
      email: email.value,
    });
    console.log(res);
  };
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="h-4/6 w-[50vw] relative rounded-md bg-white flex flex-col p-8 font-bold text-lg text-gray-600">
        <h1>Register</h1>
        <div className="flex gap-12 mt-4">
          <div className="flex flex-col w-1/2">
            <label
              htmlFor="fname"
              className="font-normal text-gray-500 text-base mb-[6px]"
            >
              First Name
            </label>
            <input
              id="fname"
              type="text"
              name="fname"
              className={inputStyle}
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label
              htmlFor="lname"
              className="font-normal text-gray-500 text-base mb-[6px]"
            >
              Last Name
            </label>
            <input
              id="lname"
              type="text"
              name="lname"
              className={inputStyle}
              placeholder="Enter your surname"
            />
          </div>
        </div>
        <div className="flex gap-12 mt-4">
          <div className="flex flex-col w-1/2">
            <label
              htmlFor="emal"
              className="font-normal text-gray-500 text-base mb-[6px]"
            >
              Email
            </label>
            <input
              id="emal"
              type="email"
              name="emal"
              className={inputStyle}
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label
              htmlFor="lname"
              className="font-normal text-gray-500 text-base mb-[6px]"
            >
              Phone Number
            </label>
            <input
              id="fname"
              type="text"
              name="lname"
              className={inputStyle}
              placeholder="Enter your phone number"
            />
          </div>
        </div>
        <div className="mt-4">
          <label
            htmlFor="lname"
            className="font-normal text-gray-500 text-base mb-[6px]"
          >
            Gender
          </label>
          <div className="mt-[6px] flex items-center gap-20">
            <label
              for="1"
              className="font-normal text-gray-500 text-base mb-[6px]"
            >
              <input
                type="radio"
                id="1"
                name="age"
                value="M"
                className="mr-1"
              />
              Male
            </label>

            <label
              for="2"
              className="font-normal text-gray-500 text-base mb-[6px]"
            >
              <input
                type="radio"
                id="2"
                name="age"
                value="F"
                className="mr-1"
              />
              Female
            </label>

            <label
              for="3"
              className="font-normal text-gray-500 text-base mb-[6px]"
            >
              <input
                type="radio"
                id="3"
                name="age"
                value="O"
                className="mr-1"
              />
              Prefer Not to Say
            </label>
          </div>
          <div className="mt-4 flex items-center">
            <label
              htmlFor=""
              className="font-normal mr-2 text-gray-800 text-base mb-[6px]"
            >
              What are you looking for?
            </label>
            <select
              id="underline_select"
              onChange={(e) => setService(e.target.value)}
              className={`${inputStyle} `}
            >
              <option value="none" selected>
                choose a service
              </option>
              <option value="CL">Corporate lawyer</option>
              <option value="CDL">Criminal defense lawyer</option>
              <option value="TL">Tax law</option>
              <option value="CRL">Civil Rights Lawyer</option>
              <option value="O">other</option>
            </select>
          </div>
          <button
            className="w-[200px]
          absolute bottom-8 right-8
          px-4 py-2 border-1 shadow-lg text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm text-center mr-2 mb-2"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
