import React from "react";
import { useNavigate } from "react-router-dom";
import img from '../assets/img1.jpg';

export default function Founders() {
  const navigate = useNavigate();

  const handleTeamButtonClick = () => {
    navigate("/team");
  };

  return (
    <div className="bg-gray-100 px-4 py-10 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-950 mb-4">
          Founders
        </h1>
        <p className="text-md sm:text-lg text-center text-gray-700 mb-10 italic">
          ~ "Innovation distinguishes between a leader and a follower." - Steve Jobs
        </p>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {/* Founder 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-blue-950 transition-shadow duration-300 flex flex-col">
            <img
              src={img}
              alt="Ahmed Mohiuddin Khazi"
              className="w-full h-56 sm:h-64 md:h-60 object-cover mb-4"
            />
            <div className="flex flex-col flex-grow">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-950">
                Ahmed Mohiuddin Khazi
              </h3>
              <p className="text-gray-700">CEO</p>
              <p className="text-gray-600 mt-2">
                Ahmed is the visionary leader of Tech Challenges, with over 20 years of experience in the technology industry. His strategic thinking and leadership have been instrumental in driving the company's success.
              </p>
            </div>
          </div>

          {/* Founder 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-blue-950 transition-shadow duration-300 flex flex-col">
            <img
              src={img}
              alt="Fahad Nawaf"
              className="w-full h-56 sm:h-64 md:h-60 object-cover mb-4"
            />
            <div className="flex flex-col flex-grow">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-950">
                Fahad Nawaf
              </h3>
              <p className="text-gray-700">COO</p>
              <p className="text-gray-600 mt-2">
                Fahad is the operational mastermind behind Tech Challenges, with a wealth of experience in optimizing processes and managing day-to-day activities. His focus on efficiency ensures the smooth running of our organization.
              </p>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="text-center mt-10">
          <button
            className="bg-gradient-to-r from-gray-500 to-blue-950 hover:from-blue-950 hover:to-gray-500 text-white font-semibold py-3 px-8 rounded-full shadow-md transform hover:scale-105 transition-all duration-300"
            onClick={handleTeamButtonClick}
          >
            Meet Our Team
          </button>
        </div>

        {/* Separator */}
        <div className="mt-10">
          <hr className="border-t-2 border-gray-300" />
        </div>
      </div>
    </div>
  );
}
