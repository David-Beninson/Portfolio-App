import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  const linkedin = process.env.REACT_APP_LINKEDIN;
  const facebook = process.env.REACT_APP_FACEBOOK;
  const github = process.env.REACT_APP_GITHUB;
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
              <a href={`${linkedin}`}>
                <img src={navIcon1} alt="" />
              </a>
              <a href={`${facebook}`}>
                <img src={navIcon2} alt="" />
              </a>
              <a href={`${github}`}>
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
