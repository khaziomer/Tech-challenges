import { Cpu, Code, Shield, Cable, TrendingUp, Database, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation(); // Initialize translation hook

  // Services array with translation keys
  const services = [
    {
      id: "Solutions",
      titleKey: "services.Solutions.title",
      descriptionKey: "services.Solutions.description",
      icon: <Cpu size={40} className="text-primary" />,
      bgColor: "bg-gray-50",
    },
    {
      id: "Software",
      titleKey: "services.Software.title",
      descriptionKey: "services.Software.description",
      icon: <Code size={40} className="text-primary" />,
      bgColor: "bg-gray-50",
    },
    {
      id: "Secure",
      titleKey: "services.Secure.title",
      descriptionKey: "services.Secure.description",
      icon: <Shield size={40} className="text-primary" />,
      bgColor: "bg-gray-50",
    },
    {
      id: "Cable",
      titleKey: "services.Cable.title",
      descriptionKey: "services.Cable.description",
      icon: <Cable size={40} className="text-primary" />,
      bgColor: "bg-white",
    },
    {
      id: "Integrated",
      titleKey: "services.Integrated.title",
      descriptionKey: "services.Integrated.description",
      icon: <TrendingUp size={40} className="text-primary" />,
      bgColor: "bg-gray-50",
    },
    {
      id: "Database",
      titleKey: "services.Database.title",
      descriptionKey: "services.Database.description",
      icon: <Database size={40} className="text-primary" />,
      bgColor: "bg-gray-50",
    },
    {
      id: "Consult",
      titleKey: "services.Consult.title",
      descriptionKey: "services.Consult.description",
      icon: <Users size={40} className="text-primary" />,
      bgColor: "bg-gray-50",
    },
  ];

  return (
    <div className="py-16 bg-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Introductory section */}
          <motion.a
            href="/services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-950 to-gray-500 hover:from-gray-500 hover:to-blue-950 text-white p-8 flex flex-col justify-center items-center text-center service-card border border-gray-300 relative shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-2">{t("services.intro_line1")}</h2>
            <h2 className="text-3xl font-bold">{t("services.intro_line2")}</h2>
            <span className="absolute bottom-2 bg-white text-blue-950 text-xs font-semibold px-3 py-1 rounded-full shadow-md">
              {t("services.tap_hint")}
            </span>
          </motion.a>

          {/* Service cards */}
          {services.map((service) => (
            <div
              key={service.id}
              className={`${service.bgColor} p-8 flex flex-col items-center text-center service-card border border-gray-300`}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                {t(service.titleKey)}
              </h3>
              <p className="text-secondary">
                {t(service.descriptionKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}