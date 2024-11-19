import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles (updated path)


import header1 from '../../public/header1.jpg';
import header2 from '../../public/header2.jpg';
import header3 from '../../public/header3.jpg';

const Header = () => {
    return (
        <div className="w-11/12 mx-auto">
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

            <div className="pt-5">
                {/* Swiper Slider */}
                <Swiper
                    spaceBetween={50} // Space between slides
                    slidesPerView={1} // Number of slides to show at once
                    loop={true} // Infinite loop
                    autoplay={{ delay: 3000 }} // Autoplay with a delay of 3 seconds
                    pagination={{ clickable: true }} // Pagination bullets
                    navigation={{ clickable: true }} // Navigation arrows
                    className="swiper-container"
                >
                    {/* Slide 1 */}
                    <SwiperSlide>
                        <img
                            src={header1}
                            className="w-full h-64 md:h-96 object-cover rounded-lg"
                            alt="Slide 1"
                        />
                    </SwiperSlide>

                    {/* Slide 2 */}
                    <SwiperSlide>
                        <img
                            src={header2}
                            className="w-full h-64 md:h-96 object-cover rounded-lg"
                            alt="Slide 2"
                        />
                    </SwiperSlide>

                    {/* Slide 3 */}
                    <SwiperSlide>
                        <img
                            src={header3}
                            className="w-full h-64 md:h-96 object-cover rounded-lg"
                            alt="Slide 3"
                        />
                    </SwiperSlide>

                    {/* Slide 4 (You can add more slides if needed) */}
                    <SwiperSlide>
                        <img
                            src={header2}
                            className="w-full h-64 md:h-96 object-cover rounded-lg"
                            alt="Slide 4"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Header;
