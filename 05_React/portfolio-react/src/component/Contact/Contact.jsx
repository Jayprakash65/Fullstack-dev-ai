import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import { ToastContainer, toast } from 'react-toastify';




const Contact = () => {

    const onSubmit = async (event) => {
        
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "50c56b16-0f20-468a-9687-a3c253f15cf4");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          toast.success('Message is sent 😊',{
            position: 'top-right'
          })
        }
      };



  return (
    <> 
    <ToastContainer />
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can conatct anytime</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /> <p>jayprakashdev@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" /> <p>9623487531</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /> <p>Kolkata, India</p>
                    </div>
                </div>
            </div>

            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter Your Email' name="" id="" />
                <label htmlFor="">Write Your message here</label>
                <textarea name="message" rows='8' placeholder='Enter Your message' id=""></textarea>
                <button className='contact-submit'>Submit Now</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Contact
