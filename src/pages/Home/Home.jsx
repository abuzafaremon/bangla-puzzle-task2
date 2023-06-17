import Explore from "../../components/Explore/Explore";
import FixedFooter from "../../components/Footer/FixedFooter";
import Footer from "../../components/Footer/Footer";
import FooterTop from "../../components/FooterTop/FooterTop";
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
      <Explore />
      <FooterTop />
      <Footer />
      <FixedFooter />
    </>
  );
};

export default Home;
