import Chart from "../components/Chart";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Analytics = () => {
  const chartData1 = {
    labels: ["week 1", "week 2", "week 3", "week 4"],
    datasets: [
      {
        label: "Instagram",
        data: [0, 60, 0, 0],
        backgroundColor: "#1DA1F2",
      },
      {
        label: "YouTube",
        data: [0, 1, 0, 0],
        backgroundColor: "#FF0000",
      },
    ],
  };

  const chartData2 = {
    labels: ["week 1", "week 2", "week 3", "week 4"],
    datasets: [
      {
        label: "Instagram",
        data: [20, 30, 10, 5],
        backgroundColor: "#1DA1F2",
      },
      {
        label: "YouTube",
        data: [5, 10, 15, 10],
        backgroundColor: "#FF0000",
      },
    ],
  };

  const chartData3 = {
    labels: ["week 1", "week 2", "week 3", "week 4"],
    datasets: [
      {
        label: "Instagram",
        data: [15, 25, 35, 45],
        backgroundColor: "#1DA1F2",
      },
      {
        label: "YouTube",
        data: [10, 20, 30, 40],
        backgroundColor: "#FF0000",
      },
    ],
  };

  const chartData4 = {
    labels: ["week 1", "week 2", "week 3", "week 4"],
    datasets: [
      {
        label: "Instagram",
        data: [0, 10, 20, 30],
        backgroundColor: "#1DA1F2",
      },
      {
        label: "YouTube",
        data: [5, 15, 25, 35],
        backgroundColor: "#FF0000",
      },
    ],
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 w-full h-screen overflow-auto">
        <Header data={"Analytics"} />
        <div className="p-6 bg-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex-1 md:min-h-[400px] max-w-full bg-white rounded-md p-4 shadow-lg">
              <Chart
                data={chartData1}
                title="Content"
              />
            </div>
            <div className="flex-1 md:min-h-[400px] max-w-full bg-white rounded-md p-4 shadow-lg">
              <Chart
                data={chartData2}
                title="Content Performance"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="flex-1 md:min-h-[400px] max-w-full bg-white rounded-md p-4 shadow-lg">
              <Chart
                data={chartData3}
                title="Creators"
              />
            </div>
            <div className="flex-1 md:min-h-[400px] max-w-full bg-white rounded-md p-4 shadow-lg">
              <Chart
                data={chartData4}
                title="Prospects"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
