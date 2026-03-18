import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/garima-photo.jpeg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A BIT <span className="purple"> ABOUT </span> ME
            </h1>
            <p className="home-about-body">
              Hey there! I'm <b className="purple">Garima</b>, a software
              engineer who genuinely loves building things from scratch and
              watching them scale.
              <br />
              <br />
              Right now, I'm a{" "}
              <b className="purple">Founding Engineer at Anyteam</b>, where I'm
              knee-deep in LLM cost attribution, WebSocket architectures, and
              wiring up AI-powered dev environments with Claude Code, custom MCP
              servers, and Docker Compose across an 8-repo platform. Before
              that, I spent 2.5 years at{" "}
              <b className="purple">Venwiz Technologies</b> building
              everything from AI-powered search engines to high-throughput web
              scraping infra. And before that, I was at{" "}
              <b className="purple">Google Pay</b>, shipping UPI Autopay
              compliance features and subscription flows in Java and gRPC.
              <br />
              <br />
              My go-to languages are{" "}
              <b className="purple">
                Python, C++, Java, TypeScript, and JavaScript
              </b>
              , and I'm always exploring new tools and frameworks across the
              stack.
              <br />
              <br />
              When I'm not coding, you'll probably find me trekking up a
              mountain, dancing to good music, or planning my next travel
              adventure!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{
                  borderRadius: "50%",
                  width: "280px",
                  height: "280px",
                  objectFit: "cover",
                  border: "3px solid #c770f0",
                  boxShadow: "0 0 25px rgba(199, 112, 240, 0.4)",
                }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>WOULD LOVE TO CONNECT WITH AWESOME PEOPLE LIKE YOU {"\u{1F31F}"}</h1>
            <p>
              Feel free to <span className="purple">checkout </span>below links
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/garima012jain"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/garima-jain-93941316a"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:garimaj012@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <MdEmail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
