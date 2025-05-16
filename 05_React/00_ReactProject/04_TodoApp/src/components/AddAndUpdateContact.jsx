
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import Modal from "./Modal";
 import { ErrorMessage, Field, Form, Formik } from 'formik';
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from 'yup';


const AddAndUpdateContact = ({onClose, isOpen, isUpdate, contact}) => {

    const addContact = async (contact) => {
        try {
            const contactRef = collection(db, "contacts");
            await addDoc(contactRef, contact);

            onClose();
            toast.success('Contact added');


        } catch (error) {
            console.log(error);
            
        }
    }


    const UpdateContact = async (contact, id) => {
        try {
            const contactRef = doc(db, "contacts", id);
            await updateDoc(contactRef, contact);

            onClose()

        } catch (error) {
            console.log(error);
            
        }
    }
    
    const contactSchemaValidation = Yup.object().shape({
        name:Yup.string().required("Name is required"),
        email:Yup.string().email().required("Email is required")

    })



  return (
    <div>
        <Modal isOpen={isOpen} onClose={onClose}> 
          <Formik 
            validationSchema={contactSchemaValidation}
            initialValues={isUpdate ? {
                name: contact.name,
                email: contact.email
            }:{
                name: "",
                email: ""
            }}

            onSubmit={(values) => {
                console.log(values);
                
                isUpdate? UpdateContact(values, contact.id):
                addContact(values);
                
            }}
          
          >
            <Form className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name">Name </label>
                    <Field type="text" name="name" className="border h-10 px-1" />
                    <div className="text-red-500">
                        <ErrorMessage name='name' />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email</label>
                    <Field type="text" name="email" className="border h-10 px-1" />
                    <div className="text-red-500">
                        <ErrorMessage name='email' />
                    </div>
                </div>

                <div className="flex justify-center mt-2">
                    <button className="bg-amber-500 border px-8 py-3 rounded">{isUpdate?"Update": "Add"} Contact</button>
                </div>
            </Form>
          </Formik>
        </Modal>
    </div>
  )
}

export default AddAndUpdateContact;