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

  return (
    <div className="w-full flex flex-col mt-5">
      <div className="text-lg font-semibold text-left border border-gray-200 p-2">Filter By</div>
      <div className="overflow-y-auto h-96 border p-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        {data.map((item) => (
          <div
            key={item.id}
            className="p-2 border-b text-left border-gray-200">
            {item.option}
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
