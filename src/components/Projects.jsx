import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { projectData, GithubIcon, YoutubeIcon } from "../../data";
import './Projects.css'

const Projects = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <div>
              <h1 id="project">Projects</h1>
              <hr className="center-ball"></hr>
            </div>
          </Col>
        </Row>
        <Row className="mt-4 d-flex justify-content-start">
          {projectData.map((project) => {
            return (
              <Col xs={4} key={project.id} className="mb-4">
                <Card style={{ width: "23rem" }}>
                  <Card.Img
                    variant="top"
                    src={project.image}
                    style={{ height: "200px", objectFit: "fit" }} 
                  />
                  <Card.Body>
                    <Card.Title>{project.name}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted d-flex justify-content-between">
                      <a href={project.repo} target="_blank" className="custom-link">
                        <GithubIcon size={25} /> GitHub Repository
                      </a>

                      {project.youtubeLink && (
                        <a
                          href={project.youtubeLink}
                          className="custom-link"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <YoutubeIcon size={25} /> 
                          Demo Video
                        </a>
                      )}
                    </small>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Projects;
