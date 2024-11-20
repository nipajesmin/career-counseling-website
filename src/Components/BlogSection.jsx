import blog1 from '../../public/blog1.png';
import blog2 from '../../public/blog2.png';
import blog3 from '../../public/blog3.png';

const BlogSection = () => {
    return (
        <section className="w-11/12 mx-auto mt-5 py-20">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                    Latest Blogs & Insights
                </h2>
                <p className="text-center text-lg text-gray-600 mb-16">
                    Discover valuable insights and tips to boost your career.
                </p>

                {/* Blog Posts */}
                <div className="space-y-12">
                    {/* Blog Post 1 */}
                    <div className="flex flex-col lg:flex-row items-center gap-8 border rounded-lg shadow-md p-6 bg-white">
                        <div className="lg:w-1/3">
                            <img
                                src={blog1}
                                alt="Master Your Career Path"
                                className="rounded-md shadow-md object-cover w-full h-48"
                            />
                        </div>
                        <div className="lg:w-2/3 text-center lg:text-left">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                Master Your Career Path
                            </h3>
                            <p className="text-gray-600">
                                Explore ways to identify the perfect career fit with practical tips and expert guidance.
                                Gain a deeper understanding of the skills and knowledge required for success in your chosen field.
                            </p>
                        </div>
                    </div>

                    {/* Blog Post 2 */}
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-8 border rounded-lg shadow-md p-6 bg-white">
                        <div className="lg:w-1/3">
                            <img
                                src={blog2}
                                alt="Crafting Your Resume"
                                className="rounded-md shadow-md object-cover w-full h-48"
                            />
                        </div>
                        <div className="lg:w-2/3 text-center lg:text-left">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                Crafting Your Resume
                            </h3>
                            <p className="text-gray-600">
                                Learn the essentials of creating a resume that truly reflects your strengths and abilities. 
                                A powerful resume can make all the difference in standing out to potential employers.
                            </p>
                        </div>
                    </div>

                    {/* Blog Post 3 */}
                    <div className="flex flex-col lg:flex-row items-center gap-8 border rounded-lg shadow-md p-6 bg-white">
                        <div className="lg:w-1/3">
                            <img
                                src={blog3}
                                alt="Top 2024 Careers"
                                className="rounded-md shadow-md object-cover w-full h-48"
                            />
                        </div>
                        <div className="lg:w-2/3 text-center lg:text-left">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                Top 2024 Careers
                            </h3>
                            <p className="text-gray-600">
                                Dive into the top emerging career trends for 2024 and beyond. 
                                Stay ahead of the curve by exploring industries with high growth potential and opportunities.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;




