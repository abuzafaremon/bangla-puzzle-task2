import { LuBedDouble } from "react-icons/lu";
import { MdOutlineTableRestaurant } from "react-icons/md";
import { GiDrop } from "react-icons/gi";
import { TbLanguage } from "react-icons/tb";

const Details = () => {
  return (
    <>
      <div className="py-5 border-b border-b-gray-300">
        <div className="grid gap-5 text-slate-700">
          <div className="flex gap-2">
            <LuBedDouble className="text-3xl" />
            <div>
              <h4 className="font-medium">Room in a rental unit</h4>
              <p className="text-sm">
                Your own room in a home, plus access to shared spaces.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <MdOutlineTableRestaurant className="text-3xl" />
            <div>
              <h4 className="font-medium">Dedicated workspace</h4>
              <p className="text-sm">
                A room with wifi that&apos;s well-suited for working.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <GiDrop className="text-3xl" />
            <div>
              <h4 className="font-medium">Sagrario is a Superhost</h4>
              <p className="text-sm">
                Superhosts are experienced, highly rated hosts who are committed
                to providing great stays for guests.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-7 border-b border-b-gray-300">
        <div className="flex items-center gap-3">
          <TbLanguage className="text-2xl" />
          <div>
            <p>Some info has been automatically translated.</p>
            <a className="underline font-medium" href="#">
              Show original language
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
