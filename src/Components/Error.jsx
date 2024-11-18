import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
            <div className="text-center p-6">
                <div className="text-6xl text-red-500 mb-4">⚠️</div>
                <h1 className="text-4xl font-bold mb-2">Oops! Something Went Wrong</h1>
                <p className="text-lg mb-6">
                    We're sorry, but the page you were looking for doesn't exist or an error has occurred.
                </p>
                <button
                    onClick={() => navigate('/')}
                    className="bg-violet-500 text-white px-4 py-2 rounded-lg shadow hover:bg-zinc-500 transition duration-200"
                >
                    Go Back to Home
                </button>
            </div>
        </div>
    );
};

export default Error;