import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../components/Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import Header from "../components/Header";
import { ChatData } from "../context/ChatContext";
import { CgProfile } from "react-icons/cg";
import { FaRobot } from "react-icons/fa";
import { LoadingBig, LoadingSmall } from "../components/Loading";
import { IoMdSend } from "react-icons/io";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const {
    fetchResponse,
    messages,
    prompt,
    setPrompt,
    newRequestLoading,
    loading,
    chats,
  } = ChatData();

  const submitHandler = (e) => {
    e.preventDefault();
    fetchResponse();
  };

  const messagecontainerRef = useRef();

  useEffect(() => {
    if (messagecontainerRef.current) {
      messagecontainerRef.current.scrollTo({
        top: messagecontainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <div className="flex h-screen bg-gradient-to-r from-purple-300 via-pink-200 to-yellow-200 relative">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <div className="flex flex-1 flex-col bg-white bg-opacity-90 z-10">
        <button
          onClick={toggleSidebar}
          className="md:hidden p-4 bg-purple-500 text-white text-2xl rounded-lg shadow-md m-4"
        >
          <GiHamburgerMenu />
        </button>

        <div className="flex-1 p-6 mb-20 md:mb-0">
          <Header />

          {loading ? (
            <LoadingBig />
          ) : (
            <div
              className="flex-1 p-6 max-h-[600px] overflow-y-auto mb-20 md:mb-0 thin-scrollbar"
              ref={messagecontainerRef}
            >
              {messages && messages.length > 0 ? (
                messages.map((e, i) => (
                  <div key={i}>
                    <div className="mb-4 p-4 rounded-lg bg-purple-500 text-white flex gap-3 shadow-md">
                      <div className="bg-white p-2 rounded-full text-purple-500 text-2xl h-10 w-10 flex items-center justify-center">
                        <CgProfile />
                      </div>
                      <span>{e.question}</span>
                    </div>

                    <div className="mb-4 p-4 rounded-lg bg-pink-400 text-white flex gap-3 shadow-md">
                      <div className="bg-white p-2 rounded-full text-pink-500 text-2xl h-10 w-10 flex items-center justify-center">
                        <FaRobot />
                      </div>
                      <p dangerouslySetInnerHTML={{ __html: e.answer }}></p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-700">No chat yet</p>
              )}

              {newRequestLoading && <LoadingSmall />}
            </div>
          )}
        </div>
      </div>

      {chats && chats.length === 0 ? (
        ""
      ) : (
        <div className="fixed bottom-0 right-0 left-auto p-4 bg-white bg-opacity-90 w-full md:w-[75%] shadow-lg z-10">
          <form
            onSubmit={submitHandler}
            className="flex justify-center items-center"
          >
            <input
              className="flex-grow p-4 bg-gray-200 rounded-l-lg text-gray-800 outline-none focus:ring-4 focus:ring-purple-400"
              type="text"
              placeholder="Enter a prompt here"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              required
            />
            <button className="p-4 bg-purple-500 rounded-r-lg text-2xl text-white hover:bg-purple-700 transition duration-300 ease-in-out">
              <IoMdSend />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Home;
