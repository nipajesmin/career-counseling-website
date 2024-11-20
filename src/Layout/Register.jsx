import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import { AuthContext } from '../provider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

const Register = () => {
    const navigate = useNavigate();
    const { createNewUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

    const handleRegister = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get("name");
        const email = form.get("email");
        const url = form.get("url");
        const password = form.get("password");

        // Password validation
        if (password.length < 6) {
            toast.error('Password must be at least 6 characters long.', { position: 'top-center' });
            return;
        }
        if (!/[A-Z]/.test(password)) {
            toast.error('Password must contain at least one uppercase letter.', { position: 'top-center' });
            return;
        }
        if (!/[a-z]/.test(password)) {
            toast.error('Password must contain at least one lowercase letter.', { position: 'top-center' });
            return;
        }

        createNewUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('Registration successful!', { position: 'top-center' });
                updateUserProfile({ displayName: name, photoURL: url })
                    .then(() => {
                        setTimeout(() => {
                            navigate('/');
                        }, 3000);
                    })
                    .catch(error => {
                        toast.error(error.message, { position: 'top-center' });
                    });
            })
            .catch(error => {
                console.log('Error found', error.code);
                console.log('Error found', error.message);
                toast.error(error.message, { position: 'top-center' });
            });
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate('/');
            })
            .catch(error => console.log('ERROR', error.message));
    };

    return (
        <div>
            <Helmet>
            <title> Career Council | Register</title></Helmet>
            {/* Toast Container */}
            <ToastContainer />
            <h1 className="text-3xl md:text-5xl font-bold pb-5 pt-4 bg-base-200 text-center">
                Register Now!
            </h1>

            <div className="hero bg-base-200 min-h-screen">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="name"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                type="text"
                                name="url"
                                placeholder="Photo URL"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered w-full"
                                    required
                                />
                                <span
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                                >
                                    {showPassword ? (
                                        <FaEye className="w-5 h-5 text-gray-600" />
                                     
                                    ) : (
                                        <FaEyeSlash className="w-5 h-5 text-gray-600" />  
                                    )}
                                </span>
                            </div>
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <div className="form-control mt-6">
                            <button
                                onClick={handleGoogleSignIn}
                                type="button"
                                className="btn btn-primary"
                            >
                                Login with Google
                            </button>
                        </div>
                    </form>
                    <p className="ml-4 mb-4 pl-12">
                        Already have an account? Please <Link to="/auth/login" className="text-blue-600">login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;

