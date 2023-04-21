import { Col, NavLink } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, linkTo, txt }) => {
  return (
    <>
      <Col size={12} sm={6} md={4}>
        <div className="proj-imgbx">
          <NavLink href={`${linkTo}`}>
            <img src={imgUrl} />
            <div className="proj-txtx">
              <h5>{title}</h5>
              <span id="description">{description}</span>
              <p>{txt}</p>
            </div>
          </NavLink>
        </div>
      </Col>
    </>
  );
};
