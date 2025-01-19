import { FaShopify } from "react-icons/fa";
import { SiWoocommerce } from "react-icons/si";
import { FaAmazon } from "react-icons/fa";
import { SiFlipkart } from "react-icons/si";
import { MdDeveloperMode } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";

const Integrations = () => {
  const ecommerce = [
    { id: "shopify", name: "Shopify", icon: <FaShopify /> },
    { id: "woocommerce", name: "WooCommerce", icon: <SiWoocommerce /> },
    { id: "flipkart", name: "Flipkart", icon: <SiFlipkart /> },
    { id: "amazon", name: "Amazon", icon: <FaAmazon /> },
  ];

  const email = [
    { id: "google", name: "Sign in with Google", icon: <FaGoogle /> },
    { id: "outlook", name: "Outlook", icon: <FaShopify /> },
    { id: "imap/stmp", name: "IMAP/SMTP", icon: <MdDeveloperMode /> },
  ];

  const renderIntegrationBox = (integrations) =>
    integrations.map((integration) => (
      <div
        key={integration.id}
        className="flex flex-col items-center justify-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
        <div className="flex flex-col items-center justify-center w-full h-48 bg-white border shadow-md rounded-lg p-4">
          <div className="text-4xl mb-2 text-gray-700">{integration.icon}</div>
          <p className="text-lg font-semibold mb-2 text-center">{integration.name}</p>
          <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200">
            Connect
          </button>
        </div>
      </div>
    ));

  return (
    <div className="p-6">
      {/* Ecommerce Integrations */}
      <div className="mb-6">
        <p className="text-xl font-semibold mb-1">Ecommerce Integrations</p>
        <p className="text-sm text-gray-600 mb-4">Product Integration for Campaigns</p>
        <div className="flex flex-wrap -mx-4">{renderIntegrationBox(ecommerce)}</div>
      </div>

      {/* Email Integrations */}
      <div>
        <p className="text-xl font-semibold mb-1">Email Integrations</p>
        <p className="text-sm text-gray-600 mb-4">Influencer invites made simple</p>
        <div className="flex flex-wrap -mx-4">{renderIntegrationBox(email)}</div>
      </div>
    </div>
  );
};

export default Integrations;
