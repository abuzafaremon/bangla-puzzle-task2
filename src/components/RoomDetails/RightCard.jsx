import { AiFillFlag, AiFillStar } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";

const RightCard = () => {
  return (
    <div className="relative hidden md:block w-2/3 lg:w-1/2 pl-10">
      <div className="sticky top-20">
        <div className="flex flex-col gap-4 p-5 rounded-md shadow-lg border">
          <div className="flex justify-between items-center mb-1">
            <div className="flex items-end gap-0.5">
              <h3 className="font-medium text-lg">$37</h3>
              <span>night</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="font-medium flex items-center">
                <AiFillStar />
                <span>4.87</span>
              </div>
              <span>.</span>
              <span>171 reviews</span>
            </div>
          </div>
          <div>
            <div className="border border-gray-400 rounded-lg">
              <div className="grid grid-cols-2">
                <div className="p-1.5 text-sm">
                  <h4 className="uppercase font-medium">Check-In</h4>
                  <time>11/13/2023</time>
                </div>
                <div className="p-1.5 text-sm border-l border-gray-400">
                  <h4 className="uppercase font-medium">Checkout</h4>
                  <span>Add date</span>
                </div>
              </div>
              <div className="p-1.5 flex justify-between items-center border-t border-gray-400">
                <div className="text-sm">
                  <h4 className="uppercase font-medium">Guests</h4>
                  <span>1 guest</span>
                </div>
                <div>
                  <FaAngleDown />
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <button className="bg-gradient-to-r from-pink-600 to-pink-700 py-2 w-full rounded-md text-white font-medium">
              Check availability
            </button>
          </div>
        </div>
        <a
          href="#"
          className="flex items-center gap-2 justify-center text-slate-600 mt-3"
        >
          <AiFillFlag />
          <span>Report this listing</span>
        </a>
      </div>
    </div>
  );
};

export default RightCard;
