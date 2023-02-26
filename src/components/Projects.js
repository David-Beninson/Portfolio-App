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
  const projects = [
    {
      title: "My personal 'Chat GPT'",
      description:
        "With an elegant user interface that resembles the ChatGPT app, communication with advanced GPT3 model API, and most importantly, the ability to ask the AI for help regarding JavaScript, React, or any other programming language, giving it code and translating it to another programming language, and much more",
      imgUrl: projImg1,
    },
    {
      title: "To Do List",
      description:
        "this is a to do app created using React JS that allows users to create and save their to do lists, view all saved lists, edit existing lists, delete existing lists, and mark tasks as completed.",
      imgUrl: projImg2,
    },
    {
      title: "QR generator",
      description:
        "This QR App is a React JS based application that allows users to quickly and easily generate QR codes for their websites, WhatsApp numbers, and other contact information. With this app, you can also download the QR that has generated",
      imgUrl: projImg3,
    },
    {
      title: "Building Surveys",
      description:
        "Survey App is a web application that allows users to create and send surveys to their contacts. It also provides users with the ability to view the results of their surveys.",
      imgUrl: projImg4,
    },
    {
      title: "Hangman",
      description:
        " The Hangman app is a ReactJS-based game that allows users to guess the hidden word by guessing one letter at a time. The game keeps track of the user's progress and displays the correct and incorrect guesses.  The app is designed to be fun and challenging, providing an enjoyable experience for all ages.",
      imgUrl: projImg5,
    },
    {
      title: "Sudoku game",
      description:
        "Welcome to my Sudoku game! This app was built using React and offers three levels of difficulty: medium, easy, and hard. Challenge your mind by solving puzzles at your preferred level, and enjoy a smooth and intuitive user interface that allows you to easily input your answers. Whether you're a Sudoku pro or just starting out, this game is perfect for anyone who loves a good brain-teaser. So go ahead, give it a try, and see how far you can go!",
      imgUrl: projImg6,
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
                        <Nav.Link eventKey="third">For mor projects</Nav.Link>
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
                            margin: "0 auto"
                          }}
                        >
                          <tr>
                            <th style={{ padding: "10px" }}>Project Name</th>
                            <th style={{ padding: "10px" }}>View on GitHub</th>
                          </tr>
                          <tr>
                            <td>Open Ai</td>
                            <td>
                              <a href="https://github.com/David-Beninson/Open_Ai">
                                My personal "Chat GPT"
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>To do</td>
                            <td>
                              <a href="https://github.com/David-Beninson/todo_app">
                                To do app
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>QR</td>
                            <td>
                              <a href="https://github.com/David-Beninson/QR">
                                Generating QR
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Surveys</td>
                            <td>
                              <a href="https://github.com/David-Beninson/survey">
                                Creating surveys
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Hangman</td>
                            <td>
                              <a href="https://github.com/David-Beninson/hangman">
                                Hangman
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Sudoku</td>
                            <td>
                              <a href="https://github.com/David-Beninson/sudoku_app">
                                Sudoku
                              </a>
                            </td>
                          </tr>
                        </table>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                        <div style={{margin: "0 auto"}}> <h3 > To see more projects on my GitHub account, <a href="https://github.com/David-Beninson?tab=repositories"> click here</a></h3></div>
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
