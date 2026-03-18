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
              I am currently working as a{" "}
              <b className="purple">Founding Engineer at Anyteam</b>.
              <br />
              <br />
              I love building scalable systems and exploring new tech across the
              stack {"\u{1F93A}"}
              <br />
              <br />I am fluent in languages like
              <i>
                <b className="purple">
                  {" "}
                  C++, Python, Java, TypeScript, and JavaScript.{" "}
                </b>
              </i>
              <br />
              <br />
              My past work experience: &nbsp;
              <li>
                <b className="purple">Software Engineer </b> at Venwiz
                Technologies
              </li>
              <li>
                <b className="purple">Software Engineer II </b> at Google India
                (Google Pay)
              </li>
              <li>
                <b className="purple">SWE Intern </b> at Google Pay & Google Ads
              </li>
              <li>
                <b className="purple">Teaching Assistant </b> at Scaler Academy
              </li>
              <br />
              When I'm not coding, you'll find me trekking, dancing, or planning
              my next travel adventure {"\u{1F4BB}"}
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
