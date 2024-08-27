import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdSlowMotionVideo } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GoHistory } from "react-icons/go";
import { CgPlayList } from "react-icons/cg";
import { LiaFileVideo } from "react-icons/lia";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiLike } from "react-icons/bi";
const mainlinks = [
  {
    icon: <AiFillHome className="text-2xl" />,
    name: "Home",
  },
  {
    icon: <MdSlowMotionVideo className="text-2xl" />,
    name: "Shorts",
  },
  {
    icon: <MdOutlineSubscriptions className="text-2xl" />,
    name: "Home",
  },
];

const othelinks = [
  {
    icon: <CgProfile className="text-2xl" />,
    name: "Your channel",
  },
  {
    icon: <GoHistory className="text-2xl" />,
    name: "History",
  },
  {
    icon: <CgPlayList className="text-2xl" />,
    name: "Playlist",
  },
  {
    icon: <LiaFileVideo className="text-2xl" />,
    name: "Your videos",
  },
  {
    icon: <MdOutlineWatchLater className="text-2xl" />,
    name: "Watch later",
  },
  {
    icon: <BiLike className="text-2xl" />,
    name: "Liked videos",
  },
];
function Sidebar() {
  return (
    <div className="w-2/12 bg-gray-100 h-screen">
      <ul className="p-2 flex flex-col justify-center border-solid border-b-2 border-dark-900">
        {mainlinks.map(({ icon, name }) => {
          return (
            <li
              key={name}
              className="h-12 hover:bg-gray-300 flex items-center justify-between pl-4 rounded-xl"
            >
              <a href="#" className="flex gap-5 text-4">
                {icon} {name}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="p-2 flex flex-col justify-center ">
        {othelinks.map(({ icon, name }) => {
          return (
            <li
              key={name}
              className="h-12 hover:bg-gray-300 flex items-center justify-between pl-4 rounded-xl"
            >
              <a href="#" className="flex gap-5 text-4">
                {icon} {name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
