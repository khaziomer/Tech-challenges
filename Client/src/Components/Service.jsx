import { Cpu, Code, Shield, Cable, TrendingUp, Database, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      id: "Solutions",
      title: "TC Solutions",
      description: "Solutions Services",
      icon: <Cpu size={40} className="text-primary" />,
      bgColor: "bg-gray-50",
    },
    {
      id: "Software",
      title: "TC Development",
      description: "Development Services",
      icon: <Code size={40} className="text-primary" />,
      bgColor: "bg-gray-50",
    },
    {
      id: "secure",
      title: "TC Secure",
      description: "Cybersecurity Services",
      icon: <Shield size={40} className="text-primary" />,
      bgColor: "bg-gray-50",
    },
    {
      id: "cable",
      title: "TC cable",
      description: "Connection Services",
      icon: <Cable size={40} className="text-primary" />,
      bgColor: "bg-white",
    },
    {
      id: "Integrated",
      title: "TC Integrated",
      description: "Integrated Services",
      icon: <TrendingUp size={40} className="text-primary" />,
      bgColor: "bg-gray-50",
    },
    {
      id: "database",
      title: "TC database",
      description: "Database Services",
      icon: <Database size={40} className="text-primary" />,
      bgColor: "bg-gray-50",
    },
    {
      id: "consult",
      title: "TC Consult",
      description: "Consultation Services",
      icon: <Users size={40} className="text-primary" />,
      bgColor: "bg-gray-50",
    },
  ];

  return (
    <div className="py-16 bg-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Our services box with tap effect and enhanced gradient */}
          <motion.a
            href="/services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-950 to-gray-500 hover:from-gray-500 hover:to-blue-950 text-white p-8 flex flex-col justify-center items-center text-center service-card border border-gray-300 relative shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-2">What</h2>
            <h2 className="text-3xl font-bold">We Do!</h2>
            <span className="absolute bottom-2 bg-white text-blue-950 text-xs font-semibold px-3 py-1 rounded-full shadow-md">Tap on me</span>
          </motion.a>

          {/* Service cards */}
          {services.map((service) => (
            <div
              key={service.id}
              className={`${service.bgColor} p-8 flex flex-col items-center text-center service-card border border-gray-300`}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
              <p className="text-secondary">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
