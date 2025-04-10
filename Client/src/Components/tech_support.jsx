import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
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
  { name: "Grandstream", image: grand },
  { name: "Cisco", image: cisco },
  { name: "Dell", image: Dell },
  { name: "Visual Studio", image: visual },
  { name: "Fortinet", image: fortinet },
  { name: "Huawei", image: huawei },
  { name: "Microsoft", image: microsoft },
];

export default function TechSupport() {
  const navigate = useNavigate();

  const handleAllButtonClick = () => {
    navigate("/collab");
  };

  return (
    <div className="bg-gray-100 px-4 py-8 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-950 mb-6 md:mb-8">
          Our Collaborations
        </h1>
        <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 text-center">
          We are proud to collaborate with these esteemed companies.
        </p>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          navigation
          autoplay={{ delay: 2000 }}
          loop
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 }, // For small screens
            640: { slidesPerView: 3, spaceBetween: 15 }, // For medium screens
            768: { slidesPerView: 2, spaceBetween: 20 }, // For large screens
            1024: { slidesPerView: 3, spaceBetween: 20 }, // For large screens
          }}
        >
          {companies.map((company, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center">
                <div className="w-48 h-32 md:w-64 md:h-40 mb-4 p-2 rounded-xl flex items-center justify-center bg-gradient-to-br from-indigo-100 to-lime-50 shadow-xl hover:scale-105 transition-all duration-300">
                  <img
                    src={company.image}
                    alt={company.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <h2 className="text-base md:text-lg font-semibold text-blue-950 text-center">
                  {company.name}
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
            More
          </button>
        </div>
      </div>
    </div>
  );
}
