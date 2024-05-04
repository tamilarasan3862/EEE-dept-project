import { Col, Container, Row } from "react-bootstrap";
import "./Faculty.css";
import Data from "./Data";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init()
function Faculty() {
    return (
        <Container className="faculty">
            <h1 id="facultyheading">Faculty</h1>
            <h2 className="facultyroll">PROFESSOR & HEAD </h2>
            <Row>
                {Data.map((data) => {
                    if (data.id === 1)
                        return (<Col lg={6} className="containerfaculty">
                            <div className="card"  data-aos="fade-down">
                                <img src={data.img} alt="" />
                                <div className="intro">
                                    <h1>{data.name}</h1>
                                    <p className="roll">{data.roll}</p>
                                    <p className="mail">{data.mail}</p>
                                </div>
                            </div>
                        </Col>)
                }
                )
                }
            </Row>
            <h2 className="facultyroll">Associate Professor & Assistant Professor</h2>
            <Row>
                {Data.map((data) => {
                    if (data.id === 2)
                        return (<Col lg={4} className="containerfaculty">
                            <div className="card" data-aos="fade-up" >
                                <img src={data.img} alt="" />
                                <div className="intro">
                                    <h1>{data.name}</h1>
                                    <p className="roll">{data.roll}</p>
                                    <p className="mail">{data.mail}</p>
                                </div>
                            </div>
                        </Col>)
                }
                )
                }
            </Row>
            <Row>
                {Data.map((data) => {
                    if (data.id === 3)
                        return (<Col xl={12} className="containerfaculty">
                            <div className="card" data-aos="flip-down" >
                                <img src={data.img} alt="" />
                                <div className="intro">
                                    <h1>{data.name}</h1>
                                    <p className="roll">{data.roll}</p>
                                    <p className="mail">{data.mail}</p>
                                </div>
                            </div>
                        </Col>)
                }
                )
                }
            </Row>
        </Container>
    );
}
export default Faculty;