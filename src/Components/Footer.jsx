import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8 mt-5">
      <div className="container mx-auto px-4">

        {/* Tagline */}
        <div className="text-center mb-6">
          <h3 className="text-lg md:text-xl font-semibold">
            Transforming Dreams into Careers
          </h3>
          <p className="text-sm md:text-base mt-2">
            Empowering you to achieve your professional goals with confidence.
          </p>
        </div>

        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-blue-400 pt-6 pl-10">
          {/* Contact Information */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h4 className="text-base md:text-lg font-semibold">Contact Us</h4>
            <p className="text-sm mt-2">Email: support@careercounseling.com</p>
            <p className="text-sm">Phone: +1 234 567 890</p>
          </div>

          {/* Social Media (Placeholder) */}
          <div className="text-center md:mb-0">
            <h4 className="text-base md:text-lg font-semibold">Follow Us</h4>
            <div className="flex justify-center space-x-4 mt-2">
              <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-700 cursor-pointer">
                <i className="fab fa-facebook-f"></i>
              </span>
              <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-700 cursor-pointer">
                <i className="fab fa-twitter"></i>
              </span>
              <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-700 cursor-pointer">
                <i className="fab fa-linkedin-in"></i>
              </span>
            </div>
          </div>

          {/* Footer Links (Optional Section) */}
          <div className="text-center md:text-right pr-10" >
            <h4 className="text-base md:text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 mt-2">
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-6 text-sm border-t border-blue-400 pt-4">
          <p>© {new Date().getFullYear()} Career Counseling Platform. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
