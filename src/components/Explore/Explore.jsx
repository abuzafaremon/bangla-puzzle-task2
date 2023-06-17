import React from "react";
import { FaAngleRight } from "react-icons/fa";

const Explore = () => {
  const options = [
    "Denia",
    "Calp",
    "Benidorm",
    "Alicante",
    "Ibiza",
    "Torrevieja",
    "Formentera",
    "Salou",
    "Tarragoan",
    "Palma",
    "Sitges",
    "Majorca",
  ];
  const otherTypes = [
    "Valencia vacation rentals",
    "Valencia monthly stays",
    "Apartment rentals in Valencia",
    "Apartment rentals in Spain",
    "Luxury rentals in Spain",
  ];
  return (
    <section className="py-10 px-5 border-b border-b-gray-300">
      <div className="container mx-auto">
        <div>
          <h2 className="text-2xl font-medium">
            Explore other options in and around Valencia
          </h2>
          <div className="py-10 grid grid-cols-2 md:grid-cols-4 gap-y-4">
            {options.map((option, index) => (
              <div key={index}>
                <a className="text-gray-600 font-medium" href="#">
                  {option}
                </a>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-lg font-medium">
              Other types of stays on Airbnb
            </h2>
            <div className="py-8 grid grid-cols-2 lg:grid-cols-4 gap-5">
              {otherTypes.map((option, index) => (
                <div key={index}>
                  <a className="text-gray-600 font-medium" href="#">
                    {option}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="py-5">
            <div className="flex items-center gap-2 flex-wrap">
              <a
                href="#"
                className="hover:underline font-medium text-gray-700 text-sm"
              >
                Airbnb
              </a>
              <span>
                <FaAngleRight className="text-gray-500" />
              </span>
              <a
                href="#"
                className="hover:underline font-medium text-gray-700 text-sm"
              >
                Spain
              </a>
              <span>
                <FaAngleRight className="text-gray-500" />
              </span>
              <a
                href="#"
                className="hover:underline font-medium text-gray-700 text-sm"
              >
                Valencian Community
              </a>
              <span>
                <FaAngleRight className="text-gray-500" />
              </span>
              <a
                href="#"
                className="hover:underline font-medium text-gray-700 text-sm"
              >
                Valencia Region
              </a>
              <span>
                <FaAngleRight className="text-gray-500" />
              </span>
              <a
                href="#"
                className="hover:underline font-medium text-gray-700 text-sm"
              >
                Valencia
              </a>
              <span>
                <FaAngleRight className="text-gray-500" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
