import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import CV from "../assets/img/David_Beninson.pdf"
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {
  const linkedin = process.env.REACT_APP_LINKEDIN;
  const facebook = process.env.REACT_APP_FACEBOOK;
  const github = process.env.REACT_APP_GITHUB;
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  const handleDowloadCV = () => {
    const link = document.createElement("a");
    link.download = "David_Beninson.pdf";
    link.href = CV;
    link.click();
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
           <p style={{color:"white", fontSize:"bold"}}>David Beninson</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#connect" className={activeLink === 'connect' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('connect')}>Let’s Connect</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href={`${linkedin}`}><img src={navIcon1} alt="linkedin" /></a>
                <a href={`${facebook}`}><img src={navIcon2} alt="facebook" /></a>
                <a href={`${github}`}><img src={navIcon3} alt="github" /></a>
              </div>
              <button class="vvd" onClick={handleDowloadCV}>Download CV</button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
