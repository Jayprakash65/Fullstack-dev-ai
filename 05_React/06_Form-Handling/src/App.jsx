import { useState } from "react";
// import './App.css'
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';




function App() {
  
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    toast('Done')
    toast.success('Done',{
      position: 'bottom-right'
    })
    toast.error('Done')
    toast.warning('Done')
    toast('Done')
    toast('Done')

  }

  return (
    <>
    <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="fname">First Name</label>
          <input 
            type="text" 
            id="fname" 
            name="fname" 
            {...register('fname')}
            
            />
            
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input 
            type="text" 
            id="email" 
            name="email" 
            required 
            {...register('fname')}
            

            />
        </div>

        <div>
          <label htmlFor="phone">Phone</label>
          <input 
            type="tel" 
            id="phone"
            name="phone" 
            
            
            />
        </div>

        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
