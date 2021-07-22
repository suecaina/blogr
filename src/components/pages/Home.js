import "../../App.css";
import HeroSection from "../HeroSection";
import Cards from "../Cards";
import ArtInfrastructure from "../ArtInfrastructure";
import Cards3 from "../Cards3";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <ArtInfrastructure />
      <Cards3 />
      <Footer />
    </>
  );
}

export default Home;
