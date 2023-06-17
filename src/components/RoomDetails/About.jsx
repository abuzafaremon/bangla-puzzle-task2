import { FaAngleRight } from "react-icons/fa";

const About = () => {
  return (
    <div className="py-10 flex flex-col gap-3 border-b border-b-gray-300">
      <h2 className="text-2xl font-medium">About this place</h2>
      <p>
        Nice and spacious room in the heart of Valencia, with double bed and a
        balcony. Silent because there is no traffic. Surrounded by all the
        landmarks , museums , cathedral , leisure, and close to the beach where
        you can go by bike, bus , tram or car if your means of transportation.
      </p>
      <a href="#" className="flex items-center gap-2 underline font-medium">
        <span>Show more</span>
        <FaAngleRight />
      </a>
    </div>
  );
};

export default About;
