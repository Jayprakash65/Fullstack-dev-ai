import React, { useState } from "react";
import { UserData } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { LoadingSpinner } from "../components/Loading";

const Login = () => {
  const [email, setEmail] = useState("");

  const { loginUser, btnLoading } = UserData();

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    loginUser(email, navigate);
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
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome Back!</h2>
        <div className="mb-5">
          <label className="block text-gray-700 mb-2 text-sm font-medium" htmlFor="email">
            Enter Your Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 p-3 w-full rounded-lg outline-none focus:ring-4 focus:ring-purple-400"
            placeholder="you@example.com"
            required
          />
        </div>

        <button
          className="w-full bg-purple-500 hover:bg-purple-700 text-white text-lg py-3 rounded-lg shadow-md transition duration-300 ease-in-out"
          disabled={btnLoading}
        >
          {btnLoading ? <LoadingSpinner /> : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
