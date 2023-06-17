import Header from "../../components/Header/Header";
import PolicyAndRules from "../../components/PolicyAndRules/PolicyAndRules";
import Reviews from "../../components/Reviews/Reviews";
import RoomDetails from "../../components/RoomDetails/RoomDetails";
import Showcase from "../../components/Showcase/Showcase";

const Home = () => {
  return (
    <>
      <Header />
      <Showcase />
      <RoomDetails />
      <Reviews />
      <PolicyAndRules />
    </>
  );
};

export default Home;
