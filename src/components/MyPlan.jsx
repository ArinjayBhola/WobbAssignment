const MyPlan = () => {
  const usageData = [
    {
      label: "No. of Campaigns",
      cost: "₹ 40 / Campaign for excess usage.",
      usage: "0 of 1",
      progress: 0,
    },
    {
      label: "Search Pages",
      cost: "₹ 40 / Search page for excess usage.",
      usage: "10 of 20",
      progress: 0,
    },
    {
      label: "Advance profile view",
      cost: "₹ 40 / Profile view for excess usage.",
      usage: "0 of 5",
      progress: 0,
    },
    {
      label: "Email View",
      cost: "₹ 10 / email view for excess usage.",
      usage: "0 of 50",
      progress: 0,
    },
    {
      label: "Phone View",
      cost: "₹ 10 / phone view for excess usage.",
      usage: "0 of 5",
      progress: 0,
    },
    {
      label: "Influencer Invites",
      cost: "₹ 40 / Influencer invite for excess usage.",
      usage: "0 of 50",
      progress: 0,
    },
  ];

  return (
    <div className="flex items-center justify-center px-4 py-6">
      <div className="p-6 max-w-3xl w-full">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
          <div className="mb-4 sm:mb-0">
            <h2 className="text-xl font-semibold text-gray-800">My Plan: Wobb Free</h2>
            <p className="text-sm text-gray-600">
              You’re on a 14-day free trial. Add your billing details now to start your subscription.
            </p>
          </div>
          <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700">
            See all upgrade options
          </button>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Plan Usage</h3>
          {usageData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <div className="mb-2 sm:mb-0">
                <p className="text-sm font-medium text-gray-700">{item.label}</p>
                <p className="text-xs text-gray-500">{item.cost}</p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                <span className="text-sm text-gray-600 sm:mb-0">{item.usage}</span>
                <div className="relative w-full sm:w-40 h-2 bg-gray-300 rounded-full">
                  <div className="absolute h-2 bg-blue-600 rounded-full"></div>
                </div>
                <p className="text-sm text-blue-600 cursor-pointer sm:ml-4">view detailed usage</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPlan;
