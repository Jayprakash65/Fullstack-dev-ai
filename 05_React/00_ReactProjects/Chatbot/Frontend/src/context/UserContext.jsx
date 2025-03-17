import { createContext, useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { server } from "../main";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [btnLoading, setBtnLoading] = useState(false);

  async function loginUser(email, navigate) {
    setBtnLoading(true);
    try {
      const { data } = await axios.post(`${server}/api/user/login`, { email });

      toast.success(data.message);
      localStorage.setItem("verifyToken", data.verifyToken); // Corrected token storage
      navigate("/verify");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setBtnLoading(false);
    }
  }

  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  async function verifyUser(otp, navigate, fetchChats) {
    const verifyToken = localStorage.getItem("verifyToken");
    setBtnLoading(true);

    if (!verifyToken) {
      toast.error("Verification token is missing. Please login again.");
      setBtnLoading(false);
      return;
    }

    try {
      const { data } = await axios.post(`${server}/api/user/verify`, {
        otp,
        verifyToken,
      });

      toast.success(data.message);
      localStorage.removeItem("verifyToken");
      localStorage.setItem("token", data.token);
      setIsAuth(true);
      setUser(data.user);
      navigate("/");
      fetchChats();
    } catch (error) {
      toast.error(error.response?.data?.message || "Verification failed");
    } finally {
      setBtnLoading(false);
    }
  }

  const [loading, setLoading] = useState(true);

  async function fetchUser() {
    const token = localStorage.getItem("token");

    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const { data } = await axios.get(`${server}/api/user/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setIsAuth(true);
      setUser(data);
    } catch (error) {
      console.error("Fetch user error:", error);
      setIsAuth(false);
    } finally {
      setLoading(false);
    }
  }

  const logoutHandler = (navigate) => {
    localStorage.clear();
    toast.success("Logged out successfully");
    setIsAuth(false);
    setUser(null);
    navigate("/login");
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        loginUser,
        btnLoading,
        isAuth,
        setIsAuth,
        user,
        verifyUser,
        loading,
        logoutHandler,
      }}
    >
      {children}
      <Toaster />
    </UserContext.Provider>
  );
};

export const UserData = () => useContext(UserContext);
