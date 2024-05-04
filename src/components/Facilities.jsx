import { Col, Container, Row } from "react-bootstrap";
import edlab from "./Cursalimg/edlab.jpg";
import pelab from "./Cursalimg/pelab.jpg";
import emlab from "./Cursalimg/emlab.jpg";
import "./Facilities.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init()
function Facilities() {
    return (
        <section id="facilities">
            <h1 className="text-center ">FACILITIES</h1>
            <Container >
                <Row className="facilities-details">
                    <Col className="col"><div className="labimg" data-aos="fade-right" data-aos-duration="1000" ><img src={edlab} className="img-fluid" alt="labimgage" /></div>
                        <div className="labname"><h1 data-aos="fade-up" data-aos-duration="1000">ELECTRIC CIRCUITS LAB</h1></div>
                    </Col>
                </Row>
                <p>The students will learn the basic requirements for building simple DC/AC circuits,Verifications of circuit
                    theorems, employ power supplies as well as measure electrical parameters of current, voltage, resistance with
                    multimeters and oscilloscopes.</p>
            </Container>
            <Container >
                <Row className="facilities-details">
                    <Col className="col"><div className="labimg" data-aos="fade-left" data-aos-duration="1000" ><img src={emlab} className="img-fluid" alt="labimgage" /></div>
                        <div className="labname"><h1 data-aos="fade-up" data-aos-duration="1000">ELECTRICAL MACHINES LAB</h1></div>
                    </Col>
                </Row>
                <p>
                    The Department of Electrical and Electronics Engineering has a well established Electrical Machines laboratory
                    comprising of more than fifty machines, at a cost of Rupees sixty three lakhs, spread over 3800 sqft area.
                    This laboratory, fed by Modern electronic regulated power supply, facilitates numerous value added experiments
                    in addition to meeting the courseware objectives and curriculum requirements.The infrastructural facilities are
                    utilized by the students for UG/PG projects apart from regular laboratory schedule and this laboratory supports
                    consultancy services & research work.</p>
            </Container>
            <Container >
                <Row className="facilities-details">
                    <Col className="col"><div className="labimg" data-aos="fade-right" data-aos-duration="1000" ><img src={pelab} className="img-fluid" alt="labimgage" /></div>
                        <div className="labname"><h1 data-aos="fade-up" data-aos-duration="1000">POWER ELECTRONICS LAB</h1></div>
                    </Col>
                </Row>
                <p>
                    The power electronics lab enhances the EEE students by providing them the better understanding of the concepts and working of
                    advanced power semiconductor devices and power electronics circuits. It consists of different kinds of demo kits such as
                    single phase and three phase converters, Step up and step down choppers.
                    The lab is equipped with all the power electronic converters,triggering circuits Power supplies,CROs.</p>
            </Container>
            <Container >
                <Row className="facilities-details">
                    <Col className="col"><div className="labimg" data-aos="fade-left" data-aos-duration="1000" ><img src={pelab} className="img-fluid" alt="labimgage" /></div>
                        <div className="labname"><h1 data-aos="fade-up" data-aos-duration="1000">MEASUREMENTS & CONTROL SYSTEM LAB</h1></div>
                    </Col>
                </Row>
                <p>
                    This lab introduces about the fundamentals of measurements and control system with practical exposure.
                    This lab has been well furnished with the equipments like AC and DC servomotor, synchros position control system, LVDT,
                    measurement bridges , etc.This lab is also equipped with sufficient number of CROs, AFO and necessary equipment.</p>
            </Container>

        </section>
    );
}
export default Facilities;