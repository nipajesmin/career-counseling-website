
import { Link } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import usericon from '../assets/user.png';
import { AuthContext } from '../provider/AuthProvider';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, signOutUser } = useContext(AuthContext)

    return (
        <nav className="bg-slate-300 text-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Left Section: Career Counseling Button */}
                <div>
                    <Link
                        to="/"
                        className="text-lg font-bold bg-lime-50 text-black px-4 py-2 rounded-md hover:bg-yellow-400 transition"
                    >
                        Career Counseling
                    </Link>
                </div>

                {/* Center Section: Navigation Links */}
                <div className=" md:flex space-x-6 text-slate-950">
                    <Link to="/" className="hover:text-yellow-300 transition ">
                        Home
                    </Link>
                    <Link to="/services" className="hover:text-yellow-300 transition">
                        Services
                    </Link>
                    <Link to="/about" className="hover:text-yellow-300 transition">
                        About Us
                    </Link>
                    <Link to="/auth/register" className="hover:text-yellow-300 transition">
                        Register
                    </Link>
                </div>

                {/* Right Section: Login Button */}
                <div className="flex items-center space-x-2 bg-transparent border border-white px-4 py-2 rounded-md hover:bg-white hover:text-blue-600 transition">
                    {/* User Icon/Image */}
                    <img
                        src={usericon}
                        alt="User Icon"
                        className="h-6 w-6 rounded-full object-cover"
                    />

{
                    user ?
                        <>
                            <a onClick={signOutUser} className="text-black hover:text-blue-600 transition">Sign Out</a>
                        </>
                        :
                        <Link
                        to="/auth/login"
                        className="text-black hover:text-blue-600 transition"
                    >
                        Login
                    </Link>
                }

                    
                    
                </div>


                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        className="focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-6 h-6 text-white"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden bg-blue-500 text-white">
                    <div className="flex flex-col space-y-2 p-4">
                        <Link to="/" className="hover:text-yellow-300 transition">
                            Home
                        </Link>
                        <Link to="/services" className="hover:text-yellow-300 transition">
                            Services
                        </Link>
                        <Link to="/about" className="hover:text-yellow-300 transition">
                            About Us
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;