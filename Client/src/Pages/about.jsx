import React, { useEffect } from 'react';
import RootLayout from '../Layout';
import about from "../assets/us/about.jpg";
import mission from "../assets/us/mission.jpg";
import vision from "../assets/us/vision.jpg";
import values from "../assets/us/values.jpg";
import history from "../assets/us/history.jpg";
export default function About() {
  useEffect(() => {
    document.title = "About"
  }, [])
  return (
    <RootLayout>
      <div className="bg-gradient-to-t from-blue-950 to-gray-200 min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-blue-950 mb-8 bg-white p-4 rounded-lg shadow-md img">About Us</h1>
          <p className="md:text-lg text-sm text-gray-700 mb-8 text-center bg-white p-4 rounded-lg shadow-md">
            Welcome to Tech Challenges! We are a leading technology solutions provider in Saudi Arabia, dedicated to helping businesses transform through innovative digital solutions. Our team of experts is committed to delivering high-quality services that meet the unique needs of our clients.
          </p>

          <div className="mb-8">
            <img src={about} alt="Company" className="w-full relative h-64 object-cover md:object-[center_-28rem] object-top rounded-md shadow-md" />
          </div>

          <h2 className="text-3xl font-bold text-center text-blue-950 mb-8 bg-white p-4 rounded-lg shadow-md">Our Mission</h2>
          <p className="md:text-lg text-sm text-gray-700 mb-8 text-center bg-white p-4 rounded-lg shadow-md">
            Our mission is to empower businesses with cutting-edge technology solutions that drive growth and success. We strive to be a trusted partner for our clients, providing them with the tools and support they need to thrive in the digital age.
          </p>

          <div className="mb-8">
            <img src={mission} alt="Mission" className="w-full h-64 object-cover rounded-md shadow-md" />
          </div>

          <h2 className="text-3xl font-bold text-center text-blue-950 mb-8 bg-white p-4 rounded-lg shadow-md">Our Vision</h2>
          <p className="md:text-lg text-sm text-gray-700 mb-8 text-center bg-white p-4 rounded-lg shadow-md">
            Our vision is to be the leading technology solutions provider in the region, known for our innovation, expertise, and commitment to excellence. We aim to create a positive impact on the businesses we serve and the communities we operate in.
          </p>

          <div className="mb-8">
            <img src={vision} alt="Vision" className="w-full h-64 object-cover rounded-md shadow-md" />
          </div>

          <h2 className="text-3xl font-bold text-center text-blue-950 mb-8 bg-white p-4 rounded-lg shadow-md">Our Values</h2>
          <ul className="list-disc list-inside md:text-lg text-sm text-gray-700 mb-8 text-center bg-white p-4 rounded-lg shadow-md">
            <li>Innovation: We embrace change and continuously seek new ways to improve our solutions and services.</li>
            <li>Integrity: We conduct our business with honesty and transparency, building trust with our clients and partners.</li>
            <li>Excellence: We strive for excellence in everything we do, delivering high-quality solutions that exceed expectations.</li>
            <li>Collaboration: We believe in the power of teamwork and work closely with our clients to achieve their goals.</li>
            <li>Customer Focus: We put our clients at the center of everything we do, ensuring their satisfaction and success.</li>
          </ul>

          <div className="mb-8">
            <img src={values} alt="Values" className="w-full h-64 object-cover rounded-md shadow-md" />
          </div>

          <h2 className="text-3xl font-bold text-center text-blue-950 mb-8 bg-white p-4 rounded-lg shadow-md">Our History</h2>
          <p className="md:text-lg text-sm text-gray-700 mb-8 text-center bg-white p-4 rounded-lg shadow-md">
            Founded in 2010, Tech Challenges has grown from a small startup to a leading technology solutions provider in Saudi Arabia. Over the years, we have expanded our services and expertise, helping numerous businesses achieve their digital transformation goals.
          </p>

          <div className="mb-8">
            <img src={history} alt="History" className="w-full h-64 object-cover rounded-md shadow-md" />
          </div>
        </div>
      </div>
    </RootLayout>
  );
}