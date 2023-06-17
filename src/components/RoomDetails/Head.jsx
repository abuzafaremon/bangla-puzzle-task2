import hostImg from "../../assets/images/host.png";
import { GiDrop } from "react-icons/gi";
import { LuBedDouble } from "react-icons/lu";
import { FaShower } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";

const Head = () => {
  return (
    <div className="py-5 border-b border-gray-300">
      <div className="grid gap-3">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-medium">
            Room in a rental unit hosted by Sagrario
          </h2>
          <div className="relative w-12 h-12">
            <img className="w-full rounded-full" src={hostImg} alt="hostImg" />
            <GiDrop className="absolute bottom-1 lg:bottom-0 -right-1 text-pink-600 text-2xl" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="border border-gray-300 rounded-xl p-3 flex flex-col gap-2 justify-between">
            <LuBedDouble className="text-2xl" />
            <p className="text-sm">1 double bed</p>
          </div>
          <div className="border border-gray-300 rounded-xl p-3 flex flex-col gap-2 justify-between">
            <FaShower className="text-2xl" />
            <p className="text-sm">Shared bathroom</p>
          </div>
          <div className="border border-gray-300 rounded-xl p-3 flex flex-col gap-2 justify-between">
            <AiOutlineHome className="text-2xl" />
            <p className="text-sm">Host and other guests may be here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
