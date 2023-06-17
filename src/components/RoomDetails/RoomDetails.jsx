import About from "./About";
import Calender from "./Calender";
import Details from "./Details";
import Head from "./Head";
import HostCard from "./HostCard";
import Offer from "./Offer";
import RightCard from "./RightCard";

const RoomDetails = () => {
  return (
    <section className="py-10 px-5 border-b border-b-gray-300">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="w-full pr-10">
            <Head />
            <Details />
            <HostCard />
            <About />
            <Offer />
            <Calender />
          </div>
          {/* right side */}
          <RightCard />
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;
