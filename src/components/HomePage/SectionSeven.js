import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import HomeInfoProp from "./HomeInfoProp";
import Slider from "react-slick";
import Testimonial from "../../common/Testimonial";



export default function SectionFour() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        swipe: true,
        responsive: [{
     
          breakpoint: 425,
          settings: {
            slidesToShow: 1,
            infinite: true,
            dots: false
          }
     
        }, {
     
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            dots: true
          }
     
        },
      {
     
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            dots: true
          }
     
        },]
      };

  return (
      <Container fluid className="sec-7-bg mb-5 ">
        <Row className="w-100 mx-auto py-5 ">
            <HomeInfoProp top={"Testimonials"} title={"What Our Customers Say About Us"} desc={"Heres a carousel of our lovely customers and their reviews on our services"} css={"text-center pt-5"}/>
        </Row>
        <Container >
        <Slider {...settings} className="me-5 d-flex ">
            <div className="col-sm-12">
              <Testimonial
                review={"My clothes were extra pampered! Got them picked up and delivered!"}
                name={"Kingsley"}
                rating={5}
                className="shadow"
              />
            </div>
            <div className="col-sm-12">
              <Testimonial
                review={"Soft Wash really did a great job and delivered."}
                name={"Gerald"}
                rating={5}
                className="shadow"
              />
            </div>
            <div className="col-sm-12">
              <Testimonial
                review={"I was impressed in the quality of the work done, I recommend."}
                name={"Nathaniel"}
                rating={5}
                className="shadow"
              />
            </div>
            <div className="col-sm-12">
              <Testimonial
                review={"I was impressed in the quality of the work done, I recommend."}
                name={"Martha Willey"}
                rating={5}
                className="shadow"
              />
            </div>
          </Slider>
        </Container>
      </Container>
  );
}
