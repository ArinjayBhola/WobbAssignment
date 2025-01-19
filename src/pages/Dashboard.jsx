import Sidebar from "../components/Sidebar";
import Banner from "../components/Banner";
import InfluencerDiscovery from "../components/InfluencerDiscovery";
import Header from "../components/Header";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 h-screen">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-11 flex flex-col w-full md:-ml-5">
        <Header data="Dashboard" />
        <div className="flex-1 overflow-auto">
          <Banner />
          <InfluencerDiscovery />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
