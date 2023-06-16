import { BsHeart } from "react-icons/bs";
import { RxUpload } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { TfiAngleLeft } from "react-icons/tfi";
import { BiMenu } from "react-icons/bi";
import { SiReactos } from "react-icons/si";
const Header = () => {
  return (
    <header className="px-5 bg-white md:shadow">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-16 md:hidden">
          <a
            href="#"
            className="flex items-center gap-2 text-black hover:underline"
          >
            <TfiAngleLeft className="text-sm" />
            <span>Homes</span>
          </a>
          <div className="flex items-center gap-1">
            <a
              href="#"
              className="w-8 h-8 rounded-full hover:bg-black hover:bg-opacity-5 flex justify-center items-center"
            >
              <RxUpload />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full hover:bg-black hover:bg-opacity-5 flex justify-center items-center"
            >
              <BsHeart />
            </a>
          </div>
        </div>
        <div className="hidden md:flex justify-between items-center h-20">
          <div>
            <a
              href="#"
              className="flex items-center gap-1 text-3xl text-pink-600 font-medium"
            >
              <SiReactos className="text-pink-600 text-3xl" />
              <span className="hidden lg:block">airbnb</span>
            </a>
          </div>
          <div>
            <div className="flex items-center justify-between rounded-full border shadow hover:shadow-md overflow-hidden p-2">
              <input
                type="text"
                placeholder="Start your search"
                className="outline-none px-2 w-full pr-5"
              />
              <div className="bg-pink-600 rounded-full p-2">
                <FiSearch className="text-white" />
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <a
                href="#"
                className="block text-[#222] font-medium px-3 py-2 rounded-full hover:bg-black hover:bg-opacity-5"
              >
                Airbnb your home
              </a>
              <a
                href="#"
                className="block p-3 hover:bg-black hover:bg-opacity-5 rounded-full"
              >
                <TbWorld className="text-xl text-[#222]" />
              </a>
              <a
                href="#"
                className="p-1.5 flex items-center gap-3 rounded-full border hover:shadow-md"
              >
                <BiMenu className="text-xl text-gray-500" />
                <FaUserCircle className="text-3xl text-gray-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
