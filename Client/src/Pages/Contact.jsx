import React, { useState, useEffect } from "react";
import RootLayout from "../Layout";
import { useTranslation } from "react-i18next"; // Import useTranslation

export default function Contact() {
  const { t } = useTranslation(); // Initialize translation hook
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    window.location.href = `mailto:info@techchallenges.sa?subject=${t(
      "contact.form.subject"
    )}&body=${t("contact.form.name")}: ${name}%0A${t(
      "contact.form.email"
    )}: ${email}%0A${t("contact.form.message")}: ${message}`;
  };

  useEffect(() => {
    document.title = t("contact.title"); // Set the page title dynamically
  }, [t]);

  return (
    <RootLayout>
      <div className="bg-gradient-to-t from-blue-950 to-gray-200 min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-blue-950 mb-8 bg-white p-4 rounded-lg shadow-md">
            {t("contact.heading")}
          </h1>
          <p className="text-lg text-gray-700 mb-8 text-center bg-white p-4 rounded-lg shadow-md">
            {t("contact.description")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Map Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-blue-950 mb-4 underline">
                {t("contact.location.heading")}
              </h2>
              <p className="text-gray-700 mb-4">{t("contact.location.address")}</p>
              <div className="w-full h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.123456789012!2d46.709156!3d24.66323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03e2f03e2f03%3A0x3e2f03e2f03e2f03!2s24%C2%B039'47.6%22N+46%C2%B042'33.0%22E!5e0!3m2!1sen!2s!4v1611234567890!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
              <div className="text-center mt-4">
                <a
                  href="https://www.google.com/maps/place/24%C2%B039'47.6%22N+46%C2%B042'33.0%22E/@24.66323,46.709156,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-950 hover:text-red-400 underline"
                >
                  {t("contact.map_location.view_large_map")}
                </a>
              </div>
            </div>

            {/* Contact Information Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-blue-950 mb-12 underline">
                {t("contact.info.heading")}
              </h2>
              <p className="text-gray-700 mb-4">
                <strong>{t("contact.info.phone")}:</strong>{" "}
                <a
                  href="tel:+966112885656"
                  className="text-blue-950 hover:text-red-300"
                >
                  +966 (11) 288 5656
                </a>
              </p>
              <p className="text-gray-700 mb-4">
                <strong>{t("contact.info.email")}:</strong>{" "}
                <a
                  href="mailto:info@techchallenges.sa"
                  className="text-blue-950 hover:text-red-300"
                >
                  info@techchallenges.sa
                </a>
              </p>
              <p className="text-gray-700 mb-4">
                <strong>{t("contact.info.address")}:</strong>{" "}
                {t("contact.location.address")}
              </p>
              <p className="text-gray-700 mb-4">
                <strong>{t("contact.info.hours")}:</strong>{" "}
                {t("contact.info.office_hours")}
              </p>
              <p className="text-gray-700 mb-4">
                <strong>{t("contact.info.support")}:</strong>{" "}
                {t("contact.info.support_email")}{" "}
                <a
                  href="mailto:support@techchallenges.sa"
                  className="text-blue-950 hover:text-red-300"
                >
                  support@techchallenges.sa
                </a>
              </p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-950 mb-4">
              {t("contact.form.heading")}
            </h2>
            <form onSubmit={handleSubmit} className="text-left">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  {t("contact.form.name")}
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder={t("contact.form.name_placeholder")}
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  {t("contact.form.email")}
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder={t("contact.form.email_placeholder")}
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  {t("contact.form.message")}
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  placeholder={t("contact.form.message_placeholder")}
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  {t("contact.form.submit")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}