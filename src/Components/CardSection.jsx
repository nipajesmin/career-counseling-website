import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


const CardSection = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/services.json')
          .then((res) => res.json())
          .then((data) => setServices(data));
      }, []);

      return (
        <div className="w-11/12 mx-auto mt-5">
          <h2 className="text-center text-3xl font-semibold my-4">Our Services</h2>
          
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={service.image}
                  alt={service.serviceName}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {service.serviceName}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">Category: {service.category}</p>
                  <p className="text-sm text-gray-500 mt-1">Pricing: {service.pricing}</p>
                  <p className="text-sm text-gray-500 mt-1">Counselor: {service.counselor}</p>
                  <Link
                    to={`/services/${index}`}
                    state={{ service }}
                    className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
};

export default CardSection;