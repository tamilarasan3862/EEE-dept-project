import { Col, Container, Row } from "react-bootstrap";
import "./Contactus.css";
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init()
function Contactus() {
    return (
        <section >
            <Container>
                <Row>
                    <Col>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.721032452232!2d78.64874987408722!3d10.755969959572669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa601c73562101%3A0x95cace8cacaf6487!2sSaranathan%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1711726987122!5m2!1sen!2sin"
                            width="100%" height="450" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </Col>
                </Row>
            </Container>
            <address className="contact" id="contactus" >
                <div className="content">
                    <h2>contact Us</h2>
                    <p>Saranathan College of Engineering,Tiruchirappalli,Panjappur</p>
                </div>
                <div className="contactcontainer">
                    <div className="contactinfo">
                        <div className="box">
                            <div className="icon" data-aos="fade-right" data-aos-duration="1000" ><i className="fa-solid fa-location-dot"></i></div>
                            <div className="text">
                                <h3>Address</h3>
                                <p>QM42+9GP Venkateswara Nagar,<br/> Panjappur, Tiruchirappalli,<br/> Tamil Nadu 620012</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icon" data-aos="fade-right" data-aos-duration="1000" ><i className="fa-solid fa-phone"></i></div>
                            <div className="text">
                                <h3>Phone</h3>
                                <p>abcd@gmail.com</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icon" data-aos="fade-right" data-aos-duration="1000" ><i className="fa-regular fa-envelope"></i></div>
                            <div className="text">
                                <h3>Email</h3>
                                <p>2716282922</p>
                            </div>
                        </div>
                    </div>
                    <div className="contactform">
                        <form>
                            <h2>Send Message</h2>
                            <div className="inputbox">
                                <input type="text" name="" required="required" />
                                <span>Full Name</span>
                            </div>
                            <div className="inputbox">
                                <input type="text" name="" required="required" />
                                <span>Email</span>
                            </div>
                            <div className="inputbox">
                                <textarea required="required"></textarea>
                                <span>type your message...</span>
                            </div>
                            <div className="inputbox">
                                <input type="submit" name="" value="send" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="upperarrow" >
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={-40} duration={500}>
                        <i className="fa-solid fa-arrow-up"></i>
                    </Link>
                </div>
            </address>
        </section>
    );
}
export default Contactus;