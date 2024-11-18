import React from 'react';
import header1 from '../assets/header1.jpg';
import header2 from '../assets/header2.jpg';
import header3 from '../assets/header3.jpg';

const Header = () => {
    return (
        <div className='w-11/12 mx-auto'>

            <div className="bg-blue-100 text-blue-900 p-8 md:p-12 rounded-lg shadow-lg max-w-4xl mx-auto text-center mt-5">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    Welcome to Career Counseling Platform
                </h1>
                <p className="text-lg md:text-xl leading-relaxed mb-6">
                    Your career is one of the most important journeys in life, and we're here
                    to guide you every step of the way. Whether you're a student exploring
                    future possibilities, a professional looking to transition, or someone
                    seeking clarity in their career path, we provide personalized advice,
                    tools, and resources to help you achieve your goals.
                </p>
                <h5 className="text-lg md:text-2xl font-semibold text-blue-700">
                    Your Future Awaits. Start Now.
                </h5>
            </div>

            <div>
                <div className="carousel w-full pt-5">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img
                            src={header1}
                            className="w-full h-64 md:h-96 object-cover rounded-lg"
                            alt="Slide 1"
                        />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img
                            src={header2}
                            className="w-full h-64 md:h-96 object-cover rounded-lg"
                            alt="Slide 2"
                        />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img
                            src={header3}
                            className="w-full h-64 md:h-96 object-cover rounded-lg"
                            alt="Slide 3"
                        />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img
                            src={header2}
                            className="w-full h-64 md:h-96 object-cover rounded-lg"
                            alt="Slide 4"
                        />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Header;