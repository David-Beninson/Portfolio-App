import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const githubProjects = process.env.REACT_APP_GITHUB_PORJECTS;
  const github = process.env.REACT_APP_GITHUB;
  const projects = [
    {
      title: "Goal Achievement",
      description:
        "The Goal Achievement app is a Next.js and MongoDB web app that helps users break down long-term goals into achievable milestones. It is also fully responsive. ",
      imgUrl: projImg1,
      linkTo: "https://goal-achievement.vercel.app/",
      txt: "Click me",
    },
    {
      title: "To Do List",
      description:
        "The to-do app lets users create, save, view, edit, and delete to-do lists and mark tasks as complete.",
      imgUrl: projImg2,
      linkTo: `${githubProjects}/todo_app/`,
      txt: "Click me",
    },
    {
      title: "QR generator",
      description:
        "The QR App generates QR codes for websites, or WhatsApp numbers, which users can download instantly",
      imgUrl: projImg3,
      linkTo: `${githubProjects}/QR/`,
      txt: "Click me",
    },
    {
      title: "Building Surveys",
      description:
        "The Survey App is a web tool for creating and sending surveys to contacts, with the option to view the survey results.",
      imgUrl: projImg4,
      txt: null,
    },
    {
      title: "Hangman",
      description:
        "The Hangman app lets users guess a hidden word one letter at a time and shows correct/incorrect guesses.",
      imgUrl: projImg5,
      linkTo: `${githubProjects}/hangman/`,
      txt: "Click me",
    },
    {
      title: "Sudoku game",
      description:
        "The Sudoku game offers three levels of difficulty: easy, medium, and hard.",
      imgUrl: projImg6,
      linkTo: `${githubProjects}/sudoku_app/`,
      txt: "Click me",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>PROJECTS</h2>
                  <p>
                    Welcome to my portfolio of software development projects!
                    Here you can explore some of my work and see the skills and
                    experience I've gained through my journey as a developer. I
                    hope you find these projects interesting and informative. If
                    you have any feedback or comments, please feel free to leave
                    them on my code.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Link for the code</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">For more projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <table
                          style={{
                            borderCollapse: "separate",
                            borderSpacing: "0 10px",
                            margin: "0 auto",
                          }}
                        >
                          <tr>
                            <th style={{ padding: "10px" }}>Project Name</th>
                            <th style={{ padding: "10px" }}>View on GitHub</th>
                          </tr>
                          <tr>
                            <td>Open Ai</td>
                            <td>
                              <a href={`${github}/goalAchievement`}>
                                Goal Achievement app
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>To do</td>
                            <td>
                              <a href={`${github}/todo_app`}>To do app</a>
                            </td>
                          </tr>
                          <tr>
                            <td>QR</td>
                            <td>
                              <a href={`${github}/QR`}>Generating QR</a>
                            </td>
                          </tr>
                          <tr>
                            <td>Surveys</td>
                            <td>
                              <a href={`${github}/survey`}>Creating surveys</a>
                            </td>
                          </tr>
                          <tr>
                            <td>Hangman</td>
                            <td>
                              <a href={`${github}/hangman`}>Hangman</a>
                            </td>
                          </tr>
                          <tr>
                            <td>Sudoku</td>
                            <td>
                              <a href={`${github}/sudoku_app`}>Sudoku</a>
                            </td>
                          </tr>
                        </table>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          <div style={{ margin: "0 auto" }}>
                            {" "}
                            <h3>
                              {" "}
                              To see more projects on my GitHub account,{" "}
                              <a href={`${github}?tab=repositories`}>
                                {" "}
                                click here
                              </a>
                            </h3>
                          </div>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
