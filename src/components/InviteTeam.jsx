import { useState } from "react";
import { IoPencil } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";

const InviteTeam = () => {
  const [active, setActive] = useState(false);
  const [selectedAccess, setSelectedAccess] = useState("account");

  return (
    <div className="w-full h-full">
      <div className="flex flex-col sm:flex-row justify-between w-full border-b border-gray-200 items-start mt-5">
        <div className="flex flex-col w-full sm:w-2/3">
          <div className="flex justify-center sm:justify-start items-center">
            <input
              placeholder="Your Team"
              className={`px-4 p-2 rounded-lg w-full sm:w-auto active:border-none focus:outline-none focus:ring-0 mx-4 ${
                active === true ? "bg-gray-100" : "bg-gray-200 cursor-not-allowed"
              }`}
              disabled={active === false}
            />
            <IoPencil
              onClick={() => setActive(!active)}
              className="cursor-pointer"
            />
          </div>
          <div className="mx-4 text-sm sm:text-base my-3">Members: 0/1</div>
        </div>
        <div className="w-full sm:w-auto mt-4 sm:mt-0">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full sm:w-auto">+ Invite new Users</button>
        </div>
      </div>

      <div className="flex gap-5 border-b border-gray-200 m-5">
        <p
          onClick={() => setSelectedAccess("account")}
          className={`cursor-pointer mb-3 text-sm sm:text-base ${
            selectedAccess === "account" ? "text-blue-900 border-b border-b-blue-900" : ""
          }`}>
          Account Access
        </p>
        <p
          onClick={() => setSelectedAccess("campaign")}
          className={`cursor-pointer mb-3 text-sm sm:text-base ${
            selectedAccess === "campaign" ? "text-blue-900 border-b border-b-blue-900" : ""
          }`}>
          Campaign access
        </p>
      </div>

      <div className="flex flex-col justify-center items-center mt-5 px-4 py-4 border-b border-gray-200">
        <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
          <FaUsers className="text-blue-600" />
          {selectedAccess === "account" ? (
            <div className="font-bold text-lg">
              Ready to collaborate? Share account access with trusted partners for seamless teamwork!
            </div>
          ) : (
            <div className="font-bold text-lg">
              Enhance campaign management and streamline your workflow with shared access
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-end my-2 mx-4">
        <button className="bg-gray-200 text-black px-4 py-2 rounded-lg">Save</button>
      </div>
    </div>
  );
};

export default InviteTeam;
