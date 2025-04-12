import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next"; // Import useTranslation
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import grand from "../assets/allies/grandstream.png";
import cisco from "../assets/allies/cisco.png";
import Dell from "../assets/allies/Dell.png";
import visual from "../assets/allies/visual-studio.png";
import fortinet from "../assets/allies/fortinet.png";
import huawei from "../assets/allies/huawei.png";
import microsoft from "../assets/allies/microsoft.png";

const companies = [
  { id: "grandstream", image: grand },
  { id: "cisco", image: cisco },
  { id: "dell", image: Dell },
  { id: "visual_studio", image: visual },
  { id: "fortinet", image: fortinet },
  { id: "huawei", image: huawei },
  { id: "microsoft", image: microsoft },
];

export default function TechSupport() {
  const { t, i18n } = useTranslation(); // Initialize translation hook
  const navigate = useNavigate();
  const swiperRef = useRef(null); // Reference for Swiper instance

  const handleAllButtonClick = () => {
    navigate("/collab");
  };

  // Reset Swiper direction and position when language changes
  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;
      swiperInstance.changeLanguageDirection(i18n.language === "ar" ? "rtl" : "ltr"); // Update direction
      swiperInstance.update(); // Update Swiper instance
      swiperInstance.slideToLoop(0); // Reset to the first slide in loop mode
    }
  }, [i18n.language]);

  return (
    <div className="bg-gray-100 px-4 py-8 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-950 mb-6 md:mb-8">
          {t("tech_support.title")}
        </h1>
        <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 text-center">
          {t("tech_support.description")}
        </p>

        <Swiper
          ref={swiperRef} // Attach Swiper reference
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          navigation
          autoplay={{ delay: 2000 }}
          loop
          dir={i18n.language === "ar" ? "rtl" : "ltr"} // Set direction dynamically
          style={{ direction: i18n.language === "ar" ? "rtl" : "ltr" }} // Ensure proper direction styling
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 }, // For small screens
            640: { slidesPerView: 3, spaceBetween: 15 }, // For medium screens
            768: { slidesPerView: 2, spaceBetween: 20 }, // For large screens
            1024: { slidesPerView: 3, spaceBetween: 20 }, // For large screens
          }}
        >
          {companies.map((company) => (
            <SwiperSlide key={company.id}>
              <div className="flex flex-col items-center">
                <div className="w-48 h-32 md:w-64 md:h-40 mb-4 p-2 rounded-xl flex items-center justify-center bg-gradient-to-br from-indigo-100 to-lime-50 shadow-xl hover:scale-105 transition-all duration-300">
                  <img
                    src={company.image}
                    alt={t(`tech_support.companies.${company.id}`)}
                    className="w-full h-full object-contain"
                  />
                </div>

                <h2 className="text-base md:text-lg font-semibold text-blue-950 text-center">
                  {t(`tech_support.companies.${company.id}`)}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-6 md:mt-8">
          <button
            className="bg-gradient-to-r from-blue-950 to-gray-500 hover:from-gray-500 hover:to-blue-950 text-white font-semibold py-2 px-6 md:py-3 md:px-8 rounded-full shadow-md transform hover:scale-105 transition-all duration-300"
            onClick={handleAllButtonClick}
          >
            {t("tech_support.button")}
          </button>
        </div>
      </div>
    </div>
  );
}