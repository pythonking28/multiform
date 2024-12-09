import Footer from "./Footer";
import LayoutCards from "./LayoutCard";
import VerifyOtp from "./VerifyOtp";


const OTPPage = ({email}) => {
  return (
    <>
      <div className="flex gap-20 min-h-screen">
        <div className="w-1/2 bg-[#696969] p-8 overflow-hidden">
          <LayoutCards />
        </div>
        <div className="pt-12 w-1/2 bg-white">
          <VerifyOtp email={email} />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default OTPPage;
