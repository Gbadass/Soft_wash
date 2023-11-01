import MainNavbar from "../components/MainNavbar"
import Pricingpage from "../styles/"


function PricingPage(){
  return(
    <div>
      <MainNavbar/>
      <div className="below-navbar container d-flex justify-content-between pt-4">
        <p className="fs-3 fw-bold">Pricing</p>
        <div className="d-flex">
        <p className="fs-5">Home</p>
        <h4 className="fs-3">/</h4>
        <p className="fs-5">Pricing</p>
        </div>
 
      </div>
    </div>
  )
}

export default PricingPage;