
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css";
import { useState } from 'react';
import { Link } from 'react-scroll';


function Navbarhome() {
  let [menu, setmenu] = useState("about");
  return (
    <>
   
      <Navbar expand="lg" className="bg-body-tertiary fixed-top">
        <Container>
          <Navbar.Brand href="#home" className="brand">SARA</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto px-5 gap-3">
              <Link activeClass="active" to="about" spy={true} smooth={true} offset={-40} duration={500} className="navlink" onClick={() => { setmenu("about") }}>
                About Us {menu === "about" ? <hr /> : <></>}
                </Link>
              <Link activeClass="active" to="facultyheading" spy={true} smooth={true} offset={-40} duration={500} className="navlink" onClick={() => { setmenu("faculty") }}>
                Faculty {menu === "faculty" ? <hr /> : <></>}
              </Link>
              <Link activeClass="active" to="facilities" spy={true} smooth={true} offset={-40} duration={500} className="navlink" onClick={() => { setmenu("facilities") }}>
                Facilities {menu === "facilities" ? <hr /> : <></>}
              </Link>
              <Link activeClass="active" to="contactus" spy={true} smooth={true} offset={-40} duration={500} className="navlink" onClick={() => { setmenu("contactus") }}>
                Contact Us {menu === "contactus" ? <hr /> : <></>}
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
      <hr />
     
    </>

  );
}

export default Navbarhome;