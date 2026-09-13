import React, { useState } from 'react';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';



export default function NewsletterCard() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post(`${backendUrl}/api/send-email/create`, {
        email,
        subject,
        message
      });
      if(response.data.success){
        toast.success('Email sent successfully!', {
          position: "top-right",
          autoClose: 5000
        });
      }
    }catch(error){
      toast.error('Failed to send email. Please try again later.', {
        position: "top-right",
        autoClose: 5000
      });
      console.log("Error while sending email:", error);
    }
    
    
    console.log('Sending email data to backend:', email);
  };

  return (
    <div className="relative w-full max-w-2xl bg-[#f8f9fa] border border-[#e0e0e0] rounded-[28px] p-8 md:p-10 font-sans shadow-sm overflow-hidden mx-auto" id="contact-section">
      
      {/* Main card text content layout */}
      <div className="max-w-xl mb-6">
        <h2 className="text-3xl md:text-4xl font-normal text-[#1f1f1f] tracking-tight leading-tight">
          Please, let's stay in touch! <br />
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-[#5f6368]">
          Input your email and a message that you would like to send me, and I will get back to you as soon as possible. Your privacy is important to me, and your email will only be used for communication purposes.
        </p>
      </div>

      {/* Form Submission Wrapper */}
      <form onSubmit={handleSubmit} className="relative flex flex-col w-full">
        
        {/* Email input line field matched to Google Material Design patterns */}
        <div className="relative w-full md:max-w-md mb-12">
          <input
          type ="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
          placeholder="Subject...."
          className="w-full h-14 px-4 bg-transparent border-b-2 border-[#747775] text-[#1f1f1f] placeholder-[#5f6368] focus:outline-none focus:border-[#0b57d0] transition-colors duration-200 text-base"
        />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter email...."
            className="w-full h-14 px-4 bg-transparent border-b-2 border-[#747775] text-[#1f1f1f] placeholder-[#5f6368] focus:outline-none focus:border-[#0b57d0] transition-colors duration-200 text-base"
          />
           <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder="Message...."
            className="w-full h-14 px-4 bg-transparent border-b-2 border-[#747775] text-[#1f1f1f] placeholder-[#5f6368] focus:outline-none focus:border-[#0b57d0] transition-colors duration-200 text-base"
          />
        </div>

       
        <div className="absolute bottom-[-40px] right-[-40px] h-16 bg-[#f8f9fa] z-20 flex justify-end items-stretch pl-8">
          
          <div className="absolute left-[-24px] top-[-24px] w-12 h-12 bg-transparent rounded-full shadow-[12px_12px_0_0_#f8f9fa] pointer-events-none"></div>
          
          
          <button
            type="submit"
            className="px-8 bg-[#e8f0fe] hover:bg-[#d2e3fc] text-[#0b57d0] rounded-tl-[24px] rounded-br-[28px] flex items-center justify-center gap-2 font-medium text-sm transition-colors duration-200"
          >
            <span>Send</span>
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

      </form>
      <ToastContainer position="top-right" />
    </div>
  );
}