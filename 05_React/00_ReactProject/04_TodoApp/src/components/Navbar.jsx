import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import firbaseImg from '../assets/firebase.png'





const Navbar = ({onOpen, filtereContacts}) => {
  return (
    <>
      <div className=" bg-white max-w-90 mx-auto  mt-4 flex justify-center items-center gap-4 py-4 rounded-xl">
        <img src={firbaseImg} />
        <h2 className="text-xl font-semibold">Firebase Contact App</h2>
      </div>

      <div className="border-none  w-fit  ml-5 mt-8 flex justify-center items-center gap-4">
        <div className="flex items-center gap-2 border border-white rounded-xl py-2 px-6 ">
        <FiSearch className="text-white " />
          <input
          onChange={filtereContacts}
            placeholder="Search Contact"
            className="border-none outline-none text-white ml-2 bg-transparent py-1"
            type="text"
          />
        </div>

        <AiFillPlusCircle onClick={onOpen}  className="text-6xl text-white" />
      </div>
    </>
  );
};

export default Navbar;
