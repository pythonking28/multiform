
import { AiOutlineCheck } from "react-icons/ai";

const StepIndicator = ({ currentStep }) => {
  const steps = [
    "Business Type",
    "Business Details",
    "Authorized Representative",
    "Business Owners",
    "Company Directors",
    "Support Information",
    "Add Details",
    "Complete Registration",
  ];

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-lg font-semibold text-gray-800 mb-8 mt-4">
        Multi-Step Process Form Assignment
      </h2>
      <div className="w-full max-w-4xl">
        <div className="flex items-center justify-between relative">
          <div className="absolute top-1/5 w-full h-1 bg-gray-300"></div>
          <div
            className="absolute top-1/5 h-1 bg-green-500"
            style={{
              width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
            }}
          ></div>
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center justify-center relative z-1 ${
                index < currentStep
                  ? "h-4 w-4 rounded-full bg-green-500 text-white border-green-500 border-[1px]"
                  : "h-4 w-4 rounded-full border-gray-300 bg-white border-[4px]"
              }`}
            >
              {index < currentStep - 1 ? (
                <span className="h-[1px] flex items-center justify-center">
                  <AiOutlineCheck width={1} height={1} />
                </span> 
              ) : (
                <div className="h-2 w-2 bg-white rounded-full"></div> 
              )}

              <span key={index} className={`absolute top-6 text-xs text-gray-500`}>
                {step}
              </span>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepIndicator;
