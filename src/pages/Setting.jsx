import { useState } from "react";
import { RiTeamLine, RiSecurePaymentLine } from "react-icons/ri";
import { LuPaintBucket } from "react-icons/lu";
import { IoMdSettings } from "react-icons/io";
import { MdSubscriptions, MdLanguage } from "react-icons/md";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import InviteTeam from "../components/InviteTeam";
import WobbDashboard from "../components/WobbDashboard";
import Integrations from "../components/Integrations";
import ManageSubscriptions from "../components/ManageSubscriptions";
import MyPlan from "../components/MyPlan";
import LanguageCurrency from "../components/LanguageCurrency";

const sections = [
  {
    title: "ORGANIZATION",
    items: ["Invite Team"],
    icon: <RiTeamLine />,
  },
  {
    title: "WHITE LABELLING",
    items: ["Wobb Dashboard"],
    icon: <LuPaintBucket />,
  },
  {
    title: "YOUR INTEGRATIONS",
    items: ["Integrations"],
    icon: <IoMdSettings />,
  },
  {
    title: "BILLING",
    items: ["Manage Subscriptions", "My Plan", "Language & Currency"],
    icons: [
      <MdSubscriptions key="subscriptions" />,
      <RiSecurePaymentLine key="secure-payment" />,
      <MdLanguage key="language" />,
    ],
  },
];

const Setting = () => {
  const [activeItem, setActiveItem] = useState("Manage Subscriptions");

  const renderData = () => {
    switch (activeItem) {
      case "Invite Team":
        return <InviteTeam />;
      case "Wobb Dashboard":
        return <WobbDashboard />;
      case "Integrations":
        return <Integrations />;
      case "Manage Subscriptions":
        return <ManageSubscriptions />;
      case "My Plan":
        return <MyPlan />;
      case "Language & Currency":
        return <LanguageCurrency />;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
      <Sidebar className="hidden lg:block" />

      <div className="flex-1 flex flex-col">
        <Header data="Settings" />

        <div className="flex flex-1 flex-col lg:flex-row">
          <div className="w-full lg:w-1/4 bg-white border-r p-6 ml-5 mt-2">
            {sections.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className="font-bold">
                <h2 className="text-sm mb-4 text-gray-600">{section.title}</h2>
                {section.items.map((item, itemIndex) => (
                  <p
                    key={itemIndex}
                    className={`flex items-center mb-4 cursor-pointer rounded-md p-2 ${
                      activeItem === item ? "bg-gray-200" : "hover:bg-gray-50"
                    }`}
                    onClick={() => setActiveItem(item)}>
                    <span className="mr-2">{section.icons ? section.icons[itemIndex] : section.icon}</span>
                    {item}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="flex-1 bg-white border-r mx-5 my-2">{renderData()}</div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
