import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/1.png";
import projImg2 from "../assets/img/2.png";
import projImg3 from "../assets/img/3.png";
import projImg4 from "../assets/img/4.png";
import projImg5 from "../assets/img/5.png";
import projImg6 from "../assets/img/6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Starbuks",
      description: "HTML/CSS",
      imgUrl: projImg1,
    },
    {
      title: "Parallel MOuntain Animation",
      description: "HTML/CSS",
      imgUrl: projImg5,
    },
    {
      title: "Spotify Clone",
      description: "Using HTML/CSS/JS/JQUERY",
      imgUrl: projImg6,
    },
    {
      title: "Scooter Specifications Details ",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Cafe Table Animation",
      description: "Using HTML/CSS/JS/JQUERY",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Using HTML/CSS/JS/Bootstrap",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p> A well-organized,
problem solver, goal- oriented graduate possessing coding, strong verbal and written communication skills, computing and
leadership skill and should be a self-starter and a good team player with a high sense of ownership</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p> </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p> A well-organized,
problem solver, goal- oriented graduate possessing coding, strong verbal and written communication skills, computing and
leadership skill and should be a self-starter and a good team player with a high sense of ownership</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}