import { useState } from "react";

const Filter = () => {
  const data = [
    { id: "followers", option: "Followers" },
    { id: "engagement", option: "Engagement" },
    { id: "reels", option: "Average Reels Play" },
    { id: "location", option: "Location" },
    { id: "language", option: "Language" },
    { id: "partnership", option: "Partnership" },
    { id: "interest", option: "Interest" },
    { id: "age", option: "Age" },
    { id: "lookalikes", option: "Lookalikes" },
    { id: "bio", option: "Bio" },
    { id: "keywords", option: "Keywords" },
    { id: "contactInformation", option: "Contact Information" },
    { id: "lastPost", option: "Last Post" },
    { id: "accountType", option: "Account Type" },
    { id: "growthRate", option: "Growth Rate" },
  ];

  const [expanded, setExpanded] = useState(null);
  const [filterValues, setFilterValues] = useState({});

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  const handleChange = (id, key, value) => {
    setFilterValues({
      ...filterValues,
      [id]: { ...filterValues[id], [key]: value },
    });
  };

  return (
    <div className="w-full flex flex-col mt-5">
      <div className="text-lg font-semibold text-left border border-gray-200 p-2">Filter By</div>
      <div className="overflow-y-auto h-96 border p-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        {data.map((item) => (
          <div
            key={item.id}
            className="border-b border-gray-200">
            <div
              className="flex justify-between items-center p-2 cursor-pointer"
              onClick={() => toggleExpand(item.id)}>
              <span className="font-medium">{item.option}</span>
              <span className="text-gray-400">{expanded === item.id ? "▲" : "▼"}</span>
            </div>
            {expanded === item.id && (
              <div className="p-2">
                {item.hasRange ? (
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="From"
                      className="border border-gray-300 rounded px-2 py-1 w-1/2 focus:outline-none focus:ring-0"
                      onChange={(e) => handleChange(item.id, "from", e.target.value)}
                    />
                    <input
                      type="number"
                      placeholder="To"
                      className="border border-gray-300 rounded px-2 py-1 w-1/2 focus:outline-none focus:ring-0"
                      onChange={(e) => handleChange(item.id, "to", e.target.value)}
                    />
                  </div>
                ) : (
                  <input
                    type="text"
                    placeholder={`Enter ${item.option.toLowerCase()}`}
                    className="border border-gray-300 rounded px-2 py-1 w-full focus:outline-none focus:ring-0"
                    onChange={(e) => handleChange(item.id, "value", e.target.value)}
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="border text-center mt-4">
        <button className="bg-blue-700 text-white py-2 px-4 w-full sm:w-1/2 my-2 rounded hover:bg-blue-800">
          Apply
        </button>
      </div>
    </div>
  );
};

export default Filter;
