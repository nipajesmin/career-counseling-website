import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaBullseye, FaRegHandshake } from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from './Footer';

const AboutUs = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-gray-100 py-12">
            {/* Hero Section */}
            <div className="relative bg-blue-600 text-white text-center py-16">
                <div className="absolute inset-0 bg-opacity-60 bg-black"></div>
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold">
                        About Us
                    </h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
                        Empowering your career journey with personalized counseling, resources, and connections.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Mission Section */}
                    <div className="flex flex-col items-center text-center md:items-start md:text-left">
                        <FaBullseye className="text-blue-500 text-6xl mb-4" />
                        <h2 className="text-2xl font-semibold mb-4">
                            Our Mission
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Our mission is to guide individuals and organizations toward achieving their professional goals through expert career counseling and job search support.
                        </p>
                    </div>

                    {/* Team Section */}
                    <div className="flex flex-col items-center text-center md:items-start md:text-left">
                        <FaUsers className="text-blue-500 text-6xl mb-4" />
                        <h2 className="text-2xl font-semibold mb-4">
                            Our Team
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            We are a diverse group of experts passionate about fostering growth and success. Our team is committed to helping you navigate your career path with confidence.
                        </p>
                    </div>

                    {/* Values Section */}
                    <div className="flex flex-col items-center text-center md:items-start md:text-left">
                        <FaRegHandshake className="text-blue-500 text-6xl mb-4" />
                        <h2 className="text-2xl font-semibold mb-4">
                            Our Values
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Integrity, innovation, and inclusivity are at the heart of everything we do. We strive to provide a welcoming and effective experience for all.
                        </p>
                    </div>

                    {/* Services Section */}
                    <div className="flex flex-col items-center text-center md:items-start md:text-left">
                        <FaBullseye className="text-blue-500 text-6xl mb-4" />
                        <h2 className="text-2xl font-semibold mb-4">
                            Our Services
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            We offer a range of services tailored to your unique needs, including personalized career counseling, skill-building workshops, and more.
                        </p>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-blue-500 text-white text-center py-12">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">
                    Ready to Take the Next Step?
                </h2>
                <p className="mb-6">
                    Connect with us today to start your career transformation journey!
                </p>
                <div className="flex justify-center gap-4">
                    <Link
                        to="/contact"
                        className="px-6 py-3 bg-white text-blue-500 rounded-lg shadow hover:bg-blue-100 transition"
                    >
                        Contact Us
                    </Link>
                    <Link
                        to="/services"
                        className="px-6 py-3 bg-gray-200 text-blue-600 rounded-lg shadow hover:bg-gray-300 transition"
                    >
                        Our Services
                    </Link>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default AboutUs;

