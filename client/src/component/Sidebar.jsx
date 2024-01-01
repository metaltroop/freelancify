// import { useState } from "react";
import { Link } from "react-router-dom";
import user from "../assets/user.png"


const Sidebar = () => {
  return (
    <>
      <div className="w-[23%] bg-blue-400 h-screen rounded-r-3xl fixed">
        <div className="flex flex-row flex-wrap gap-5 p-5 ">
          <img
            src={user}
            alt="user"
            className="Ellipse2 w-20 h-20 item-center just  rounded-full border-2 border-black border-opacity-60"
          />
          <div className="flex flex-col pl-4 items-start justify-center ">
            <h2 className="text-2xl font-semibold">Deep Naik</h2>
            <h3 className="text-xl font-normal ">deep@gmail.com</h3>
          </div>
        </div>
        <div>
            <Link to={"/dashboard/Profile"}>
                Profile
            </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
