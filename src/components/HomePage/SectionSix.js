import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image1 from "../../assets/HomePage/images/app-screen-img.png";
import image2 from "../../assets/HomePage/images/gplay-icon.png";
import image3 from "../../assets/HomePage/images/app-store-icon.png";
import HomeInfoProp from "./HomeInfoProp";


export default function SectionSix() {
  return (
    <div style={{}} className="mt-5 bg-transparent">
        <Row className=" w-100 d-flex ">
            <Col lg={5} md={6} sm={12} className=" position-relative border my-auto bg-white py-5 app-small app-small app-medium pb-0-md" style={{left:"115px"}}>
                <div className="bg-white shadow-md" >
                <HomeInfoProp top={"Order Even Faster"} title={"On Your Hand Wherever You Go"} desc={"With its simple interface, our app helps your order & keep track of your laundrie at the tap of your fingers"} css={"text-start d-flex flex-wrap gap-2 px-5 pt-5"}/>
                </div>
                <Row  className="d-fkex px-4 mt-2 ms-2 pb-5">
                <img src={image2} alt="play store" className=" img-fluid " style={{width:"auto", height:"50px"}}/>
                <img src={image3} alt="app store" className=" img-fluid " style={{width:"auto", height:"50px"}}/>
                </Row>
            </Col>
            <Col lg={7} md={6} sm={12} className="p-0 m-0 overflow-hidden " style={{height:"90vh", }}>
            <img src={image1} alt="app screen" className=" img-fluid relative" style={{height:"120vh", paddingBottom: "150px"}}/>
            </Col>
        </Row>
    </div>
  );
}
