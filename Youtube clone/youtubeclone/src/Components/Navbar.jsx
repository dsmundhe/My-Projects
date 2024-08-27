import React from "react";
import { FiMenu } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { IoMic } from "react-icons/io5";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
function Navbar() {
  return (
    <div className="flex  justify-between mt-2 mr-8 ml-8 ">
      <div className="flex gap-6 text-xl justify-center items-center">
        <div>
          <FiMenu />
        </div>
        <div className="flex justify-center items-center gap-1">
          <FaYoutube className="text-3xl text-red-500" />
          <h2 className="font-semibold">Youtube</h2>
        </div>
      </div>

      <div className="flex justify-center items-center gap-6 ">
        <div className="  ">
          <form className="flex justify-center items-center">
            <div className="h-10 flex items-center justify-center border-solid border-2 border-gray-900 rounded-full pl-3 ">
              <div className=" rounded-full  flex items-center justify-center  ">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-96 h-8 border-none focus:outline-none rounded-l-full"
                />
                <button type="submit">
                  <IoSearchOutline className="text-2xl rounded-r-full bg-gray-100 pr-1 w-16 items-center h-9 p-1 border-solid border-2 border-warm-gray-800" />
                </button>
              </div>
            </div>
          </form>
        </div>
        <div>
          <IoMic className="text-2xl bg-gray-200 h-10 w-10 rounded-full flex p-2" />
        </div>
      </div>

      <div className="flex justify-center items-center ">
        <div className="flex justify-center items-center gap-6 ">
          <div>
            <RiVideoAddLine className="text-2xl" />
          </div>
          <div>
            <IoMdNotificationsOutline className="text-2xl" />
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWFrby47gUS_o0inRNSkveJgt422LGK_d0GqMSSi2J5g&s"
              alt="profile image"
              className="w-9 h-9 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
