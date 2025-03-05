import { IoIosCloseCircle } from "react-icons/io";
import { ChatData } from "../context/ChatContext";
import { MdDelete } from "react-icons/md";
import { LoadingSpinner } from "./Loading";
import { UserData } from "../context/UserContext";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { chats, createChat, createLod, setSelected, deleteChat } = ChatData();
  const { logoutHandler } = UserData();

  const deleteChatHandler = (id) => {
    if (confirm("Are you sure you want to delete this chat?")) {
      deleteChat(id);
    }
  };

  const clickEvent = (id) => {
    setSelected(id);
    toggleSidebar();
  };

  return (
    <div
      className={`fixed inset-0 bg-gradient-to-b from-blue-900 to-blue-700 p-6 shadow-2xl transition-transform transform md:relative md:translate-x-0 md:w-1/4 md:block ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } rounded-2xl md:rounded-none`}
    >
      <button
        className="md:hidden p-3 mb-5 bg-blue-800 hover:bg-blue-600 rounded-full text-3xl text-white flex items-center justify-center"
        onClick={toggleSidebar}
      >
        <IoIosCloseCircle />
      </button>

      <div className="text-3xl font-bold text-white mb-8 text-center">ChatBot</div>

      <div className="mb-6">
        <button
          onClick={createChat}
          className="w-full py-3 bg-blue-800 hover:bg-blue-600 text-white font-medium rounded-xl shadow-md flex items-center justify-center"
        >
          {createLod ? <LoadingSpinner /> : "+ Start New Chat"}
        </button>
      </div>

      <div>
        <p className="text-sm text-gray-300 mb-3 uppercase tracking-wide">Recent Chats</p>
        <div className="max-h-[500px] overflow-y-auto mb-24 md:mb-0 thin-scrollbar space-y-3">
          {chats && chats.length > 0 ? (
            chats.map((chat) => (
              <div
                key={chat._id}
                className="w-full text-left py-3 px-4 bg-blue-800 hover:bg-blue-600 text-white rounded-xl shadow-sm flex justify-between items-center cursor-pointer"
                onClick={() => clickEvent(chat._id)}
              >
                <span className="truncate w-3/4">{chat.latestMessage.slice(0, 38)}...</span>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white text-xl p-2 rounded-lg flex items-center justify-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteChatHandler(chat._id);
                  }}
                >
                  <MdDelete />
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-300">No chats yet</p>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 mb-8 px-6">
        <button
          className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-3 rounded-xl shadow-md font-semibold"
          onClick={logoutHandler}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
