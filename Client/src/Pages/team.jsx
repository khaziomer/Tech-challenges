import React, { useEffect } from 'react';
import RootLayout from '../Layout';
import img from '../assets/img1.jpg'

const teamMembers = [
  {
    name: 'Ahmed Mohiuddin Khazi',
    role: 'CEO',
    image: img,
  },
  {
    name: 'Omer',
    role: 'CTO',
    image: img,
  },
  {
    name: 'Khaled Khuddus',
    role: 'HR',
    image: img,
  },
  {
    name: 'Shahed Khazi',
    role: 'Supervisor',
    image: img,
  },
  {
    name: 'Abdul Sattar',
    role: 'Supervisor',
    image: img,
  },
  {
    name: 'Yaqoob',
    role: 'Accountant',
    image: img,
  },
  {
    name: 'Hafeez',
    role: 'PMO',
    image: img,
  },
  {
    name: 'Obeid',
    role: 'PMO',
    image: img,
  }
];

export default function Team() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <RootLayout>
      <div className="bg-gradient-to-t from-blue-950 to-gray-200 min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-blue-950 mb-8">
            Our Team
          </h1>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Meet the talented individuals behind Tech Challenges.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-48 h-48 mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full flex flex-col items-center bg-white p-1 shadow-2xl transform hover:scale-105 transition-all duration-300"
                  />
                </div>
                <h2 className="text-xl font-bold text-white">{member.name}</h2>
                <p className="text-white">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </RootLayout>
  );
}