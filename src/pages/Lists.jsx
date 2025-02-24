import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Lists = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header data="Lists" />

        {/* Content */}
        <div className="flex flex-1 flex-col lg:flex-row p-4 gap-4">
          {/* Left Section */}
          <div className="w-full lg:w-1/4 bg-white border-r p-6 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-lg font-semibold mb-4">You haven&apos;t created any lists yet!</h2>
              <button className="w-full text-blue-500 border border-blue-500 rounded-lg px-4 py-2 hover:bg-gray-50">
                + Create list
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 flex items-center justify-center bg-white border rounded-lg p-6">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-500 text-4xl">📥</span>
              </div>
              <h2 className="text-gray-600 text-lg font-medium mt-4">Please select a list to see the data</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lists;
