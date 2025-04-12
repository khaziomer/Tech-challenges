import React, { useEffect } from "react";
import RootLayout from "../Layout";
import { useTranslation } from "react-i18next"; // Import useTranslation
import ict from "../assets/service/ict.jpg";
import software from "../assets/service/software.jpg";
import cyber from "../assets/service/cyber.jpg";
import out from "../assets/service/out.jpg";
import cable from "../assets/service/cable.jpg";
import intergrated from "../assets/service/intergrated.jpg";
import sql from "../assets/service/sql.jpg";
import consultancy from "../assets/service/consultancy.jpg";

export default function OurServices() {
  const { t } = useTranslation(); // Initialize translation hook

  useEffect(() => {
    document.title = t("service.title"); // Set the page title dynamically
  }, [t]);

  const services = [
    {
      id: "ict",
      image: ict,
      heading: t("service.ict.heading"),
      description: t("service.ict.description"),
    },
    {
      id: "software",
      image: software,
      heading: t("service.software.heading"),
      description: t("service.software.description"),
    },
    {
      id: "cyber",
      image: cyber,
      heading: t("service.cyber.heading"),
      description: t("service.cyber.description"),
    },
    {
      id: "out",
      image: out,
      heading: t("service.out.heading"),
      description: t("service.out.description"),
    },
    {
      id: "cable",
      image: cable,
      heading: t("service.cable.heading"),
      description: t("service.cable.description"),
    },
    {
      id: "intergrated",
      image: intergrated,
      heading: t("service.intergrated.heading"),
      description: t("service.intergrated.description"),
    },
    {
      id: "sql",
      image: sql,
      heading: t("service.sql.heading"),
      description: t("service.sql.description"),
    },
    {
      id: "consultancy",
      image: consultancy,
      heading: t("service.consultancy.heading"),
      description: t("service.consultancy.description"),
    },
  ];

  return (
    <RootLayout>
      <div className="bg-gradient-to-t from-blue-950 to-gray-200 min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-blue-950 mb-8 bg-white p-4 rounded-lg shadow-md">
            {t("service.heading")}
          </h1>
          <p className="text-sm text-gray-700 mb-8 text-center bg-white p-4 rounded-lg shadow-md">
            {t("service.description")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <img
                  src={service.image}
                  alt={service.heading}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h2 className="text-2xl font-bold text-blue-950 mb-4">
                  {service.heading}
                </h2>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </RootLayout>
  );
}