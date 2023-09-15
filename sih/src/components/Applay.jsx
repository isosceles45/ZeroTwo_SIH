import React, { useState } from "react";
import { useSelector } from "react-redux";
import upload from "../context/upload";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const inputStyle =
  "py-2 px-4  rounded-[4px] border-2 border-blue-gray-200  border-gray-400 outline-none font-sans text-sm font-normal text-gray-600 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-emerald-500 placeholder-shown:border-emerald-500 focus:border-2 focus:border-emerald-500  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 ";

const Applay = () => {
  const navigate = useNavigate();
  const currUser = useSelector((state) => state.userInfo.info);
  const [loading, setLoading] = useState(true);

  const [lawyer, setLawyer] = useState({
    id: currUser._id || currUser.id,
    name: currUser.fname + " " + currUser.lname,
    email: currUser?.email || "",
    address: "",
    city: "",
    state: "",
    specialization: [],
    gender: currUser?.gender || "",
    courtPractice: [],
    pass_certificate: null,
    bar_certificate: null,
    serviceType: [],
    enrollment_number: "",
  });

  const handleFile1 = async (e) => {
    e.preventDefault();
    setLoading(true);
    const files = e.target?.files;
    if (files?.length > 0) {
      const data = new FormData();
      for (const file of files) {
        data.append("file", file);
      }
      data.append("upload_preset", "fiverr");
      const url = await upload(data);
      console.log("url", url);
      setLawyer((prev) => ({ ...prev, pass_certificate: url }));
      console.log("Lawyer", lawyer);
    }
    toast.success("File Uploaded");
  };

  const handleFile2 = async (e) => {
    e.preventDefault();
    setLoading(true);
    const files = e.target?.files;
    if (files?.length > 0) {
      const data = new FormData();
      for (const file of files) {
        data.append("file", file);
      }
      data.append("upload_preset", "fiverr");
      const url = await upload(data);
      console.log("url", url);
      setLawyer((prev) => ({ ...prev, bar_certificate: url }));
      console.log("Lawyer", lawyer);
    }
    toast.success("File Uploaded");
  };

  const onHandleChange = (e) => {
    setLawyer((prev) => ({ ...prev, [e.name]: e.value }));
    console.log("Lawyer", lawyer);
  };

  const handleSubmit = async () => {
    console.log("Lawyer", lawyer);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/lawyers/apply",
        lawyer
      );

      console.log(res.data);
      if (res.status === 200) {
        toast.success("Applied Successfully");
      } else {
        toast.error("Something went wrong");
      }
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    }
  };

  return (
    <div class="min-h-screen p-6 bg-emerald-600 flex items-center justify-center">
      <div class="container max-w-screen-lg mx-auto">
        <Toaster toastOptions={{ duration: 4000 }} />
        <div>
          <h2 class="font-semibold text-xl text-gray-600">
            Apply to be a Lawyer
          </h2>

          <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div class="lg:col-span-2">
                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div class="md:col-span-5">
                    <label for="full_name">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      disabled
                      id="full_name"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={currUser.fname + " " + currUser.lname}
                    />
                  </div>

                  <div class="md:col-span-5">
                    <label for="email">Email Address</label>
                    <input
                      type="text"
                      name="email"
                      onChange={(e) => onHandleChange(e.target)}
                      id="email"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={currUser?.email || ""}
                      placeholder="email@domain.com"
                    />
                  </div>

                  <div class="md:col-span-3">
                    <label for="address">Address / Street</label>
                    <input
                      type="text"
                      name="address"
                      onChange={(e) => onHandleChange(e.target)}
                      id="address"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder=""
                    />
                  </div>

                  <div class="md:col-span-2">
                    <label for="city">City</label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      onChange={(e) => onHandleChange(e.target)}
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder=""
                    />
                  </div>

                  <div class="md:col-span-2">
                    <label for="country">Country / region</label>
                    <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        name="country"
                        id="country"
                        onHandleChange={(e) => onHandleChange(e.target)}
                        placeholder="Country"
                        class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                      />
                      <button
                        tabindex="-1"
                        class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                      >
                        <svg
                          class="w-4 h-4 mx-2 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                      <button
                        tabindex="-1"
                        for="show_more"
                        class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                      >
                        <svg
                          class="w-4 h-4 mx-2 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div class="md:col-span-2">
                    <label for="state">State / province</label>
                    <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        name="state"
                        id="state"
                        onChange={(e) => onHandleChange(e.target)}
                        placeholder="State"
                        class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                      />
                      <button
                        tabindex="-1"
                        class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                      >
                        <svg
                          class="w-4 h-4 mx-2 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                      <button
                        tabindex="-1"
                        for="show_more"
                        class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                      >
                        <svg
                          class="w-4 h-4 mx-2 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div class="md:col-span-1">
                    <label for="zipcode">Zipcode</label>
                    <input
                      type="text"
                      name="zipcode"
                      id="zipcode"
                      class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder=""
                    />
                  </div>

                  <div class="col-span-2">
                    <label for="city">Enrollment Number</label>
                    <input
                      type="text"
                      name="enrollment_number"
                      id="city"
                      onChange={(e) => onHandleChange(e.target)}
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder=""
                    />
                  </div>

                  <div className="flex">
                    <div className="mt-4 flex items-center">
                      <label
                        htmlFor=""
                        className="font-normal mr-2 text-gray-800 text-base mb-[6px]"
                      ></label>
                      <select
                        id="underline_select"
                        name="serviceType"
                        onChange={(e) => onHandleChange(e.target)}
                        className={`${inputStyle} `}
                      >
                        <option value="none" selected>
                          provided a service
                          {/* enum: ["lawyer", "lawyer",
                          "accountant", "other"], */}
                        </option>
                        <option value="lawyer">Lawyer</option>
                        <option value="notery">Notery</option>
                        <option value="accountantL">Accountant</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="mt-4 flex items-center">
                      <label
                        htmlFor=""
                        className="font-normal mr-2 text-gray-800 text-base mb-[6px]"
                      ></label>
                      <select
                        id="underline_select"
                        name="courtPractice"
                        onChange={(e) => onHandleChange(e.target)}
                        className={`${inputStyle} `}
                      >
                        <option value="none" selected>
                          Court Practice
                        </option>
                        <option value="High Court">High Court</option>
                        <option value="Supreme Court">Supreme Court</option>
                        <option value="District Court">District Court</option>
                        <option value="All">All</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="md:col-span-1 mt-4">
                  <label for="specialization">Add Specialization</label>
                  <textarea
                    type="text"
                    name="specialization"
                    onChange={(e) => onHandleChange(e.target)}
                    id="specialization"
                    class="transition-all h-[60px] flex items-center  border mt-1 rounded px-4 w-full bg-gray-50"
                    placeholder="tax law, criminal law, etc."
                  />
                </div>
              </div>

              <div class="text-gray-600 flex flex-col justify-between">
                <div class="md:col-span-1 mt-2">
                  <label for="specialization py-2">
                    Upload Passing Certificate
                  </label>

                  <div class="flex items-center justify-center w-full">
                    <label
                      for="dropzone-file"
                      class="flex flex-col items-center justify-center w-full h-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                      <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          class="w-6 h-6 mb-2 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span class="font-semibold">Click to upload</span> or
                          drag and drop
                        </p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <input
                        id="dropzone-file"
                        name="pass_certificate"
                        onChange={handleFile1}
                        type="file"
                        class="hidden"
                      />
                    </label>
                  </div>
                </div>

                <div class="md:col-span-1 mt-2">
                  <label for="specialization py-2">
                    Upload BAR COUNCIL Certificate
                  </label>

                  <div class="flex items-center justify-center w-full">
                    <label class="flex flex-col items-center justify-center w-full h-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                      <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          class="w-6 h-6 mb-2 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span class="font-semibold">Click to upload</span> or
                          drag and drop
                        </p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <input
                        name="bar_certificate"
                        onChange={handleFile2}
                        type="file"
                        class="hidden"
                      />
                    </label>
                  </div>
                </div>
                <div class="md:col-span-5 text-right mt-4">
                  <div class="inline-flex items-end">
                    <button
                      onClick={handleSubmit}
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applay;
