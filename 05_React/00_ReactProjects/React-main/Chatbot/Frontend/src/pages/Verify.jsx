import React, { useState } from "react";
import { UserData } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { LoadingSpinner } from "../components/Loading";
import { ChatData } from "../context/ChatContext";

const Verify = () => {
  const [otp, setOtp] = useState("");

  const { verifyUser, btnLoading } = UserData();
  const { fetchChats } = ChatData();

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    verifyUser(Number(otp), navigate, fetchChats);
  };
  
  return (
    <div 
      className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-300 via-pink-200 to-yellow-200 relative"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20" 
        style={{ backgroundImage: 'url(https://source.unsplash.com/featured/?nature,abstract)' }}
      ></div>
      <form
        className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-2xl w-full md:w-[400px] z-10"
        onSubmit={submitHandler}
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Verify Your Account</h2>
        <div className="mb-5">
          <label className="block text-gray-700 mb-2 text-sm font-medium" htmlFor="otp">
            Enter OTP:
          </label>
          <input
            type="number"
            id="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="border border-gray-300 p-3 w-full rounded-lg outline-none focus:ring-4 focus:ring-purple-400"
            placeholder="Enter your OTP"
            required
          />
        </div>

        <button
          className="w-full bg-purple-500 hover:bg-purple-700 text-white text-lg py-3 rounded-lg shadow-md transition duration-300 ease-in-out"
          disabled={btnLoading}
        >
          {btnLoading ? <LoadingSpinner /> : "Verify"}
        </button>
      </form>
    </div>
  );
};

export default Verify;
