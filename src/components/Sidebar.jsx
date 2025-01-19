import { useState } from "react";
import { AiFillMessage } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { LuBrickWall } from "react-icons/lu";
import { MdAnalytics } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      id: "search",
      icon: <FaSearch />,
      content: "Influencer Discovery",
      content2: "Your Lists",
      path: "/discover",
      path2: "/list",
    },
    { id: "grid", icon: <LuBrickWall />, content: "Campaigns", content2: "Post Campaigns", path: "/campaigns" },
    { id: "chat", icon: <AiFillMessage />, content: "Messages", path: "/chat" },
    { id: "analytics", icon: <MdAnalytics />, content: "Analytics", path: "/analytics" },
    { id: "settings", icon: <IoMdSettings />, content: "Settings", path: "/settings" },
  ];

  const smallScreenMenuItems = [
    { id: "search", content: "Influencer Discovery", path: "/discover" },
    { id: "campaigns", content: "My Campaigns", path: "/campaigns" },
    { id: "essages", content: "Messages", path: "/chat" },
    { id: "analytics", content: "Analytics", path: "/analytics" },
    { id: "settings", content: "Settings", path: "/settings" },
    { id: "lists", content: "Your Lists", path: "/list" },
  ];

  return (
    <div className={`flex ${location.pathname === "/discover" ? "h-screen" : ""}`}>
      <div className="hidden lg:flex relative bg-gray-800 text-white w-20 flex-col items-center py-4">
        <h2 className="text-xl font-semibold">Wobb</h2>

        <div className="flex-grow flex flex-col items-center space-y-6 mt-4">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="w-full flex items-center justify-center cursor-pointer relative group"
              onMouseEnter={() => setActiveItem(item.id)}
              onMouseLeave={() => setActiveItem(null)}>
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">{item.icon}</div>

              {activeItem === item.id && (
                <div className="absolute left-full top-0 bg-gray-950 text-white py-2 rounded shadow-md whitespace-nowrap">
                  <p
                    className="text-base hover:bg-slate-700 p-2"
                    onClick={() => navigate(item.path)}>
                    {item.content}
                  </p>
                  {item.content2 && (
                    <p
                      className="text-base mt-1 hover:bg-slate-700 p-2"
                      onClick={() => navigate(item.path2)}>
                      {item.content2}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center space-y-6">
          <div className="bg-orange-500 w-10 h-10 flex items-center justify-center text-xl font-bold">A</div>
          <img
            src="https://flagcdn.com/w40/in.png"
            alt="India"
            className="w-8 h-8 border border-gray-600"
          />
        </div>
      </div>

      <div className="lg:hidden">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-4 bg-gray-800 text-white">
          ☰
        </button>

        {isSidebarOpen && (
          <div className="absolute top-0 left-0 h-full w-64 bg-white text-gray-800 z-50 shadow-lg">
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="absolute top-4 right-4 text-xl">
              ✖
            </button>

            <h2 className="text-xl font-semibold p-4">Wobb</h2>

            <div className="flex flex-col space-y-4 p-4">
              {smallScreenMenuItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col">
                  <p
                    className="hover:text-blue-700  cursor-pointer"
                    onClick={() => navigate(item.path)}>
                    {item.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="absolute bottom-4 left-4 flex items-center space-x-4">
              <div className="bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                N
              </div>
              <img
                src="https://flagcdn.com/w40/in.png"
                alt="India"
                className="w-8 h-8 rounded-full border border-gray-600"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
