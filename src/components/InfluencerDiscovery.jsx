import Filter from "./Filter";
import SocialUser from "./SocialUser";

const InfluencerDiscovery = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 sm:col-span-3">
        <Filter />
      </div>
      <div className="col-span-12 sm:col-span-9">
        <SocialUser />
      </div>
    </div>
  );
};

export default InfluencerDiscovery;
