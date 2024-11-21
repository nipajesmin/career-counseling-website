import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [isEmailSent, setIsEmailSent] = useState(false);

    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (!email) {
            alert('Please enter your email!');
            return;
        }

        const auth = getAuth();
        try {
            // Send password reset email
            await sendPasswordResetEmail(auth, email);
            alert('Password reset email sent! Redirecting to Gmail...');
            setIsEmailSent(true);

            // Redirect to Gmail
            setTimeout(() => {
                window.location.href = "https://mail.google.com";
            }, 2000);
        } catch (error) {
            alert(error.message || 'Failed to send password reset email.');
        }
    };

    return (
        <div>
            <h1 className="text-3xl md:text-5xl font-bold pb-5 pt-4 bg-base-200 text-center">
                Reset Password
            </h1>
            <div className="hero bg-base-200 min-h-screen">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleResetPassword}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" type="submit" disabled={isEmailSent}>
                                Reset Password
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;






