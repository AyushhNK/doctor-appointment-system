import {useState} from 'react'
import { MdLocationPin } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <>
                <div className="bg-dark_blue h-auto md:h-1/2 flex flex-col">
				    <h1 className="text-light_blue font-medium text-3xl mt-2 text-center">Get In Touch</h1>
				    <div className="flex flex-col md:flex-row justify-around">
				        <div className="flex flex-col w-full md:w-[385px] text-gray">
				            <label htmlFor="name" className="pt-1">Name</label>
				            <input type="text" className="bg-dark_blue border-b-2 border-gray focus:outline-none cursor-pointer"/>
				            <label htmlFor="email" className="pt-1">Email</label>
				            <input type="text" className="bg-dark_blue border-b-2 border-gray focus:outline-none cursor-pointer"/>
				            <label htmlFor="subject" className="pt-1">Subject</label>
				            <input type="text" className="bg-dark_blue border-b-2 border-gray focus:outline-none cursor-pointer"/>
				            <label htmlFor="message" className="pt-1">Message</label>
				            <input type="text" className="bg-dark_blue border-b-2 border-gray focus:outline-none cursor-pointer pt-2"/>
				            <button className="bg-bluish mt-2 px-2 py-2 text-white">Send</button>
				        </div>
				        <div className="w-full md:w-1/3 flex flex-col mt-4 md:mt-0 gap-2">
				            <p className="text-white text-2xl text-center">Contact Information</p>
				            <p className="text-gray md:text-base text-left">
				                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada gravida libero at tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In ac rutrum urna.
				            </p>
				            <a href="#" className="text-gray flex"><MdLocationPin className="text-white text-xl"/> Kalanki, Kathmandu, Nepal</a>
							<a href="#" className="text-gray flex"><IoIosMail className="text-white text-xl"/>testing@testing.com</a>
							<a href="#" className="text-gray flex"><FaPhoneAlt className="text-white text-xl"/>+977 9376745784</a>
							<div className="flex gap-4 pl-10">
								<FaSquareFacebook className="text-3xl text-white"/>
								<FaInstagramSquare className="text-3xl text-white"/>
								<FaSquareXTwitter className="text-3xl text-white"/>
								<FaLinkedin className="text-3xl text-white"/>
								
							</div>
				        </div>
				    </div>
				</div>
				
        </>
    )
}

export default Footer;
