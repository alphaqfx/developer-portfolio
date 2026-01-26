'use client'
import Image from 'next/image'
import React, {useState} from 'react'
import { assets } from '@/assets/assets'
import { data } from 'autoprefixer'

const Contact = () => {
    const [result, setResult] = useState("");
    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "29757b2c-ae75-4257-87ad-b4ca4bd4322e");

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
      setResult("Form Submitted Successfully!");
    } else {
        console.log("Error", res);
        setResult(res.message);
    }
  };
  return (
    <div id='contact'
      className='w-full px-[12%] py-40 scroll-mt20 bg-no-repeat bg-center bg-[length:90%_auto]'>
      
      <h4 className='text-white text-center mb-2 text-xl font-jost'>Connect with me</h4>
      <h2 className='text-white text-center text-5xl font-jost'>Get in touch</h2>
      <p className='text-white text-center max-w-2xl mx-auto mt-5 mb-12 font-jost'>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
      <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-10 mb-8'>
            <input
            name='name' type="text" placeholder='Enter Your Name' required className='backdrop-blur-sm flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md text-white'/>
            <input
            name='email' type="email" placeholder='Enter Your Email' required className='backdrop-blur-sm flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md text-white'/>
        </div>
        <textarea
        name='message' rows="6" placeholder='Enter Your Message' required className='backdrop-blur-sm w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md text-white'></textarea>
        <br></br>
        <br></br>
        <button
        type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-transparent backdrop-blur-sm border-[0.5px] text-white rounded-full mx-auto hero-new-badge-container cursor-pointer duration-500'>Submit Now <Image src={assets.right_arrow_white} alt='' className='w-4'/></button>

        <p className='mt-4'>{result}</p>
      </form>
    </div>
  )
}

export default Contact
