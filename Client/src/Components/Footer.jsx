import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Linkedin,
  Instagram,
  ArrowUp,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation

export default function Footer() {
  const { t } = useTranslation(); // Initialize translation hook
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-primary text-blue-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold mb-4">
              {t("footer.company_name")}
            </h2>
            <p className="mb-4 text-gray-800">{t("footer.company_description")}</p>
            <div className="flex space-x-5 justify-center">
              <a
                href="#"
                className="text-blue-950 hover:text-gray-400 transition-colors"
              >
                <Facebook size={25} />
              </a>
              <a
                href="#"
                className="text-blue-950 hover:text-gray-400 transition-colors"
              >
                <Linkedin size={25} />
              </a>
              <a
                href="#"
                className="text-blue-950 hover:text-gray-400 transition-colors"
              >
                <Instagram size={25} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">{t("footer.quick_links")}</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <a
                  href="/team"
                  className="text-blue-950 hover:text-gray-400 transition-colors"
                >
                  {t("footer.links.team")}
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-blue-950 hover:text-gray-400 transition-colors"
                >
                  {t("footer.links.about")}
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-blue-950 hover:text-gray-400 transition-colors"
                >
                  {t("footer.links.contact")}
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="text-blue-950 hover:text-gray-400 transition-colors"
                >
                  {t("footer.links.projects")}
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-blue-950 hover:text-gray-400 transition-colors"
                >
                  {t("footer.links.services")}
                </a>
              </li>
              <li>
                <a
                  href="/collab"
                  className="text-blue-950 hover:text-gray-400 transition-colors"
                >
                  {t("footer.links.connections")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.contact_us")}</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin
                  size={20}
                  className="mr-2 text-secondary flex-shrink-0 mt-1"
                />
                <span className="text-blue-950">{t("footer.contact.address")}</span>
              </li>
              <li className="flex items-center">
                <Phone
                  size={20}
                  className="mr-2 text-secondary flex-shrink-0"
                />
                <a
                  href="tel:+966(11)2885656"
                  className="text-blue-950 hover:text-red-300"
                >
                  {t("footer.contact.phone")}
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-secondary flex-shrink-0" />
                <a
                  href="mailto:info@techchallenges.sa"
                  className="text-blue-950 hover:text-red-300"
                >
                  {t("footer.contact.email")}
                </a>
              </li>
            </ul>
          </div>

          {/* Google Map */}
          <div>
            <h3 className="text-xl font-semibold mb-6">{t("footer.location")}</h3>
            <div className="w-full h-52 border rounded-lg overflow-hidden shadow-md">
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
          </div>
        </div>

        <div className="border-t border-opacity-20 border-gray-600 mt-10 pt-8 text-center text-blue-950">
          <p>
            &copy; {new Date().getFullYear()} {t("footer.copyright")}
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      {isVisible && (
        <div className="fixed bottom-4 right-4">
          <button
            onClick={scrollToTop}
            className="bg-blue-950 text-white p-2 rounded-full shadow-md hover:bg-blue-700 transition-colors"
          >
            <ArrowUp size={28} />
          </button>
        </div>
      )}
    </footer>
  );
}