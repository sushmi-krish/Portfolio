import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './contact.css';
import { SlSocialGithub, SlSocialLinkedin } from "react-icons/sl";
 const  Contact = ()=>{
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
      const navigate = useNavigate();
    const handleChange =(e)=>{
        const words = e.target.value.trim().split(/\s+/);
        if(words<=250){
            setMessage(e.target.value);
        }

    }
    const handleSubmit =(e)=>{
        e.preventDefault(); 
        setSubmitted(true);
        alert(`Thanks for reaching out. This is a demo mode. Please email me directly at "sushmithakrishnamoorthy@gmail.com"`);
        //Refresh the page
        setTimeout(()=>{
           navigate("/");
    },1500)
    };

    return(
      <>
      <section className="contactMe">
        <div className="welcomeMessage">
            <h1>Contact Me</h1>
            <p>I’m always open to discussing new projects, creative ideas, or opportunities to contribute.Please feel free to contact me! </p>
            <div className="socialIcon">
                <a href = "https://github.com/sushmi-krish" aria-label="GitHub"   rel="noopener noreferrer" target="_blank"><SlSocialGithub /></a>
                <a href = "https://www.linkedin.com/in/sushmitha-krishnamoorthy-53610a115/" aria-label="GitHub"  className="LinkedIn"  rel="noopener noreferrer" target="_blank"><SlSocialLinkedin /></a>
              </div>


        </div>
        <div className="Form">
            <form>
                <div className="Formgroup">
        <label className="name">Name:</label>
        <input type='text' />
        </div>
         <div className="Formgroup">
        <label className="name">Company Name:</label><input type='text' />
        </div>
         <div className="Formgroup">
        <label className="name">Email ID:</label><input type='email' />
        </div>
         <div className="Formgroup">
        <label className="name">Message</label><textarea name="message" value={message} onChange={handleChange} ></textarea>
        </div>
        <div className="send">
        <button className="submit" disabled={submitted} onClick={handleSubmit}>{submitted ? "Message Sent" : "Send"}</button>
        </div>
        </form>
        </div>
      </section>
      </>
    )
 }
 export default Contact;