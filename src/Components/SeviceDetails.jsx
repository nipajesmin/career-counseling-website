import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Footer from "./Footer";
import Navbar from "./Navbar";

const SeviceDetails = () => {
    const { id } = useParams(); // Get the service ID from the URL
    const [service, setService] = useState(null); // State to store service details
    const [loading, setLoading] = useState(true); // Loading state
    const [comments, setComments] = useState([]); // State for comments
    const [newComment, setNewComment] = useState(""); // State for input field

    useEffect(() => {
        // Fetch service details by ID
        fetch('/services.json')
            .then((res) => res.json())
            .then((data) => {
                const foundService = data.find((item, index) => index.toString() === id);
                setService(foundService);
                setLoading(false);
            })
            .catch((err) => console.error("Error fetching service data:", err));
    }, [id]);

    const handleAddComment = () => {
        if (newComment.trim() !== "") {
            setComments([...comments, newComment]); // Add new comment to state
            setNewComment(""); // Clear input field
        }
    };

    if (loading) {
        return <p className="text-center text-blue-500 mt-5">Loading service details...</p>;
    }

    if (!service) {
        return <p className="text-center text-red-500 mt-5">Service not found!</p>;
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="w-11/12 mx-auto mt-10">
                <h2 className="text-center text-4xl font-bold my-6 text-blue-600">
                    {service.serviceName}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <div className="flex justify-center">
                        <img
                            src={service.image}
                            alt={service.serviceName}
                            className="rounded-lg shadow-lg max-w-full h-auto object-cover"
                            style={{ maxHeight: "400px" }}
                        />
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <p className="text-lg font-semibold text-gray-700 mb-2">
                            <strong>Category:</strong> {service.category}
                        </p>
                        <p className="text-lg font-semibold text-gray-700 mb-2">
                            <strong>Pricing:</strong> {service.pricing}
                        </p>
                        <p className="text-lg font-semibold text-gray-700 mb-2">
                            <strong>Counselor:</strong> {service.counselor}
                        </p>
                        <p className="text-lg font-semibold text-gray-700 mb-2">
                            <strong>Duration:</strong> {service.duration}
                        </p>
                        <p className="text-lg text-gray-600 mt-4">
                            <strong>Description:</strong> {service.description}
                        </p>
                    </div>
                </div>

                <div className="mt-10 flex justify-center">
                    <Link
                        to="/"
                        className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition mb-6"
                    >
                        ← Go Back
                    </Link>
                </div>

                <div className="mt-10">
                    <h3 className="text-2xl font-bold text-blue-600 mb-4">You can give your feedback here...</h3>
                    <div className="flex items-center gap-4 mb-6">
                        <input
                            type="text"
                            placeholder="Write your comment here..."
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            className="flex-grow border border-gray-300 rounded-lg px-4 py-2"
                        />
                        <button
                            onClick={handleAddComment}
                            className="bg-zinc-300 text-black px-6 py-2 rounded-lg font-semibold hover:bg-slate-500 transition"
                        >
                            Feedback
                        </button>
                    </div>

                    {comments.length > 0 ? (
                        <ul className="space-y-4">
                            {comments.map((comment, index) => (
                                <li
                                    key={index}
                                    className="bg-gray-100 p-4 rounded-lg shadow-md text-gray-700"
                                >
                                    {comment}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500">No comments yet. Be the first to leave one!</p>
                    )}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SeviceDetails;
