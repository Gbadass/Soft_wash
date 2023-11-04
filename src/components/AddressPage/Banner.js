import '../../styles/Address.css'
import { Container } from "react-bootstrap";
import logo from "../../assets/AddressPage/SoftWash.png";


function Banner(){
    return(
        <div className="booking-banner-section mt-2">
            <Container>
                <div className="booking-banner">                    
                </div>
                <div className="booking-banner-info">
                    <div className="banner-logo-circle">
                        <div className="banner-logo">
                            <img src={logo} alt="" />
                        </div>                        
                    </div>
                    <div className="booking-banner-laundary-name">
                        <h3>SOFT WASH DRY CLEANING</h3>
                        <h6>Plot#364 Phase2 Rd#1 Behind Nexa Car Showroom Gimbiya Street Jahi 500090</h6>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Banner;