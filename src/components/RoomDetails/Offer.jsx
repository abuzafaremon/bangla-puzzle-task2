import { LuBedDouble } from "react-icons/lu";
import { BsFileLock } from "react-icons/bs";
import { TbToolsKitchen, TbWashDry1 } from "react-icons/tb";
import { AiOutlineWifi } from "react-icons/ai";
import { MdOutlineTableRestaurant } from "react-icons/md";

const Offer = () => {
  return (
    <div className="">
      <div className="py-10 border-b border-b-gray-300">
        <h2 className="text-2xl font-medium mb-3">Where you&apos;ll sleep</h2>
        <div className="border border-gray-300 rounded-xl p-5 flex flex-col gap-2 justify-between w-1/2">
          <LuBedDouble className="text-2xl mb-2" />
          <p className="text-lg font-medium">Bedroom</p>
          <p className="text-sm">1 double bed</p>
        </div>
      </div>
      <div className="py-10 border-b border-b-gray-300">
        <h2 className="text-2xl font-medium mb-4">What this place offers</h2>
        <div className="grid gap-3">
          <div className="flex items-center gap-3">
            <BsFileLock className="text-2xl" />
            <p>Lock on bedroom door</p>
          </div>
          <div className="flex items-center gap-3">
            <TbToolsKitchen className="text-2xl" />
            <p>Kitchen</p>
          </div>
          <div className="flex items-center gap-3">
            <AiOutlineWifi className="text-2xl" />
            <p>Wifi</p>
          </div>
          <div className="flex items-center gap-3">
            <MdOutlineTableRestaurant className="text-2xl" />
            <p>Dedicated workspace</p>
          </div>
          <div className="flex items-center gap-3">
            <TbWashDry1 className="text-2xl" />
            <p>Washer</p>
          </div>
        </div>
        <div className="pt-10">
          <button className="px-4 py-2 border border-black rounded-md font-medium hover:bg-black hover:bg-opacity-5">
            Show all 37 amenities
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
