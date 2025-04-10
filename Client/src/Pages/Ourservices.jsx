import React from "react";
import RootLayout from "../Layout";
import ict from "../assets/service/ict.jpg";
import software from "../assets/service/software.jpg";
import cyber from "../assets/service/cyber.jpg";
import out from "../assets/service/out.jpg";
import cable from "../assets/service/cable.jpg";
import intergrated from "../assets/service/intergrated.jpg";
import sql from "../assets/service/sql.jpg";
import consultancy from "../assets/service/consultancy.jpg";

export default function OurServices() {
  return (
    <RootLayout>
      <div className="bg-gradient-to-t from-blue-950 to-gray-200 min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-blue-950 mb-8 bg-white p-4 rounded-lg shadow-md">
            Our Services
          </h1>
          <p className="text-sm text-gray-700 mb-8 text-center bg-white p-4 rounded-lg shadow-md">
            At Tech Challenges, we offer a wide range of services to help
            businesses achieve their technology goals. Our team of experts is
            dedicated to providing high-quality solutions tailored to meet the
            unique needs of each client.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={ict}
                alt="ICT Solutions"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-bold text-blue-950 mb-4">
                ICT Solutions
              </h2>
              <p className="text-gray-700">
                We provide comprehensive ICT solutions to help businesses
                improve their communication and information systems. Our
                services include network design and implementation, IT
                infrastructure management, and cloud computing solutions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={software}
                alt="Software Development"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-bold text-blue-950 mb-4">
                Software Development
              </h2>
              <p className="text-gray-700">
                Our software development services include custom software
                solutions, mobile app development, and web development. We
                specialize in creating scalable and secure applications that
                meet the specific needs of our clients.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={cyber}
                alt="Cyber Security Solutions"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-bold text-blue-950 mb-4">
                Cyber Security Solutions
              </h2>
              <p className="text-gray-700">
                We offer advanced cyber security solutions to protect your
                business from cyber threats and ensure data security. Our
                services include vulnerability assessments, penetration testing,
                and security monitoring.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={out}
                alt="IT Outsourcing"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-bold text-blue-950 mb-4">
                IT Outsourcing
              </h2>
              <p className="text-gray-700">
                Our IT outsourcing services provide businesses with the
                expertise and support they need to manage their IT
                infrastructure. We offer a range of services, including help
                desk support, network management, and system administration.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={cable}
                alt="Structured Cabling"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-bold text-blue-950 mb-4">
                Structured Cabling
              </h2>
              <p className="text-gray-700">
                We offer structured cabling solutions to ensure reliable and
                efficient communication networks for your business. Our services
                include the design, installation, and maintenance of cabling
                systems for data and voice networks.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={intergrated}
                alt="Integrated Solutions"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-bold text-blue-950 mb-4">
                Integrated Solutions
              </h2>
              <p className="text-gray-700">
                Our integrated solutions combine various technologies to create
                seamless and efficient systems for your business. We specialize
                in integrating hardware, software, and network components to
                deliver comprehensive solutions that meet your specific needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={sql}
                alt="Microsoft SQL Consultancy"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-bold text-blue-950 mb-4">
                SQL Consultancy
              </h2>
              <p className="text-gray-700">
                We provide SQL consultancy services to help businesses
                optimize their database management and performance. Our services
                include database design, performance tuning, and disaster
                recovery planning.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={consultancy}
                alt="Backup, BC, and DR Consultancy"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-bold text-blue-950 mb-4">
                Backup, BC, and DR Consultancy
              </h2>
              <p className="text-gray-700">
                Our consultancy services for backup, business continuity, and
                disaster recovery ensure that your business is prepared for any
                eventuality. We help you develop and implement comprehensive
                plans to protect your data and maintain operations during
                disruptions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}