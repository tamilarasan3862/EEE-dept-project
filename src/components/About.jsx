import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './Cursalimg/img1.jpg';
import img2 from './Cursalimg/img2.png';
import './About.css';
import { Container } from 'react-bootstrap';
function About() {
  return (
    <>
      <Carousel data-bs-theme="dark" className="Carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="First slide"
          />
        
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>PLACE BE AMPLIFIED,WORDS BE RECTIFIED</h5>
           
          </Carousel.Caption>
        </Carousel.Item>
    
      </Carousel>
      <section className="about">
        <Container id="about">
          <div>
            <h1 className="text-center h1">About the Department</h1>
            <h3 className="text-center h3">History of the Department</h3>
            <hr />
          </div>
          <ul className="list-items">
            <li>1998 Year of start of UG Program with intake as on date 120</li>
            <li>2004 Year of start of PG Program with intake as on date 18</li>
            <li>2013 Year of Regonization for Ph.D Program with number of scholars as on date 9</li>
            <li>UG program is permanently affiliated to Anna University, Chennai</li>
          </ul>
        </Container>
      </section>
    </>
  );
}
export default About;