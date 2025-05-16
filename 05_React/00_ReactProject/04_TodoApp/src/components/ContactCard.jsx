import React from "react";
import { VscAccount } from "react-icons/vsc";
import { IoMdTrash } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

import AddAndUpdateContact from "./AddAndUpdateContact";
import useDisclouse from "../hooks/useDisclouse";

const ContactCard = ({ contact }) => {

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
    } catch (error) {
      console.log(error);
    }
  };


    const {isOpen, onClose, onOpen} = useDisclouse(false);
  
    

  return (
    <>
      <div className="bg-amber-300 flex justify-between items-center mx-4  p-4 rounded">
      <VscAccount className="text-5xl" />

      <div>
        <h1 className="font-medium text-xl">{contact.name}</h1>
        <p>{contact.email}</p>
      </div>

      <div className="flex gap-2">
        <FaEdit onClick={onOpen} className="text-3xl cursor-pointer" />
        <IoMdTrash
          onClick={() => deleteContact(contact.id)}
          className="text-3xl"
        />
      </div>
    </div>

    <AddAndUpdateContact contact={contact} isOpen={isOpen} onClose={onClose} isUpdate/>
    
    </>
    
  );
};

export default ContactCard;
