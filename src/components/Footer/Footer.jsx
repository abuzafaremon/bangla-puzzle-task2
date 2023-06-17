import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import { BiDollar } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="py-5 px-5">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row md:items-center lg:justify-between gap-3">
          <div className="order-first lg:order-last flex items-center gap-3">
            <a href="#" className="flex items-center gap-2">
              <TbWorld className="text-xl" />
              <span>English (US)</span>
            </a>
            <a href="#" className="flex items-center gap-2">
              <BiDollar className="text-xl" />
              <span>USD</span>
            </a>
            <div className="hidden md:flex items-center gap-4">
              <a href="#" className="bg-black text-white p-0.5">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-black text-white p-0.5">
                <FaTwitter />
              </a>
              <a href="#" className="bg-black text-white p-0.5">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="order-last lg:order-first flex flex-col lg:flex-row md:items-center gap-2">
            <p>&copy; 2023 Airbnb, Inc.</p>
            <div className="flex gap-2 items-center">
              <a href="#" className="text-sm font-medium">
                Terms
              </a>
              <span>.</span>
              <a href="#" className="text-sm font-medium">
                Sitemap
              </a>
              <span>.</span>
              <a href="#" className="text-sm font-medium">
                Privacy
              </a>
              <span>.</span>
              <a
                href="#"
                className="text-sm font-medium flex items-center gap-2"
              >
                <span>Your Privacy Choices</span>
                <div className="h-3 overflow-hidden flex items-center border border-blue-600 rounded-full">
                  <AiOutlineCheck className="text-blue-600 text-xs" />
                  <div className="bg-blue-600">
                    <AiOutlineClose className="text-white text-xs" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
