const WobbDashboard = () => {
  return (
    <div className="text-left m-2 sm:m-4 lg:m-8">
      <div className="border-b border-gray-500 mt-3 mb-4">
        <p className="text-2xl font-semibold mb-1">Welcome to Wobb Dashboard</p>
        <p className="text-sm sm:text-base">Customize Wobb according to your needs</p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center border-b border-gray-500 py-4">
        <div className="flex flex-col sm:w-2/3">
          <p className="text-lg sm:text-xl font-medium mb-1">Change Logo</p>
          <p className="text-sm sm:text-base">Upload your company logo</p>
        </div>
        <input
          type="file"
          className="text-center mt-2 sm:mt-0 sm:ml-4"
        />
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center border-b border-gray-500 py-4">
        <div className="flex flex-col sm:w-2/3">
          <p className="text-lg sm:text-xl font-medium mb-1">Domain Name</p>
          <p className="text-sm sm:text-base">Enter the domain name you want to whitelist</p>
        </div>
        <input
          type="text"
          placeholder="Enter Your Domain Name"
          className="border border-gray-300 focus:outline-none focus:ring-0 h-10 w-full sm:w-auto text-center mt-2 sm:mt-0 sm:ml-4"
        />
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center border-b border-gray-500 py-4">
        <div className="flex flex-col sm:w-2/3">
          <p className="text-lg sm:text-xl font-medium mb-1">Enter Your Site Name</p>
          <p className="text-sm sm:text-base">This will display as the title of your site</p>
        </div>
        <input
          type="text"
          placeholder="Enter Your Site Name"
          className="border border-gray-300 focus:outline-none focus:ring-0 h-10 w-full sm:w-auto text-center mt-2 sm:mt-0 sm:ml-4"
        />
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full mt-4 hover:bg-blue-700 transition">
        Save
      </button>
    </div>
  );
};

export default WobbDashboard;
