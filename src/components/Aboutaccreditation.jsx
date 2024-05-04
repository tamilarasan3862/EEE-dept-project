import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import nba from './Cursalimg/nbalogo.png';
import './Aboutaccreditation.css';
function Aboutaccreditation() {
    return (
        <section className="Aboutaccreditationsection">
            <h2 className="text-center text pt-3">Accreditation Details</h2>
            <Container className="Aboutaccreditation">
                <Row>
                    <Col  lg={6} xl={3}><div className="nbadetails"><img src={nba} alt='nbaimgage' /><div><h6>1st NBA Accreditation</h6><p>3 Years with effect from 29-5-2009</p></div></div></Col>
                    <Col  lg={6} xl={3}><div className="nbadetails"><img src={nba} alt='nbaimgage' /><div><h6>2nd NBA Accreditation</h6><p>2 Years with effect from 18-09-2013</p></div></div></Col>
                    <Col  lg={6} xl={3}><div className="nbadetails"><img src={nba} alt='nbaimgage' /><div><h6>3rd NBA Accreditation</h6><p>Academic Years 2018-2019 to 2021-2022(upto 30-06-2022)</p></div></div></Col>
                    <Col  lg={6} xl={3}><div className="nbadetails"><img src={nba} alt='nbaimgage' /><div><h6>4rd NBA Accreditation</h6><p>Academic Years 2021-2022 to 2023-2024(upto 30-06-2023)</p></div></div></Col>
                </Row>
            </Container>
        </section>);
}
export default Aboutaccreditation;