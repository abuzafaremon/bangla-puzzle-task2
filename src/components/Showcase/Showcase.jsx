import { BsHeart } from "react-icons/bs";
import { RxUpload } from "react-icons/rx";
import { AiFillStar } from "react-icons/ai";
import { GiDrop } from "react-icons/gi";
import { CgMenuGridO } from "react-icons/cg";
import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
import img3 from "../../assets/images/3.png";
import img4 from "../../assets/images/4.png";
import img5 from "../../assets/images/5.png";
const Showcase = () => {
  return (
    <section className="md:py-10 md:px-5">
      <div className="container mx-auto">
        <div className="grid gap-3">
          <div className="order-last md:order-first px-5 md:px-0">
            <h2 className="text-[26px] font-medium">
              Enjoy historic Valencia and close to the beach.
            </h2>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-1 font-medium">
                  <AiFillStar />
                  <span>4.8</span>
                  <span>.</span>
                  <a className="underline" href="#">
                    171 reviews
                  </a>
                </div>
                <span>.</span>
                <div className="flex items-center gap-1">
                  <GiDrop />
                  <span>Superhost</span>
                </div>
                <span>.</span>
                <a href="#" className="underline font-medium">
                  Valencia, Spain
                </a>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <a
                  href="#"
                  className="flex gap-2 items-center font-medium p-1.5 hover:bg-black hover:bg-opacity-5 rounded-md underline"
                >
                  <RxUpload />
                  <span>Share</span>
                </a>
                <a
                  href="#"
                  className="flex gap-2 items-center font-medium p-1.5 hover:bg-black hover:bg-opacity-5 rounded-md underline"
                >
                  <BsHeart />
                  <span>Share</span>
                </a>
              </div>
            </div>
          </div>
          <dir className="order-first md:order-last relative p-0 m-0">
            <div className="flex items-center gap-2 md:rounded-xl overflow-hidden">
              <div className="w-full">
                <img className="w-full object-cover" src={img1} alt="img" />
              </div>
              <div className="hidden w-full md:grid grid-cols-2 gap-2">
                <img src={img2} alt="img" />
                <img src={img3} alt="img" />
                <img src={img4} alt="img" />
                <img src={img5} alt="img" />
              </div>
            </div>
            <a
              href="#"
              className="absolute bottom-5 right-5 hidden md:flex items-center gap-2 bg-white px-3 py-2 border border-black rounded-lg"
            >
              <CgMenuGridO className="text-xl" />
              <span className="font-medium text-sm">Show all photos</span>
            </a>
            <a
              href="#"
              className="absolute right-3 bottom-4 md:hidden bg-black bg-opacity-40 px-3 py-0.5 text-white font-medium text-sm rounded-md"
            >
              1/40
            </a>
          </dir>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
