const Banner = () => {
  return (
    <div className="w-full mt-2">
      <div className="bg-gray-800 text-white text-center rounded-lg">
        <div className="pt-1">Only 6 days left of exploring for free. Keep your access uninterrupted!</div>
        <div>
          Keep the momentum going -
          <button className="bg-green-600 text-white px-3 py-1 rounded-lg ml-2 mb-2 hover:bg-green-700">
            Upgrade Now
          </button>
        </div>
      </div>
      <div className="bg-gray-800 text-white text-center mt-2 rounded-lg">
        <p className="p-1">
          After unlocking the locked content, you have a one-month window to view your unlocked content. After this
          period, your credits will be deducted to view that content again.
        </p>
      </div>
    </div>
  );
};

export default Banner;
