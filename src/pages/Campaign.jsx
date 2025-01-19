import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { LuNotebookPen } from "react-icons/lu";
import { VscOpenPreview } from "react-icons/vsc";
import { FaLock } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { MdOutlinePrivateConnectivity } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { MdPendingActions } from "react-icons/md";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Campaign = () => {
  const [activeItem, setActiveItem] = useState("All");

  const campaignStatuses = [
    { id: "All", label: "All", icon: <IoMenu /> },
    { id: "Active", label: "Active", icon: <FaCheck /> },
    { id: "Draft", label: "Draft", icon: <LuNotebookPen /> },
    { id: "UnderReview", label: "Under Review", icon: <VscOpenPreview /> },
    { id: "Paused", label: "Paused", icon: <FaPause /> },
    { id: "Closed", label: "Closed", icon: <FaLock /> },
    { id: "Private", label: "Private", icon: <MdOutlinePrivateConnectivity /> },
    { id: "PendingInvites", label: "Pending Invites", icon: <MdPendingActions /> },
    { id: "Rejected", label: "Rejected", icon: <FaTimes /> },
  ];

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col bg-gray-50">
        <div className="mb-2">
          <Header data="Campaign" />
        </div>

        <div className="flex flex-1 flex-col lg:flex-row">
          <div className="w-full lg:w-1/4 bg-white p-4 border-r">
            <input
              type="text"
              placeholder="Search Campaign ..."
              className="w-full p-2 mb-4 border rounded-md text-sm"
            />
            <ul className="space-y-4">
              <h2 className="font-bold text-xl border-b border-b-gray-200">Campaign Status</h2>
              {campaignStatuses.map((item) => (
                <li
                  key={item.id}
                  onClick={() => setActiveItem(item.id)}
                  className={`flex items-center space-x-2 text-base md:text-lg font-bold border-b border-b-gray-200 cursor-pointer 
                    ${
                      activeItem === item.id ? "text-green-600 scale-105" : "text-gray-700"
                    } transition-all duration-200`}>
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center bg-white p-4">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-500 text-4xl">📥</span>
              </div>
              <h2 className="text-gray-600 text-lg md:text-xl font-semibold mb-2">
                Haven&apos;t posted any campaigns yet!
              </h2>
              <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Post Campaign</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
