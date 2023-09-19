import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Developer Portfolio"
              description="Developer Portfolio is basically a static portfolio website build with HTML & CSS and made responsive"
              ghLink="https://github.com/srijanbir/devoloper-portfolio"
              demoLink="https://cute-cuchufli-67c95f.netlify.app"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Ai Universe Hub"
              description="Ai Universe Hub is a basically develop HTML, CSS, JavaScript, React and also use API and made responsive"
              ghLink="#"
              demoLink="https://sunny-croissant-96f450.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Travel Vista"
              description="Travel Vista is a website designed to provide information about various tourist destinations and allow users to book rooms. The website is built using HTML and CSS Booster, React and authentication features using Firebase"
              ghLink="#"
              demoLink="https://sunny-croissant-96f450.netlify.app/"
                            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Area Calculation"
              description="The area calculation website primarily focuses on computing the areas of various shapes. For instance, it can calculate the areas of triangles, rectangles, parallelograms, rhombuses, pentagons, and ellipses, among others."
              demoLink="https://strong-douhua-116eb6.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Justice"
              description="Justice webpage is basically a static portfolio website build with HTML & CSS and made responsive"
              ghLink="#"
              demoLink="https://effulgent-figolla-b9020a.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Quiz App"
              description="On the quiz website, we can take quizzes, view our quiz scores, and also see the correct answers to the quiz questions and restart the quiz if desired."
              ghLink="#"
              demoLink="https://mellifluous-otter-17fa06.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
