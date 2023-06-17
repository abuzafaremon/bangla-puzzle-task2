import { BsStarFill } from "react-icons/bs";

const FixedFooter = () => {
  return (
    <>
      <div className="h-[72px] md:hidden"></div>
      <div className="py-3 px-5 md:hidden fixed bottom-0 right-0 left-0 bg-white mt-10 border-t border-t-gray-300">
        <div className="flex justify-between itc">
          <div>
            <span>$37 </span>
            <span>night</span>
            <div className="flex items-center gap-2">
              <BsStarFill />
              <span>4.87</span>
            </div>
          </div>
          <div>
            <button className="bg-gradient-to-r from-pink-600 to-pink-700 py-2 px-5 text-white font-medium rounded-md">
              Check availability
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FixedFooter;
