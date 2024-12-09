import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const branches = [
  {
    country: "Singapore",
    image: "public/singapore.png",
    type: "Head Office",
    company: "XYZ Pvt. Ltd.",
    address: "Road to nowhere, 06-404, 500 Internal Error",
    flag: "🇸🇬",
  },
  {
    country: "Hong Kong",
    image: "public/hongkong.png",
    type: "Branches",
    company: "XYZ Pte. Ltd.",
    address: "The Infinite Loop Office, 404 Timeout Plaza",
    flag: "🇭🇰",
  },
  {
    country: "USA",
    image: "public/united.png",
    type: "Branches",
    company: "XYZ Inc.",
    address: "Nulltown, Buglandia, 500 0xDEADBEE",
    flag: "🇺🇸",
  },
];

const LayoutCards = () => {
  const navigate = useNavigate();
  return (
    <div className="relative">
      <div className="first-circle">
        <div className="second-circle"></div>
        <div className="third-circle"></div>
        <div className="fourth-circle"></div>
      </div>

      <button
        onClick={() => navigate('/')}
        className="bg-transparent text-white flex items-center gap-2 rounded-md hover:bg-opacity-30 focus:outline-none pl-4"
      >
        <FaArrowLeft height={16} width={16} className="h-4 w-4" />{" "}
        <span>Back</span>
      </button>

      {/* Layout Cards */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-white text-2xl font-semibold mb-10 mt-10 tracking-wide">
          Layout Cards
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 grid-rows-2 gap-8 justify-center items-center">
          {branches.map((branch, index) => (
            <div
              key={index}
              className={`${
                index === 0 ? "col-span-2 verify-card-1" : "col-span-1"
              } bg-gradient-to-br from-[#00000037] to-[#ffffff10] w-72 h-52 bg-opacity-10 backdrop-blur-xl p-4 rounded-lg shadow-md text-white`}
            >
              <img
                src={branch.image}
                width={48}
                alt={`${branch.country} flag`}
              />
              <h2 className="text-lg font-semibold flex items-center gap-2 ml-1 ">
                {branch.country}
              </h2>
              <p className="text-sm opacity-70 ml-1 mb-5">{branch.type}</p>
              <p className="text-sm mt-2 ml-1">{branch.company}</p>
              <p className="text-sm mt-1 ml-1">{branch.address}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LayoutCards;
