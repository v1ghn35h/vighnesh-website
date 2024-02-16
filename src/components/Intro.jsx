import React from "react";
import { Container, Row, Col, Image, Nav } from "react-bootstrap";
import { Light, ProfilePic } from "../../data";
import { Typewriter } from "react-simple-typewriter";
import { introSocialsData } from "../../data";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Light})`,
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <Image
              src={ProfilePic}
              roundedCircle
              style={{ width: "250px", height: "250px" }}
            />
          </Col>
          <Col className="mt-auto mb-auto">
            <h1>Heyy, I'm Vighnesh!!</h1>
            <h4>
              I love to{" "}
              <span style={{ color: "red", fontWeight: "bold" }}>
                <Typewriter
                  words={["Eat", "Sleep", "Code", "Repeat!"]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h4>

            <h6>Y3 Information Systems Undergraduate @ SMU</h6>
            <Container className="d-flex justify-content-start ps-0">
              {introSocialsData.map((social, index) => (
                <Nav.Link
                  key={index}
                  href={social.link}
                  target="_blank"
                  className="mx-1"
                >
                  {social.icon}
                </Nav.Link>
              ))}
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
