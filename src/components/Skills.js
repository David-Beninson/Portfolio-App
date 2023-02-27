import {
  FaDatabase,
  FaPython,
  FaReact,
  FaAws,
  FaCss3,
  FaNodeJs,
  FaHtml5,
} from "react-icons/fa";
import { DiNodejs, DiMysql, DiGit, DiCss3 } from "react-icons/di";
import { SiMongodb, SiJavascript } from "react-icons/si";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage, faRocket } from "@fortawesome/free-solid-svg-icons";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>SKILLS </h2>
              <div className="skills-container">
                <div className="big_screen">
                  <table className="skills-table-top">
                    <thead className="skills-table text-center">
                      <tr>
                        <th>
                          <FaHtml5 />
                          <div>Html</div>
                        </th>
                        <th>
                          <DiNodejs />
                          <div>Node.js</div>
                        </th>
                        <th>
                          <FaDatabase />
                          <div>SQL</div>
                        </th>
                        <th>
                          <DiMysql />
                          <div>MySQL</div>
                        </th>
                        <th>
                          <FaPython />
                          <div>Python</div>
                        </th>
                        <th>
                          <DiGit />
                          <div>Git</div>
                        </th>
                        <th>
                          <DiCss3 />
                          <div>C</div>
                        </th>
                      </tr>
                    </thead>
                  </table>
                  <table className="skills-table ">
                    <thead className="skills-table text-center">
                      <tr>
                        <th>
                          <FaReact />
                          <div>React</div>
                        </th>
                        <th>
                          <SiJavascript />
                          <div>JavaScript</div>
                        </th>
                        <th>
                          <FaAws />
                          <div>AWS</div>
                        </th>
                        <th>
                          <FaCss3 />
                          <div>CSS3</div>
                        </th>
                        <th>
                          <FaNodeJs />
                          <div>Next</div>
                        </th>
                        <th>
                          <SiMongodb />
                          <div>MongoDB</div>
                        </th>
                        <th>
                          <FontAwesomeIcon
                            icon={faRocket}
                            style={{ fontSize: "44px" }}
                          />
                          <div>Express</div>
                        </th>
                      </tr>
                    </thead>
                  </table>
                </div>
                <div className="small_screen">
                  <table className="skills-table-top">
                    <thead className="skills-table text-center">
                      <tr>
                        <th>
                          <FaHtml5 size={24} />
                          <div>Html</div>
                        </th>
                        <th>
                          <DiNodejs size={24} />
                          <div>Node.js</div>
                        </th>
                        <th>
                          <FaDatabase size={24} />
                          <div>SQL</div>
                        </th>
                        <th>
                          <DiMysql size={24} />
                          <div>MySQL</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <FaCss3 size={44} />
                          <div>CSS3</div>
                        </td>
                        <td>
                          <DiGit size={44} />
                          <div>Git</div>
                        </td>
                        <td>
                          <SiJavascript size={34} />
                          <div>JavaScript</div>
                        </td>
                        <td>
                          <FaAws size={44} />
                          <div>AWS</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table className="skills-table">
                    <thead className="skills-table text-center">
                      <tr>
                        <th>
                          <FaPython size={24} />
                          <div>Python</div>
                        </th>
                        <th>
                          <FaReact size={24} />
                          <div>React</div>
                        </th>
                        <th>
                          <FaNodeJs size={24} />
                          <div>Next</div>
                        </th>
                        <th>
                          <SiMongodb size={24} />
                          <div>MongoDB</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <td>
                        <DiCss3 size={44} />
                        <div>C</div>
                      </td>{" "}
                      <td>
                        <FontAwesomeIcon
                          icon={faRocket}
                          style={{ fontSize: "44px" }}
                        />
                        <div>Express</div>
                      </td>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
