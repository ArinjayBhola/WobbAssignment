import { AiOutlineMessage } from "react-icons/ai";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Lists = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header data="Messages" />

        <div className="flex flex-1 flex-col lg:flex-row p-4">
          <div className="w-full lg:w-1/4 bg-white border-r p-6 mt-2 lg:mt-0 mb-4 lg:mb-0">
            <input
              placeholder="Search Chats..."
              className="w-full p-2 mb-4 border border-black rounded-md text-sm"
            />
            <div className="w-full flex justify-between mb-4">
              <button
                className={`border border-gray-300 px-4 py-1 text-sm w-full lg:w-auto mb-2 lg:mb-0 ${
                  activeButton === "Groups" ? "bg-blue-700 text-white" : ""
                }`}
                onClick={() => handleButtonClick("Groups")}>
                Groups
              </button>
              <button
                className={`border border-gray-300 px-4 py-1 text-sm w-full lg:w-auto mb-2 lg:mb-0 ${
                  activeButton === "Influencers" ? "bg-blue-700 text-white" : ""
                }`}
                onClick={() => handleButtonClick("Influencers")}>
                Influencers
              </button>
              <button
                className={`border border-gray-300 px-4 py-1 text-sm w-full lg:w-auto ${
                  activeButton === "Invite Group" ? "bg-blue-700 text-white" : ""
                }`}
                onClick={() => handleButtonClick("Invite Group")}>
                Invite Group
              </button>
            </div>
            <div className="text-center">
              <h2 className="w-full text-lg font-semibold mb-4">No chats found</h2>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center bg-white border-r mx-5 my-2 rounded-lg">
            <div className="text-center p-6">
              <div className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-500 text-4xl">
                  <AiOutlineMessage />
                </span>
              </div>
              <h2 className="text-gray-600 text-lg font-medium mt-4">Click on a conversation to view messages</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lists;
