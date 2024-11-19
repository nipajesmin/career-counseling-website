import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const ConsultationForm = () => {
    const [formData, setFormData] = useState({
        serviceType: 'Individual',
        name: '',
        email: '',
        phone: '',
        province: '',
        sessionType: '',
        serviceInterest: '',
        additionalInfo: '',
        employmentStatus: '',
        healthInsurance: '',
        agreement: false,
        captcha: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.captcha || !formData.agreement) {
            alert('Please complete the required fields.');
            return;
        }
        console.log('Form Submitted:', formData);
        alert('Your consultation request has been submitted!');
    };


    return (
       <div>
        <Navbar></Navbar>
        <div className="container mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold text-center mb-6">
                We’d love to hear from you! Contact us today for a{' '}
                <span className="text-green-500">15-minute consultation.</span>
            </h1>
            <p className="text-center text-gray-600 mb-8">
                We offer Daytime, Evening, and Saturday appointments with our Career Counsellors and Job Search Advisors.
            </p>

            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white shadow-md rounded p-6">
                {/* Service Type */}
                <div className="mb-4">
                    <p className="font-semibold mb-2">I am seeking services as:</p>
                    <label className="mr-4">
                        <input
                            type="radio"
                            name="serviceType"
                            value="Individual"
                            checked={formData.serviceType === 'Individual'}
                            onChange={handleChange}
                        />{' '}
                        An Individual
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="serviceType"
                            value="Organization"
                            checked={formData.serviceType === 'Organization'}
                            onChange={handleChange}
                        />{' '}
                        An Organization
                    </label>
                </div>

                {/* Name and Email */}
                <div className="mb-4 flex gap-4">
                    <div className="w-1/2">
                        <label className="block mb-2 font-semibold">Name *</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                            required
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="block mb-2 font-semibold">Email Address *</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                            required
                        />
                    </div>
                </div>

                {/* Phone and Province */}
                <div className="mb-4 flex gap-4">
                    <div className="w-1/2">
                        <label className="block mb-2 font-semibold">Phone Number *</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                            required
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="block mb-2 font-semibold">Which city do you live in? *</label>
                        <input
                            name="province"
                            value={formData.province}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                            required
                        />
                            
                        
                    </div>
                </div>

                {/* Session Type */}
                <div className="mb-4">
                    <p className="font-semibold mb-2">Preferred session type:</p>
                    <label className="mr-4">
                        <input
                            type="radio"
                            name="sessionType"
                            value="Online"
                            checked={formData.sessionType === 'Online'}
                            onChange={handleChange}
                        />{' '}
                        Online
                    </label>
                    <label className="mr-4">
                        <input
                            type="radio"
                            name="sessionType"
                            value="In-person"
                            checked={formData.sessionType === 'In-person'}
                            onChange={handleChange}
                        />{' '}
                        In-person
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="sessionType"
                            value="Either"
                            checked={formData.sessionType === 'Either'}
                            onChange={handleChange}
                        />{' '}
                        Either
                    </label>
                </div>

                {/* Service Interest */}
                <div className="mb-4">
                    <label className="block mb-2 font-semibold">Which service are you interested in? *</label>
                    <select
                        name="serviceInterest"
                        value={formData.serviceInterest}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                        required
                    >
                        <option value="">Please select an option</option>
                        <option value="Career Counseling">Career Counseling</option>
                        
                        {/* Add other services */}
                    </select>
                </div>

                {/* Additional Info */}
                <div className="mb-4">
                    <label className="block mb-2 font-semibold">Additional Information</label>
                    <textarea
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        rows="4"
                        className="w-full border p-2 rounded"
                        maxLength={250}
                    ></textarea>
                </div>

                {/* Employment Status */}
                <div className="mb-4">
                    <p className="font-semibold mb-2">Employment Status *</p>
                    <label className="mr-4">
                        <input
                            type="radio"
                            name="employmentStatus"
                            value="Employed"
                            checked={formData.employmentStatus === 'Employed'}
                            onChange={handleChange}
                        />{' '}
                        Employed
                    </label>
                    <label className="mr-4">
                        <input
                            type="radio"
                            name="employmentStatus"
                            value="Unemployed"
                            checked={formData.employmentStatus === 'Unemployed'}
                            onChange={handleChange}
                        />{' '}
                        Unemployed
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="employmentStatus"
                            value="Self-employed"
                            checked={formData.employmentStatus === 'Self-employed'}
                            onChange={handleChange}
                        />{' '}
                        Self-employed
                    </label>
                </div>

                {/* Agreement and Captcha */}
                <div className="mb-4">
                    
                    <label className="block mb-2">
                        <input
                            type="checkbox"
                            name="captcha"
                            checked={formData.captcha}
                            onChange={handleChange}
                        />{' '}
                        I am human.
                    </label>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
        <Footer></Footer>
       </div> 
    );
};


export default ConsultationForm;