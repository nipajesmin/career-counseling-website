import React, { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Helmet } from 'react-helmet-async';

const MyProfile = () => {
    const { user } = useContext(AuthContext); // Get user details from context
    const [name, setName] = useState(user?.displayName || '');
    const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Hook to navigate between routes

    const handleUpdateProfile = (e) => {
        e.preventDefault();

        if (!user) {
            setMessage('User not logged in.');
            return;
        }

        updateProfile(user, { displayName: name, photoURL: photoURL })
            .then(() => {
                setMessage('Profile updated successfully!');
            })
            .catch((error) => {
                setMessage(`Error: ${error.message}`);
            });
    };

    if (!user) {
        return <p className="text-center text-red-500">You are not logged in.</p>;
    }

    return (
       <div>
        <Helmet>
            <title>Career Council | My Profile</title>
        </Helmet>
        <Navbar></Navbar>
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
            <div className="max-w-sm bg-white rounded-lg shadow-md p-6">
                <h1 className="text-xl font-bold mb-4 text-center">Edit Profile</h1>
                <img
                    src={user.photoURL || 'https://via.placeholder.com/150'}
                    alt="User Avatar"
                    className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                <p className="text-center text-gray-700 font-semibold mb-2">
                    Email: <span className="text-blue-600">{user.email}</span>
                </p>
                <form onSubmit={handleUpdateProfile}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Photo URL</label>
                        <input
                            type="text"
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                    >
                        Save Changes
                    </button>
                </form>
                {message && <p className="text-center mt-4 text-green-500">{message}</p>}
            </div>
            <button
                onClick={() => navigate('/')}
                className="mt-6 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
            >
                Go Back to Home
            </button>
        </div>
        <Footer></Footer>
       </div> 
    );
};

export default MyProfile;

