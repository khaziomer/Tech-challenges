import React, { useEffect } from "react";
import RootLayout from "../Layout";
import { useTranslation } from "react-i18next"; // Import useTranslation
import about from "../assets/us/about.jpg";
import mission from "../assets/us/mission.jpg";
import vision from "../assets/us/vision.jpg";
import values from "../assets/us/values.jpg";
import history from "../assets/us/history.jpg";

export default function About() {
  const { t } = useTranslation(); // Initialize translation hook

  useEffect(() => {
    document.title = t("about.title"); // Set the page title dynamically
  }, [t]);

  return (
    <RootLayout>
      <div className="bg-gradient-to-t from-blue-950 to-gray-200 min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-blue-950 mb-8 bg-white p-4 rounded-lg shadow-md img">
            {t("about.heading")}
          </h1>
          <p className="md:text-lg text-sm text-gray-700 mb-8 text-center bg-white p-4 rounded-lg shadow-md">
            {t("about.description")}
          </p>

          <div className="mb-8">
            <img
              src={about}
              alt={t("about.images.company")}
              className="w-full relative h-64 object-cover md:object-[center_-28rem] object-top rounded-md shadow-md"
            />
          </div>

          <h2 className="text-3xl font-bold text-center text-blue-950 mb-8 bg-white p-4 rounded-lg shadow-md">
            {t("about.mission.heading")}
          </h2>
          <p className="md:text-lg text-sm text-gray-700 mb-8 text-center bg-white p-4 rounded-lg shadow-md">
            {t("about.mission.description")}
          </p>

          <div className="mb-8">
            <img
              src={mission}
              alt={t("about.images.mission")}
              className="w-full h-64 object-cover rounded-md shadow-md"
            />
          </div>

          <h2 className="text-3xl font-bold text-center text-blue-950 mb-8 bg-white p-4 rounded-lg shadow-md">
            {t("about.vision.heading")}
          </h2>
          <p className="md:text-lg text-sm text-gray-700 mb-8 text-center bg-white p-4 rounded-lg shadow-md">
            {t("about.vision.description")}
          </p>

          <div className="mb-8">
            <img
              src={vision}
              alt={t("about.images.vision")}
              className="w-full h-64 object-cover rounded-md shadow-md"
            />
          </div>

          <h2 className="text-3xl font-bold text-center text-blue-950 mb-8 bg-white p-4 rounded-lg shadow-md">
            {t("about.values.heading")}
          </h2>
          <ul className="list-disc list-inside md:text-lg text-sm text-gray-700 mb-8 text-center bg-white p-4 rounded-lg shadow-md">
            {t("about.values.list", { returnObjects: true }).map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>

          <div className="mb-8">
            <img
              src={values}
              alt={t("about.images.values")}
              className="w-full h-64 object-cover rounded-md shadow-md"
            />
          </div>

          <h2 className="text-3xl font-bold text-center text-blue-950 mb-8 bg-white p-4 rounded-lg shadow-md">
            {t("about.history.heading")}
          </h2>
          <p className="md:text-lg text-sm text-gray-700 mb-8 text-center bg-white p-4 rounded-lg shadow-md">
            {t("about.history.description")}
          </p>

          <div className="mb-8">
            <img
              src={history}
              alt={t("about.images.history")}
              className="w-full h-64 object-cover rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </RootLayout>
  );
}