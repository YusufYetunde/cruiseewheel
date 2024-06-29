import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className='bg-black mt-8 p-8 w-full h-auto text-white'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='flex justify-start items-start flex-col'>
                    <a href='#' className='text-third-color font-bold text-lg'>CruiseWheel</a>
                    <p className="text-sm">
                        CruisWheel provides the best transportation services with a focus on comfort, safety, and reliability. Join us for an unforgettable journey.
                    </p>
                </div>
                <div className='flex flex-col md:flex-row gap-8'>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                        <p>1234 Street Name, City, State, 56789</p>
                        <p>Email: info@cruiswheel.com</p>
                        <p>Phone: (123) 456-7890</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul>
                            <li><a href="/about" className="hover:underline">About</a></li>
                            <li><a href="/services" className="hover:underline">Services</a></li>
                            <li><a href="/fleet" className="hover:underline">Our Fleet</a></li>
                            <li><a href="#" className="hover:underline">Contact</a></li>
                            <li><a href="#" className="hover:underline">FAQ</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                    <div className='flex gap-4 mb-4 text-third-color'>
                    <FaFacebook/>
                    <FaTwitter/>
                    <FaInstagram/>
                    <FaLinkedinIn/>
                    </div>
                    <h3 className="text-lg font-bold mb-4">Subscribe to Our Newsletter</h3>
                    <form className='flex flex-col gap-2'>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className='p-2 rounded text-main-color'
                        />
                        <button type="submit" className='bg-third-color p-2 rounded text-white'>
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            <hr className='my-8 border-gray-500' />
            <div className='text-center'>
                <p>&copy; 2024 CruisWheel. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
