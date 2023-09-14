import React from "react";

const ClinicCard = () => {
  return (
    <div className="shadow shadow-slate-300 p-4 w-[80%]">
      <h1 className="text-md font-bold text-gray-500">
        Apollo Hospital, Sector 32, Delhi NCR - 122001
      </h1>
      <p className="text-sm font-light text-gray-500 ">2.5 km away</p>
      <iframe
        className="w-full h-48 mt-4"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.526395712!2d76.7635682585092!3d28.643684611561188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1694610332827!5m2!1sen!2sin"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default ClinicCard;
