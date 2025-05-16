import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase.js";

import ContactCard from "./components/ContactCard.jsx";
import AddAndUpdateContact from "./components/AddAndUpdateContact.jsx";
import useDisclouse from "./hooks/useDisclouse.js";
import { ToastContainer, toast } from "react-toastify";
import NotFound from "./components/NotFound.jsx";

function App() {
  const [contacts, setContacts] = useState([]);

  const { isOpen, onClose, onOpen } = useDisclouse();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");

        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });

          setContacts(contactLists);

          return contactLists;
        });
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);


  const filterConatacts = (e) => {
    const value = e.target.value;

    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactLists.filter((contact) => {
        return contact.name.toLowerCase().includes(value.toLowerCase());
      });

      setContacts(filteredContacts);

      return filteredContacts;
    });
  };

  return (
    <>
      <div className="max-w-98 mx-auto bg-gray-700 h-[852px] pt-2 mt-10">
        <Navbar onOpen={onOpen} filtereContacts={filterConatacts} />

        <div className={`${contacts.length <=0 ? 'flex items-center justify-center mt-60': 'mt-12 flex flex-col gap-4'}`}>
          {contacts.length <=0 ? <NotFound/> :contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>

        <AddAndUpdateContact onClose={onClose} isOpen={isOpen} />

        <ToastContainer />
      </div>
    </>
  );
}

export default App;
