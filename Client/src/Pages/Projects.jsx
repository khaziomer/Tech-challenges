import React, { useEffect } from "react"; // Import useEffect
import RootLayout from "../Layout";
import { useTranslation } from "react-i18next"; // Import useTranslation
import logo1 from "../assets/collab_comp/logo1.png";
import logo2 from "../assets/collab_comp/logo2.png";
import logo3 from "../assets/collab_comp/logo3.png";
import logo4 from "../assets/collab_comp/logo4.png";
import logo5 from "../assets/collab_comp/logo5.png";
import logo6 from "../assets/collab_comp/logo6.png";
import logo7 from "../assets/collab_comp/logo7.png";
import logo8 from "../assets/collab_comp/logo8.png";
import logo9 from "../assets/collab_comp/logo9.png";
import logo10 from "../assets/collab_comp/logo10.png";
import logo11 from "../assets/collab_comp/logo11.png";
import logo12 from "../assets/collab_comp/logo12.png";
import logo13 from "../assets/collab_comp/logo13.png";
import logo14 from "../assets/collab_comp/logo14.png";
import logo15 from "../assets/collab_comp/logo15.png";
import logo16 from "../assets/collab_comp/logo16.png";
import logo17 from "../assets/collab_comp/logo17.png";
import logo18 from "../assets/collab_comp/logo18.png";
import logo19 from "../assets/collab_comp/logo19.png";
import logo20 from "../assets/collab_comp/logo20.png";
import logo21 from "../assets/collab_comp/logo21.png";
import logo22 from "../assets/collab_comp/logo22.png";
import logo23 from "../assets/collab_comp/logo23.png";
import logo24 from "../assets/collab_comp/logo24.png";

const projects = [
  { name: "Majid Al futtaim", image: logo1 },
  { name: "Sloex Plus", image: logo2 },
  { name: "Landmark Group", image: logo3 },
  { name: "Axelerated Soultions", image: logo4 },
  { name: "VOX Cinemas", image: logo5 },
  { name: "Othaim", image: logo6 },
  { name: "princess Nourah Bint Abdul Rahman University", image: logo7 },
  { name: "Taqnia", image: logo8 },
  { name: "Abdul Latif Jameel", image: logo9 },
  { name: "U-Mark Sport", image: logo10 },
  { name: "Arasco", image: logo11 },
  { name: "Al raidah", image: logo12 },
  { name: "Al munajem", image: logo13 },
  { name: "Habtoor Leighton Group", image: logo14 },
  { name: "Solidarity", image: logo15 },
  { name: "Shaqra University", image: logo16 },
  { name: "Saudi Red Crescent Authority", image: logo17 },
  { name: "iNet", image: logo18 },
  { name: "Mobisat", image: logo19 },
  { name: "Fipco", image: logo20 },
  { name: "PepsiCo", image: logo21 },
  { name: "Ejada", image: logo22 },
  { name: "Arab Open University", image: logo23 },
  { name: "Al Bawani", image: logo24 },
];

export default function Projects() {
  const { t } = useTranslation(); // Initialize translation hook

  useEffect(() => {
    document.title = t("project.title"); // Set the page title dynamically
  }, [t]);

  return (
    <RootLayout>
      <div className="bg-gradient-to-t from-blue-950 to-gray-200 min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-blue-950 mb-8 bg-white p-4 rounded-lg shadow-md">
            {t("project.heading")}
          </h1>
          <p className="text-lg text-gray-700 mb-8 text-center bg-white p-4 rounded-lg shadow-md">
            {t("project.description")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:bg-white transition-all duration-300"
              >
                <div className={`mb-4 ${index < 17 ? "w-56 h-56" : "w-48 h-48"}`}>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </RootLayout>
  );
}