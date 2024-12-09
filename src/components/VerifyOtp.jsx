import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const VerifyOtp = ({email}) => {
  const [code, setCode] = useState(Array(6).fill(""));
  const [timeLeft, setTimeLeft] = useState(120);
  const [resendCode, setResendCode] = useState(false);
  const inputRefs = useRef([]);
  const navigate = useNavigate()

  useEffect(() => {
    let timer;
    if (timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      setResendCode(true);
    }
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleInputChange = (value, index) => {
    if (!isNaN(value) && value.length > 0) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
      
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      const newCode = [...code];
      newCode[index] = "";
      setCode(newCode);

      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const resendHandler = () => {
    setResendCode(false)
    setTimeLeft(120);
  }

  const verifyHandler = () => {
    navigate('/bussinessdetail')
  }

  console.log(email)

  const isCodeComplete = code.every((digit) => digit.trim() !== "")

  return (
    <div className="bg-white p-8 rounded-lg">
      <img src="/logo.png" alt="Logo" className="h-10 mb-16" />
      <div className="w-3/5">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Verify your Email
        </h1>
        <p className="text-sm text-gray-600 mb-10 text-nowrap">
          Please enter the 6-digit code we just sent to {email}
        </p>
        <div className="flex justify-between gap-2 mb-6">
          {code.map((digit, index) => (
            <React.Fragment key={index}>
              <input
                type="text"
                inputMode="numeric"
                maxLength="1"
                value={digit}
                ref={(el) => (inputRefs.current[index] = el)}
                onChange={(e) => handleInputChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-10 h-10 text-center text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              {index === 2 && (
                <div className="h-['1px'] w-4 border-2 border-black bg-black rounded-sm my-auto"></div>
              )}
            </React.Fragment>
          ))}
        </div>
        <button onClick={verifyHandler} disabled={!isCodeComplete} className={`${isCodeComplete ? 'cursor-default': 'cursor-not-allowed' } bg-red-500 text-white w-full py-2 rounded-md hover:bg-red-600 transition`}>
          Verify
        </button>
        {resendCode ? (
          <p className="text-sm text-gray-700 mt-4 text-left">
            Didn’t receive a code?{" "}
            <span className="text-resend-blue font-normal cursor-pointer" onClick={resendHandler}>Resend Code</span>
          </p>
        ) : (
          <p className="text-sm text-gray-500 mt-4 text-left">
            {`Wait ${Math.floor(timeLeft / 60)}:${
              timeLeft % 60 === 0 ? `0${timeLeft % 60}` : timeLeft % 60
            } seconds before requesting a new code.`}
          </p>
        )}
        
      </div>
    </div>
  );
};

export default VerifyOtp;
