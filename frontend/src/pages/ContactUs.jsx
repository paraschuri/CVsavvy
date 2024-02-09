import React from 'react'
import {Button} from "@material-tailwind/react";
import { useState } from 'react';
import Footer from '../components/Footer';
const ContactUs = () => {
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [message,setMessage] = useState("")
    const handleSubmit = (e) =>{
        e.preventDefault()
        setFirstName("")
        setLastName("")
        setEmail("")
        setMessage("")
    }
  return (
    <>
        <div className="p-4 py-6 rounded-3xl w-5/6 max-w-[800px] my-10 mx-auto bg-lightBlack md:p-8">
            <form onSubmit={handleSubmit}>
                <div className="-mx-2 md:items-center md:flex">
                    <div className="flex-1 px-2">
                        <label class="block mb-2 text-sm text-white">First Name</label>
                        <input type="text" placeholder="John " class="block w-full px-5 py-2.5 mt-2 text-white placeholder-gray-400 bg-transparent border border-gray-200 rounded-lg" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
                    </div>

                    <div className="flex-1 px-2 mt-4 md:mt-0">
                        <label class="block mb-2 text-sm text-white">Last Name</label>
                        <input type="text" placeholder="Doe" class="block w-full px-5 py-2.5 mt-2 text-white placeholder-gray-400 bg-transparent border border-gray-200 rounded-lg " value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/>
                    </div>
                </div>

                <div className="mt-4">
                    <label className="block mb-2 text-sm text-white">Email address</label>
                    <input type="email" placeholder="johndoe@example.com" class="block w-full px-5 py-2.5 mt-2 text-white placeholder-gray-400 bg-transparent border border-gray-200 rounded-lg" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>

                <div className="w-full mt-4">
                    <label className="block mb-2 text-sm text-white">Message</label>
                    <textarea className="block w-full h-32 px-5 py-2.5 mt-2 text-white placeholder-gray-400 bg-transparent border border-gray-200 rounded-lg md:h-56  " placeholder="Message" value={message} onChange={(e)=>{setMessage(e.target.value)}}></textarea>
                </div>

                <Button type='submit' className="bgGradient w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Send message
                </Button>
            </form>
        </div>
        <Footer />
    </>
  )
}

export default ContactUs