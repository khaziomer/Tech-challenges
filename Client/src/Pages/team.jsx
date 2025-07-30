import React, { useEffect } from "react";
import RootLayout from "../Layout";
import { useTranslation } from "react-i18next";
import img from "../assets/emp.webp";
import { Mail, Linkedin } from "lucide-react";

export default function Team() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.title = t("team.title");
  }, [t]);

  const teamMembers = t("team.members", { returnObjects: true });

  return (
    <RootLayout>
      <div className="bg-gradient-to-t from-blue-950 to-gray-200 min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-blue-950 mb-8 bg-white p-4 rounded-lg shadow-md">
            {t("team.heading")}
          </h1>
          <p className="text-lg text-gray-700 mb-8 text-center bg-white p-4 rounded-lg shadow-md">
            {t("team.description")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-200 shadow-xl rounded-2xl p-6 flex flex-col items-center border-blue-950 hover:scale-105 transition-transform duration-300"
              >
                <div className="w-40 h-40 mb-4 overflow-hidden rounded-full border-4 border-blue-950">
                  <img
                    src={img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-bold text-blue-950 text-center">
                  {member.name}
                </h2>
                <p className="text-blue-950 text-center mb-2">{member.role}</p>
                <div className="flex gap-4 mt-2">
                  <a
                    href={`mailto:${member.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-950 hover:text-white bg-white hover:bg-blue-950 p-2 rounded-full transition-colors duration-200"
                  >
                    <Mail size={20} />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-950 hover:text-white bg-white hover:bg-blue-950 p-2 rounded-full transition-colors duration-200"
                  >
                    <Linkedin size={20} />
                  </a>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
