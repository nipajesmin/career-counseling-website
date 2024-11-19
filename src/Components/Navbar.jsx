import { Link, useLocation } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import userIcon from '../assets/user.png';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, signOutUser } = useContext(AuthContext);
    const location = useLocation();

    // Function to check if the current route is active
    const isActive = (path) => location.pathname === path;

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
                <div className="md:flex space-x-6 text-slate-950">
                    <Link
                        to="/"
                        className={`hover:text-yellow-300 transition ${isActive('/') ? 'font-bold text-yellow-500' : ''
                            }`}
                    >
                        Home
                    </Link>

                    <Link
                        to="/about"
                        className={`hover:text-yellow-300 transition ${isActive('/about') ? 'font-bold text-yellow-500' : ''
                            }`}
                    >
                        About Us
                    </Link>
                    {/* Conditionally Render Register Link */}
                    {!user && (
                        <Link
                            to="/auth/register"
                            className={`hover:text-yellow-300 transition ${isActive('/auth/register') ? 'font-bold text-yellow-500' : ''}`}
                        >
                            Register
                        </Link>
                    )}
                    {
                        user && <>
                            <Link
                                to="/myProfile"
                                className={`hover:text-yellow-300 transition ${isActive('/auth/register') ? 'font-bold text-yellow-500' : ''
                                    }`}
                            >
                                My Profile
                            </Link>
                        </>
                    }
                    {
                        user && <>
                            <Link
                                to="/consultationForm"
                                className={`hover:text-yellow-300 transition ${isActive('/auth/register') ? 'font-bold text-yellow-500' : ''
                                    }`}
                            >
                                Consultation
                            </Link>
                        </>
                    }
                </div>

                {/* Right Section: Login/Sign Out Button */}
                <div className="flex items-center space-x-2 bg-transparent border border-white px-4 py-2 rounded-md hover:bg-white hover:text-blue-600 transition">
                    {user && user?.email ? (
                        <img
                            src={user?.photoURL}
                            alt="User"
                            className="h-6 w-6 rounded-full object-cover"
                            title={user?.displayName || 'User'} // Tooltip with user's name
                        />
                    ) : (
                        <img
                            src={userIcon}
                            alt="User Icon"
                            className="h-6 w-6 rounded-full object-cover"
                            title="Guest User" // Default tooltip for guest users
                        />
                    )}


                    {user ? (
                        <a
                            onClick={signOutUser}
                            className="text-black hover:text-blue-600 transition cursor-pointer"
                        >
                            Sign Out
                        </a>
                    ) : (
                        <Link
                            to="/auth/login"
                            className={`text-black hover:text-blue-600 transition ${isActive('/auth/login') ? 'font-bold text-yellow-500' : ''
                                }`}
                        >
                            Login
                        </Link>
                    )}
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
                        <Link
                            to="/"
                            className={`hover:text-yellow-300 transition ${isActive('/') ? 'font-bold text-yellow-500' : ''
                                }`}
                        >
                            Home
                        </Link>

                        <Link
                            to="/about"
                            className={`hover:text-yellow-300 transition ${isActive('/about') ? 'font-bold text-yellow-500' : ''
                                }`}
                        >
                            About Us
                        </Link>
                        <Link
                            to="/auth/register"
                            className={`hover:text-yellow-300 transition ${isActive('/auth/register') ? 'font-bold text-yellow-500' : ''
                                }`}
                        >
                            Register
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
