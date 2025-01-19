import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const SocialUser = () => {
  const [isActive, setIsActive] = useState({
    instagram: true,
    youtube: false,
  });

  const [selected, setSelected] = useState([]);

  const data = [
    { id: 1, name: "A", followers: "1", rate: "9" },
    { id: 2, name: "B", followers: "2", rate: "8" },
    { id: 3, name: "C", followers: "3", rate: "7" },
    { id: 4, name: "D", followers: "4", rate: "6" },
    { id: 5, name: "F", followers: "5", rate: "5" },
    { id: 6, name: "E", followers: "6", rate: "4" },
    { id: 7, name: "G", followers: "7", rate: "3" },
    { id: 8, name: "H", followers: "8", rate: "2" },
    { id: 9, name: "I", followers: "9", rate: "1" },
    { id: 10, name: "J", followers: "10", rate: "0" },
  ];

  const handleCheckboxChange = (id) => {
    setSelected((prevSelected) =>
      prevSelected.includes(id) ? prevSelected.filter((item) => item !== id) : [...prevSelected, id],
    );
  };

  const handleMasterCheckboxChange = () => {
    if (selected.length === data.length) {
      setSelected([]);
    } else {
      setSelected(data.map((item) => item.id));
    }
  };

  return (
    <div className="border border-gray-400 h-full">
      <div className="flex justify-between border-b border-b-gray-400 p-4">
        <div className="flex items-center gap-4 sm:gap-2 text-lg">
          <p
            className={`flex items-center ${
              isActive.instagram ? "text-blue-600 border-b border-b-blue-600" : ""
            } cursor-pointer mr-4 sm:mr-2`}
            onClick={() => setIsActive({ instagram: true, youtube: false })}>
            <span className="flex items-center space-x-1 sm:space-x-2">
              <span className="hidden sm:block">Instagram</span>
              <FaInstagram />
            </span>
          </p>

          <p
            className={`flex items-center ${
              isActive.youtube ? "text-blue-600 border-b border-b-blue-600" : ""
            } cursor-pointer`}
            onClick={() => setIsActive({ instagram: false, youtube: true })}>
            <span className="flex items-center space-x-1 sm:space-x-2">
              <span className="hidden sm:block">YouTube</span>
              <FaYoutube />
            </span>
          </p>
        </div>

        <input
          type="text"
          placeholder="Search Users"
          className="w-full max-w-xs sm:max-w-sm p-2 border rounded focus:outline-none focus:ring-0"
        />
      </div>
      <div className="border-b border-b-gray-400 p-4 flex items-center justify-between">
        <input
          type="checkbox"
          checked={selected.length === data.length}
          onChange={handleMasterCheckboxChange}
        />
        <p className="text-sm">Showing 1 - 10 of 128.1M profiles</p>
      </div>
      <div className="overflow-y-auto h-96 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Influencers</th>
              <th className="px-4 py-2 text-left">Followers</th>
              <th className="px-4 py-2 text-left">Engagement Rate</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-2 flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selected.includes(item.id)}
                    onChange={() => handleCheckboxChange(item.id)}
                  />
                  <span className="ml-2">{item.name}</span>
                </td>
                <td className="px-4 py-2">{item.followers}</td>
                <td className="px-4 py-2">{item.rate}</td>
                <td className="px-4 py-2">
                  <button className="bg-blue-700 text-white py-1 px-3 rounded hover:bg-blue-800">Invite</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SocialUser;
