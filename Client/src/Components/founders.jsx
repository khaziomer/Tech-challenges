import React from "react";
import { useNavigate } from "react-router-dom";
import img from '../assets/img1.jpg'

export default function Founders() {
  const navigate = useNavigate();

  const handleTeamButtonClick = () => {
    navigate("/team");
  };

  return (
    <div className="bg-gray-100 p-8 mt-10 mb-10">
      <div className="max-w-7xl mx-auto h-full">
        <h1 className="text-4xl font-bold text-center text-blue-950 mb-4">
          Founders
        </h1>
        <p className="text-lg text-center text-gray-700 mb-8 italic">~
          "Innovation distinguishes between a leader and a follower." - Steve
          Jobs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-blue-950 duration-100">
            <img
              src={img}
              alt="Founder 1"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold text-blue-950">
              Ahmed Mohiuddin Khazi
            </h3>
            <p className="text-gray-700">CEO</p>
            <p className="text-gray-600 mt-2">
              Ahmed is the visionary leader of Tech Challenges, with over 20
              years of experience in the technology industry. His strategic
              thinking and leadership have been instrumental in driving the
              company's success.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-blue-950 duration-100">
            <img
              src={img}
              alt="Founder 2"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold text-blue-950">Omer</h3>
            <p className="text-gray-700">CTO</p>
            <p className="text-gray-600 mt-2">
              Omer is the technical genius behind our innovative solutions, with
              a passion for developing cutting-edge technology. His expertise in
              software development and system architecture is unparalleled.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-blue-950 duration-100">
            <img
              src={img}
              alt="Founder 3"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold text-blue-950">Khaled Khuddus</h3>
            <p className="text-gray-700">HR</p>
            <p className="text-gray-600 mt-2">
              Khaled ensures that our operations run smoothly, with a focus on
              delivering exceptional service to our clients. His operational
              expertise and commitment to excellence are key to our success.
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <button
            className="bg-gradient-to-r from-gray-500 to-blue-950 hover:from-blue-950 hover:to-gray-500 text-white font-semibold py-3 px-8 rounded-full shadow-md transform hover:scale-105 transition-all duration-300"
            onClick={handleTeamButtonClick}
          >
            Meet Our Team
          </button>
        </div>
      </div>
    </div>
  );
}
