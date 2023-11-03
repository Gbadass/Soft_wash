import Navigation from "../../common/Navbar";
import SectionOne from "../../components/HomePage/SectionOne";
import SectionTwo from "../../components/HomePage/SectionTwo";
import SectionThree from "../../components/HomePage/SectionThree";
import SectionFour from "../../components/HomePage/SectionFour";
import SectionFive from "../../components/HomePage/SectionFive";
import SectionSeven from "../../components/HomePage/SectionSeven";
import Footer from "../../common/Footer";

function Home() {
  return (
    <div>
      <Navigation />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSeven />
      <Footer />
      {/* <SectionSix /> */}
    </div>
  );
}

export default Home;
