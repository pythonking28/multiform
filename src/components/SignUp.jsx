import { useNavigate } from "react-router-dom";
import LayoutCards from "./LayoutCard";
import Footer from "./Footer";

const SignUpPage = ({ email, setEmail }) => {
  const navigate = useNavigate();
  const signUpHandler = () => {
    navigate("/otpverification");
  };
  return (
    <>
      <div className="flex gap-20 min-h-screen">
        <div className="w-1/2 bg-[#696969] p-8 overflow-hidden">
          <LayoutCards />
        </div>

        <div className="pt-12 w-1/2 bg-white">
          <div className="w-3/5 pt-16 mt-16">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">SignUp</h1>
            <form className="flex flex-col justify-center items-start gap-3 mt-8">
              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="name">Name:</label>
                <input type="text" placeholder="Please Enter your Fullname" className="border-2 border-gray-200 outline-none px-3 py-1 w-3/4 rounded-lg"/>
              </div>
              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-2 border-gray-200 outline-none px-3 py-1 w-3/4 rounded-lg"
                  placeholder="Please Enter your Email"
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="name">Password:</label>
                <input
                  type="password"
                  placeholder="Please Enter your Password"
                  className="border-2 border-gray-200 outline-none px-3 py-1 w-3/4 rounded-lg"
                />
              </div>

              <button
                onClick={signUpHandler}
                disabled={!email}
                className={`${email ? 'cursor-pointer' : 'cursor-not-allowed'} bg-red-500 text-white w-full py-2 rounded-md hover:bg-red-600 transition mt-6`}
              >
                SignUp
              </button>
            </form>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
