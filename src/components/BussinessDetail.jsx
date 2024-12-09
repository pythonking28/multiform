import { useState } from "react";

import StepIndicator from "./StepIndicator";
import FileUpload from "./FileUpload";

const BussinessDetail = () => {
  const [currentStep, setCurrentStep] = useState(2);

  return (
    <div className="bg-gray-50">
      <StepIndicator currentStep={currentStep} />
      <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8 mt-10">
        <div className="w-full max-w-5xl bg-white p-12 rounded-lg shadow-md">
          <h1 className="text-2xl text-gray-800 font-semibold mb-2">
            Tell us more about your business
          </h1>
          <p className="text-gray-500 mb-10">
            Your info is like the Wi-Fi password—totally crucial for keeping
            things running, impressing the money folks, and making sure you get
            top-notch service without any buffering!
          </p>
          <form className="grid grid-cols-2 gap-6">
            {/* Legal Name */}
            <div className="col-span-1">
              <label className="block text-[16px] text-gray-800 mb-2 tracking-wide">
                Legal Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                placeholder="Legal name"
              />
            </div>
            {/* Doing Business As */}
            <div className="col-span-1">
              <label className="block text-[16px] text-gray-800 mb-2 tracking-wide">
                Doing business as <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                placeholder="Doing business as"
              />
            </div>
            {/* Company Registration Number */}
            <div className="col-span-1">
              <label className="block text-[16px] text-gray-800 mb-2 tracking-wide">
                Company Registration Number{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                placeholder="Company Registration Number"
              />
            </div>
            {/* Random Registration Number */}
            <div className="col-span-1">
              <label className="block text-[16px] text-gray-800 mb-2 tracking-wide">
                Random Registration Number{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                placeholder="Random Registration Number"
              />
            </div>
            {/* Website URL */}
            <div className="col-span-1">
              <label className="block text-[16px] text-gray-800 mb-2 tracking-wide">
                Website URL <span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                placeholder="Website URL"
              />
            </div>
            {/* Industry Name */}
            <div className="col-span-1">
              <label className="block text-[16px] text-gray-800 mb-2 tracking-wide">
                Industry Name <span className="text-red-500">*</span>
              </label>
              <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200">
                <option value="">Select Industry</option>
                <option value="">ABC pte. ltd</option>
                <option value="">XYZ pvt. ltd</option>
                <option value="">DEF org. ltd.</option>
              </select>
            </div>
            {/* Random Dropdown */}
            <div className="col-span-1">
              <label className="block text-[16px] text-gray-800 mb-2 tracking-wide">
                One Random Dropdown? <span className="text-red-500">*</span>
              </label>
              <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200">
                <option value="">Options nai options</option>
                <option value="">Options 1</option>
                <option value="">Options 2</option>
                <option value="">Options 3</option>
              </select>
            </div>
            {/* Which dropdown would you like to select? * */}
            <div className="col-span-1">
              <label className="block text-[16px] text-gray-800 mb-2 tracking-wide">
                Which dropdown would you like to select?{" "}
                <span className="text-red-500">*</span>
              </label>
              <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200">
                <option value="">More options</option>
                <option value="">Options 1</option>
                <option value="">Options 2</option>
                <option value="">Options 3</option>
              </select>
            </div>
            {/* Another Random Dropdown */}
            <div className="col-span-1">
              <label className="block text-[16px] text-gray-800 mb-2 tracking-wide">
                Another Random Dropdown Appears{" "}
                <span className="text-red-500">*</span>
              </label>
              <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200">
                <option value="">Return of the options</option>
                <option value="">Options 1</option>
                <option value="">Options 2</option>
                <option value="">Options 3</option>
              </select>
            </div>
            {/* Which dropdown would you like to select? * */}
            <div className="col-span-1">
              <label className="block text-[16px] text-gray-800 mb-2 tracking-wide">
                Account Usage Intent <span className="text-red-500">*</span>
              </label>
              <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200">
                <option value="">Account Usage Intent</option>
                <option value="">Paid Yearly</option>
                <option value="">Paid Monthly</option>
                <option value="">Free</option>
              </select>
            </div>

            {/* Random Count Per Month */}
            <div className="col-span-1">
              <label className="block text-[16px] text-gray-800 mb-2 tracking-wide">
                Random count per month <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                inputMode="numeric"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                placeholder="Put the value get the answer"
              />
            </div>
            {/* Expected Total Visits */}
            <div className="col-span-1">
              <label className="block text-[16px] text-gray-800 mb-2 tracking-wide">
                Expected total visits in this page{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                inputMode="numeric"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                placeholder="In Number"
              />
            </div>
            {/* Purpose */}
            <div className="col-span-1">
              <label className="block text-[16px] text-gray-800 mb-2 tracking-wide">
                Purpose of using fake form{" "}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                className="w-full h-28 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 resize-none"
                placeholder="Purpose of using fake form"
                rows={2}
              ></textarea>
            </div>
            {/* Description */}
            <div className="col-span-1">
              <label className="block text-[16px] text-gray-800 mb-2 tracking-wide">
                Ek description toh banta hai{" "}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                className="w-full h-28 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 resize-none"
                placeholder="Product Description"
                rows={2}
              ></textarea>
            </div>
            {/* Contact Email */}
            <div className="col-span-2">
              <label className="block text-[16px] text-gray-800 mb-2 tracking-wide">
                Contact email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                placeholder="Contact email"
              />
            </div>
            
            <FileUpload data="Certification of Incorporation" info="Upload the incorporation certificate" />
            <FileUpload data="Company Logo" info="Upload the company logo" />
            {/* Buttons */}
            <div className="col-span-2 flex justify-between mt-6">
              <button
                type="button"
                className="bg-white border-[2px] border-black text-gray-800 px-4 py-2 rounded-xl shadow hover:bg-gray-300"
              >
                Previous
              </button>
              <button
                type="submit"
                className="bg-red-600 text-white px-6 py-2 rounded-lg shadow hover:bg-red-700"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BussinessDetail;
