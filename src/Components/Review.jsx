import React from 'react';
import pic1 from '../../public/pic1.png'
import pic3 from '../../public/pic3.png'
import pic4 from '../../public/pic4.png'
import pic2 from '../../public/pic2.png'
import pic5 from '../../public/pic5.png'
import pic6 from '../../public/pic6.png'

const Review = () => {
    return (
        <section className="w-11/12 mx-auto mt-5 py-16">
            <div className="container mx-auto">
                {/* Header */}
                <h2 className="text-4xl font-extrabold text-center text-black mb-10">
                    What Our Clients Say
                </h2>
                <p className="text-center text-gray-600 text-lg mb-10">
                    Here’s how we’ve helped individuals achieve their career goals.
                </p>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* Review 1 */}
                    <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300">
                        <img
                            src={pic1}
                            alt="Emily Johnson"
                            className="h-20 w-20 rounded-full mb-4 border-4 border-blue-100"
                        />
                        <h3 className="text-xl font-semibold text-gray-800">Sharmin</h3>
                        <p className="text-gray-600 mt-4">
                            Career Counseling helped me identify the right career path and gave me the confidence to pursue it. Truly life-changing!
                        </p>
                    </div>

                    {/* Review 2 */}
                    <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300">
                        <img
                            src={pic2}
                            alt="Michael Brown"
                            className="h-20 w-20 rounded-full mb-4 border-4 border-blue-100"
                        />
                        <h3 className="text-xl font-semibold text-gray-800">Ahmed</h3>
                        <p className="text-gray-600 mt-4">
                            The team was incredibly supportive and provided personalized advice that landed me my dream job!
                        </p>
                    </div>

                    {/* Review 3 */}
                    <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300">
                        <img
                            src={pic3}
                            alt="Sophia Williams"
                            className="h-20 w-20 rounded-full mb-4 border-4 border-blue-100"
                        />
                        <h3 className="text-xl font-semibold text-gray-800">Sanju</h3>
                        <p className="text-gray-600 mt-4">
                            I felt heard and understood during every session. Their approach is so practical and effective.
                        </p>
                    </div>

                    {/* Review 4 */}
                    <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300">
                        <img
                            src={pic4}
                            alt="David Miller"
                            className="h-20 w-20 rounded-full mb-4 border-4 border-blue-100"
                        />
                        <h3 className="text-xl font-semibold text-gray-800">Nayem</h3>
                        <p className="text-gray-600 mt-4">
                            Thanks to their guidance, I revamped my resume and aced my interviews. Highly recommended!
                        </p>
                    </div>

                    {/* Review 5 */}
                    <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300">
                        <img
                            src={pic5}
                            alt="Olivia Davis"
                            className="h-20 w-20 rounded-full mb-4 border-4 border-blue-100"
                        />
                        <h3 className="text-xl font-semibold text-gray-800">Tasfia</h3>
                        <p className="text-gray-600 mt-4">
                            Their workshops and one-on-one sessions are top-notch. I feel so much more confident now.
                        </p>
                    </div>

                    {/* Review 6 */}
                    <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300">
                        <img
                            src={pic6}
                            alt="James Wilson"
                            className="h-20 w-20 rounded-full mb-4 border-4 border-blue-100"
                        />
                        <h3 className="text-xl font-semibold text-gray-800">Eshika</h3>
                        <p className="text-gray-600 mt-4">
                            They offer such a professional service. The insights I gained from their counseling sessions were invaluable.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;

