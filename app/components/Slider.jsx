'use client';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';



const images = [
    { 
        src: './slider1.jpg', 
        title: 'Marriage Rentals', 
        type: 'Elegant Weddings', 
        description: 'Make your special day unforgettable with our premium marriage rental services, providing everything from elegant venues to exquisite decor.' 
    },
    { 
        src: './slider2.jpg', 
        title: 'Corporate Rentals', 
        type: 'Professional Setup', 
        description: 'Enhance your corporate events with our professional rental services, offering state-of-the-art equipment and stylish setups for meetings and conferences.' 
    },
    { 
        src: './slider3.jpg', 
        title: 'Vehicle Fleet', 
        type: 'Parked Vehicles', 
        description: 'Choose from a wide range of vehicles for all your rental needs. Our fleet is well-maintained and ready to serve you, whether for personal or business use.' 
    },
    { 
        src: './slider4.jpg', 
        title: 'Luxury Rentals', 
        type: 'Premium Cars', 
        description: 'Experience the ultimate in luxury with our premium car rental services. Drive in style and comfort with our top-of-the-line vehicles.' 
    }
];

const ImageSlider = () => {
    const [current, setCurrent] = useState(0);
    const sliderRef = useRef(null);

    const nextSlide = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    };

    useEffect(() => {
        const slider = sliderRef.current;
        slider.addEventListener('animationend', () => {
            slider.classList.remove('next', 'prev');
        });
    }, [current]);

    return (
        <div className="bg-black text-white min-h-screen flex flex-col">
            <div className="relative w-full flex-1" ref={sliderRef}>
                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <Image src={img.src} alt="" className="w-full h-full object-cover" />
                            <div className="absolute top-20 left-10 md:left-1/2 md:transform md:-translate-x-1/2 md:text-center text-left max-w-2xl">
                                <h2 className="text-5xl font-bold">{img.title}</h2>
                                <p className="text-3xl text-third-color">{img.type}</p>
                                <p className="mt-4">{img.description}</p>
                                <button className="mt-6 px-4 py-2 bg-third-color hover:bg-opacity-[0.5] transition rounded">SEE MORE</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-4">
                    {images.map((img, index) => (
                        <div key={index} className="w-24 h-32">
                            <Image src={img.src} alt="" className="w-full h-full object-cover rounded-lg shadow-lg" />
                        </div>
                    ))}
                </div>
                <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                    <button className="w-10 h-10 flex items-center justify-center bg-third-color hover:bg-opacity-[0.5] transition rounded-full" onClick={prevSlide}>
                        <FaArrowLeft />
                    </button>
                </div>
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                    <button className="w-10 h-10 flex items-center justify-center bg-third-color hover:bg-opacity-[0.5] transition rounded-full" onClick={nextSlide}>
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;
