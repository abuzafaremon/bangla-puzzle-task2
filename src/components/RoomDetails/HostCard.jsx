import hostImg from "../../assets/images/host.png";
import { AiFillStar } from "react-icons/ai";
import { HiShieldCheck } from "react-icons/hi";
import { RiHandbagLine } from "react-icons/ri";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa";
import { LuStars, LuGraduationCap, LuConciergeBell } from "react-icons/lu";

const HostCard = () => {
  return (
    <div className="py-5">
      <h2 className="text-2xl font-medium  mb-5">Meet your host</h2>
      <div className="bg-[#F0EFE9] p-6 rounded-xl">
        <div className="pt-10 max-w-[380px] mx-auto">
          <a
            href="#"
            className="bg-white rounded-xl shadow-xl p-5 block mx-auto"
          >
            <div className="flex items-center gap-10">
              <div className="flex flex-col items-center gap-2 w-full">
                <div className="relative rounded-ful">
                  <img
                    className="w-24 h-24 rounded-full"
                    src={hostImg}
                    alt="hostImg"
                  />
                  <div className="bg-pink-600 rounded-full p-1.5 absolute bottom-0 right-0 z-10">
                    <HiShieldCheck className="text-white text-xl" />
                  </div>
                </div>
                <div className="text-center">
                  <h2 className="text-3xl font-semibold">Sagrario</h2>
                  <span className="font-medium">Superhost</span>
                </div>
              </div>
              <div className="flex flex-col w-full">
                <div className="border-b py-3">
                  <h2 className="text-xl font-bold tracking-tighter">316</h2>
                  <span className="text-sm font-medium">Reviews</span>
                </div>
                <div className="border-b py-3">
                  <h2 className="text-xl font-bold tracking-tighter flex items-center">
                    <span> 4.86</span>
                    <AiFillStar className="text-sm" />
                  </h2>
                  <span className="text-sm font-medium">Rating</span>
                </div>
                <div className="py-3">
                  <h2 className="text-xl font-bold tracking-tighter">7</h2>
                  <span className="text-sm font-medium">Years hosing</span>
                </div>
              </div>
            </div>
          </a>
          <div className="py-5 grid gap-3">
            <div className="flex gap-2">
              <LuGraduationCap className="text-3xl" />
              <p>
                Where I went to school: Universidad de Psicología en Valencia
              </p>
            </div>
            <div className="flex gap-2">
              <RiHandbagLine className="text-xl" />
              <p>My work: coach</p>
            </div>
            <div className="flex gap-2">
              <BsMusicNoteBeamed className="text-xl" />
              <p>Favorite song in high school: Resistiré</p>
            </div>
            <div className="flex gap-2">
              <LuStars className="text-3xl" />
              <p>What makes my home unique: Good energy and feeling at home</p>
            </div>
            <div className="flex gap-2">
              <LuConciergeBell className="text-xl" />
              <p>For guests, I always: Help them enjoy Valencia</p>
            </div>
          </div>
          <div className="grid gap-3">
            <p>
              Open and communicative, with donation of people and happy to
              welcome friends from the world at home.
            </p>
            <a
              href="#"
              className="underline flex items-center gap-2 font-medium"
            >
              <span>Show more</span>
              <FaAngleRight />
            </a>
          </div>
          <div className="py-5">
            <button className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-5 rounded-md">
              Message Host
            </button>
          </div>
          <div className="pt-5 text-xs border-t border-t-gray-300">
            <p>
              To protect your payment, never transfer money or communicate
              outside of the Airbnb website or app.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostCard;
