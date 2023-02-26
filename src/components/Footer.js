import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col>
            <img size={12} sm={10} src={logo} alt="David Beninson" />
            </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/david-beninson/">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://www.facebook.com/david.dav.5220">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://github.com/David-Beninson">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <p>&copy; 2023 David Beninson</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
