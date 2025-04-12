import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import useTranslation
import img from "../assets/img1.jpg";

export default function Founders() {
  const { t } = useTranslation(); // Initialize translation hook
  const navigate = useNavigate();

  const handleTeamButtonClick = () => {
    navigate("/team");
  };

  const founders = [
    {
      id: "ahmed",
      img: img,
      translationKeys: {
        name: "founders.ahmed.name",
        role: "founders.ahmed.role",
        description: "founders.ahmed.description",
      },
    },
    {
      id: "fahad",
      img: img,
      translationKeys: {
        name: "founders.fahad.name",
        role: "founders.fahad.role",
        description: "founders.fahad.description",
      },
    },
  ];

  return (
    <div className="bg-gray-100 px-4 py-10 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-950 mb-4">
          {t("founders.title")}
        </h1>
        <p className="text-md sm:text-lg text-center text-gray-700 mb-10 italic">
          ~ {t("founders.quote")}
        </p>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {founders.map((founder) => (
            <div
              key={founder.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-blue-950 transition-shadow duration-300 flex flex-col"
            >
              <img
                src={founder.img}
                alt={t(founder.translationKeys.name)}
                className="w-full h-56 sm:h-64 md:h-60 object-cover mb-4"
              />
              <div className="flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-950">
                  {t(founder.translationKeys.name)}
                </h3>
                <p className="text-gray-700">{t(founder.translationKeys.role)}</p>
                <p className="text-gray-600 mt-2">{t(founder.translationKeys.description)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-10">
          <button
            className="bg-gradient-to-r from-gray-500 to-blue-950 hover:from-blue-950 hover:to-gray-500 text-white font-semibold py-3 px-8 rounded-full shadow-md transform hover:scale-105 transition-all duration-300"
            onClick={handleTeamButtonClick}
          >
            {t("founders.button")}
          </button>
        </div>

        {/* Separator */}
        <div className="mt-10">
          <hr className="border-t-2 border-gray-300" />
        </div>
      </div>
    </div>
  );
}
