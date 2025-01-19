import { CiLocationOn } from "react-icons/ci";
import { FaHistory } from "react-icons/fa";
import { MdPayment } from "react-icons/md";

const ManageSubscriptions = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      {/* Title */}
      <p className="font-semibold text-2xl text-gray-800 mb-4">Manage Subscription</p>

      {/* Plan Information */}
      <div className="font-semibold text-xl text-green-600 mb-6">Premium</div>

      {/* Options */}
      <div className="space-y-4 w-full max-w-md">
        <p className="flex items-center gap-4 text-blue-600 hover:text-blue-700 cursor-pointer text-lg transition">
          <span className="text-2xl">
            <CiLocationOn />
          </span>
          <span>Billing & Shipping Addresses</span>
        </p>
        <p className="flex items-center gap-4 text-blue-600 hover:text-blue-700 cursor-pointer text-lg transition">
          <span className="text-2xl">
            <MdPayment />
          </span>
          <span>Payment Methods</span>
        </p>
        <p className="flex items-center gap-4 text-blue-600 hover:text-blue-700 cursor-pointer text-lg transition">
          <span className="text-2xl">
            <FaHistory />
          </span>
          <span>Billing History</span>
        </p>
      </div>
    </div>
  );
};

export default ManageSubscriptions;
