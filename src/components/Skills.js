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
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>SKILLS </h2>
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
                      <DiCss3 />
                      <div>C</div>
                    </th>
                    <th>
                      <DiGit />
                      <div>Git</div>
                    </th>
                  </tr>
                </thead>
              </table>
              <table className="skills-table ">
                <thead className="skills-table text-center">
                  <tr>
                    <th>
                      <FaPython />
                      <div>Python</div>
                    </th>
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
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
