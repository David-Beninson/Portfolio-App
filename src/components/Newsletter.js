import { Col, Row} from "react-bootstrap";
import Pic from '../assets/img/DavidBeninson_pic.JPG'
export const Newsletter = () => {


  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3 style={{marginRight: "1cm"}}>
              If you are looking for a hard and dedicated worker, look no further!
            </h3>
          </Col>
          <Col lg={7} md={6} className="order-lg-2 order-md-1 text-md-right">
            <img src={Pic} alt="Me" />
          </Col>
        </Row>
      </div>
    </Col>
  );
  
}
