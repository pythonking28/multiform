import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OTPPage from "./components/OTPPage";
import BussinessDetail from "./components/BussinessDetail";
import SignUp from "./components/SignUp";
import { useState } from "react";


const App = () => {
  const [email, setEmail] = useState("")
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignUp email={email} setEmail={setEmail} />
    },
    {
      path: "/otpverification",
      element: <OTPPage email={email} />
    },
    {
      path: "/bussinessdetail",
      element: <BussinessDetail />
    },
  ])
  return (
    <>
     <RouterProvider router={router} />
    </>
  );
};

export default App;
