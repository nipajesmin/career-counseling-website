import { Link, useLocation } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import userIcon from '../assets/user.png';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const location = useLocation();

    // Function to check if the current route is active
    const isActive = (path) => location.pathname === path;

    return (
        <nav className="bg-slate-300 text-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row md:justify-between items-center">
                {/* Left Section */}
                <div className="mb-4 md:mb-0">
                    <Link
                        to="/"
                        className="text-lg font-bold bg-lime-50 text-black px-4 py-2 rounded-md hover:bg-yellow-400 transition"
                    >
                        Career Counseling
                    </Link>
                </div>

                {/* Center Section */}
                <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6 items-center text-slate-950">
                    <Link
                        to="/"
                        className={`hover:text-yellow-300 transition ${isActive('/') ? 'font-bold text-yellow-500' : ''}`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/aboutUs"
                        className={`hover:text-yellow-300 transition ${isActive('/aboutUs') ? 'font-bold text-yellow-500' : ''}`}
                    >
                        About Us
                    </Link>
                    {!user && (
                        <Link
                            to="/auth/register"
                            className={`hover:text-yellow-300 transition ${isActive('/auth/register') ? 'font-bold text-yellow-500' : ''}`}
                        >
                            Register
                        </Link>
                    )}
                    {user && (
                        <>
                            <Link
                                to="/myProfile"
                                className={`hover:text-yellow-300 transition ${isActive('/myProfile') ? 'font-bold text-yellow-500' : ''}`}
                            >
                                My Profile
                            </Link>
                            <Link
                                to="/consultationForm"
                                className={`hover:text-yellow-300 transition ${isActive('/consultationForm') ? 'font-bold text-yellow-500' : ''}`}
                            >
                                Consultation
                            </Link>
                        </>
                    )}
                </div>

                {/* Right Section */}
                <div className="mt-4 md:mt-0 flex items-center space-x-2 bg-transparent border border-white px-4 py-2 rounded-md hover:bg-white hover:text-blue-600 transition">
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
                            className={`text-black hover:text-blue-600 transition ${isActive('/auth/login') ? 'font-bold text-yellow-500' : ''}`}
                        >
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

