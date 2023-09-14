import React from "react";

const Followers = ({ followers, following }) => {
  return (
    <div className="flex gap-16">
      <div className="flex flex-col">
        <h1 className="text-black font-bold text-lg">{followers}k</h1>
        <h1 className="font-light text-sm">Followers</h1>
      </div>
      <div className="flex flex-col">
        <h1 className="text-black font-bold text-lg">{following}k</h1>
        <h1 className="font-light text-sm">Following</h1>
      </div>
    </div>
  );
};

export default Followers;
