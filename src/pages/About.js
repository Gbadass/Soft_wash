import MainNavbar from "../components/MainNavbar";
import { FaChevronRight } from "react-icons/fa";

function About(){
  return(
    <div>
      <MainNavbar/>
      <div>
        <div className="below-navbar container-fluid  pt-4 pb-3">
          <div className="container d-flex justify-content-between align-items-center">
            <div className="page-navigation-title">
              <p className="fs-5 text-white">Home</p>
              {/* <FaChevronRight className="greatherthan-Icon" /> */}
              <p className="text-white fs-4">></p>
              <p className="fs-5 text-white">Pricing</p>
            </div>
            <p className="fs-3  text-white">Services</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About;